'use client';

import NextLink from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import siteConfig from '@/config/site';

const Logo = () => {
  return (
    <NextLink href="/" className="text-3xl font-bold">
      Hello<span className="text-blue-500">World</span>
    </NextLink>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-5">
      <nav className="w-full relative flex items-center gap-4">
        <Logo />
        {siteConfig.navItems.map((navItem) => {
          return (
            <NextLink key={navItem.href} href={navItem.href}>
              {navItem.label}
            </NextLink>
          );
        })}
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
