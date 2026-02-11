'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { CurrencyEuroIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import Button from './ui/Button'

export default function BuyersSection() {
  return (
    <section id="acquirenti-section" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-6">
            Vuoi comprare una palestra come investimento?
          </h2>
          <h3 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-8">
            Perché investire nel fitness
          </h3>
          <p className="text-[23px] text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Palestre e strutture fitness non sono le prime cose che vengono in mente quando si pensa al mondo delle imprese, eppure i numeri parlano chiaro: un settore in rapida crescita e caratterizzato da ricavi significativi, soprattutto se valutati insieme alla sicurezza dell'investimento.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contattaci
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
              icon: ChartBarIcon,
              title: 'Settore in Crescita',
              description: 'Il mercato del fitness continua a crescere costantemente, offrendo opportunità di investimento stabili e redditizie.'
            },
            {
              icon: CurrencyEuroIcon,
              title: 'Ricavi Significativi',
              description: 'Le palestre ben gestite generano ricavi consistenti con margini interessanti per gli investitori.'
            },
            {
              icon: ShieldCheckIcon,
              title: 'Investimento Sicuro',
              description: 'Un settore consolidato con modelli di business testati e una domanda costante di servizi fitness.'
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h4>
                <p className="text-[23px] text-gray-600 leading-relaxed">
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
