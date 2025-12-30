# 🚀 SPECIFICA TECNICA LANDING PAGE BUSINESSFIT

## 📋 STACK TECNOLOGICO

```json
{
  "framework": "Next.js 15.4+",
  "styling": "Tailwind CSS 4.1+",
  "animations": "Framer Motion 12+",
  "icons": "Heroicons 2.1+",
  "language": "TypeScript",
  "deployment": "Vercel (consigliato)"
}
```

---

## 🏗️ STRUTTURA PROGETTO

```
businessfit-landing/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page (landing)
│   ├── globals.css                # Tailwind imports + custom CSS
│   └── api/
│       └── submit-form/
│           └── route.ts           # API route per form submission
├── components/
│   ├── Hero.tsx                   # Sezione Hero
│   ├── SocialProof.tsx            # Numeri/stats
│   ├── WhyUs.tsx                  # 3 motivi per sceglierci
│   ├── Process.tsx                # Come funziona (4 step)
│   ├── LeadForm.tsx               # Form valutazione
│   ├── FAQ.tsx                    # Accordion FAQ
│   ├── BuyersSection.tsx          # Sezione acquirenti
│   ├── Footer.tsx                 # Footer
│   └── ui/
│       ├── Button.tsx             # Button component riutilizzabile
│       ├── Input.tsx              # Input field component
│       ├── Select.tsx             # Select dropdown
│       └── Card.tsx               # Card component
├── lib/
│   ├── animations.ts              # Framer Motion variants
│   └── utils.ts                   # Utility functions
├── public/
│   ├── images/                    # Immagini ottimizzate
│   └── fonts/                     # Font locali (se necessario)
├── types/
│   └── index.ts                   # TypeScript types/interfaces
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
└── package.json
```

---

## 📦 DEPENDENCIES

### package.json
```json
{
  "name": "businessfit-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.4.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "@heroicons/react": "^2.1.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.24.0",
    "@hookform/resolvers": "^3.9.0",
    "tailwindcss": "^4.1.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.4.0"
  }
}
```

---

## 🎨 TAILWIND CONFIGURATION

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1a365d', // Primary navy
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857', // Primary emerald
          800: '#065f46',
          900: '#064e3b',
        },
        energyOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 🎬 FRAMER MOTION VARIANTS

### lib/animations.ts
```typescript
import { Variants } from 'framer-motion'

// Fade in on scroll
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Scale in animation
export const scaleIn: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Slide from right
export const slideFromRight: Variants = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Number counter animation (per stats)
export const numberCounter = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
}
```

---

## 📝 TYPESCRIPT TYPES

### types/index.ts
```typescript
// Form data type
export interface LeadFormData {
  fullName: string
  email: string
  phone: string
  region: string
  userType: 'seller' | 'valuation' | 'buyer'
  gymSize: 'small' | 'medium' | 'large'
  notes?: string
  privacyAccepted: boolean
}

// API Response type
export interface ApiResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

// Social proof card type
export interface SocialProofCard {
  icon: string
  number: string
  description: string
}

// Process step type
export interface ProcessStep {
  badge: string
  title: string
  description: string
}

// FAQ item type
export interface FAQItem {
  question: string
  answer: string
}
```

---

## 🧩 COMPONENTS STRUCTURE

### components/ui/Button.tsx
```typescript
'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-energyOrange-500 hover:bg-energyOrange-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
```

### components/ui/Input.tsx
```typescript
'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 
            border rounded-lg 
            focus:ring-2 focus:ring-navy-900 focus:border-transparent
            transition-all duration-200
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
```

### components/ui/Select.tsx
```typescript
'use client'

import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 
            border rounded-lg 
            focus:ring-2 focus:ring-navy-900 focus:border-transparent
            transition-all duration-200
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        >
          <option value="">Seleziona...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
```

---

## 🎯 COMPONENT IMPLEMENTATION GUIDELINES

