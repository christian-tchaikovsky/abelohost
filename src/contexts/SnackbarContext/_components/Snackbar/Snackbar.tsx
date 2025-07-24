import React, { useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import { Typography } from "@/components/Typography/Typography";

import type { SnackbarType } from "@/contexts/SnackbarContext/types";

import styles from "./Snackbar.module.scss";

type Props
  = SnackbarType & {
    ref?: React.Ref<HTMLDivElement>;
  };

const TIMER = 5000;

export const Snackbar = ({ ref, id, message, type = "info", onExited }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onExited, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onExited]);

  return (
    <motion.div
      key={id}
      layout
      ref={ref}
      exit={{ x: 440, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 440, opacity: 0 }}
      transition={{ type: "spring" }}
      onClick={onExited}
      className={classNames(
        styles.snackbar,
        styles[type],
      )}
    >
      <Typography
        color="secondary"
        className={styles.text}
      >
        {message}
      </Typography>
    </motion.div>
  );
};
