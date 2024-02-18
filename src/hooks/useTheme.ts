import { useEffect, useState, useLayoutEffect } from 'react';
import { type Theme } from '@/types/globals';
import { setCookie, getCookie } from 'cookies-next';

const useTheme: () => [string, () => void] = () => {
  const [theme, setTheme] = useState<Theme>('light');

  // This effect runs once on mount and reads the theme from cookies
  useEffect(() => {
    const storedTheme = (getCookie('theme') as Theme) || 'light';
    setTheme(storedTheme);
  }, []);

  // Apply the theme class to the document element
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCookie('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return [theme, toggleTheme];
};

export default useTheme;
