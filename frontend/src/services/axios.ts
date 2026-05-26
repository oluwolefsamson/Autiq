import axios from "axios";
import { api } from "@/services/api";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = api.getCookie("token");
    const tempToken = api.getCookie("temp_token");
    const isLoginEndpoint = config.url?.endsWith("/login");

    config.headers = config.headers ?? {};

    if (tempToken && isLoginEndpoint) {
        config.headers.Authorization = `Bearer ${tempToken}`;
    } else if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error?.response?.status === 401) {
            api.removeCookie("token");
            api.removeCookie("temp_token");
            return Promise.reject(new Error("Unauthorized or Session Expired. Redirecting to login."));
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
