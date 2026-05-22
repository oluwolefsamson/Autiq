import { FAQ } from "@/models/FAQ";

export const faqService = {
  list: (workspaceId: string) => FAQ.find({ workspaceId }).sort({ createdAt: -1 }),
  create: (payload: Record<string, unknown>) => FAQ.create(payload),
};
