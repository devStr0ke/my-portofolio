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
  macImage2: string;
  websiteUrl?: string;
  firstDescription?: string;
  secondDescription?: string;
  thirdDescription?: string;
  mobile1?: string;
  mobile2?: string;
  mobile3?: string;
}

export default function ProjectSection({ title, mainImage, macImage, macImage2, websiteUrl, firstDescription, secondDescription, thirdDescription, mobile1, mobile2, mobile3 }: ProjectSectionProps) {
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

      <Spacer mobileSize="xs" size="xs" />

      {/* Mobile Showcase */}
      {(mobile1 || mobile2 || mobile3) && (
        <div className="w-full lg:max-w-[85%] mx-auto">
          <div className="relative w-full aspect-[16/9] flex items-center justify-center gap-4 md:gap-36 mb-32">
            {mobile1 && (
              <div className="relative w-[25%] aspect-[9/19]">
                <Image 
                  src={mobile1}
                  alt={`${title} mobile preview 1`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {mobile2 && (
              <div className="relative w-[25%] aspect-[9/19]">
                <Image 
                  src={mobile2}
                  alt={`${title} mobile preview 2`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {mobile3 && (
              <div className="relative w-[25%] aspect-[9/19]">
                <Image 
                  src={mobile3}
                  alt={`${title} mobile preview 3`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <Character 
        paragraph={thirdDescription ? thirdDescription : []}
        size="sm"
        customContainerClass="w-full max-w-[90%] lg:max-w-[75%] mx-auto"
        textAlign="center"
      />

      <Spacer mobileSize="xs" size="xs" />

      <div className="w-full max-w-[90%] lg:max-w-[68%] mx-auto">
        {/* Mac Image */}
        <div className="relative w-full aspect-[16/9] mb-32">
          <Image 
            src={macImage2}
            alt={`${title} mac preview`}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}