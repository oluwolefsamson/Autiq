import { Router } from "express";
import { getChatbotSettings, sendChatMessage, updateChatbotSettings } from "@/controllers/chatbot.controller";
import { protect } from "@/middlewares/auth.middleware";

export const chatbotRouter = Router();

chatbotRouter.get("/settings", protect, getChatbotSettings);
chatbotRouter.patch("/settings", protect, updateChatbotSettings);
chatbotRouter.post("/message", sendChatMessage);
