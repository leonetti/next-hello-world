'use client';

import NextLink from 'next/link';
import ThemeToggle from '@components/ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-5">
      <nav className="w-full relative flex items-center gap-4">
        <NextLink href="/" className="font-bold text-3xl">
          Hello<span className="text-blue-500">World</span>
        </NextLink>
        <NextLink href="/about">About</NextLink>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
