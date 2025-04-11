export interface ApiResponse<T> {
  status: number;
  errorMessage?: string | null;
  data: T;
}
