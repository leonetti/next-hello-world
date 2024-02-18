import { createContext } from 'react';
import { type ThemeProps, Theme } from '@/types/globals';

export const isTheme = (theme: unknown): theme is Theme =>
  theme === Theme.auto || theme === Theme.light || theme === Theme.dark;

type ThemeContextProps = {
  currentTheme: ThemeProps;
  toggle: () => void;
  nextTheme: ThemeProps;
};

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: Theme.auto,
  toggle: () => {},
  nextTheme: Theme.auto,
});
