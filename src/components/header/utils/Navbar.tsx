import Link from 'next/link';
import React from 'react';

interface NavbarInterface {
  id: number;
  title: string;
  href: string;
}
const NavbarLinks: NavbarInterface[] = [
  { id: 1, title: 'Home', href: '/home' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Blog', href: '/blog' },
  { id: 4, title: 'Contact', href: '/contact' },
  { id: 5, title: 'Resources', href: '/resources' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {NavbarLinks?.map((data: NavbarInterface) => (
        <Link
          key={data?.id}
          href={data?.href ?? ''}
          className="link"
        >
          {data?.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
