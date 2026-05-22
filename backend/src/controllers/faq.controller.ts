import { Request, Response } from "express";
import { HTTP_STATUS } from "@/constants/http";
import { asyncHandler } from "@/utils/async-handler";
import { successResponse } from "@/utils/api-response";
import { faqService } from "@/services/faq.service";

export const listFaqs = asyncHandler(async (req: Request, res: Response) => {
  const faqs = await faqService.list(req.user!.id);
  res.status(HTTP_STATUS.OK).json(successResponse("FAQs loaded.", faqs));
});

export const createFaq = asyncHandler(async (req: Request, res: Response) => {
  const faq = await faqService.create({ ...req.body, workspaceId: req.user!.id });
  res.status(HTTP_STATUS.CREATED).json(successResponse("FAQ created.", faq));
});
