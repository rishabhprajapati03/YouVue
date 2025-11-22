import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const setDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => useContext(ThemeContext);
