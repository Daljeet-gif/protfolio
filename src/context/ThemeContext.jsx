import React, { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext(); // Export ThemeContext

// Create a Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; // Default export for the provider
