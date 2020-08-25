import { ExternalRedirect } from "@/data/url";

export class ExternalRedirectAdapter implements ExternalRedirect {
  redirectTo(url: string): void {
    window.location.assign(url);
  }
}
