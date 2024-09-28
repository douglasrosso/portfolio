"use client";

import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { StoreProvider, useAppContext } from "@/app/context/StoreContext";
import Loading from "./components/Loading";
import { App, Layout } from "antd";
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
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Douglas Rosso | Software Engineer</title>
      </head>
      <body>
        <App>
          <StoreProvider>
            {!isMounted ? <Loading /> : <Content>{children}</Content>}
          </StoreProvider>
        </App>
      </body>
    </html>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <Layout
        style={{
          backgroundColor: theme.contrast,
          color: theme.color,
          minHeight: "100vh",
        }}
      >
        {children}
      </Layout>
    </ThemeProvider>
  );
}
