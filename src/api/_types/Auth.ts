import type { User } from "./User";

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type AuthData = {
  username: string;
  password: string;
  /**
   * @default 60
   */
  expiresInMins?: number;
};

export type AuthResponse
  = User
    & AuthTokens;
