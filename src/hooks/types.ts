export interface DataHook<T> {
  data?: T | null;
  isLoading?: boolean;
  error?: unknown;
}
