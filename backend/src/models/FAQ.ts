import { InferSchemaType, model, Schema } from "mongoose";

const faqSchema = new Schema(
  {
    workspaceId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export type FAQDocument = InferSchemaType<typeof faqSchema> & { _id: string };
export const FAQ = model("FAQ", faqSchema);
