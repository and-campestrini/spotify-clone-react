import { HttpClient, HttpError, RequestParams } from "@/data/transport/http";

export class FetchHttpClient implements HttpClient {
  async request<R>({ url, body, headers, method }: RequestParams): Promise<R> {
    const response = await fetch(url, { body, headers, method })

    if (response.ok) {
      return response.json();
    }

    throw new HttpError(response.status);
  }
}
