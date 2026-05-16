'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { allMessages, getNestedValue } from '@/lib/messages'

export default function Footer() {
  const { locale } = useParams()
  const localeStr = (locale as string) || 'fr'
  const msgs = allMessages[localeStr as keyof typeof allMessages] || allMessages.fr
  const t = (key: string) => getNestedValue(msgs, key)

  const footerLinks = [
    { href: `/${localeStr}/home`, label: t('Footer.home') },
    { href: `/${localeStr}/galerie`, label: t('Footer.galerie') },
    { href: `/${localeStr}/animale`, label: t('Footer.animale') },
    { href: `/${localeStr}/contact`, label: t('Footer.contact') },
  ]

  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <Image
              src="/images/intro/BCLC.png"
              alt="CLC"
              width={96}
              height={96}
              className="mb-1"
            />
            <p className="text-stone-400 text-xs font-light tracking-wide">
              {t('Footer.tagline')}
            </p>
          </div>

          <nav aria-label={localeStr === 'fr' ? 'Navigation pied de page' : 'Footer navigation'}>
            <ul className="flex flex-wrap gap-8" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-wider uppercase text-stone-400 hover:text-charcoal transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              href="https://instagram.com/VOTRE_COMPTE_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wider uppercase text-stone-400 hover:text-charcoal transition-colors duration-300"
            >
              {t('Footer.instagram')}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-50 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-stone-300 text-xs">
            &copy; {t('Footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </p>
          <p className="text-stone-200 text-xs">
            {t('Footer.bottomTagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
