import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('mentionsLegalesTitle'),
    description: t('mentionsLegalesDesc'),
  }
}

export default function MentionsLegalesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('MentionsLegales')
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-white pt-28 md:pt-40 pb-20 md:pb-40">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-[0.28em] uppercase text-stone-500 mb-4">{t('label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-12">{t('titre')}</h1>
          <div className="space-y-4 text-stone-600 leading-relaxed font-light text-base">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
