import axiosInstance from "@/services/axios";
import type { AxiosRequestConfig } from "axios";

const readCookie = (name: string) => {
    if (typeof document === "undefined") return "";
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(";").shift() ?? "";
    }
    return "";
};

type ApiEnvelope<T> = {
    success: boolean;
    message?: string;
    data?: T;
};

const request = async <T>(promise: Promise<{ data: ApiEnvelope<T> }>) => {
    const response = await promise;
    return response.data.data as T;
};

export const api = {
    getCookie: readCookie,
    removeCookie(name: string) {
        if (typeof document === "undefined") return;
        document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
    },
    setSessionCookie() {
        document.cookie = "autiq-session=1; path=/; max-age=604800; samesite=lax";
        localStorage.setItem("auth:signedIn", "true");
    },
    clearSessionCookie() {
        document.cookie = "autiq-session=; path=/; max-age=0; samesite=lax";
        localStorage.removeItem("auth:signedIn");
    },
    get: <T>(url: string, config?: AxiosRequestConfig) => request<T>(axiosInstance.get(url, config)),
    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(axiosInstance.post(url, data, config)),
    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(axiosInstance.put(url, data, config)),
    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => request<T>(axiosInstance.patch(url, data, config)),
    del: <T>(url: string, config?: AxiosRequestConfig) => request<T>(axiosInstance.delete(url, config)),
};
