'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface RoundedButtonProps {
  href: string;
  icon?: IconType;
  children: ReactNode;
  className?: string;
  color?: 'violet' | 'indigo' | 'neutral' | 'light';
  superscript?: string | number;
}

export const RoundedButton = ({ 
  href, 
  icon: Icon, 
  children, 
  className = '',
  color = 'violet',
  superscript
}: RoundedButtonProps) => {
  const colorClasses = {
    violet: 'border-violet-300 text-violet-300 before:bg-violet-300',
    indigo: 'border-indigo-300 text-indigo-300 before:bg-indigo-300',
    neutral: 'border-neutral-950 text-neutral-950 before:bg-neutral-950',
    light: 'border-neutral-500 text-neutral-500 before:bg-indigo-600 hover:border-neutral-950 hover:text-neutral-950',
  };

  return (
    <Link 
      href={href}
      className={`
        absolute z-2 flex items-center gap-2 overflow-hidden rounded-full border-[1px] 
        px-12 py-6 font-semibold transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-indigo-600
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
        
        ${colorClasses[color]}
        ${className}
      `}
    >
      {Icon && <Icon />}
      <span>{children}</span>
      {superscript && (
        <span className="absolute right-9 top-5 text-sm font-bold">{superscript}</span>
      )}
    </Link>
  );
};