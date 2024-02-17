'use client';

import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // adds/removes dark class to HTML root element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Switch
      isSelected={darkMode}
      onClick={() => setDarkMode((prevState) => !prevState)}
      size="lg"
      color="success"
      startContent={<BsSunFill />}
      endContent={<FaMoon />}
    />
  );
};

export default ThemeToggle;
