import { BaseRepository } from "@/repositories/base.repository";
import { Conversation } from "@/models/Conversation";

export const conversationRepository = new BaseRepository(Conversation);
