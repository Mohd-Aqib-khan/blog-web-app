export interface ApiResponse<T> {
  status: boolean;
  errorMessage?: string | null;
  data: T;
}
