import React from "react";
import classNames from "classnames";

import type { Polymorphic } from "@/types/Polymorphic";

import styles from "./Container.module.scss";

export type Props = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

const DEFAULT_ELEMENT = "section";

export const Container = <
  E extends React.ElementType = typeof DEFAULT_ELEMENT,
>({
  id,
  as,
  className,
  children,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      id={id}
      className={classNames(
        styles.container,
        className,
      )}
      {...rest}
    >
      <div className={styles.content}>
        {children}
      </div>
    </Component>
  );
};
