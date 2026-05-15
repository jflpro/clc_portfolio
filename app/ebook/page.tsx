import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Ebook',
  description: 'Ebook à venir',
}

export default function EbookPage() {
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
          <p className="font-serif text-4xl md:text-5xl text-white/80">Coming soon</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
