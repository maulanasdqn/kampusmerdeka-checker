import axios, { AxiosRequestConfig } from "axios";
import TokenService from "./token";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const api = axios.create(config);

api.interceptors.request.use(
  async (conf) => {
    const token = TokenService.getToken();
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
    TokenService.removeToken();
  },
);
