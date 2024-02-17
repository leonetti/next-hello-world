import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Hello<span className="text-blue-500">World</span>
      </Link>
    </nav>
  );
}
