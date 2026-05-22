import { InferSchemaType, model, Schema } from "mongoose";

const chatbotSettingsSchema = new Schema(
  {
    workspaceId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    name: { type: String, default: "Autiq Assistant" },
    welcomeMessage: { type: String, default: "Hi, how can we help today?" },
    primaryColor: { type: String, default: "#111827" },
    isEnabled: { type: Boolean, default: true },
    collectLeads: { type: Boolean, default: true },
    humanHandoffEmail: { type: String, trim: true },
    knowledgeBaseScope: { type: String, enum: ["all", "published_only"], default: "published_only" },
  },
  { timestamps: true },
);

export type ChatbotSettingsDocument = InferSchemaType<typeof chatbotSettingsSchema> & { _id: string };
export const ChatbotSettings = model("ChatbotSettings", chatbotSettingsSchema);
