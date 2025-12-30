'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 lg:max-w-5xl lg:mx-auto lg:px-0"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src="/Immagini/Logo.svg"
              alt="Business Fit Consulting"
              className="h-auto w-auto max-w-[200px] mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 mb-2">
              La guida professionale per l'acquisto o la vendita della tua palestra.
            </p>
            <p className="text-gray-500 text-sm">
              P.IVA 13556860966
            </p>
          </div>

          {/* Contatti */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <a href="tel:+393482714994" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+39 348 2714 994</span>
              </a>
              <a href="mailto:info@businessfit.it" className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition-colors">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>info@businessfit.it</span>
              </a>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPinIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>SEDI A Milano - Roma - Catania</span>
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2">
              <li>
                <a href="#acquirenti-section" className="text-gray-400 hover:text-white transition-colors">
                  Compra
                </a>
              </li>
              <li>
                <a href="#vendi-section" className="text-gray-400 hover:text-white transition-colors">
                  Vendi
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.iubenda.com/privacy-policy/86224438/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="https://www.iubenda.com/privacy-policy/86224438" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} <span className="font-prompt font-bold uppercase">Business Fit Consulting</span>. Tutti i diritti riservati.</p>
          <p className="mt-2 text-sm">
            Powered by{' '}
            <a 
              href="https://meraviglialab.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              meravigliä lab
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
