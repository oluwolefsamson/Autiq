import { Router } from "express";
import { createLead, listLeads } from "@/controllers/lead.controller";
import { protect } from "@/middlewares/auth.middleware";

export const leadRouter = Router();

leadRouter.get("/", protect, listLeads);
leadRouter.post("/", protect, createLead);
