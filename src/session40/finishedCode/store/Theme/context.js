import React, { useReducer } from "react";
import { themeReducer, initialThemeState } from "./reducer";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
