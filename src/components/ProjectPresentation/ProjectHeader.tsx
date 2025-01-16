'use client';
import React from 'react';

interface ProjectHeaderProps {
  title: string;
  role: string;
  credits: {
    design?: string[];
    photography?: string[];
  };
  location: string;
  year: string;
}

export default function ProjectHeader({ title, role, credits, location, year }: ProjectHeaderProps) {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto">
      {/* Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
        {title}
      </h1>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Role/Services Column */}
        <div>
          <h3 className="text-xs sm:text-sm text-neutral-500 mb-4">ROLE / SERVICES</h3>
          <div className="border-t border-zinc-800 pt-2 md:pt-8">
            <p className="text-md sm:text-lg text-neutral-500">{role}</p>
          </div>
        </div>

        {/* Credits Column */}
        <div>
          <h3 className="text-xs sm:text-sm text-neutral-500 mb-4">CREDITS</h3>
          <div className="border-t-[0.25px] border-zinc-800 pt-2 md:pt-8">
            <div className="space-y-2">
              {credits.design && credits.design.map((designer, index) => (
                <p key={index} className="text-md sm:text-lg text-neutral-500">Design: {designer}</p>
              ))}
              {credits.photography && credits.photography.map((photographer, index) => (
                <p key={index} className="text-md sm:text-lg text-neutral-500">Photography: {photographer}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Year Column */}
        <div>
          <h3 className="text-xs sm:text-sm text-neutral-500 mb-4">LOCATION & YEAR</h3>
          <div className="border-t-[0.25px] border-zinc-800 pt-2 md:pt-8">
            <p className="text-md sm:text-lg text-neutral-500">{location} © {year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}