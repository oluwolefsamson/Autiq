import { InferSchemaType, model, Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    workspaceId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    visitorId: { type: String, required: true, index: true },
    channel: { type: String, enum: ["widget", "email", "whatsapp", "manual"], default: "widget" },
    status: { type: String, enum: ["open", "pending", "resolved"], default: "open" },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
    summary: { type: String, trim: true },
  },
  { timestamps: true },
);

conversationSchema.index({ workspaceId: 1, status: 1, updatedAt: -1 });

export type ConversationDocument = InferSchemaType<typeof conversationSchema> & { _id: string };
export const Conversation = model("Conversation", conversationSchema);
