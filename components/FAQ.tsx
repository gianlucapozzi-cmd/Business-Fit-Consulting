'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Quanto costa la valutazione?',
    answer: 'La valutazione è completamente gratuita. Non ci sono costi nascosti o obblighi di vendita. Ti forniamo una stima professionale del valore della tua palestra senza impegno.'
  },
  {
    question: 'Quanto tempo ci vuole per ricevere la valutazione?',
    answer: 'Ti contattiamo entro 48 ore dalla richiesta. La valutazione completa viene consegnata in 5-7 giorni lavorativi, dopo un\'analisi approfondita della tua struttura.'
  },
  {
    question: 'Cosa include la valutazione?',
    answer: 'La valutazione include l\'analisi di posizione, attrezzature, numero di clienti, fatturato, potenziale di crescita e confronto con il mercato. Riceverai un report dettagliato con il valore stimato della tua palestra.'
  },
  {
    question: 'Sono obbligato a vendere se richiedo la valutazione?',
    answer: 'Assolutamente no. La valutazione è gratuita e senza impegno. Decidi tu se e quando procedere con la vendita. Siamo qui per aiutarti a prendere decisioni informate.'
  },
  {
    question: 'Come funziona il processo di vendita?',
    answer: 'Una volta che decidi di vendere, presentiamo la tua palestra al nostro network di acquirenti qualificati. Ti supportiamo in ogni fase: dalla negoziazione alla firma finale, garantendo massima trasparenza.'
  },
  {
    question: 'Quanto tempo ci vuole per vendere una palestra?',
    answer: 'Il tempo medio per completare una vendita è di 30-60 giorni, a seconda della complessità della transazione. Il nostro team lavora per accelerare il processo mantenendo alta la qualità della negoziazione.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-section" className="py-16 md:py-24" style={{ backgroundColor: '#2542FF' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-white mb-4">
            Domande Frequenti
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tutte le risposte alle domande più comuni sul nostro servizio.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 text-navy-900 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

