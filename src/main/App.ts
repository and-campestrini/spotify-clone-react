import "reflect-metadata";
import { container } from "tsyringe";

import { SpotifyOAuthAuthentication } from "@/data/useCases/authentication";
import { SpotifyOAuthProvider } from "@/data/services/oauth";
import { DefaultAppConfig } from "@/infrastructure/config/DefaultAppConfig";
import { FetchHttpClient } from "@/infrastructure/transport/http";

export class App {
  registerDi(): void {
    container.register("Authentication", {
      useClass: SpotifyOAuthAuthentication,
    });

    container.register("OAuthProvider", {
      useClass: SpotifyOAuthProvider,
    });

    container.register("DefaultAppConfig", {
      useClass: DefaultAppConfig,
    });

    container.register("HttpClient", {
      useClass: FetchHttpClient,
    });
  }
}
