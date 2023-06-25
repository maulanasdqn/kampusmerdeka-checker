import { TLoginResponse } from "@/modules/auth/types";
import axios, { AxiosRequestConfig } from "axios";
import TokenService from "./token";

const abortController = new AbortController();

const config: AxiosRequestConfig = {
  signal: abortController.signal,
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

export const api = axios.create(config);

api.interceptors.request.use(
  async (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
    TokenService.removeToken();
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const { data } = await api.post<TLoginResponse>("/auth/refresh");

      if (data?.data?.access_token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${data?.data?.access_token}`,
        };
      }

      return config;
    }
    return Promise.reject(error);
  },
);
