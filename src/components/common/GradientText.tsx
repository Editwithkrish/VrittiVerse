import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
}