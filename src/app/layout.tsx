"use client";

import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { StoreProvider, useAppContext } from "@/app/context/StoreContext";
import Loading from "./components/Loading";
import { App } from "antd";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html>
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
      <div style={{ backgroundColor: theme.contrast, color: theme.color, minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeProvider>
  );
}
