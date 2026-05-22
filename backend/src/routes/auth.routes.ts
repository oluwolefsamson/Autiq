import { Router } from "express";
import { forgotPassword, login, logout, me, refresh, register } from "@/controllers/auth.controller";
import { protect } from "@/middlewares/auth.middleware";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", protect, logout);
authRouter.get("/me", protect, me);
authRouter.post("/forgot-password", forgotPassword);
