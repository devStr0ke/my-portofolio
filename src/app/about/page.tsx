"use client";
import { FloatingNav } from "@/components/FloatingNav";
import ZoomParallax from "../../components/AboutComponent/ZoomParallax";
import Description from "@/components/AboutComponent/Description";
import Section from "@/components/AboutComponent/Section";
import MultipleImageSection from "@/components/AboutComponent/MultipleImageSection";
import { Spacer } from "@/components/Spacer";
import Footer from "@/components/Footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";
import { useTranslations } from "@/i18n/LanguageContext";

const englishDescriptionText1 = [
  { text: "I'm" },
  { text: "a" },
  { text: "submission", color: "rgb(99 102 241)" },
  { text: "grappling", color: "rgb(99 102 241)" },
  { text: "coach" },
  { text: "aiming" },
  { text: "to" },
  { text: "share" },
  { text: "my" },
  { text: "knowledge" },
  { text: "with" },
  { text: "athletes" },
  { text: "focused" },
  { text: "on" },
  { text: "details" },
  { text: "and" },
  { text: "excellence" }
];

const frenchDescriptionText1 = [
  { text: "Je" },
  { text: "suis" },
  { text: "coach" },
  { text: "de" },
  { text: "grappling", color: "rgb(99 102 241)" },
  { text: "/JJB", color: "rgb(99 102 241)" },
  { text: "et" },
  { text: "j’accompagne" },
  { text: "les" },
  { text: "athlètes" },
  { text: "qui" },
  { text: "visent" },
  { text: "la" },
  { text: "précision," },
  { text: "le" },
  { text: "détail" },
  { text: "et" },
  { text: "l’excellence." }
];

const englishDescriptionText2 = [
  { text: "I" },
  { text: "also" },
  { text: "love" },
  { text: "to" },
  { text: "explore" },
  { text: "the" },
  { text: "world," },
  { text: "it" },
  { text: "fuels" },
  { text: "my" },
  { text: "curiosity" },
  { text: "for" },
  { text: "new" },
  { text: "adventures,", color: "rgb(99 102 241)" },
  { text: "discoveries", color: "rgb(99 102 241)" },
  { text: "and" },
  { text: "experiences", color: "rgb(99 102 241)" }
];

const frenchDescriptionText2 = [
  { text: "J’adore" },
  { text: "explorer" },
  { text: "le" },
  { text: "monde" },
  { text: ":" },
  { text: "chaque" },
  { text: "voyage" },
  { text: "stimule" },
  { text: "ma" },
  { text: "curiosité" },
  { text: "et" },
  { text: "m’ouvre" },
  { text: "à" },
  { text: "de" },
  { text: "nouvelles" },
  { text: "aventures,", color: "rgb(99 102 241)" },
  { text: "découvertes", color: "rgb(99 102 241)" },
  { text: "et" },
  { text: "expériences", color: "rgb(99 102 241)" }
];


const englishDescriptionText3 = [
  { text: "I" },
  { text: "love" },
  { text: "espresso" },
  { text: "and" },
  { text: "good" },
  { text: "food," },
  { text: "always" },
  { text: "seeking", color: "rgb(99 102 241)" },
  { text: "quality", color: "rgb(99 102 241)" },
  { text: "experiences", color: "rgb(99 102 241)" },
];

const frenchDescriptionText3 = [
  { text: "Amateur" },
  { text: "de" },
  { text: "bon" },
  { text: "café" },
  { text: "et" },
  { text: "de" },
  { text: "bons" },
  { text: "plats," },
  { text: "je" },
  { text: "poursuis" },
  { text: "sans" },
  { text: "cesse" },
  { text: "les" },
  { text: "expériences", color: "rgb(99 102 241)" },
  { text: "qui" },
  { text: "éveillent" },
  { text: "les" },
  { text: "sens.", color: "rgb(99 102 241)" }
];


const englishDescriptionText4 = [
  { text: "I" },
  { text: "hope" },
  { text: "you" },
  { text: "enjoyed" },
  { text: "getting" },
  { text: "to" },
  { text: "know" },
  { text: "me" },
  { text: "better," },
  { text: "the", color: "rgb(99 102 241)" },
  { text: "person", color: "rgb(99 102 241)" },
  { text: "behind", color: "rgb(99 102 241)" },
  { text: "the" },
  { text: "code." }
];

const frenchDescriptionText4 = [
  { text: "J’espère" },
  { text: "que" },
  { text: "vous" },
  { text: "avez" },
  { text: "apprécié" },
  { text: "en" },
  { text: "découvrir" },
  { text: "un" },
  { text: "peu" },
  { text: "plus" },
  { text: "sur" },
  { text: "moi" },
  { text: "et" },
  { text: "sur" },
  { text: "ce" },
  { text: "qui" },
  { text: "m’inspire", color: "rgb(99 102 241)" },
  { text: "au" },
  { text: "quotidien." }
];

export default function Home() {
  const { locale, t } = useTranslations();

  const descriptionText1 = locale === 'fr' ? frenchDescriptionText1 : englishDescriptionText1;
  const descriptionText2 = locale === 'fr' ? frenchDescriptionText2 : englishDescriptionText2;
  const descriptionText3 = locale === 'fr' ? frenchDescriptionText3 : englishDescriptionText3;
  const descriptionText4 = locale === 'fr' ? frenchDescriptionText4 : englishDescriptionText4;

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <>
      <FloatingNav disableScroll={true} />
      <div className="w-full h-full">
        <Spacer mobileSize="sm" size="md" />
        <div className="max-w-[90%] lg:max-w-[68%] mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal mb-16 md:mb-32 text-neutral-500">
            {t.aboutPage.title}
          </h1>
        </div>
        <ZoomParallax />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText1} />
        <Spacer size="sm" />
        <Section imageSrc="limouxFight.png" mobileSrc="limoux.png" />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText2} />
        <Spacer size="sm" />
        <MultipleImageSection />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText3} />
        <Spacer size="sm" />
        <Section imageSrc="takoAndEspresso.png" mobileSrc="minifundi.png" text="" />
        <Spacer size="sm" />
        <Description descriptionText={descriptionText4} />
        <Spacer mobileSize="md"size="lg" />
      </div>
      <Footer />
    </>
  );
}