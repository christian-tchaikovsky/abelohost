import Link from "next/link";
import Image from "next/image";

import { Flex } from "@/layouts/Flex/Flex";
import { ROUTES } from "@/constants/routes";
import { Anchor } from "@/components/Anchor/Anchor";
import { Container } from "@/layouts/Container/Container";

import { User } from "./_components/User/User";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Container
      as="header"
      className={styles.container}
    >
      <Flex
        align="between"
        className={styles.header}
      >
        <Anchor
          as={Link}
          href={ROUTES.home.path}
          className={styles.logo}
        >
          <Image
            priority
            width={296}
            height={80}
            quality={100}
            alt="Logo"
            src="/images/logo.png"
            className={styles.logo}
          />
        </Anchor>
        <User />
      </Flex>
    </Container>
  );
};
