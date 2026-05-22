import { BaseRepository } from "@/repositories/base.repository";
import { Subscription } from "@/models/Subscription";

export const subscriptionRepository = new BaseRepository(Subscription);
