"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AUTH } from "@/api/auth";
import { ROUTES } from "@/constants/routes";

import { Flex } from "@/layouts/Flex/Flex";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { PasswordField } from "@/components/InputPassword/PasswordField";
import { useUserContext } from "@/contexts/UserContext/UserContext";
import { useSnackbarContext } from "@/contexts/SnackbarContext/SnackbarContext";

import type { FetchingStatus } from "@/types/FetchingStatus";
import type { Color as ButtonColors } from "@/components/Button/Button";

import { VALIDATION_SCHEMA } from "./_constants/validation";

import styles from "./Form.module.scss";

import { isAxiosError } from "axios";

export const Form = () => {
  const router = useRouter();
  const { addSnackbar } = useSnackbarContext();
  const setUserData = useUserContext((state) => state.setData);
  const [status, setStatus] = useState<FetchingStatus>("idle");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const isButtonDisabled = status === "loading";
  const color: ButtonColors = status === "error"
    ? "danger"
    : "primary";

  const handleSubmitForm = handleSubmit(async (data) => {
    setStatus("loading");

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { accessToken, refreshToken, ...rest } = await AUTH
        .login(data)
        .then((res) => {
          return res.data;
        });

      setUserData(rest);
      setStatus("success");
      addSnackbar("You have successfully logged in", {
        type: "success",
      });

      router.replace(ROUTES.home.path);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.error("Login failed:", error.response.data.message);
      }

      setStatus("error");
      addSnackbar("Login failed. Please check your credentials and try again", {
        type: "danger",
      });
    }
  });

  return (
    <Flex
      as="form"
      direction="column"
      onSubmit={handleSubmitForm}
      className={styles.form}
    >
      <Input
        placeholder="Username"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
      />
      <PasswordField
        placeholder="Password"
        error={errors.password?.message}
        {...register("password")}
      />
      <Button
        type="submit"
        color={color}
        disabled={isButtonDisabled}
      >
        Login
      </Button>
    </Flex>
  );
};
