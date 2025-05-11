
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize theme from localStorage if available, otherwise use system preference
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
      
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for components to consume the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
