'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { fadeInUp, staggerContainer } from '@/lib/animations'

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-6">
            Business Fit Consulting
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <span className="text-2xl md:text-3xl font-bold text-blue-500">CRESCITA</span>
            <span className="text-2xl md:text-3xl font-bold text-black">GESTIONE</span>
            <span className="text-2xl md:text-3xl font-bold text-blue-500">CONSULENZA</span>
          </div>
          <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            Aiutiamo palestre e centri fitness a gestirsi, vendersi, evolversi.
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siamo imprenditori del mondo fitness prima di qualsiasi altra cosa, e per questo motivo riusciamo a vedere le cose dall'unico punto di vista che conta davvero: il tuo.
          </p>
          <motion.div
            variants={fadeInUp}
            className="mt-8"
          >
            <a
              href="#form-valutazione"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold text-lg"
            >
              Scopri di più
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
