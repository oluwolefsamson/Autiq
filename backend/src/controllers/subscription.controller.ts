import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { subscriptionService } from "@/services/subscription.service";

export const getSubscription = asyncHandler(async (req: Request, res: Response) => {
  const subscription = await subscriptionService.getByWorkspace(req.user!.id);
  res.status(HTTP_STATUS.OK).json(successResponse("Subscription loaded.", subscription));
});

export const updateSubscription = asyncHandler(async (req: Request, res: Response) => {
  const subscription = await subscriptionService.upsert(req.user!.id, req.body);
  res.status(HTTP_STATUS.OK).json(successResponse("Subscription updated.", subscription));
});
