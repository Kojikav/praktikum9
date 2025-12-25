'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? 'font-bold text-blue-400'
      : 'text-gray-600 hover:text-blue-500';

  return (
    <nav className="p-4 bg-white shadow-md flex gap-6">
      <Link href="/" className={linkClass('/')}>
        Home
      </Link>
      <Link href="/blog" className={linkClass('/blog')}>
        Blog
      </Link>
      <Link href="/about" className={linkClass('/about')}>
        About
      </Link>
    </nav>
  );
}