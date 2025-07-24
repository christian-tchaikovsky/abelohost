import { instance } from "./instance";

import { getAccessToken } from "@/services/TokenStorageService/TokenStorageService";

import type { AxiosPromise } from "axios";
import type { User } from "@/api/_types/User";
import type { AuthData, AuthResponse, AuthTokens } from "@/api/_types/Auth";

export const AUTH = {
  login(data: AuthData): AxiosPromise<AuthResponse> {
    return instance({
      method: "POST",
      url: "/auth/login",
      data,
    });
  },

  async getUserInfo(): Promise<User | null> {
    const token = await getAccessToken();

    if (!token) {
      return null;
    }

    const response = await instance({
      method: "GET",
      url: "/auth/me",
    });

    return response.data;
  },

  refreshToken(token?: string): AxiosPromise<AuthTokens> {
    return instance({
      method: "POST",
      url: "/auth/refresh",
      data: {
        refreshToken: token,
      },
    });
  },
};
