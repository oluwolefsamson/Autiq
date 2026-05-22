import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "@/config/env";
import { HTTP_STATUS } from "@/constants/http";
import { ApiError } from "@/utils/api-error";
import { User } from "@/models/User";

interface JwtPayload {
  sub: string;
}

export const protect = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : req.cookies?.accessToken;

  if (!token) {
    next(new ApiError(HTTP_STATUS.UNAUTHORIZED, "Authentication required."));
    return;
  }

  try {
    const payload = jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;
    const user = await User.findById(payload.sub);

    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid authentication token.");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export const authorize = (...roles: Array<"admin" | "member">) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      next(new ApiError(HTTP_STATUS.FORBIDDEN, "You do not have permission to access this resource."));
      return;
    }

    next();
  };
};
