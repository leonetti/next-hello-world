'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <nav className="w-full relative flex items-center px-4 py-5">
        <Link href="/" className="text-small">
          Contact Us
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