### Hero Component Structure
```typescript
'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Button from './ui/Button'
import { fadeInUp } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/gym-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block mb-6 px-4 py-2 bg-emerald-700/20 border border-emerald-500 rounded-full"
            variants={fadeInUp}
          >
            <span className="text-emerald-400 text-sm font-semibold">
              Il Primo Network Nazionale
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 
            className="text-hero-mobile md:text-hero text-white font-bold mb-6 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            Il Primo Network Nazionale per la Compravendita di Palestre
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Scopri quanto vale davvero la tua palestra con una valutazione 
            professionale gratuita in 48 ore.
          </motion.p>

          {/* CTA Primary */}
          <motion.div variants={fadeInUp}>
            <Button 
              size="lg" 
              className="mb-4"
              onClick={() => document.getElementById('form-valutazione')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Richiedi Valutazione Gratuita
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Supporting text */}
          <motion.p 
            className="text-gray-300 text-sm mb-6"
            variants={fadeInUp}
          >
            Fondi e investitori ci cercano ogni giorno. 
            La tua palestra potrebbe valere più di quanto pensi.
          </motion.p>

          {/* CTA Secondary */}
          <motion.a
            href="#acquirenti-section"
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center"
            variants={fadeInUp}
            whileHover={{ x: 5 }}
          >
            Cerchi una palestra da acquistare?
            <ChevronRightIcon className="w-4 h-4 ml-1" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
```

### Form Component with Validation
```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Input from './ui/Input'
import Select from './ui/Select'
import Button from './ui/Button'
import { fadeInUp } from '@/lib/animations'

// Validation schema
const formSchema = z.object({
  fullName: z.string().min(2, 'Nome troppo corto'),
  email: z.string().email('Email non valida'),
  phone: z.string().min(10, 'Numero non valido'),
  region: z.string().min(1, 'Seleziona una regione'),
  userType: z.enum(['seller', 'valuation', 'buyer']),
  gymSize: z.enum(['small', 'medium', 'large']),
  notes: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: 'Devi accettare la privacy policy'
  })
})

type FormData = z.infer<typeof formSchema>

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">
          Grazie per la tua richiesta!
        </h3>
        <p className="text-emerald-700">
          Ti contatteremo entro 24 ore per la valutazione.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="space-y-5">
        {/* Nome */}
        <Input
          label="Nome e Cognome"
          {...register('fullName')}
          error={errors.fullName?.message}
          required
        />

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            required
          />
          <Input
            label="Telefono"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            required
          />
        </div>

        {/* Regione */}
        <Select
          label="La tua palestra è in"
          {...register('region')}
          error={errors.region?.message}
          options={ITALIAN_REGIONS}
          required
        />

        {/* User Type (Radio) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Sei: <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {USER_TYPES.map(type => (
              <label key={type.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  value={type.value}
                  {...register('userType')}
                  className="w-4 h-4 text-navy-900 focus:ring-navy-900"
                />
                <span className="text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
          {errors.userType && (
            <p className="mt-1 text-sm text-red-500">{errors.userType.message}</p>
          )}
        </div>

        {/* Gym Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Dimensione approssimativa: <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {GYM_SIZES.map(size => (
              <label key={size.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  value={size.value}
                  {...register('gymSize')}
                  className="w-4 h-4 text-navy-900 focus:ring-navy-900"
                />
                <span className="text-gray-700">{size.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note aggiuntive (facoltativo)
          </label>
          <textarea
            {...register('notes')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent"
            placeholder="Raccontaci brevemente la tua situazione..."
          />
        </div>

        {/* Privacy */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('privacyAccepted')}
              className="mt-1 w-4 h-4 text-navy-900 focus:ring-navy-900 rounded"
            />
            <span className="text-sm text-gray-700">
              Accetto la <a href="#" className="text-navy-900 underline">privacy policy</a> e 
              autorizzo BusinessFit a contattarmi
            </span>
          </label>
          {errors.privacyAccepted && (
            <p className="mt-1 text-sm text-red-500">{errors.privacyAccepted.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          fullWidth
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Invio in corso...' : 'Richiedi Valutazione Gratuita →'}
        </Button>

        {/* Reassurance */}
        <p className="text-center text-sm text-gray-500">
          🔒 I tuoi dati sono trattati in modo riservato. Ti ricontatteremo entro 24h.
        </p>
      </div>
    </motion.form>
  )
}

// Constants
const ITALIAN_REGIONS = [
  { value: 'lombardia', label: 'Lombardia' },
  { value: 'lazio', label: 'Lazio' },
  { value: 'sicilia', label: 'Sicilia' },
  // ... altre regioni
]

const USER_TYPES = [
  { value: 'seller', label: 'Proprietario interessato a vendere' },
  { value: 'valuation', label: 'Proprietario interessato a una valutazione' },
  { value: 'buyer', label: 'Investitore/Acquirente' }
]

const GYM_SIZES = [
  { value: 'small', label: 'Fino a 500mq' },
  { value: 'medium', label: '500-1000mq' },
  { value: 'large', label: 'Oltre 1000mq' }
]
```

