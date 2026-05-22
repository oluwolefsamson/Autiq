import { Router } from "express";
import { summary } from "@/controllers/analytics.controller";
import { protect } from "@/middlewares/auth.middleware";

export const analyticsRouter = Router();

analyticsRouter.get("/summary", protect, summary);
