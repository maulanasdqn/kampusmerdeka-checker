import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TLoginParams, TLoginResponse } from "./types";
import { userRequest } from "./api";
import { TMetaErrorResponse } from "@/utils";
import TokenService from "@/services/token";

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginParams,
  unknown
> =>
  useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (params) => await userRequest(params),
    onSuccess(data) {
      TokenService.saveToken(data?.data?.access_token);
      TokenService.saveRefreshToken(data?.data?.refresh_token);
    },
  });
