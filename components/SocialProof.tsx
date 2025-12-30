'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Card from './ui/Card'

const stats = [
  {
    icon: '🏋️',
    number: '500+',
    description: 'Palestre valutate'
  },
  {
    icon: '💰',
    number: '€50M+',
    description: 'Transazioni gestite'
  },
  {
    icon: '🤝',
    number: '200+',
    description: 'Clienti soddisfatti'
  },
  {
    icon: '⚡',
    number: '48h',
    description: 'Tempo medio di risposta'
  }
]

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <motion.div
                  className="text-4xl md:text-5xl font-prompt font-bold text-black mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

