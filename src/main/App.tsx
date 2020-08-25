import React from "react";
import { container } from "tsyringe";
import { render } from "react-dom";

import { SpotifyOAuthAuthentication } from "@/data/useCases/authentication";
import { SpotifyOAuthProvider } from "@/data/services/oauth";
import { SpotifyAuthenticationProviderRedirect } from "@/data/useCases/authentication";

import { DefaultAppConfig } from "@/infrastructure/config";
import { FetchHttpClient } from "@/infrastructure/transport/http";
import { SessionStorageAdapter } from "@/infrastructure/cache";

import { Main } from "@/presentation/Main";
import { ExternalRedirectAdapter } from "@/infrastructure/url";

export class App {
  run(): void {
    this.registerDi();
    this.renderUi();
  }

  private renderUi(): void {
    render(
      <Main dependencyContainer={container} />,
      document.getElementById("app")
    );
  }

  private registerDi(): void {
    container.register("Authentication", {
      useClass: SpotifyOAuthAuthentication,
    });

    container.register("OAuthProvider", {
      useClass: SpotifyOAuthProvider,
    });

    container.register("AppConfig", {
      useClass: DefaultAppConfig,
    });

    container.register("HttpClient", {
      useClass: FetchHttpClient,
    });

    container.register("SessionStorage", {
      useClass: SessionStorageAdapter,
    });

    container.register("AuthenticationProviderRedirect", {
      useClass: SpotifyAuthenticationProviderRedirect,
    });

    container.register("ExternalRedirect", {
      useClass: ExternalRedirectAdapter,
    });
  }
}
