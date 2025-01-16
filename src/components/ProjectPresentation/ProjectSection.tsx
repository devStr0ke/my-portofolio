'use client';
import React from 'react';
import Image from 'next/image';

interface ProjectSectionProps {
  title: string;
  mainImage: string;
  macImage: string;
}

export default function ProjectSection({ title, mainImage, macImage }: ProjectSectionProps) {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/9] mb-32">
        <Image 
          src={mainImage}
          alt={`${title} main preview`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Mac Image */}
      <div className="relative w-full aspect-[16/9] mb-32">
        <Image 
          src={macImage}
          alt={`${title} mac preview`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}