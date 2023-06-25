import { TMetaErrorResponse } from "@/utils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { docsRequest } from "./api";
import { TDocsParams } from "./types";

export const useDocs = (params: TDocsParams): UseQueryResult<unknown, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["docs-params", params],
    queryFn: async () => await docsRequest(params),
  });
