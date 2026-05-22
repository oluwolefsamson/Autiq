import { BaseRepository } from "@/repositories/base.repository";
import { FAQ } from "@/models/FAQ";

export const faqRepository = new BaseRepository(FAQ);
