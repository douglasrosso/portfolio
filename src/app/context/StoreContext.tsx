"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface StoreContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  changeTheme: (value: string) => void;
}

export interface ThemeType {
  primaryColor: string;
  background: string;
  contrast: string;
  color: string;
  isDark: boolean;
}

const AppContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const lightTheme = {
    primaryColor: "#1890ff",
    background: "#ffffff",
    contrast: "#d8d8d8",
    color: "#191919",
    isDark: false,
  };

  const darkTheme = {
    primaryColor: "#ff4d4f",
    background: "#363636",
    contrast: "#191919",
    color: "#ffffff",
    isDark: true,
  };

  const getInitialTheme = (): ThemeType => {
    const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    return lightTheme;
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    Cookies.set("theme", JSON.stringify(theme), { expires: 365 });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.isDark ? lightTheme : darkTheme;
      return newTheme;
    });
  };

  const changeTheme = (color: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      color: color,
    }));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useStore deve ser usado dentro de um StoreProvider");
  }
  return context;
};
