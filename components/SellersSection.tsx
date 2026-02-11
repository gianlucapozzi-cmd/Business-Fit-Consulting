'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { CalculatorIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Button from './ui/Button'

export default function SellersSection() {
  return (
    <section id="vendi-section" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-6">
            stai pensando di vendere la tua palestra?
          </h2>
          <h3 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-8">
            scopri oggi quanto vale
          </h3>
          <p className="text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 px-4 break-words">
            Se ti stai chiedendo quanto vale davvero il tuo business, sei nel posto giusto. Conosciamo perfettamente tutte le variabili che ne determinano il valore di mercato: ti daremo nel minor tempo possibile l'analisi della tua struttura e potrai decidere in modo sicuro i tuoi prossimi step.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('form-valutazione')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Scopri quanto vale la tua palestra
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: CalculatorIcon,
              title: 'Valutazione Professionale',
              description: 'Analisi completa di tutte le variabili che determinano il valore di mercato della tua struttura.'
            },
            {
              icon: ClockIcon,
              title: 'Risposta Rapida',
              description: 'Ricevi l\'analisi della tua struttura nel minor tempo possibile per prendere decisioni informate.'
            },
            {
              icon: CheckCircleIcon,
              title: 'Decisioni Sicure',
              description: 'Conosci il valore reale del tuo business e decidi i tuoi prossimi step con sicurezza e consapevolezza.'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h4>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed break-words">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

