import { BaseRepository } from "@/repositories/base.repository";
import { User } from "@/models/User";

export const userRepository = new BaseRepository(User);
