"use client";

import React, { createContext, useContext, useRef } from "react";
import { createStore, useStore } from "zustand";

import type { User as _User } from "@/api/_types/User";

type UserState
  = | { isAuthenticated: true; data: _User }
    | { isAuthenticated: false; data: null };

type Props = Pick<UserState, "data">;

type State
  = UserState & {
    setData: (data: _User | null) => void;
  };

type ProviderProps
  = Props & {
    children: React.ReactNode;
  };

type UserStore = ReturnType<typeof createUserStore>;

export const createUserStore = ({ data }: Props) => {
  return createStore<State>()((set) => ({
    data,
    setData: (data) => {
      set((state) => ({
        ...state,
        data: data,
        isAuthenticated: !!data,
      } as State));
    },
    isAuthenticated: !!data,
  } as State));
};

export const UserContext = createContext<UserStore | null>(null);

export function useUserContext(): State;
export function useUserContext<T>(selector: (state: State) => T): T;
export function useUserContext<T>(selector?: (state: State) => T): T | State {
  const store = useContext(UserContext);

  if (!store) throw new Error("Context must be used within Provider!");

  return useStore(store, selector ?? ((state) => state as T));
}

export const UserProvider = ({
  data,
  children,
}: ProviderProps) => {
  const store = useRef<UserStore | null>(null);

  if (!store.current) {
    store.current = createUserStore({ data });
  }

  return (
    <UserContext.Provider value={store.current}>
      {children}
    </UserContext.Provider>
  );
};
