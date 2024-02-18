'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@nextui-org/react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import useTheme from '@/hooks/useTheme';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();
  console.log('theme:', theme);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // if (!isClient) {
  //   return <Switch disabled className="cursor-not-allowed" size="lg" />;
  // }

  return (
    // <Switch
    //   isSelected={theme === 'dark'}
    //   onChange={toggleTheme}
    //   size="lg"
    //   color="secondary"
    //   startContent={<BsSunFill />}
    //   endContent={<FaMoon />}
    // />
    <Switch
      isSelected={theme === 'dark' && isClient} // Use isClient here to control the selected state
      onChange={toggleTheme}
      size="lg"
      color="success"
      startContent={<BsSunFill />}
      endContent={<FaMoon />}
      disabled={!isClient} // Disable the switch until isClient is true
      className={!isClient ? 'cursor-not-allowed' : ''}
    />
  );
};

export default ThemeToggle;
