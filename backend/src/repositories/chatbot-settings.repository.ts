import { BaseRepository } from "@/repositories/base.repository";
import { ChatbotSettings } from "@/models/ChatbotSettings";

export const chatbotSettingsRepository = new BaseRepository(ChatbotSettings);
