import { HttpMethod } from "./HttpMethod";

export type RequestParams = {
  url: string;
  method: HttpMethod;
  body: Record<string, any>;
  headers: Record<string, any>;
};

export interface HttpClient {
  request(params: RequestParams): void;
}
