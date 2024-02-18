'use client';

import { Switch } from '@nextui-org/react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import useTheme from '@/hooks/useTheme';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  console.log('theme:', theme);

  return (
    <Switch
      isSelected={theme === 'dark'}
      onChange={toggleTheme}
      size="lg"
      color="success"
      startContent={<BsSunFill />}
      endContent={<FaMoon />}
    />
  );
};

export default ThemeToggle;
