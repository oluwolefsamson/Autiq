import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { Conversation } from "@/models/Conversation";
import { Lead } from "@/models/Lead";

export const summary = asyncHandler(async (req: Request, res: Response) => {
  const [conversations, leads] = await Promise.all([
    Conversation.countDocuments({ workspaceId: req.user!.id }),
    Lead.countDocuments({ workspaceId: req.user!.id }),
  ]);

  res.status(HTTP_STATUS.OK).json(
    successResponse("Analytics summary.", {
      conversations,
      leadsCaptured: leads,
      answerRate: 78,
      satisfactionScore: 4.8,
    }),
  );
});
