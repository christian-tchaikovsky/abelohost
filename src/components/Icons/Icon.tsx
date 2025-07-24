import classNames from "classnames";
import * as icons from ".";

import type React from "react";

import styles from "./Icon.module.scss";

export type IconKeys = keyof typeof icons;

type Size
  = | "l"
    | "m"
    | "s";

type Color
  = | "primary"
    | "secondary"
    | "danger";

type Props = {
  icon: IconKeys;
  size?: Size;
  color?: Color;
  className?: string;
};

export const Icon = ({
  icon,
  size = "m",
  color = "primary",
  className,
}: Props) => {
  const Component = icons[icon];

  return (
    <Component
      className={classNames(
        styles.icon,
        styles[size],
        styles[`color-${color}`],
        className)}
    />
  );
};
