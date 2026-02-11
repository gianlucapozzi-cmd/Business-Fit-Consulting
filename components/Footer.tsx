'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

// Icona Instagram personalizzata
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-8">
      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-center items-start mb-12 w-full px-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto">
          {/* Brand */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            <img
              src="/Immagini/Logo.svg"
              alt="Business Fit Consulting"
              className="h-auto w-auto max-w-[200px] mb-4 mx-auto lg:mx-0"
            />
            <p className="text-white mb-2">
              La guida professionale per l'acquisto o la vendita della tua palestra.
            </p>
            <p className="text-white text-sm">
              P.IVA 13556860966
            </p>
          </div>

          {/* Contatti */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            <h4 className="font-bold text-base md:text-xl drop-shadow-lg mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Contatti</h4>
            <div className="space-y-3">
              <a href="tel:+393886475324" className="flex items-center justify-center lg:justify-start text-white hover:text-blue-400 transition-colors">
                <PhoneIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+39 388 647 5324</span>
              </a>
              <a href="mailto:info@businessfit.it" className="flex items-center justify-center lg:justify-start text-white hover:text-blue-400 transition-colors">
                <EnvelopeIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>info@businessfit.it</span>
              </a>
              <div className="flex items-center justify-center lg:justify-start text-white">
                <MapPinIcon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>SEDI A Milano - Roma - Catania</span>
              </div>
              <a 
                href="https://www.instagram.com/businessfit_consulting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start text-white hover:text-blue-400 transition-colors mt-4"
              >
                <InstagramIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Link */}
          <div className="text-center lg:text-left flex-[0.56] min-w-0">
            <h4 className="font-bold text-base md:text-xl drop-shadow-lg mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Link utili</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vendi-section" className="text-white hover:text-blue-400 transition-colors">
                  Vendi
                </a>
              </li>
              <li>
                <a href="#acquirenti-section" className="text-white hover:text-blue-400 transition-colors">
                  Compra
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-white hover:text-blue-400 transition-colors">
                  Chi Siamo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center lg:text-left flex-1 min-w-0">
            <h4 className="font-bold text-base md:text-xl drop-shadow-lg mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.iubenda.com/privacy-policy/86224438/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="https://www.iubenda.com/privacy-policy/86224438" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-gray-800 pt-8 text-center text-white"
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
