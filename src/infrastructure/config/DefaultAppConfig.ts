import { AppConfig } from "@/data/config";
import { injectable } from "tsyringe";

@injectable()
export class DefaultAppConfig implements AppConfig {
  getSpotifyClientId(): string {
    return "e2107d7460c146748662464f2cd498dc";
  }

  getSpotifyOAuthUrl(): string {
    return "https://accounts.spotify.com/authorize";
  }
}
