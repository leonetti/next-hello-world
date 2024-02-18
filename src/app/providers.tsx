'use client';

import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeContext } from '@/context/ThemeContext';
import { type Theme } from '@/types/globals';
import { isTheme } from '@/context/ThemeContext';

const deriveNextTheme = (currentTheme: Theme) => {
  if (typeof window !== 'undefined') {
    // Check if window is defined before accessing it
    switch (currentTheme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'light';
      case 'auto':
      default:
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'light'
          : 'dark';
    }
  } else {
    // Fallback logic in case window is not defined
    return 'auto'; // or any other default theme
  }
};

const Providers = ({
  themeCookie,
  children,
}: {
  themeCookie: Theme;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>(
    isTheme(themeCookie) ? themeCookie : 'auto',
  );
  const nextTheme = deriveNextTheme(theme);
  const handleThemeToggle = () => {
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggle: handleThemeToggle,
        nextTheme,
      }}
    >
      <main data-theme={theme}>
        <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      </main>
    </ThemeContext.Provider>
  );
};

export default Providers;
