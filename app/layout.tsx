import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Prompt, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['300', '500', '700'],
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
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'BusinessFit - Network Nazionale per la Compravendita di Palestre',
    description: 'Valutazione professionale gratuita della tua palestra in 48 ore.',
    type: 'website',
  },
  other: {
    'facebook-domain-verification': 'u4zqj2ams34t8gpyiawzkbt8jk1bnk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${prompt.variable} ${dmSans.variable}`}>
      <body className={dmSans.className} suppressHydrationWarning>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '919365447277610');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=919365447277610&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}

