import { InferSchemaType, model, Schema } from "mongoose";

const messageSchema = new Schema(
  {
    conversationId: { type: Schema.Types.ObjectId, ref: "Conversation", required: true, index: true },
    senderType: { type: String, enum: ["visitor", "bot", "agent"], required: true },
    content: { type: String, required: true, trim: true },
    metadata: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
);

export type MessageDocument = InferSchemaType<typeof messageSchema> & { _id: string };
export const Message = model("Message", messageSchema);
