import axios, { isAxiosError } from "axios";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { queryClient } from "@/lib/query-client";

const LOGIN_PATH = "/auth/login";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    const isUnauthorized =
      isAxiosError(error) &&
      error.response?.status === 401 &&
      error.config?.url !== LOGIN_PATH;

    if (isUnauthorized) {
      useAuthStore.getState().logout();
      queryClient.clear();
    }

    return Promise.reject(error);
  },
);

export { api };
