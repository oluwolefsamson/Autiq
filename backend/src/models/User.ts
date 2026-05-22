import bcrypt from "bcryptjs";
import { HydratedDocument, InferSchemaType, Model, Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "member"], default: "member" },
    isEmailVerified: { type: Boolean, default: false },
    refreshTokenHash: { type: String, select: false },
    companyName: { type: String, trim: true },
    phone: { type: String, trim: true },
  },
  { timestamps: true },
);

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) {
    next();
    return;
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function comparePassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export type UserSchema = InferSchemaType<typeof userSchema>;
export interface UserMethods {
  comparePassword(password: string): Promise<boolean>;
}
export type UserDocument = HydratedDocument<UserSchema, UserMethods>;
export type UserModel = Model<UserSchema, object, UserMethods>;

export const User = model<UserSchema, UserModel>("User", userSchema);
