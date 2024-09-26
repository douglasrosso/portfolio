import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

interface ThemeType {
    primaryColor: string;
    background: string;
    color: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
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

    const [isLightTheme, setIsLightTheme] = useState(true);

    const toggleTheme = () => {
        setIsLightTheme((prev) => !prev);
    };

    const theme = isLightTheme ? lightTheme : darkTheme;

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
    