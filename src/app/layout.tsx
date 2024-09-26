"use client";

import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";
import { AppProvider, useAppContext } from "@/app/context/AppContext";
import Loading from "./components/Loading";
export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html>
      <Head>
        <title>My App</title>
      </Head>
      <AppProvider>
        {!isMounted ? <Loading /> : <BodyContent>{children}</BodyContent>}
      </AppProvider>
    </html>
  );
}

function BodyContent({ children }: { children: ReactNode }) {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <body style={{ backgroundColor: theme.background, color: theme.color }}>
        {children}
      </body>
    </ThemeProvider>
  );
}
