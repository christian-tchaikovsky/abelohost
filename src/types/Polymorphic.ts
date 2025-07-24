import type React from "react";

export type BaseProps<E extends React.ElementType> = {
  as?: E;
};

export type Polymorphic<
  E extends React.ElementType,
  T extends Record<string, any> = Record<string, never>,
> = T
  & BaseProps<E>
  & Omit<React.ComponentPropsWithoutRef<E>, keyof T>;
