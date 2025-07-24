import classNames from "classnames";

import type React from "react";

import styles from "./Button.module.scss";

export type Color
  = | "primary"
    | "secondary"
    | "danger";

type Props
  = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: Color;
  };

export const Button = ({
  color = "primary",
  children,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
