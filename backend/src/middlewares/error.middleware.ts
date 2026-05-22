import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { ApiError } from "@/utils/api-error";
import { normalizeError } from "@/utils/error-normalizer";

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      details: error.details,
    });
  }

  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: normalizeError(error),
  });
};
