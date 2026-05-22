import { Lead } from "@/models/Lead";

export const leadService = {
  list: (workspaceId: string) => Lead.find({ workspaceId }).sort({ createdAt: -1 }),
  create: (payload: Record<string, unknown>) => Lead.create(payload),
};
