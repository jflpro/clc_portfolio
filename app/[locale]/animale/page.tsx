import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import AnimalContent from '@/components/animale/AnimalContent'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('animaleTitle'),
    description: t('animaleDesc'),
  }
}

export default function AnimalePage({ params: { locale } }: { params: { locale: string } }) {
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
