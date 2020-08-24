import { SessionStorage } from "@/data/cache";

export class SessionStorageAdapter implements SessionStorage {
  get<R = any>(key: string): R | undefined {
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as R;
    }

    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
