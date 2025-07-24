import classNames from "classnames";

import { withError } from "@/hoc/withError/withError";

import type React from "react";
import type { Polymorphic } from "@/types/Polymorphic";
import type { WithErrorProps } from "@/hoc/withError/withError";

import styles from "./Input.module.scss";

type Props
  = WithErrorProps
    & React.InputHTMLAttributes<HTMLInputElement> & {
      ref?: React.Ref<HTMLInputElement>;
    };

const DEFAULT_ELEMENT = "input";

export const Input = withError(<
  E extends React.ElementType = typeof DEFAULT_ELEMENT,
>({
  ref,
  as,
  type = "text",
  className,
  ...rest
}: Polymorphic<E, Props>) => {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      type={type}
      className={classNames(styles.input, className)}
      {...rest}
    />
  );
}, {
  className: styles.error,
});
