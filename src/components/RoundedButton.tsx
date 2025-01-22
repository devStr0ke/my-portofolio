'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import gsap from 'gsap';
import Magnetic from './Magnetic';

interface RoundedButtonProps {
  href: string;
  icon?: IconType;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  color?: 'violet' | 'indigo' | 'neutral' | 'light';
  superscript?: string | number;
  size?: 'default' | 'large' | 'small';
}

export const RoundedButton = ({ 
  href, 
  icon: Icon, 
  children, 
  className = '',
  backgroundColor = '#4f46e5',
  color = 'light',
  superscript,
  size = 'default'
}: RoundedButtonProps) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
  }, []);

  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  }

  const colorClasses = {
    violet: 'border-violet-300 text-violet-300',
    indigo: 'border-indigo-300 text-indigo-300',
    neutral: 'border-neutral-950 text-neutral-950 hover:border-neutral-950 hover:text-indigo-600',
    light: 'border-neutral-700 text-neutral-500 hover:text-neutral-950 font-bold',
  };

  const sizeClasses = {
    small: 'w-[180px] py-3',
    default: 'w-[220px] py-7',
    large: 'w-[260px] py-5',
  };

  return (
    <Magnetic>
      <Link 
        href={href}
        className={`
          absolute flex items-center justify-center gap-2 
          overflow-hidden rounded-[3em] border border-neutral-400
          px-6 cursor-pointer
          ${sizeClasses[size]}
          ${colorClasses[color]}
          ${className}
        `}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
      >
        {Icon && <Icon className="relative z-10 transition-colors duration-400" />}
        <span className="relative z-10 transition-colors duration-400 whitespace-nowrap">
          {children}
        </span>
        {superscript && (
          <span className="absolute right-16 top-5 text-sm font-bold hover:text-neutral-950 z-10 transition-colors duration-400">
            {superscript}
          </span>
        )}
        <div 
          ref={circle}
          className="absolute h-[150%] w-full rounded-[50%] top-full"
          style={{ backgroundColor }}
        />
      </Link>
    </Magnetic>
  );
};