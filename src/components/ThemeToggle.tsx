'use client';

import { useState, useEffect } from 'react';
import {
  // Switch,
  Button,
} from '@nextui-org/react';
// import { BsSunFill, BsMoonFill } from 'react-icons/bs';
// import { RiSettings5Fill } from 'react-icons/ri';
import { Theme, type ThemeProps } from '@/types/globals';
import { ThemeToggleIcon } from '@/components/ThemeToggleIcon';

const deriveNextTheme = (currentTheme: ThemeProps) => {
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
};

export const isTheme = (value: unknown): value is Theme =>
  value === Theme.auto || value === Theme.light || value === Theme.dark;

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(Theme.auto);

  useEffect(() => {
    const dataTheme = document.documentElement.dataset.theme;
    setCurrentTheme(isTheme(dataTheme) ? dataTheme : Theme.auto);
  }, []);

  useEffect(() => {
    if (currentTheme === Theme.auto) {
      return;
    }
    document.documentElement.dataset.theme = currentTheme;
  }, [currentTheme]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextTheme = deriveNextTheme(currentTheme);
    console.log(nextTheme);
    setCurrentTheme(nextTheme);

    fetch('/theme', {
      method: 'POST',
      body: JSON.stringify({ theme: nextTheme }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  const handleChange = () => {
    const nextTheme = deriveNextTheme(currentTheme);
    setCurrentTheme(nextTheme);

    fetch('/theme', {
      method: 'POST',
      body: JSON.stringify({ theme: nextTheme }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="next-theme" />
      <Button
        color="primary"
        variant="bordered"
        className="hover:bg-transparent border-transparent min-w-0"
        disableRipple
        disableAnimation
        type="submit"
      >
        <ThemeToggleIcon />
      </Button>
      {/* <button type="submit" className="text-primary-100">
        <ThemeToggleIcon />
      </button> */}
    </form>
    // <Switch
    //   isSelected={currentTheme === 'dark'}
    //   onChange={handleChange}
    //   size="lg"
    //   // color="success"
    //   startContent={<BsSunFill />}
    //   endContent={<BsMoonFill />}
    //   // disabled={!isClient}
    //   // className={!isClient ? 'cursor-not-allowed' : ''}
    // />
  );
};

export default ThemeToggle;
