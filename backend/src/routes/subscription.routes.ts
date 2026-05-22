import { Router } from "express";
import { getSubscription, updateSubscription } from "@/controllers/subscription.controller";
import { protect } from "@/middlewares/auth.middleware";

export const subscriptionRouter = Router();

subscriptionRouter.get("/", protect, getSubscription);
subscriptionRouter.patch("/", protect, updateSubscription);
