export interface MyResponse<T> {
  errorCode: number;
  data: T;
  message: string
}
