import type React from "react";

export type RemoveSnackbarHandler = (id: string) => void;

export type AddSnackbarHandler = (message: string, options?: Options) => void;

export type Options = {
  type?: "info" | "success" | "danger" | "warning";
};

export type SnackbarType = Options & {
  id: string;
  message: string;
  onExited: VoidFunction;
};

export type IContext = {
  addSnackbar: AddSnackbarHandler;
  removeSnackbar: RemoveSnackbarHandler;
};

export type Props = {
  children: React.ReactNode;
};
