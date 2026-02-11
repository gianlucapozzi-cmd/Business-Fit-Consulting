'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Button from './ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import AnimatedContent from './AnimatedContent'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            opacity: 0.45
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Logo favicon nell'angolo - effetto uscita dallo schermo */}
      <motion.div
        className="absolute bottom-8 right-8 z-[10] pointer-events-none"
        initial={{ opacity: 0, x: 50, y: 50, rotate: 15 }}
        animate={{ 
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        transition={{ 
          duration: 1,
          ease: "easeOut",
          delay: 0.5
        }}
      >
        <img
          src="/favicon.png"
          alt="Business Fit Consulting"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
            transform: 'translate(30%, 30%)'
          }}
        />
      </motion.div>

      {/* Content: tutti i testi centrati, stessa max-width, margin auto */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-5xl mx-auto text-center overflow-hidden"
        >
          {/* LA GUIDA PROFESSIONALE PER VENDERE */}
          <motion.p
            className="w-full max-w-5xl mx-auto text-[18px] sm:text-[22px] md:text-[27px] lg:text-[29px] text-gray-300 mb-4 font-prompt uppercase tracking-wide leading-tight break-words px-2"
            style={{ fontWeight: 500 }}
            variants={fadeInUp}
          >
            LA GUIDA PROFESSIONALE PER VENDERE
          </motion.p>

          {/* LA TUA PALESTRA */}
          <motion.h1
            className="w-full max-w-5xl mx-auto text-[28px] sm:text-[35px] md:text-[50px] lg:text-[65px] xl:text-[77px] text-white font-prompt font-bold uppercase mb-6 md:mb-8 leading-tight break-words px-2"
            variants={fadeInUp}
          >
            LA TUA <span className="text-blue-500">PALESTRA</span>
          </motion.h1>

          {/* TI AIUTIAMO CON LA VALUTAZIONE... */}
          <motion.p
            className="w-full max-w-5xl mx-auto text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-gray-300 mb-6 md:mb-[30px] font-prompt uppercase leading-relaxed break-words px-2"
            style={{ fontWeight: 500 }}
            variants={fadeInUp}
          >
            Ti aiutiamo con la valutazione e vendita della tua palestra,<br />massimizzandone il valore
          </motion.p>

          {/* CTA centrato */}
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            threshold={0.3}
            delay={0.3}
            className="mb-6 mt-3 max-w-5xl mx-auto flex justify-center"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('form-valutazione')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri quanto vale la tua palestra
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </AnimatedContent>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
