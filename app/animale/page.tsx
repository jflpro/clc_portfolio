import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import AnimalContent from '@/components/animale/AnimalContent'

export const metadata: Metadata = {
  title: 'Communication Animale',
  description:
    "La communication animale est une pratique, une sensibilité et une source d'inspiration profonde pour mon travail artistique.",
}

export default function AnimalePage() {
  return (
    <>
      <Navbar />
      <main>
        <AnimalContent />
      </main>
      <Footer />
    </>
  )
}
