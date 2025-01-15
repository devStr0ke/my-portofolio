'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const routes: { [key: string]: string } = {
  "/": "· Home",
  "/test": "· Test",
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showPathname, setShowPathname] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Reset states on pathname change
    setShowPathname(true)
    setShowContent(false)

    // Hide the pathname after 1 second
    const pathnameTimer = setTimeout(() => {
      setShowPathname(false)
    }, 1000)

    // Show content after pathname animation is complete
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 500) // 1000ms (pathname display) + 750ms (exit animation)

    return () => {
      clearTimeout(pathnameTimer)
      clearTimeout(contentTimer)
    }
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {showPathname && (
          <motion.div
            key="pathname"
            className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-600"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.35, // Super fast entry
              ease: [0.76, 0, 0.24, 1]
            }}
          >
            <motion.span 
              className="text-4xl font-light text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: 0.1
              }}
            >
              {routes[pathname] || pathname.substring(1)}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ opacity: showContent ? 1 : 0 }}>
        {children}
      </div>
    </>
  )
}