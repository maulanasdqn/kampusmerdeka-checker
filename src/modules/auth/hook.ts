import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TLoginParams, TLoginResponse } from "./types";
import { userRequest } from "./api";

export const useLogin = (): UseMutationResult<TLoginResponse, unknown, TLoginParams, unknown> =>
  useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (params) => await userRequest(params),
  });
