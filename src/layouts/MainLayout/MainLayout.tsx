import type React from "react";

import { Main } from "./_components/Main/Main";
import { Header } from "./_components/Header/Header";
import { Footer } from "./_components/Footer/Footer";

import styles from "./MainLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};