---

## 🔌 API ROUTE IMPLEMENTATION

### app/api/submit-form/route.ts
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { LeadFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json()

    // Validation
    if (!body.email || !body.phone || !body.fullName) {
      return NextResponse.json(
        { success: false, error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    // TODO: Integrare con servizio email (SendGrid, Resend, etc.)
    // TODO: Salvare lead in database o CRM
    
    // Esempio: Invia email di notifica
    // await sendEmail({
    //   to: 'info@businessfit.it',
    //   subject: 'Nuova Richiesta Valutazione',
    //   body: `Nome: ${body.fullName}\nEmail: ${body.email}\n...`
    // })

    // Esempio: Salva in Google Sheets o Airtable
    // await saveToSheet(body)

    console.log('Form submission received:', body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Richiesta ricevuta con successo' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}
```

---

## 📱 RESPONSIVE DESIGN PATTERNS

### Mobile-First Approach
```typescript
// Esempio pattern per componenti responsive

<div className="
  px-4 py-8           // Mobile
  md:px-8 md:py-12    // Tablet
  lg:px-16 lg:py-20   // Desktop
  xl:px-24            // Large desktop
">
  <div className="
    grid 
    grid-cols-1        // Mobile: 1 colonna
    md:grid-cols-2     // Tablet: 2 colonne
    lg:grid-cols-3     // Desktop: 3 colonne
    gap-6 md:gap-8
  ">
    {/* Content */}
  </div>
</div>
```

### Typography Responsive
```typescript
<h1 className="
  text-3xl           // Mobile
  md:text-4xl        // Tablet
  lg:text-5xl        // Desktop
  xl:text-6xl        // Large
  font-bold
  leading-tight
">
```

---

## 🎯 PERFORMANCE OPTIMIZATION

### Next.js Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/images/gym-hero.jpg"
  alt="Palestra moderna"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Low quality placeholder
  className="object-cover"
/>
```

### Dynamic Imports for Heavy Components
```typescript
import dynamic from 'next/dynamic'

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div>Caricamento...</div>,
  ssr: true
})
```

### Font Optimization
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📊 ANALYTICS & TRACKING

### Google Analytics 4 Setup
```typescript
// app/layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

### Meta Pixel
```typescript
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${PIXEL_ID}');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Environment variables configurate (.env.local)
- [ ] Analytics installati e testati
- [ ] Form submission funzionante
- [ ] Immagini ottimizzate (WebP + fallback)
- [ ] Metadata SEO completi
- [ ] Open Graph tags
- [ ] Favicon generato
- [ ] robots.txt e sitemap.xml
- [ ] Performance audit (Lighthouse > 90)
- [ ] Test mobile responsive
- [ ] Cross-browser testing
- [ ] Privacy policy e cookie banner
- [ ] 404 page personalizzata
- [ ] Loading states su form

---

## 💡 PROMPT INIZIALE PER CURSOR

```
Crea una landing page Next.js 15.4 per BusinessFit usando:
- Tailwind CSS 4.1 per lo styling
- Framer Motion 12 per le animazioni
- Heroicons 2.1 per le icone
- TypeScript per type safety
- React Hook Form + Zod per form validation

La landing deve generare lead per la compravendita di palestre.

Struttura:
1. Hero con gradient overlay su immagine
2. Social proof (numeri in cards)
3. Sezione "Perché noi" (3 motivi)
4. Processo in 4 step
5. Form lead generation con validazione
6. FAQ accordion
7. Sezione acquirenti (secondaria)
8. Footer

Design: professionale ma caldo, colori navy/emerald/orange.
Mobile-first, performance-optimized, accessibility-friendly.

Iniziamo con setup progetto e Hero section.
```

---

Hai tutto pronto per iniziare su Cursor! 🚀