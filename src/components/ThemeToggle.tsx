'use client';

import { FormEvent, useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { toggle, nextTheme } = useContext(ThemeContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggle();
    fetch('/theme', {
      method: 'POST',
      body: JSON.stringify({ theme: nextTheme }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" value={nextTheme} name="next-theme" />
      <button>toggle theme</button>
    </form>
    // <Switch
    //   // isSelected={theme === 'dark' && isClient} // Use isClient here to control the selected state - isMounted
    //   isSelected
    //   onChange={toggleTheme}
    //   size="lg"
    //   color="success"
    //   startContent={<BsSunFill />}
    //   endContent={<FaMoon />}
    //   disabled={!isClient}
    //   className={!isClient ? 'cursor-not-allowed' : ''}
    // />
  );
};

export default ThemeToggle;
