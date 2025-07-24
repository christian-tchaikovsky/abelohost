import classNames from "classnames";

import type React from "react";
import type { Polymorphic } from "@/types/Polymorphic";

import styles from "./Anchor.module.scss";

type Elements = "a" | "button";

const DEFAULT_ELEMENT = "a";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Anchor = <
  E extends React.ElementType<any, Elements> = typeof DEFAULT_ELEMENT,
>({
  as,
  children,
  className,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={classNames(styles.anchor, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
