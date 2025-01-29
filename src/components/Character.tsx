import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

// Add a type for word highlighting
type HighlightedWord = {
  text: string;
  color?: string;
}

type TextSize = 'sm' | 'xl';
type TextAlign = 'start' | 'center' | 'end';

type ParagraphProps = {
  paragraph: string | HighlightedWord[];
  title?: string;
  size?: TextSize;
  customContainerClass?: string;
  textAlign?: TextAlign;
}

const TEXT_SIZES = {
  sm: "text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[2.2rem] 2xl:text-[2.9rem]",
  xl: "text-[2.3rem] sm:text-5xl xl:text-[3.8rem] 2xl:text-[5rem]",
} as const;

export default function Paragraph({ 
  paragraph, 
  title, 
  size = 'xl',
  customContainerClass = 'flex flex-col max-w-[90%] lg:max-w-[68%] md:mx-auto',
  textAlign = 'start'
}: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  // Convert the paragraph to an array of HighlightedWord if it's a string
  const words: HighlightedWord[] = typeof paragraph === 'string' 
    ? paragraph.split(" ").map(word => ({ text: word }))
    : paragraph;

  return (
    <div className={customContainerClass}>
      {title && (
        <div className="text-neutral-200 font-bold text-base uppercase mb-6 block tracking-widest">
          {title}
        </div>
      )}
      <p 
        ref={container}         
        className={`text-${textAlign} flex font-bold leading-none text-neutral-500 flex-wrap tracking-tight ${TEXT_SIZES[size]} ${textAlign === 'center' ? 'justify-center' : ''}`}
      >
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]} 
              color={word.color}
            >
              {word.text}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

const Word = ({
  children, 
  progress, 
  range, 
  color
}: {
  children: string, 
  progress: any, 
  range: any,
  color?: string
}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step)
        return (
          <Char 
            key={`c_${i}`} 
            progress={progress} 
            range={[start, end]}
            color={color}
          >
            {char}
          </Char>
        )
      })}
    </span>
  )
}

const Char = ({
  children, 
  progress, 
  range,
  color
}: {
  children: string, 
  progress: any, 
  range: any,
  color?: string
}) => {
  const opacity = useTransform(progress, range, [0,1])
  const textColor = color || 'neutral-500' // Default to neutral-500 if no color specified
  
  return (
    <span>
      <span className="absolute opacity-20" style={{ color: textColor }}>{children}</span>
      <motion.span style={{ opacity: opacity, color: textColor }}>{children}</motion.span>
    </span>
  )
}