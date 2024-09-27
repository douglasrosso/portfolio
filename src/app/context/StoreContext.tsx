import React, { createContext, useContext, useState, ReactNode } from "react";

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
    color: "#26242e",
    isDark: false,
  };

  const darkTheme = {
    primaryColor: "#ff4d4f",
    background: "#34323d",
    contrast: "#26242e",
    color: "#ffffff",
    isDark: true,
  };

  const [isLightTheme, setIsLightTheme] = useState(true);

  const [theme, setTheme] = useState<ThemeType>(
    isLightTheme ? lightTheme : darkTheme
  );

  const toggleTheme = () => {
    setIsLightTheme((prev) => {
      const newTheme = prev ? darkTheme : lightTheme;
      setTheme(newTheme);
      return !prev;
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

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
