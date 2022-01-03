export interface DataResponse<T> {
  data?: T;
  ok: boolean;
  message?: string;
  fullError?: unknown;
}
