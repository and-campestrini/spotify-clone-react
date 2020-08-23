import fetchMock from "jest-fetch-mock";
import faker from "faker";
import { HttpMethod, RequestParams } from "@/data/transport/http";
import { FetchHttpClient } from "./FetchHttpClient";

const mockHttpMethod = (): HttpMethod =>
  faker.random.objectElement(Object.keys(HttpMethod)) as HttpMethod;

describe("FetchHttpClient", () => {
  let systemUnderTest: FetchHttpClient;

  beforeEach(() => {
    fetchMock.mockClear();
    systemUnderTest = new FetchHttpClient();
  });

  describe("success cases", () => {
    let params: RequestParams;
    let mockedResponse: { test: any };

    beforeEach(() => {
      params = { url: faker.internet.url(), method: mockHttpMethod() };
      mockedResponse = { test: faker.random.alphaNumeric() };

      fetchMock.mockOnce(JSON.stringify(mockedResponse));
    });

    it("should call the correct url", async () => {
      await systemUnderTest.request(params);
      expect(fetchMock.mock.calls[0][0]).toBe(params.url);
    });

    it("should return the correct response", async () => {
      const actualResponse = await systemUnderTest.request({
        url: faker.internet.url(),
        method: mockHttpMethod(),
      });

      expect(actualResponse).toEqual(mockedResponse);
    });

    it("should use the correct http method", async () => {
      await systemUnderTest.request(params);
      expect(fetchMock.mock.calls[0][1]).toEqual(
        expect.objectContaining({ method: params.method })
      );
    });

    it("should pass the correct headers", async () => {
      const headers = {
        Authorization: `Bearer ${faker.random.alphaNumeric()}`,
      };
      params = { ...params, headers };

      await systemUnderTest.request(params);

      expect(fetchMock.mock.calls[0][1]).toEqual(
        expect.objectContaining({ headers })
      );
    });

    it("should pass the correct body", async () => {
      const body = {
        param: faker.random.alphaNumeric(),
      };
      params = { ...params, body };

      await systemUnderTest.request(params);

      expect(fetchMock.mock.calls[0][1]).toEqual(
        expect.objectContaining({ body })
      );
    });
  });
});
