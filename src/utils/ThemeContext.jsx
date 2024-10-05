import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// The default theme setting for new users or when localStorage is unavailable.
const DEFAULT_THEME = false; // Set to `true` for default dark mode.

const getInitialTheme = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('isDarkMode');
      return savedTheme !== null ? JSON.parse(savedTheme) : DEFAULT_THEME;
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error accessing localStorage', error);
    }
    // Consider implementing a production-ready error logging service here
  }
  return DEFAULT_THEME;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);