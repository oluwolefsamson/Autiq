import { api } from "@/services/api";
import type { AuthSession, AuthUser } from "@/types/authentication";

export const authEndpoints = {
    async login(input: { email: string; password: string }) {
        return api.post<{ user: AuthUser }>("/auth/login", input);
    },
    async register(input: { name: string; email: string; password: string }) {
        return api.post<{ user: AuthUser }>("/auth/register", input);
    },
    async session() {
        return api.get<AuthSession>("/auth/me");
    },
    async logout() {
        return api.post<{ message?: string }>("/auth/logout");
    },
};
