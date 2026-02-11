'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const gymImages = [
  '/Immagini/pexels-fire-flintq8-1049543416-20418606.jpg', // Prima
  '/Immagini/pexels-foadshariyati-29526372.jpg', // Seconda
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Terza (mantenuta)
  '/Immagini/pexels-rdne-8611382.jpg', // Quarta
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Quinta (mantenuta)
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Sesta (mantenuta)
]

// Immagine extra da aggiungere all'inizio per riempire il vuoto
const extraImage = '/Immagini/pexels-rdne-8612034.jpg'

export default function GymGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-40%', '20%'], {
    clamp: false
  })

  return (
    <section 
      ref={containerRef} 
      className="pt-6 md:pt-8 pb-8 md:pb-12 bg-white overflow-hidden"
    >
      <div className="relative -ml-20 md:-ml-28">
        <motion.div
          style={{ 
            x,
            willChange: 'transform'
          }}
          className="flex gap-6 md:gap-8"
        >
          {/* Immagine extra all'inizio per riempire il vuoto */}
          <motion.div
            key="extra-start"
            className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={extraImage}
              alt="Palestra"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.8)' }}
            />
          </motion.div>
          {/* Duplicate images at the start to prevent white space */}
          {gymImages.map((image, index) => (
            <motion.div
              key={`start-${index}`}
              className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Palestra ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8)' }}
              />
            </motion.div>
          ))}
          {gymImages.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`Palestra ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8)' }}
              />
            </motion.div>
          ))}
          {/* Duplicate images for seamless loop */}
          {gymImages.map((image, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-80 md:w-96 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Palestra ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

