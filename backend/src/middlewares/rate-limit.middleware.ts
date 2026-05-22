import rateLimit from "express-rate-limit";
import { HTTP_STATUS } from "@/constants/http";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
  statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
});
