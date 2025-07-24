import type React from "react";

type Props<T extends Promise<any>> = {
  promise: T;
  children: (value: Awaited<T>) => React.JSX.Element;
};

export async function Await<
  T extends Promise<any>,
>({
  promise,
  children,
}: Props<T>) {
  const data = await promise;
  return children(data);
}
