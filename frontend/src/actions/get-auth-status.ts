"use server";

const getAuthStatus = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api"}/auth/me`, {
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
