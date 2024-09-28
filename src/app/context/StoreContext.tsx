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

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
