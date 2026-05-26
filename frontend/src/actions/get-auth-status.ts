"use server";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://autiq.onrender.com/api";

const getAuthStatus = async () => {
    const response = await fetch(`${apiBaseUrl}/auth/me`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        return { success: false };
    }

    return { success: true };
};

export default getAuthStatus;
