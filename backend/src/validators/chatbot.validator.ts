import { z } from "zod";

export const chatbotSettingsSchema = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    welcomeMessage: z.string().min(2).optional(),
    primaryColor: z.string().optional(),
    isEnabled: z.boolean().optional(),
    collectLeads: z.boolean().optional(),
    humanHandoffEmail: z.string().email().optional().or(z.literal("")),
    knowledgeBaseScope: z.enum(["all", "published_only"]).optional(),
  }),
});
