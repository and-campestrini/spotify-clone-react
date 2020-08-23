import { User } from "@/domain/models";

export type AuthenticationParams = {
  username?: string;
  email?: string;
  password?: string;
  code?: string;
};

export interface Authentication {
  authenticate(params: AuthenticationParams): Promise<User>;
}
