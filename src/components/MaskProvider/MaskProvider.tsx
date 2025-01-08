'use client'
import { createContext, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/app/utils/useMousePosition';
import styles from './MaskProvider.module.scss';

const MaskContext = createContext<{
  setIsHovered: (value: boolean) => void;
}>({ setIsHovered: () => {} });

export const useMask = () => useContext(MaskContext);

export function MaskProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <MaskContext.Provider value={{ setIsHovered }}>
      {children}
      <motion.div 
        className={styles.globalMask}
        animate={{
          WebkitMaskPosition: `${x ? x - (size/2) : 0}px ${y ? y - (size/2) : 0}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </MaskContext.Provider>
  );
}