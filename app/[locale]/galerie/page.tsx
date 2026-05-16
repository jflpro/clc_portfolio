import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import GalleryClient from '@/components/galerie/GalleryClient'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('galerieTitle'),
    description: t('galerieDesc'),
  }
}

export default function GaleriePage({ params: { locale } }: { params: { locale: string } }) {
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
