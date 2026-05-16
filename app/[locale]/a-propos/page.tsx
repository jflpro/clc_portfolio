import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import AboutContent from '@/components/a-propos/AboutContent'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('aProposTitle'),
    description: t('aProposDesc'),
  }
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
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
