const DEFAULT_MAX_AGE = 365 * 24 * 60 * 60;
const IS_PRODUCTION_ENVIRONMENT = process.env.NODE_ENV === "production";

export const getAuthTokenConfig = (
  key: string,
  value: string,
  maxAge: number = DEFAULT_MAX_AGE,
) => {
  return [key, value, {
    httpOnly: true,
    secure: IS_PRODUCTION_ENVIRONMENT,
    maxAge: maxAge,
    sameSite: "strict",
    path: "/",
  }] as const;
};
