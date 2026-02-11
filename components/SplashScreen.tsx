'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000) // Mostra per 2 secondi

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0.8,
              y: -30,
              transition: { duration: 0.4 }
            }}
            className="relative"
          >
            <img
              src="/Immagini/Logo.svg"
              alt="Business Fit Consulting"
              className="w-64 h-auto md:w-80 lg:w-96"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

