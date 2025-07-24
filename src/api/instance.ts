import axios from "axios";

import { getAccessToken } from "@/services/TokenStorageService/TokenStorageService";

export const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * At this point, the token can be refreshed if it has expired.
     * It’s important to ensure that the token is only refreshed on the first failed request,
     * while all other requests are queued.
     * Once the token is obtained, the queued requests should be executed.
     * The token should only be refreshed on the first failed request to avoid a race condition.
     */
    return Promise.reject(error);
  },
);
