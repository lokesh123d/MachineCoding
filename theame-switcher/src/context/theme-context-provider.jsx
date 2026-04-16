import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext("dark");

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setisDark] = useState(true);

  const toggleTheme = () => {
    setisDark((prev) => !prev);
  };

  let theme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
