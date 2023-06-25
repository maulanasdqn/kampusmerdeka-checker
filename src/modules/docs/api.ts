import { api } from "@/services";
import { TDocsParams } from "./types";

export const docsRequest = async (params: TDocsParams): Promise<unknown> => {
  const { data } = await api({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params,
    url: "v1alpha1/documents",
  });
  return data;
};
