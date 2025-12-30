'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import Image from 'next/image'

const team = [
  {
    name: 'MARCO',
    surname: 'BIFFI',
    role: 'Chairman e Founder',
    image: '/Immagini/M. Biffi.JPG'
  },
  {
    name: 'CHIARA',
    surname: 'BIFFI',
    role: 'Business developement manager',
    image: '/Immagini/C. Biffi.JPG'
  }
]

export default function AboutUs() {
  return (
    <section id="chi-siamo" className="pt-20 md:pt-28 pb-10 md:pb-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-6">
            Dietro Business Fit Consulting
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I fatti contano più delle parole e i risultati più delle promesse: siamo una famiglia di imprenditori con una storia di successi e una sincera passione per questo settore. Business Fit è il risultato del nostro impegno costante e del contributo che molti amici fidati ci hanno lasciato lungo il nostro cammino.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-48 h-64 rounded-lg mx-auto mb-6 overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={`${member.name} ${member.surname}`}
                  width={192}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-2xl font-prompt font-bold uppercase text-black mb-2">
                {member.name} {member.surname}
              </h4>
              <p className="text-gray-600">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

