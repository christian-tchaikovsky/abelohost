import type { AxiosPromise } from "axios";
import type { Product } from "@/api/_types/Products";
import type { Pagination } from "@/api/_types/Pagination";

import { instance } from "./instance";

export const PRODUCTS = {
  getAllProducts(): AxiosPromise<Pagination<"products", Product>> {
    return instance({
      method: "GET",
      url: "/products",
      params: {
        limit: 12,
      },
    });
  },
};
