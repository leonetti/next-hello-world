import { createContext } from 'react';
import { type Theme } from '@/types/globals';

export const isTheme = (theme: unknown): theme is Theme =>
  theme === 'auto' || theme === 'light' || theme === 'dark';

type ThemeContextProps = {
  currentTheme: Theme;
  toggle: () => void;
  nextTheme: Theme;
};

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'auto',
  toggle: () => {},
  nextTheme: 'auto',
});
