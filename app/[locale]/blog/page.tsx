import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('blogTitle'),
    description: t('blogDesc'),
  }
}

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('BlogPage')
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100dvh] bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4">{t('titre')}</h1>
          <p className="text-stone-400 text-lg tracking-wide">{t('comingSoon')}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
