import { Request, Response } from "express";
import { successResponse } from "@/utils/api-response";

export const healthCheck = (_req: Request, res: Response): Response => {
  return res.json(successResponse("API is healthy.", { uptime: process.uptime() }));
};
