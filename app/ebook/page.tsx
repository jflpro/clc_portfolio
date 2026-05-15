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
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="font-serif text-4xl md:text-5xl text-stone-300">Coming soon</p>
      </main>
      <Footer />
    </>
  )
}
