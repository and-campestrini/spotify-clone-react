import { User } from "@/domain/models/User";
import { OAuthProvider } from "@/data/services/oauth";
import { SpotifyUserProfileResponse } from "@/data/models/SpotifyUserProfileResponse";
import { HttpClient, HttpMethod } from "@/data/transport/http";

export class SpotifyOAuthProvider implements OAuthProvider {
  constructor(private httpClient: HttpClient) {}

  async exchangeTokenForUserInfo(accessToken: string): Promise<User> {
    const user = await this.httpClient.request<SpotifyUserProfileResponse>({
      url: "https://api.spotify.com/v1/me",
      method: HttpMethod.GET,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      accessToken,
      avatarUrl: user.images[0].url,
      displayName: user.display_name,
      email: user.email,
      id: user.id,
    };
  }
}
