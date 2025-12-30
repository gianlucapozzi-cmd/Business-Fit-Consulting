'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-xl p-6 shadow-card
        ${hover ? 'hover:shadow-card-hover' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  )
}

