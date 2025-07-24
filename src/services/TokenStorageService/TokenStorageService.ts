"use server";

import { cookies } from "next/headers";

import { COOKIE_KEYS } from "@/constants/keys";
import { getAuthTokenConfig } from "@/helpers/getAuthTokenConfig/getAuthTokenConfig";

import type { AuthTokens } from "@/api/_types/Auth";

export const getAccessToken = async () => {
  return (await cookies()).get(COOKIE_KEYS.accessToken)?.value;
};

export const getRefreshToken = async () => {
  return (await cookies()).get(COOKIE_KEYS.refreshToken)?.value;
};

export const setTokens = async ({
  accessToken,
  refreshToken,
}: AuthTokens) => {
  const cookie = await cookies();

  cookie.set(...getAuthTokenConfig(COOKIE_KEYS.accessToken, accessToken));
  cookie.set(...getAuthTokenConfig(COOKIE_KEYS.refreshToken, refreshToken));
};

export const removeTokens = async () => {
  const cookie = await cookies();

  cookie.delete(COOKIE_KEYS.accessToken);
  cookie.delete(COOKIE_KEYS.refreshToken);
};
