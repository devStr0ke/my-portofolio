'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact"
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showPathname, setShowPathname] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPathname(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {showPathname && (
          <motion.div
            key="pathname"
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            <motion.span 
              className="text-4xl font-light text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
            >
              {routes[pathname] || pathname.substring(1)}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}