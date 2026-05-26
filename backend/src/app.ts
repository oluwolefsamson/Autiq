import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { allowedClientOrigins } from "@/config/env";
import { apiLimiter } from "@/middlewares/rate-limit.middleware";
import { errorMiddleware } from "@/middlewares/error.middleware";
import { notFound } from "@/middlewares/not-found.middleware";
import { analyticsRouter } from "@/routes/analytics.routes";
import { chatbotRouter } from "@/routes/chatbot.routes";
import { conversationRouter } from "@/routes/conversation.routes";
import { authRouter } from "@/routes/auth.routes";
import { faqRouter } from "@/routes/faq.routes";
import { healthRouter } from "@/routes/health.routes";
import { leadRouter } from "@/routes/lead.routes";
import { subscriptionRouter } from "@/routes/subscription.routes";
import { userRouter } from "@/routes/user.routes";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedClientOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(apiLimiter);

app.get("/", (_req, res) => {
  res.json({ success: true, message: "Autiq API", data: { service: "backend" } });
});

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/faqs", faqRouter);
app.use("/api/leads", leadRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/chatbot", chatbotRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/subscriptions", subscriptionRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorMiddleware);
