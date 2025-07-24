"use client";

import type React from "react";

import { Flex } from "@/layouts/Flex/Flex";
import { Container } from "@/layouts/Container/Container";
import { Typography } from "@/components/Typography/Typography";
import { useUserContext } from "@/contexts/UserContext/UserContext";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const user = useUserContext();

  const year = new Date()
    .getUTCFullYear() // Avoid hydration warning
    .toString();

  return (
    <Container
      as="footer"
      className={styles.container}
    >
      <Flex
        align="between"
        className={styles.footer}
      >
        <Typography color="secondary">
          ©
          {" "}
          <time dateTime={year}>{year}</time>
          {" "}
          AbeloHost. All rights reserved.
        </Typography>
        {user.isAuthenticated && (
          <Typography
            as="span"
            color="secondary"
          >
            {`Logged as ${user.data.email}`}
          </Typography>
        )}
      </Flex>
    </Container>
  );
};
