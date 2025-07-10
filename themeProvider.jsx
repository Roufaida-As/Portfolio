import React, { createContext, useReducer, useContext } from "react";

// Create theme context
export const ThemeContext = createContext();

// Initial state
const initialState = { darkMode: false };

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    case "TOGGLE_THEME":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Theme Provider Component
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setLightMode = () => {
    dispatch({ type: "LIGHTMODE" });
  };

  const setDarkMode = () => {
    dispatch({ type: "DARKMODE" });
  };

  const value = {
    state,
    dispatch,
    darkMode: state.darkMode,
    toggleTheme,
    setLightMode,
    setDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}