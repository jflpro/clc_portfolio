import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('ebookTitle'),
    description: t('ebookDesc'),
  }
}

export default function EbookPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('EbookPage')
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100dvh] bg-black overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/ebook-bg.mp4"
          autoPlay
          loop
          playsInline
        />
        <div className="relative z-10 flex items-center justify-center min-h-[100dvh]">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white/80 mb-4">{t('titre')}</h1>
            <p className="font-serif text-4xl md:text-5xl text-white/80">{t('comingSoon')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
