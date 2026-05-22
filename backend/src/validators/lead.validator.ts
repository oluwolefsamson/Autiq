import { z } from "zod";

export const leadSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    source: z.string().default("chatbot"),
    status: z.enum(["new", "contacted", "qualified", "won", "lost"]).default("new"),
    notes: z.string().optional(),
  }),
});
