"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import { HiDocument } from "react-icons/hi2";
import Magnetic from "./Magnetic";
import GravityIcon from "./GravityIcon";
import Link from "next/link";
import Image from "next/image";
import { createLanguageSwitcher } from "@/helpers/utils";
import { useTranslations } from "@/i18n/LanguageContext";

interface FloatingNavProps {
  disableScroll?: boolean;
  footerId?: string;
}

export const FloatingNav = ({ disableScroll = false, footerId = 'main-footer' }: FloatingNavProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(disableScroll);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [isNavOverFooter, setIsNavOverFooter] = useState(false);
  const { locale, setLocale, t } = useTranslations();
  const handleLanguageSwitch = createLanguageSwitcher(locale, setLocale);
  const cvUrl = locale === 'fr' ? '/CVSamuelCoelho.pdf' : '/CVSamuelCoelhoEN.pdf';

  const checkIfOverFooter = (scrollPosition: number) => {
    const footer = document.querySelector(`#${footerId}`);
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      
      // Check for social icons (bottom position - 12vh from bottom)
      const socialBottom = window.innerHeight * 0.9; // 100vh - 12vh = 88vh
      const isSocialOver = footerRect.top <= socialBottom;
      
      // Check for nav links (higher position - 85vh from top)
      const navBottom = window.innerHeight * 0.15; // 15vh from top
      const isNavOver = footerRect.top <= navBottom;

      return { isSocialOver, isNavOver };
    }
    return { isSocialOver: false, isNavOver: false };
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!disableScroll) {
      const shouldShow = latest > window.innerHeight;
      setVisible(shouldShow);
    }

    const { isSocialOver, isNavOver } = checkIfOverFooter(latest);
    setIsOverFooter(isSocialOver);
    setIsNavOverFooter(isNavOver);
  });

  const navLinkClass = isNavOverFooter 
    ? "font-bold text-neutral-950 hover:text-neutral-950" 
    : "font-bold text-neutral-500 hover:text-indigo-600";

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -150,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed top-12 left-6 xl:left-12 2xl:left-16 z-50 hidden lg:block"
      >
        <nav className="flex flex-col gap-1 uppercase text-left text-sm xl:text-base">
          <Magnetic>
            <div className="group relative inline-block overflow-hidden">
              <Link href="/" className={`flex cursor-pointer group ${isNavOverFooter ? 'text-neutral-950 hover:text-neutral-950' : 'text-neutral-500 hover:text-indigo-600'} font-bold`}>
                <Image
                  src={isNavOverFooter ? "/logoFooter.svg" : "/logo.svg"}
                  alt="Logo"
                  width={40} 
                  height={40}
                  priority={true}
                  className={`transition-transform duration-300 ${isNavOverFooter ? '' : 'group-hover:hidden'}`}
                />
                <Image
                  src="/logoHover.svg"
                  alt="Logo Hover"
                  width={40} 
                  height={40}
                  priority={true}
                  className={`transition-transform hidden duration-300 ${isNavOverFooter ? 'hidden' : 'group-hover:block'}`}
                />
              </Link>
            </div>
          </Magnetic>
        </nav>
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -150,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed top-12 right-6 xl:right-12 2xl:right-16 z-50 hidden lg:block"
      >
        <nav className="flex flex-col gap-1 uppercase text-right text-sm xl:text-base font-orbitron">
          <Magnetic>
            <Link href="/about" className={navLinkClass}>{t.pages.about}</Link>
          </Magnetic>
          <Magnetic>
            <Link href="/experience" className={navLinkClass}>{t.pages.experience}</Link>
          </Magnetic>
          <Magnetic>
            <Link href="/work" className={navLinkClass}>{t.pages.work}</Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className={navLinkClass}>{t.pages.contact}</Link>
          </Magnetic>
        </nav>
      </motion.div>
      {/* Social Icons */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed bottom-12 right-6 xl:right-12 2xl:right-16 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-4">
          <GravityIcon 
            icon={<FaGithub size={25} />}
            href="https://github.com/devStr0ke"
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
          <GravityIcon 
            icon={<FaLinkedin size={25} />}
            href="https://www.linkedin.com/in/samuel-c-293984212/"
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
          <GravityIcon 
            icon={<HiGlobeAlt size={25} />}
            onClick={handleLanguageSwitch}
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
          <GravityIcon 
            icon={<HiDocument size={25} />}
            href={cvUrl}
            className={isOverFooter ? 'text-neutral-950 hover:text-neutral-950' : "text-neutral-500"}
          />
        </div>
      </motion.div>
    </>
  );
};