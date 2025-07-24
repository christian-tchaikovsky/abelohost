import React from "react";
import { AnimatePresence } from "framer-motion";

import { Container } from "@/layouts/Container/Container";
import { Snackbar } from "@/contexts/SnackbarContext/_components/Snackbar/Snackbar";

import type { SnackbarType } from "@/contexts/SnackbarContext/types";

import styles from "./SnackbarLayout.module.scss";

type Props = {
  snackbars: SnackbarType[];
};

export const SnackbarLayout = ({ snackbars }: Props) => {
  return (
    <Container
      as="div"
      className={styles.layout}
    >
      <AnimatePresence mode="popLayout">
        {snackbars.map((snackbar) => (
          <Snackbar
            key={snackbar.id}
            {...snackbar}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
};
