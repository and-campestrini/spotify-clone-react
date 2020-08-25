import { AppConfig } from "@/data/config";
import { ExternalRedirect } from "@/data/url";
import { AuthenticationProviderRedirect } from "@/domain/useCases";
import { inject, injectable } from "tsyringe";

@injectable()
export class SpotifyAuthenticationProviderRedirect
  implements AuthenticationProviderRedirect {
  private scopes = ["user-read-private"];

  constructor(
    @inject("AppConfig") private appConfig: AppConfig,
    @inject("ExternalRedirect") private externalRedirect: ExternalRedirect
  ) {}

  redirect(): void {
    const spotifyOauthUrl = this.appConfig.getSpotifyOAuthUrl();
    const url = new URL(spotifyOauthUrl);

    url.searchParams.append("client_id", this.appConfig.getSpotifyClientId());
    url.searchParams.append("response_type", "token");
    url.searchParams.append("redirect_uri", "http://localhost/auth/callback");
    url.searchParams.append("scope", this.scopes.join(" "));

    this.externalRedirect.redirectTo(url.href);
  }
}
