'use client';

import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeContext } from '@/context/ThemeContext';
import { Theme, type ThemeProps } from '@/types/globals';
import { isTheme } from '@/context/ThemeContext';

const deriveNextTheme = (currentTheme: Theme) => {
  if (typeof window !== 'undefined') {
    // Check if window is defined before accessing it
    switch (currentTheme) {
      case Theme.light:
        return Theme.dark;
      case Theme.dark:
        return Theme.light;
      case Theme.auto:
      default:
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? Theme.light
          : Theme.dark;
    }
  } else {
    // Fallback logic in case window is not defined
    return Theme.auto; // or any other default theme
  }
};

const Providers = ({
  themeCookie,
  children,
}: {
  themeCookie: ThemeProps;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [theme, setTheme] = useState(
    isTheme(themeCookie) ? themeCookie : Theme.auto,
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
