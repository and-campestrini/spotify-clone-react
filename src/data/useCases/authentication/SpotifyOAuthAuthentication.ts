import { injectable, inject } from "tsyringe";
import { User } from "@/domain/models/User";
import { OAuthProvider } from "@/data/services/oauth";
import {
  Authentication,
  AuthenticationParams,
} from "@/domain/useCases/Authentication";

@injectable()
export class SpotifyOAuthAuthentication implements Authentication {
  constructor(
    @inject("OAuthProvider") private spotifyOAuthProvider: OAuthProvider
  ) {}

  async authenticate({ code }: AuthenticationParams): Promise<User> {
    if (code) {
      return await this.spotifyOAuthProvider.exchangeTokenForUserInfo(code);
    }

    throw Error("Code was not present in OAuth flow");
  }
}
