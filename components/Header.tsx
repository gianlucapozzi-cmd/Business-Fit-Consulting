'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Vendi', href: '#vendi-section' },
    { label: 'Chi siamo', href: '#chi-siamo' },
    { label: 'Come funziona', href: '#come-funziona' },
    { label: 'Richieste', href: '#form-valutazione' },
    { label: 'FAQ', href: '#faq-section' }
  ]

  const handleClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center"
          >
            <img
              src="/Immagini/Logo.svg"
              alt="Business Fit Consulting"
              className="h-auto w-auto max-w-[150px]"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                className="text-white hover:text-blue-400 transition-colors font-bold text-base md:text-xl drop-shadow-lg"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 drop-shadow-lg"
            aria-label="Toggle menu"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7 font-bold" />
            ) : (
              <Bars3Icon className="w-7 h-7 font-bold" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 bg-black/70"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                  className="text-white hover:text-blue-400 transition-colors font-bold text-xl py-2 drop-shadow-lg"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

