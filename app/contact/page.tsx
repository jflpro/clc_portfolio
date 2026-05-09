import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez CLC pour un projet de peinture sur vitrines, une création artistique sur mesure ou toute autre demande.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
