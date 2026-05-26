import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "@/config/env";
import { HTTP_STATUS } from "@/constants/http";
import { ApiError } from "@/utils/api-error";
import { User } from "@/models/User";

const signAccessToken = (userId: string): string => {
  return jwt.sign({ sub: userId }, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  });
};

const signRefreshToken = (userId: string): string => {
  return jwt.sign({ sub: userId }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  });
};

export const authService = {
  async register(input: { name: string; email: string; password: string; companyName?: string }) {
    const existing = await User.findOne({ email: input.email });
    if (existing) {
      throw new ApiError(HTTP_STATUS.CONFLICT, "An account with this email already exists.");
    }

    const user = await User.create({
      name: input.name,
      email: input.email,
      password: input.password,
      companyName: input.companyName,
    });

    const accessToken = signAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    user.refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    await user.save({ validateBeforeSave: false });

    return { user, accessToken, refreshToken };
  },

  async login(input: { email: string; password: string }) {
    const user = await User.findOne({ email: input.email }).select("+password +refreshTokenHash");
    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid email or password.");
    }

    const isValid = await user.comparePassword(input.password);
    if (!isValid) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid email or password.");
    }

    const accessToken = signAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    user.refreshTokenHash = await bcrypt.hash(refreshToken, 12);
    await user.save({ validateBeforeSave: false });

    return { user, accessToken, refreshToken };
  },

  async refresh(refreshToken: string) {
    const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { sub: string };
    const user = await User.findById(payload.sub).select("+refreshTokenHash");

    if (!user || !user.refreshTokenHash) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid refresh token.");
    }

    const isValid = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!isValid) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid refresh token.");
    }

    const accessToken = signAccessToken(user.id);
    return { accessToken, user };
  },

  async logout(userId: string) {
    await User.findByIdAndUpdate(userId, { $unset: { refreshTokenHash: 1 } });
  },

  async me(userId: string) {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Session expired.");
    }

    return { user };
  },
};
