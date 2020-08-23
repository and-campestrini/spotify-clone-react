import React from "react";
import { container } from "tsyringe";
import { render } from "react-dom";

import { SpotifyOAuthAuthentication } from "@/data/useCases/authentication";
import { SpotifyOAuthProvider } from "@/data/services/oauth";

import { DefaultAppConfig } from "@/infrastructure/config/DefaultAppConfig";
import { FetchHttpClient } from "@/infrastructure/transport/http";

import { Main } from "@/presentation/Main";

export class App {
  run(): void {
    this.registerDi();
    this.renderUi();
  }

  private renderUi(): void {
    render(<Main />, document.getElementById("app"));
  }

  private registerDi(): void {
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
