import { Variants } from 'framer-motion'

// Fade in on scroll
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Scale in animation
export const scaleIn: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Slide from right
export const slideFromRight: Variants = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Number counter animation (per stats)
export const numberCounter = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
}

