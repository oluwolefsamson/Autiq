type ApiErrorLike = {
    response?: {
        status?: number;
        data?: {
            message?: string;
            success?: boolean;
        };
    };
    message?: string;
};

const friendlyStatusMessages: Record<number, string> = {
    400: "Please check the information you entered and try again.",
    401: "The email or password is incorrect.",
    403: "You do not have permission to do that.",
    404: "We could not find that item.",
    409: "An account with this email already exists.",
    422: "Please review the form fields and try again.",
    429: "Too many requests. Please wait a moment and try again.",
    500: "Something went wrong on our side. Please try again later.",
};

export const getFriendlyErrorMessage = (error: unknown, fallback = "Something went wrong. Please try again.") => {
    const err = error as ApiErrorLike | undefined;
    const status = err?.response?.status;

    if (status && friendlyStatusMessages[status]) {
        return friendlyStatusMessages[status];
    }

    const responseMessage = err?.response?.data?.message?.trim();
    if (responseMessage) {
        return responseMessage;
    }

    const message = err?.message?.trim();
    if (message && message !== "Unauthorized or Session Expired. Redirecting to login.") {
        return message;
    }

    return fallback;
};
