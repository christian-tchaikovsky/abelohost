import classNames from "classnames";

import type React from "react";
import type { Polymorphic } from "@/types/Polymorphic";

import styles from "./Typography.module.scss";

const DEFAULT_ELEMENT = "p";

export type Size
  = | "l"
    | "m"
    | "s";

export type Colors
  = | "primary"
    | "secondary"
    | "danger";

type Props = {
  size?: Size;
  color?: Colors;
  className?: string;
  children?: React.ReactNode;
};

export const Typography = <
  E extends React.ElementType = typeof DEFAULT_ELEMENT,
>({
  as,
  size = "m",
  color = "primary",
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.typography,
        styles[`size-${size}`],
        styles[`color-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
