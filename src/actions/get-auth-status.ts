"use server";

// get-auth-status removed: running in UI-only mode without Clerk or DB
const getAuthStatus = async () => {
    return { error: "Auth removed - UI only" };
};

export default getAuthStatus;
