import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styling";


export const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );
  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  // Use this later for auto adjust color scheme depending on system preferences

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {  
    // console.log("dark")     
  }


  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const value = { themeMode, toggleTheme };
  const costumTheme = theme[themeMode];

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;