import React from "react";

import { ComponentError } from "./_components/ComponentError/ComponentError";

type Options = {
  className?: string;
};

type OptionsHandler<P extends WithErrorProps> = (props: P) => Options;

export type WithErrorProps = {
  error?: string | null;
};

export const withError = <
  K extends React.ComponentType<WithErrorProps>,
>(
  WrappedComponent: K,
  options: Options | OptionsHandler<React.ComponentProps<K>> = {},
): K => {
  const ComponentWithError = (props: React.ComponentProps<K>) => {
    const additions = typeof options === "function" ? options(props) : options;

    return (
      <ComponentError
        error={props.error}
        className={additions.className}
      >
        <WrappedComponent {...props as any} />
      </ComponentError>
    );
  };

  const ComponentName = WrappedComponent.displayName ? WrappedComponent.displayName : WrappedComponent.name;

  ComponentWithError.displayName = `ComponentWithError(${ComponentName})`;

  return ComponentWithError as K;
};
