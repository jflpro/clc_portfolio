import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import FeaturedImages from '@/components/home/FeaturedImages'
import Services from '@/components/home/Services'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('homeTitle'),
    description: t('homeDesc'),
  }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
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
