import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import FeaturedImages from '@/components/home/FeaturedImages'
import Services from '@/components/home/Services'

export const metadata: Metadata = {
  title: 'CLC — Artiste | Peinture sur Vitrines & Créations',
  description:
    'CLC réalise des peintures sur vitrines, créations artistiques et installations pour commerces et espaces. Découvrez son univers.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedImages />
        <Services />
      </main>
      <Footer />
    </>
  )
}
