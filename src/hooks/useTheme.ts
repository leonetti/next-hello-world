import { useEffect, useState } from 'react';
import { Theme } from '@/types/globals';

const useTheme: () => [string, () => void] = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return [theme, toggleTheme];
};

export default useTheme;
