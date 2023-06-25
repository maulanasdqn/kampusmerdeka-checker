import { AxiosError } from "axios";

export type TMetaItem = {
  limit: string;
  offset: string;
  total: string;
  error: {
    message: string;
  };
};

export type TMetaResponse<T> = {
  data: T;
} & TMetaItem;

export type TMetaErrorResponse = AxiosError<TMetaItem>;

export interface CustomError extends Error {
  response?: {
    status: number;
  };
}
