import { Router } from "express";
import { protect } from "@/middlewares/auth.middleware";
import { updateMe } from "@/controllers/user.controller";

export const userRouter = Router();

userRouter.patch("/me", protect, updateMe);
