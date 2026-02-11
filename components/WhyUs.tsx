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
            <div className="flex items-baseline gap-12 md:gap-16 justify-center" style={{ 
              paddingLeft: '0.12em',
              letterSpacing: '0.02em'
            }}>
              <span className="text-2xl md:text-3xl font-bold text-blue-500 font-prompt">CRESCITA</span>
              <span className="text-2xl md:text-3xl font-bold text-black font-prompt">GESTIONE</span>
              <span className="text-2xl md:text-3xl font-bold text-blue-500 font-prompt">CONSULENZA</span>
            </div>
          </div>
          <div className="text-[23px] text-gray-600 mx-auto leading-relaxed" style={{ maxWidth: '900px' }}>
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
