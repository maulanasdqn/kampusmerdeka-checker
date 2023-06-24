import { api } from "@/services";
import { TLoginParams, TLoginResponse } from "./types";

export const userRequest = async (params: TLoginParams): Promise<TLoginResponse> => {
  const { data } = await api.post("/user/auth/login/mbkm", params);
  return data;
};
