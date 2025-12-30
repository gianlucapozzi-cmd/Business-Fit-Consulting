# BusinessFit Landing Page

Landing page professionale per BusinessFit - Il Primo Network Nazionale per la Compravendita di Palestre.

## 🚀 Stack Tecnologico

- **Next.js 15.4+** - Framework React
- **Tailwind CSS 4.1+** - Styling
- **Framer Motion 12+** - Animazioni
- **Heroicons 2.1+** - Icone
- **TypeScript** - Type safety
- **React Hook Form + Zod** - Form validation

## 📦 Installazione

```bash
npm install
```

## 🛠️ Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Struttura Progetto

```
businessfit-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── submit-form/
│           └── route.ts
├── components/
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── WhyUs.tsx
│   ├── Process.tsx
│   ├── LeadForm.tsx
│   ├── FAQ.tsx
│   ├── BuyersSection.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── Card.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

## 🎨 Caratteristiche

- ✅ Design responsive mobile-first
- ✅ Animazioni fluide con Framer Motion
- ✅ Form con validazione completa
- ✅ SEO ottimizzato
- ✅ Performance ottimizzate
- ✅ TypeScript per type safety

## 📝 Note

- Aggiungere l'immagine hero in `/public/images/gym-hero.jpg`
- Configurare l'integrazione email nel file `/app/api/submit-form/route.ts`
- Aggiungere analytics (Google Analytics, Meta Pixel) se necessario

## 🚀 Deployment

Il progetto è pronto per il deployment su Vercel:

```bash
vercel
```

