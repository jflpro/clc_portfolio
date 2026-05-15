import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'CLC — Artiste | Peinture sur Vitrines & Créations Artistiques',
    template: '%s — CLC',
  },
  description:
    'CLC est une artiste spécialisée en peinture sur vitrines, créations artistiques sur surfaces vitrées et communication animale. Un univers de pureté, sensibilité et sophistication.',
  keywords: [
    'artiste',
    'peinture sur vitrines',
    'art contemporain',
    'communication animale',
    'création artistique',
    'vitrine commerciale',
    'décoration vitrine',
  ],
  authors: [{ name: 'CLC' }],
  openGraph: {
    title: 'CLC — Artiste | Peinture sur Vitrines',
    description:
      'Un univers artistique de pureté, sensibilité et sophistication.',
    type: 'website',
    locale: 'fr_FR',
    // TODO: Mettre à jour avec votre domaine final
    url: 'https://clcportfolio.vercel.app',
    siteName: 'CLC Portfolio',
    images: [
      {
        // TODO: Remplacer par votre image Open Graph (1200×630)
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CLC — Artiste peintre sur vitrines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLC — Artiste | Peinture sur Vitrines',
    description:
      'Un univers artistique de pureté, sensibilité et sophistication.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
