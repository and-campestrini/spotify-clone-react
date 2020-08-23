export class HttpError extends Error {
  constructor(private statusCode: number) {
    super();
  }

  getStatusCode(): number {
    return this.statusCode;
  }
}
