import { z } from "zod";

export const faqSchema = z.object({
  body: z.object({
    question: z.string().min(3),
    answer: z.string().min(3),
    tags: z.array(z.string()).default([]),
    isPublished: z.boolean().default(true),
  }),
});
