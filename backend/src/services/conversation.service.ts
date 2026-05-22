import { Conversation } from "@/models/Conversation";

export const conversationService = {
  list: (workspaceId: string) => Conversation.find({ workspaceId }).sort({ updatedAt: -1 }),
  create: (payload: Record<string, unknown>) => Conversation.create(payload),
};
