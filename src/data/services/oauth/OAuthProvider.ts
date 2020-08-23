import { User } from "@/domain/models";

export interface OAuthProvider {
  exchangeTokenForUserInfo(accessToken: string): Promise<User>;
}
