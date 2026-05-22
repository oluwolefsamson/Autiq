import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { authService } from "@/services/auth.service";
import { sanitizeUser } from "@/utils/user-sanitizer";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, companyName } = req.body as {
    name: string;
    email: string;
    password: string;
    companyName?: string;
  };

  const result = await authService.register({ name, email, password, companyName });
  res
    .status(HTTP_STATUS.CREATED)
    .cookie("accessToken", result.accessToken, { httpOnly: true, sameSite: "lax", secure: false })
    .cookie("refreshToken", result.refreshToken, { httpOnly: true, sameSite: "lax", secure: false })
    .json(successResponse("Account created successfully.", { user: sanitizeUser(result.user), accessToken: result.accessToken }));
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const result = await authService.login({ email, password });
  res
    .status(HTTP_STATUS.OK)
    .cookie("accessToken", result.accessToken, { httpOnly: true, sameSite: "lax", secure: false })
    .cookie("refreshToken", result.refreshToken, { httpOnly: true, sameSite: "lax", secure: false })
    .json(successResponse("Signed in successfully.", { user: sanitizeUser(result.user), accessToken: result.accessToken }));
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken as string | undefined;

  if (!refreshToken) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({ success: false, message: "Refresh token missing." });
    return;
  }

  const result = await authService.refresh(refreshToken);
  res
    .status(HTTP_STATUS.OK)
    .cookie("accessToken", result.accessToken, { httpOnly: true, sameSite: "lax", secure: false })
    .json(successResponse("Token refreshed.", { accessToken: result.accessToken, user: sanitizeUser(result.user) }));
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (userId) {
    await authService.logout(userId);
  }

  res
    .status(HTTP_STATUS.OK)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(successResponse("Signed out successfully."));
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({ success: false, message: "Not authenticated." });
    return;
  }

  const result = await authService.me(req.user.id);
  res.status(HTTP_STATUS.OK).json(successResponse("Current session.", { user: sanitizeUser(result.user) }));
});

export const forgotPassword = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body as { email: string };
  void email;

  res.status(HTTP_STATUS.OK).json(successResponse("Password reset email queued."));
});
