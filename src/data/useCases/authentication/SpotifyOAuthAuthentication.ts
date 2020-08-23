import { User } from "@/domain/models/User";
import { OAuthProvider } from "@/data/services/oauth";
import {
  Authentication,
  AuthenticationParams,
} from "@/domain/useCases/Authentication";

export class SpotifyOAuthAuthentication implements Authentication {
  constructor(private spotifyOAuthProvider: OAuthProvider) {}

  async authenticate({ code }: AuthenticationParams): Promise<User> {
    if (code) {
      return await this.spotifyOAuthProvider.exchangeTokenForUserInfo(code);
    }

    throw Error("Code was not present in OAuth flow");
  }
}
