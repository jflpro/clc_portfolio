import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import GalleryClient from '@/components/galerie/GalleryClient'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Découvrez les créations de CLC : peintures sur vitrines, œuvres personnelles, communication animale et autres créations artistiques.',
}

export default function GaleriePage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryClient />
      </main>
      <Footer />
    </>
  )
}
