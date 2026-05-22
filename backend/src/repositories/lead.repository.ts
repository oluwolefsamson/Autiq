import { BaseRepository } from "@/repositories/base.repository";
import { Lead } from "@/models/Lead";

export const leadRepository = new BaseRepository(Lead);
