export type AuthUser = {
    id: string;
    name: string;
    email: string;
    role?: "admin" | "member";
};

export type AuthSession = {
    user: AuthUser;
};

export type AuthMutationInput = {
    name?: string;
    email: string;
    password: string;
};

