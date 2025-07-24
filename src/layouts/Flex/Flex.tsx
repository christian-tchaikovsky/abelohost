import classNames from "classnames";

import type React from "react";
import type { Polymorphic } from "@/types/Polymorphic";

import styles from "./Flex.module.scss";

type AlignPosition = "start" | "end" | "center";

type Space
  = | "l"
    | "m"
    | "s";

type Props = {
  grow?: boolean;
  space?: Space;
  align?:
    | "center"
    | "between"
    | `align-${AlignPosition}`
    | `justify-${AlignPosition}`;
  direction?: "row" | "column";
  className?: string;
  children: React.ReactNode;
};

const DEFAULT_ELEMENT = "div";

export const Flex = <
  E extends React.ElementType = typeof DEFAULT_ELEMENT,
>({
  as,
  grow,
  space = "m",
  align,
  direction = "row",
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(
        styles.flex,
        styles[direction],
        styles[`space-${space}`],
        align && styles[align],
        {
          [styles.grow]: grow,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
