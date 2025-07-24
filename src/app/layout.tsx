import type React from "react";
import type { Metadata } from "next";

import { AUTH } from "@/api/auth";

import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { UserProvider } from "@/contexts/UserContext/UserContext";
import { buildProvidersTree } from "@/helpers/buildProvidersTree/buildProvidersTree";
import { SnackbarContextProvider } from "@/contexts/SnackbarContext/SnackbarContext";

import "@/styles/globals.scss";
import "@/styles/variables.scss";

export const metadata: Metadata = {
  title: "AbeloHost",
  description:
    "Secure offshore hosting guaranteed with total privacy, data security, and wide range of accepted content. "
    + "Offshore web hosting finally done right.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await AUTH.getUserInfo();

  const ProvidersTree = buildProvidersTree([
    [UserProvider, { data: user }],
    [SnackbarContextProvider],
  ] as const);

  return (
    <html lang="en">
      <body>
        <ProvidersTree>
          <MainLayout>
            {children}
          </MainLayout>
        </ProvidersTree>
      </body>
    </html>
  );
}
