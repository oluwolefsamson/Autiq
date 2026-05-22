import type { UserDocument } from "@/models/User";

export const sanitizeUser = (user: UserDocument) => {
  const plain = user.toObject ? user.toObject() : user;
  // Remove auth secrets before sending the user to the client.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, refreshTokenHash, ...safeUser } = plain as Record<string, unknown>;
  return safeUser;
};
