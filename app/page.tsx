import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import GymGallery from '@/components/GymGallery'
import BuyersSection from '@/components/BuyersSection'
import SellersSection from '@/components/SellersSection'
import Process from '@/components/Process'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <WhyUs />
      <GymGallery />
      <BuyersSection />
      <SellersSection />
      <AboutUs />
      <Process />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  )
}

