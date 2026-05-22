import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { conversationService } from "@/services/conversation.service";

export const listConversations = asyncHandler(async (req: Request, res: Response) => {
  const conversations = await conversationService.list(req.user!.id);
  res.status(HTTP_STATUS.OK).json(successResponse("Conversations loaded.", conversations));
});

export const createConversation = asyncHandler(async (req: Request, res: Response) => {
  const conversation = await conversationService.create({ ...req.body, workspaceId: req.user!.id });
  res.status(HTTP_STATUS.CREATED).json(successResponse("Conversation created.", conversation));
});
