import type { HTMLInputTypeAttribute } from "react";
import { useState } from "react";
import classNames from "classnames";

import { Icon } from "@/components/Icons/Icon";
import { Input } from "@/components/Input/Input";

import type React from "react";
import type { IconKeys } from "@/components/Icons/Icon";
import type { WithErrorProps } from "@/hoc/withError/withError";

import styles from "./InputPassword.module.scss";

type Props
  = WithErrorProps
    & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
      ref?: React.Ref<HTMLInputElement>;
    };

const BasePasswordField = ({
  className,
  ...rest
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const icon: IconKeys = isVisible ? "ViewOff" : "View";
  const type: HTMLInputTypeAttribute = isVisible ? "text" : "password";

  return (
    <div className={styles.wrapper}>
      <input
        {...rest}
        type={type}
        className={classNames(styles.input, className)}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        <Icon icon={icon} />
      </button>
    </div>
  );
};

export const PasswordField = (props: Props) => {
  return (
    <Input
      as={BasePasswordField}
      {...props}
    />
  );
};
