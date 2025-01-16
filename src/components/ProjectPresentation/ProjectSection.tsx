'use client';
import React from 'react';
import Image from 'next/image';
import { Spacer } from '@/components/Spacer';
import { GravityButton } from '@/components/GravityButton';
import { FiExternalLink } from 'react-icons/fi';
import Character from '@/components/Character';

interface ProjectSectionProps {
  title: string;
  mainImage: string;
  macImage: string;
  websiteUrl?: string;
  firstDescription?: string;
  secondDescription?: string;
}

export default function ProjectSection({ title, mainImage, macImage, websiteUrl, firstDescription, secondDescription }: ProjectSectionProps) {
  return (
    <>
      <div className="w-full lg:max-w-[85%] mx-auto relative">
        {/* Website Link */}
        {websiteUrl && (
          <div className="absolute -top-12 right-10 sm:right-20 md:right-32 lg:right-32 xl:right-40 2xl:right-56 z-10">
            <GravityButton 
              href={websiteUrl}
              icon={<FiExternalLink className="text-2xl" />}
              label="Visit Live Website"
              size="sm"
              className="bg-neutral-950"
              static={true}
            />
          </div>
        )}

        {/* Main Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image 
            src={mainImage}
            alt={`${title} main preview`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <Spacer mobileSize="xs" size="xs" />
      
      <Character 
        paragraph={firstDescription ? firstDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xs" size="xs" />

      <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto">
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

      <Character 
        paragraph={secondDescription ? secondDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xl" size="xl" />
    </>
  );
}