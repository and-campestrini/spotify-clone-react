import faker from "faker";
import { mock } from "jest-mock-extended";
import { SpotifyAuthenticationProviderRedirect } from "@/data/useCases/authentication";
import { AppConfig } from "@/data/config";
import { ExternalRedirect } from "@/data/url";

describe("SpotifyAuthenticationProviderRedirect", () => {
  const config = mock<AppConfig>();
  const externalRedirect = mock<ExternalRedirect>();
  let systemUnderTest: SpotifyAuthenticationProviderRedirect;

  let url: string;
  let cliendId: string;
  let resultUrl: URL;

  beforeEach(() => {
    jest.clearAllMocks();

    systemUnderTest = new SpotifyAuthenticationProviderRedirect(
      config,
      externalRedirect
    );

    url = faker.internet.url();
    cliendId = faker.random.alphaNumeric();

    config.getSpotifyOAuthUrl.mockImplementation(() => url);
    config.getSpotifyClientId.mockImplementation(() => cliendId);

    systemUnderTest.redirect();

    resultUrl = new URL(externalRedirect.redirectTo.mock.calls[0][0]);
  });

  it("should contain correct client id on url params", () => {
    expect(resultUrl.searchParams.get("client_id")).toBe(cliendId);
  });

  it("should contain response type as token on url params", () => {
    expect(resultUrl.searchParams.get("response_type")).toBe("token");
  });

  it("should contain correct scopes as scope on url params", () => {
    expect(
      resultUrl.searchParams.get("scope")?.indexOf("user-read-private")
    ).toBeGreaterThan(-1);
  });
});
