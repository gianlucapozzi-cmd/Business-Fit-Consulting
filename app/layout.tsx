import type { Metadata } from 'next'
import { Inter, Prompt, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-prompt'
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['200'],
  display: 'swap',
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  title: 'BusinessFit - Il Primo Network Nazionale per la Compravendita di Palestre',
  description: 'Scopri quanto vale davvero la tua palestra con una valutazione professionale gratuita in 48 ore. Il primo network nazionale per la compravendita di palestre.',
  keywords: 'palestre in vendita, valutazione palestra, compravendita palestre, investimenti fitness',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'BusinessFit - Network Nazionale per la Compravendita di Palestre',
    description: 'Valutazione professionale gratuita della tua palestra in 48 ore.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${prompt.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}

