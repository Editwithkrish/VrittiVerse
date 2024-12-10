import React from 'react';
import { Link } from 'react-scroll';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavButton({ to, children, className = '' }: NavButtonProps) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      className={`cursor-pointer px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}