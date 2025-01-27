'use client';
import React from 'react';
import Image from 'next/image';
import { Spacer } from '@/components/Spacer';
import { GravityButton } from '@/components/GravityButton';
import { FiExternalLink } from 'react-icons/fi';
import Character from '@/components/Character';

interface ProjectSectionProps {
  title: string;
  projectName: string; // New prop for project name
  websiteUrl?: string;
  buttonLabel?: string;
  firstDescription?: string;
  secondDescription?: string;
  thirdDescription?: string;
  credits?: {
    name: string;
    linkedIn: string;
    text: string;
  };
}

export default function ProjectSection({ 
  title, 
  projectName, 
  websiteUrl, 
  buttonLabel, 
  firstDescription, 
  secondDescription, 
  thirdDescription, 
  credits 
}: ProjectSectionProps) {
  // Base URL for images
  const baseUrl = `https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/${projectName}`;

  // Construct image URLs
  const mainImage = `${baseUrl}/main.png`;
  const macImage = `${baseUrl}/mac.png`;
  const macImage2 = `${baseUrl}/mac2.png`;
  const mobile1 = `${baseUrl}/mobile1.png`;
  const mobile2 = `${baseUrl}/mobile2.png`;
  const mobile3 = `${baseUrl}/mobile3.png`;

  return (
    <>
      <div className="w-full lg:max-w-[85%] mx-auto relative">
        {/* Website Link */}
        {websiteUrl && (
          <div className="absolute -top-12 right-10 sm:right-20 md:right-32 lg:right-32 xl:right-40 2xl:right-56 z-10">
            <GravityButton 
              href={websiteUrl}
              icon={<FiExternalLink className="text-2xl" />}
              label={buttonLabel ? buttonLabel : "Visit Live Website"}
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

      <Spacer mobileSize="xxs" size="xs" />
      
      <Character 
        paragraph={firstDescription ? firstDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xxs" size="xs" />

      <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto">
        {/* Mac Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image 
            src={macImage}
            alt={`${title} mac preview`}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <Spacer mobileSize="xxs" size="xs" />

      <Character 
        paragraph={secondDescription ? secondDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xxs" size="xs" />

      {/* Mobile Showcase */}
      <div className="w-full max-w-[100%] lg:max-w-[80%] mx-auto">
        <div className="relative w-full aspect-[16/9] flex items-center justify-center gap-4 lg:gap-12">
          <div className="relative w-[25%] aspect-[9/19]">
            <Image 
              src={mobile1}
              alt={`${title} mobile preview 1`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 751px) 100vw"
            />
          </div>
          <div className="relative w-[25%] aspect-[9/19]">
            <Image 
              src={mobile2}
              alt={`${title} mobile preview 2`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 751px) 100vw"
            />
          </div>
          <div className="relative w-[25%] aspect-[9/19]">
            <Image 
              src={mobile3}
              alt={`${title} mobile preview 3`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 751px) 100vw"
            />
          </div>
        </div>
      </div>

      <Spacer mobileSize="xxs" size="xs" />

      <Character 
        paragraph={thirdDescription ? thirdDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xxs" size="xs"/>

      <div className="w-full max-w-[100%] mx-auto">
        {/* Mac Image 2 */}
        <div className="relative w-full aspect-[16/9] mb-32">
          <Image 
            src={macImage2}
            alt={`${title} mac preview`}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Credits Section */}
      {credits && (
        <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto mb-32">
          <h3 className="text-xs sm:text-sm text-neutral-500 mb-4 text-center">CREDITS</h3>
          <div className="border-t-[0.25px] border-zinc-800 pt-2 md:pt-8">
            <p className="text-md sm:text-lg text-neutral-500 text-center">
              <a 
                href={credits.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                {credits.name}
              </a>
              {': '}{credits.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
}