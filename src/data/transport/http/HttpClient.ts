import { HttpMethod } from "./HttpMethod";

export interface HttpClient {
  request(url: string, method: HttpMethod, body: any, headers: any): void;
}
