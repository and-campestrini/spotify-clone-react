import { AppConfig } from "@/data/config";

export class DefaultAppConfig implements AppConfig {
  getSpotifyClientId(): string {
    return "e2107d7460c146748662464f2cd498dc";
  }
}
