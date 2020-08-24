export interface SessionStorage {
  get<R = any>(key: string): R | undefined;
  set(key: string, data: any): void;
}
