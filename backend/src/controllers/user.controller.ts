import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { User } from "@/models/User";
import { sanitizeUser } from "@/utils/user-sanitizer";

export const updateMe = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.user!.id, req.body, { new: true });
  res.status(HTTP_STATUS.OK).json(successResponse("Profile updated.", { user: sanitizeUser(user!) }));
});
