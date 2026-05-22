import { Router } from "express";
import { createConversation, listConversations } from "@/controllers/conversation.controller";
import { protect } from "@/middlewares/auth.middleware";

export const conversationRouter = Router();

conversationRouter.get("/", protect, listConversations);
conversationRouter.post("/", protect, createConversation);
