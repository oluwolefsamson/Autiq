import { Subscription } from "@/models/Subscription";

export const subscriptionService = {
  getByWorkspace: (workspaceId: string) => Subscription.findOne({ workspaceId }),
  upsert: (workspaceId: string, payload: Record<string, unknown>) =>
    Subscription.findOneAndUpdate({ workspaceId }, { workspaceId, ...payload }, { upsert: true, new: true }),
};
