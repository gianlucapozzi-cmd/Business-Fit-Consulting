'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Button from './ui/Button'

export default function WhyUs() {
  return (
    <section className="pt-20 md:pt-28 pb-14 md:pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-6 text-center">
              Business Fit Consulting
            </h2>
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-6 md:gap-12 lg:gap-16 justify-center px-2" style={{ 
              paddingLeft: '0.12em',
              letterSpacing: '0.02em'
            }}>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 font-prompt break-words">CRESCITA</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-prompt break-words">GESTIONE</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 font-prompt break-words">CONSULENZA</span>
            </div>
          </div>
          <div className="text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-gray-600 mx-auto leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[900px] px-4 break-words">
            <p>
              Siamo imprenditori del mondo fitness prima di qualsiasi altra cosa, e per<br />
              questo motivo riusciamo a vedere le cose dall'unico punto di vista che conta davvero: il tuo.
            </p>
          </div>
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('form-valutazione')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scopri quanto vale la tua palestra
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
