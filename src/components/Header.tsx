'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  Button,
} from '@nextui-org/react';
import siteConfig from '@/config/site';
import clsx from 'clsx';

const SiteLogo = () => {
  return (
    <NextLink href="/" className="text-3xl font-bold">
      Hello<span className="text-blue-500">World</span>
    </NextLink>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <Navbar disableAnimation onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <SiteLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem
              key={`${item.href}-${index}`}
              isActive={pathname === item.href}
            >
              <Link
                color={pathname === item.href ? 'primary' : 'foreground'}
                href={item.href}
                className={clsx({
                  'px-[1px]': pathname !== item.href,
                })}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="hidden xs:flex gap-4" justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
