import axios from "axios";
import { api } from "@/services/api";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://autiq.onrender.com/api";

const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
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
            error.message = "Your session has expired. Please sign in again.";
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
