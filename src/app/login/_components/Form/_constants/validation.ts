import * as Yup from "yup";

import type { ObjectSchema } from "yup";
import type { AuthData } from "@/api/_types/Auth";

type Data = Omit<AuthData, "expiresInMins">;

export const VALIDATION_SCHEMA: ObjectSchema<Data> = Yup.object({
  username: Yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: Yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Password is required"),
});
