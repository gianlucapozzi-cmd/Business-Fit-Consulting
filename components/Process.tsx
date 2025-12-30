'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const steps = [
  {
    badge: '01',
    title: 'Richiedi la Valutazione',
    description: 'Compila il form con i dati della tua palestra. È gratuito e richiede solo 2 minuti.'
  },
  {
    badge: '02',
    title: 'Analisi Professionale',
    description: 'Il nostro team analizza la tua struttura e ti contatta entro 48 ore con una valutazione dettagliata.'
  },
  {
    badge: '03',
    title: 'Presentazione agli Acquirenti',
    description: 'Se decidi di vendere, presentiamo la tua palestra al nostro network di investitori qualificati.'
  },
  {
    badge: '04',
    title: 'Chiusura dell\'Affare',
    description: 'Ti supportiamo in ogni fase della negoziazione fino alla firma finale. Semplice, veloce, trasparente.'
  }
]

export default function Process() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#191919' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold text-white mb-4 uppercase">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-dm-sans">
            Un processo semplice in 4 step per trasformare la tua palestra in un affare di successo.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                {/* Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white">
                    {step.badge}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block ml-8 w-0.5 h-16 bg-white/30" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <h3 className="text-2xl font-prompt font-bold text-navy-900 mb-3 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-dm-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

