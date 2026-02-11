'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
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
  gymSize: z.enum(['500-1000', '1000-1500', 'over1500']),
  notes: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: 'Devi accettare la privacy policy'
  })
})

type FormData = z.infer<typeof formSchema>

// Constants
const ITALIAN_REGIONS = [
  { value: 'abruzzo', label: 'Abruzzo' },
  { value: 'basilicata', label: 'Basilicata' },
  { value: 'calabria', label: 'Calabria' },
  { value: 'campania', label: 'Campania' },
  { value: 'emilia-romagna', label: 'Emilia-Romagna' },
  { value: 'friuli-venezia-giulia', label: 'Friuli-Venezia Giulia' },
  { value: 'lazio', label: 'Lazio' },
  { value: 'liguria', label: 'Liguria' },
  { value: 'lombardia', label: 'Lombardia' },
  { value: 'marche', label: 'Marche' },
  { value: 'molise', label: 'Molise' },
  { value: 'piemonte', label: 'Piemonte' },
  { value: 'puglia', label: 'Puglia' },
  { value: 'sardegna', label: 'Sardegna' },
  { value: 'sicilia', label: 'Sicilia' },
  { value: 'trentino-alto-adige', label: 'Trentino-Alto Adige' },
  { value: 'toscana', label: 'Toscana' },
  { value: 'umbria', label: 'Umbria' },
  { value: 'valle-d-aosta', label: 'Valle d\'Aosta' },
  { value: 'veneto', label: 'Veneto' }
]

const USER_TYPES = [
  { value: 'seller', label: 'Proprietario interessato a vendere' },
  { value: 'valuation', label: 'Proprietario interessato a una valutazione' },
  { value: 'buyer', label: 'Investitore/Acquirente' }
]

const GYM_SIZES = [
  { value: '500-1000', label: '500-1000mq' },
  { value: '1000-1500', label: '1000-1500mq' },
  { value: 'over1500', label: 'Oltre 1500mq' }
]

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
        className="bg-blue-50 border-2 border-blue-500 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">
          Grazie per la tua richiesta!
        </h3>
        <p className="text-blue-700">
          Ti contatteremo entro 24 ore per la valutazione.
        </p>
      </motion.div>
    )
  }

  return (
    <section id="form-valutazione" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-prompt font-bold uppercase text-black mb-4">
            Richiedi la Tua Valutazione Gratuita
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 break-words px-4">
            Compila il form e ricevi una valutazione professionale della tua palestra entro 48 ore.
          </p>
        </motion.div>

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
                      className="w-4 h-4 text-black focus:ring-blue-500"
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
                      className="w-4 h-4 text-black focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{size.label}</span>
                  </label>
                ))}
              </div>
              {errors.gymSize && (
                <p className="mt-1 text-sm text-red-500">{errors.gymSize.message}</p>
              )}
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
                  className="mt-1 w-4 h-4 text-black focus:ring-blue-500 rounded"
                />
                <span className="text-sm text-gray-700">
                  Accetto la <a href="https://www.iubenda.com/privacy-policy/86224438" target="_blank" rel="noopener noreferrer" className="text-black underline">privacy policy</a> e 
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
              {isSubmitting ? 'Invio in corso...' : 'Invia'}
            </Button>

            {/* Reassurance */}
            <p className="text-center text-sm text-gray-500">
              🔒 I tuoi dati sono trattati in modo riservato. Ti ricontatteremo entro 24/48h.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

