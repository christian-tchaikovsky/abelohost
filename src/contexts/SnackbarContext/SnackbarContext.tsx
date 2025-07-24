"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid_v4 } from "uuid";

import { useMounted } from "@/hooks/useMounted/useMounted";
import { useEventCallback } from "@/hooks/useEventCallback/useEventCallback";

import { SnackbarLayout } from "./_components/SnackbarLayout/SnackbarLayout";

import type { IContext, Options, Props, SnackbarType } from "./types";

export const Context = createContext<IContext | undefined>(undefined);

export const useSnackbarContext = (): IContext => {
  const context = useContext(Context);

  if (context) return context;

  throw new Error("Context must be used within Provider!");
};

export const SnackbarContextProvider: React.FC<Props> = ({ children }) => {
  const mounted = useMounted();
  const [snackbars, setSnackbars] = useState<SnackbarType[]>([]);

  const removeSnackbar = useEventCallback((id: string) => {
    setSnackbars((prevNotifications) => {
      return prevNotifications.filter((notification) => notification.id !== id);
    });
  });

  const addSnackbar = useEventCallback((message: string, options: Options = {}) => {
    const { type } = options;

    const id = uuid_v4();
    const onExited = () => removeSnackbar(id);

    const state: SnackbarType = { id, message, type, onExited };

    setSnackbars((previous) => [...previous, state]);
  });

  const value: IContext = useMemo(() => ({
    addSnackbar,
    removeSnackbar,
  }), [
    addSnackbar,
    removeSnackbar,
  ]);

  return (
    <Context.Provider value={value}>
      {children}
      {mounted && ReactDOM.createPortal(
        <SnackbarLayout snackbars={snackbars} />,
        document.body,
      )}
    </Context.Provider>
  );
};
