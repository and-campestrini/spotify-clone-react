import { HttpClient, RequestParams } from "@/data/transport/http";

export class FetchHttpClient implements HttpClient {
  async request<R>({ url, body, headers, method }: RequestParams): Promise<R> {
    const request = await fetch(url, { body, headers, method });
    return request.json();
  }
}
