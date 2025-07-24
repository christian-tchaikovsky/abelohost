import { Flex } from "@/layouts/Flex/Flex";
import { Container } from "@/layouts/Container/Container";
import { Typography } from "@/components/Typography/Typography";

import { Form } from "./_components/Form/Form";

import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <Flex
      as={Container}
      grow
      align="align-center"
      className={styles.container}
    >
      <Typography as="h1">Login</Typography>
      <Form />
    </Flex>
  );
};

export default LoginPage;
