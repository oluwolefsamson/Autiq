import { InferSchemaType, model, Schema } from "mongoose";

const leadSchema = new Schema(
  {
    workspaceId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    source: { type: String, default: "chatbot" },
    status: { type: String, enum: ["new", "contacted", "qualified", "won", "lost"], default: "new" },
    notes: { type: String, trim: true },
  },
  { timestamps: true },
);

leadSchema.index({ workspaceId: 1, status: 1, createdAt: -1 });

export type LeadDocument = InferSchemaType<typeof leadSchema> & { _id: string };
export const Lead = model("Lead", leadSchema);
