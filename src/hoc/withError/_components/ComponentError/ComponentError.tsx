import React from "react";

import { Flex } from "@/layouts/Flex/Flex";
import { Typography } from "@/components/Typography/Typography";

import type { WithErrorProps } from "@/hoc/withError/withError";

type Props
  = WithErrorProps & {
    children: React.ReactNode;
    className?: string;
  };

export const ComponentError = ({ children, error = null, className }: Props) => {
  return (
    <Flex
      space="s"
      direction="column"
    >
      {children}
      {error && (
        <Typography
          size="s"
          as="span"
          color="danger"
          aria-live="assertive"
          className={className}
        >
          {error}
        </Typography>
      )}
    </Flex>
  );
};
