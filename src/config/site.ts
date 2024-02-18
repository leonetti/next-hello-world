export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'Hello World',
  name: 'HelloWorld',
  description: 'A template built using NextJS, NextUI, Tailwind, and Vercel',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
  ],
  links: {
    url: 'localhost:3000',
    creator: 'https://www.alexleonetti.com',
  },
  metadata: {
    keywords: 'nextjs, nextui, tailwind, vercel',
    type: 'website' as const,
    generator: 'Next.js',
    publisher: 'Vercel',
    category: 'Website Template',
    referrer: 'same-origin' as const,
    author: {
      name: 'Alexander Leonetti',
      url: '',
    },
    twitter: {
      creator: '@alex__leonetti',
    },
    manifestUrl: '/manifest.webmanifest',
  },
};

export default siteConfig;
