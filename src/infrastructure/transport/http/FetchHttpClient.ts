import { HttpClient, RequestParams } from "@/data/transport/http";

export class FetchHttpClient implements HttpClient {
  async request({ url, body, headers, method }: RequestParams): Promise<any> {
    const request = await fetch(url, { body, headers, method });
    return request.json();
  }
}
