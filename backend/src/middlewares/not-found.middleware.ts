import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";

export const notFound = (_req: Request, res: Response): Response => {
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: "Route not found.",
  });
};
