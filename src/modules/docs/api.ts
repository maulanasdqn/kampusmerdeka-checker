import { api } from "@/services";
import { TDocsParams, TDocsResponse } from "./types";

export const docsRequest = async (params: TDocsParams): Promise<TDocsResponse> => {
  const { data } = await api<TDocsResponse>({
    method: "get",
    params,
    url: "/v1alpha1/documents",
  });
  return data;
};

export const docsStatusRequest = async (params: string): Promise<unknown> => {
  const { data } = await api({
    method: "get",
    url: `/v1alpha1/documents/${params}/users`,
  });
  return data;
};
