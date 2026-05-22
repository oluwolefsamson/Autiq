import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { chatbotSettingsService } from "@/services/chatbot-settings.service";

export const getChatbotSettings = asyncHandler(async (req: Request, res: Response) => {
  const settings = await chatbotSettingsService.getByWorkspace(req.user!.id);
  res.status(HTTP_STATUS.OK).json(successResponse("Chatbot settings loaded.", settings));
});

export const updateChatbotSettings = asyncHandler(async (req: Request, res: Response) => {
  const settings = await chatbotSettingsService.upsert(req.user!.id, req.body);
  res.status(HTTP_STATUS.OK).json(successResponse("Chatbot settings updated.", settings));
});

export const sendChatMessage = asyncHandler(async (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json(
    successResponse("Message processed.", {
      reply: "Thanks for reaching out. Our team will get back to you shortly.",
      leadCaptured: false,
    }),
  );
});
