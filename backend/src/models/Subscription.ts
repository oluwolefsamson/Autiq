import { InferSchemaType, model, Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    workspaceId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    plan: { type: String, enum: ["starter", "growth", "scale"], required: true },
    status: { type: String, enum: ["active", "past_due", "canceled"], default: "active" },
    renewsAt: { type: Date },
    provider: { type: String, default: "stripe" },
    customerId: { type: String, index: true },
  },
  { timestamps: true },
);

export type SubscriptionDocument = InferSchemaType<typeof subscriptionSchema> & { _id: string };
export const Subscription = model("Subscription", subscriptionSchema);
