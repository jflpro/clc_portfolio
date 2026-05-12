import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import AboutContent from '@/components/a-propos/AboutContent'

export const metadata: Metadata = {
  title: 'À propos de moi',
  description:
    "Découvrez mon parcours, ma passion pour la peinture sur vitrines et la communication animale, et l'histoire derrière CLC.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
