import { ChatbotSettings } from "@/models/ChatbotSettings";

export const chatbotSettingsService = {
  getByWorkspace: (workspaceId: string) => ChatbotSettings.findOne({ workspaceId }),
  upsert: (workspaceId: string, payload: Record<string, unknown>) =>
    ChatbotSettings.findOneAndUpdate({ workspaceId }, { workspaceId, ...payload }, { upsert: true, new: true }),
};
