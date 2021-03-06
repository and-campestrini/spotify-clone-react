import { HttpMethod } from "./HttpMethod";

export type RequestParams = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: Record<string, any>;
};

export interface HttpClient {
  request<R>(params: RequestParams): Promise<R>;
}
