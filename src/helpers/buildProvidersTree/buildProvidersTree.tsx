import React from "react";

type ChildrenType = {
  children: React.ReactNode;
};

type ProvidersType<E extends readonly React.ElementType<ChildrenType>[]> = {
  [key in keyof E]: keyof Omit<React.ComponentProps<E[key]>, "children"> extends never
    ? readonly [E[key]]
    : readonly [E[key], Omit<React.ComponentProps<E[key]>, "children">]
};

export const buildProvidersTree = <
  E extends readonly React.ElementType<ChildrenType>[],
>(providers: ProvidersType<E>) => {
  const InitialComponent = ({ children }: ChildrenType) => <>{children}</>;

  return providers.reduce((AccumulatedProviders, [Provider, props = {}]) => {
    // eslint-disable-next-line react/display-name
    return ({ children }) => (
      <AccumulatedProviders>
        <Provider {...props}>
          {children}
        </Provider>
      </AccumulatedProviders>
    );
  }, InitialComponent);
};
