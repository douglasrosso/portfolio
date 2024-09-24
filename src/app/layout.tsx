"use client";

import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Button } from "antd";

const lightTheme = {
  primaryColor: "#1890ff",
  background: "#ffffff",
  color: "#000000",
};

const darkTheme = {
  primaryColor: "#ff4d4f",
  background: "#000000",
  color: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(lightTheme);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: theme.background, color: theme.color }}>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <ThemeProvider theme={theme}>
            <Button onClick={toggleTheme} style={{ margin: "20px" }}>
              Alternar Tema
            </Button>
            {loading ? <Loading /> : children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
