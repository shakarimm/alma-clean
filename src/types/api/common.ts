import { AxiosError } from 'axios';

export const enum ResponseStatus {
  UNAUTHORIZED = 401,
  VALIDATION_ERROR = 422,
  TOO_MANY_REQUESTS = 429,
}

export const enum ResponseErrorTypes {
  AUTH_LOGIN_CREDENTIALS_INVALID = 'credentials_invalid',
}

export type ValidationError<T> = {
  [K in keyof T]?: string[]
}

export interface ResponseErrorData<T = any, E = ResponseErrorTypes> {
  error_type: E;
  validation_errors?: ValidationError<T>;
}

export type ResponseError<T, E = ResponseErrorTypes> = AxiosError<ResponseErrorData<T, E>>

export interface DataResponse<T> {
  data: T;
}

export interface UnprocessableContentResponse {
  message: string,
  errors: {
    [key: string]: string[]
  }
}

export interface PaginationResponse<T> {
  data: T[];
  links: {
    first: string
    last: string
    prev: string | null
    next: string | null
  };
  meta: {
    from: number
    to: number
    current_page: number
    last_page: number
    per_page: number
    total: number
    path: string
  };
}
