export const authQueryKeys = {
    all: ["authentication"] as const,
    session: () => [...authQueryKeys.all, "session"] as const,
};
