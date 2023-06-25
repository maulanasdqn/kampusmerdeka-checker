import { TMetaErrorResponse } from "@/utils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { docsRequest, docsStatusRequest } from "./api";
import { TDocsParams, TDocsResponse } from "./types";

export const useDocs = (params: TDocsParams): UseQueryResult<TDocsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["docs-params", params],
    queryFn: async () => await docsRequest(params),
  });

export const useDocsStatus = (params: string): UseQueryResult<unknown, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["docs-status", params],
    queryFn: async () => await docsStatusRequest(params),
  });
