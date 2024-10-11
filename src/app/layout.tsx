"use client";

import GlobalStyle from "@/app/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { StoreProvider, useStore } from "@/app/context/StoreContext";
import { App, Layout } from "antd";
import Loading from "./components/Loading";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Douglas Rosso | Software Engineer</title>
      </Head>
      <body>
        <StoreProvider>
          <Content isMounted={isMounted}>{children}</Content>
        </StoreProvider>
      </body>
    </html>
  );
}

function Content({
  children,
  isMounted,
}: {
  children: React.ReactNode;
  isMounted: boolean;
}) {
  const { theme } = useStore();

  if (!isMounted) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App>
        <Layout
          style={{
            backgroundColor: theme.contrast,
            color: theme.color,
            height: "100vh",
          }}
        >
          {children}
        </Layout>
      </App>
    </ThemeProvider>
  );
}
