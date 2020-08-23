import faker from "faker";
import { mock } from "jest-mock-extended";
import { SpotifyOAuthAuthentication } from "@/data/useCases/authentication";
import { OAuthProvider } from "@/data/services/oauth";
import { UserMock } from "@/domain/models/mocks/User";

describe("SpotifyOAuthAuthentication", () => {
  let systemUnderTest: SpotifyOAuthAuthentication;
  const oAuthProviderMock = mock<OAuthProvider>();

  beforeEach(() => {
    jest.clearAllMocks();
    systemUnderTest = new SpotifyOAuthAuthentication(oAuthProviderMock);
  });

  it("should return the correct user information", async () => {
    const userMock = UserMock();
    oAuthProviderMock.exchangeTokenForUserInfo.mockImplementationOnce(() =>
      Promise.resolve(userMock)
    );

    await expect(
      systemUnderTest.authenticate({ code: faker.random.alphaNumeric() })
    ).resolves.toBe(userMock);
  });

  it("should bubble up exception in case the exchange fails", async () => {
    oAuthProviderMock.exchangeTokenForUserInfo.mockRejectedValueOnce(
      "Aborted!"
    );

    await expect(
      systemUnderTest.authenticate({ code: faker.random.alphaNumeric() })
    ).rejects.toBe("Aborted!");
  });

  it("should throw an erro if code is null", async () => {
    await expect(
      systemUnderTest.authenticate({ code: undefined })
    ).rejects.toThrow();
  });
});
