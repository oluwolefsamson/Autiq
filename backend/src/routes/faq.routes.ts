import { Router } from "express";
import { createFaq, listFaqs } from "@/controllers/faq.controller";
import { protect } from "@/middlewares/auth.middleware";

export const faqRouter = Router();

faqRouter.get("/", protect, listFaqs);
faqRouter.post("/", protect, createFaq);
