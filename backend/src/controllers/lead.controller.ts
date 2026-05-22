import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { leadService } from "@/services/lead.service";

export const listLeads = asyncHandler(async (req: Request, res: Response) => {
  const leads = await leadService.list(req.user!.id);
  res.status(HTTP_STATUS.OK).json(successResponse("Leads loaded.", leads));
});

export const createLead = asyncHandler(async (req: Request, res: Response) => {
  const lead = await leadService.create({ ...req.body, workspaceId: req.user!.id });
  res.status(HTTP_STATUS.CREATED).json(successResponse("Lead created.", lead));
});
