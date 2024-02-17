'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-5">
      <nav className="w-full relative flex items-center">
        <Link href="/" className="font-bold text-3xl">
          Hello<span className="text-blue-500">World</span>
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
