import faker from "faker";
import { mock } from "jest-mock-extended";
import { SpotifyOAuthProvider } from "@/data/services/oauth";
import { HttpClient } from "@/data/transport/http";
import { SpotifyUserProfileResponseMock } from "@/data/models/mocks/SpotifyUserProfileResponseMock";

describe("SpotifyOAuthProvider", () => {
  let systemUnderTest: SpotifyOAuthProvider;
  const httpClientMock = mock<HttpClient>();

  beforeEach(() => {
    jest.clearAllMocks();
    systemUnderTest = new SpotifyOAuthProvider(httpClientMock);
  });

  it("should return the correct user information", async () => {
    const user = SpotifyUserProfileResponseMock();
    const token = faker.random.alphaNumeric();
    httpClientMock.request.mockImplementationOnce(() => Promise.resolve(user));

    const response = await systemUnderTest.exchangeTokenForUserInfo(token);

    expect(response.accessToken).toBe(token);
    expect(response.avatarUrl).toBe(user.images[0].url);
    expect(response.displayName).toBe(user.display_name);
    expect(response.email).toBe(user.email);
    expect(response.id).toBe(user.id);
  });

  it("should throw an exception if request fails", async () => {
    httpClientMock.request.mockRejectedValueOnce(new Error());
    await expect(
      systemUnderTest.exchangeTokenForUserInfo(faker.random.alphaNumeric())
    ).rejects.toThrow();
  });
});
