'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import type { Locale } from '@/i18n'

export default function Hero() {
  const t = useTranslations('Hero')
  const locale = useLocale() as Locale

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white"
      aria-label="Section principale"
    >
      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="max-w-xl">
          {/* Accroche */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-8"
          >
            {t('accroche')}
          </motion.p>

          {/* Titre principal — H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl md:text-7xl leading-[1.08] text-charcoal mb-6 text-balance"
          >
            {t('titre1')}{' '}
            <em className="not-italic text-stone-400">{t('titre1Em')}</em>
            <br />
            {t('titre2')}
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-stone-500 max-w-md leading-relaxed mb-12 font-light"
          >
            {t('sousTitre')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/galerie`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white text-xs tracking-[0.15em] uppercase hover:bg-stone-800 transition-colors duration-300"
            >
              {t('ctaGalerie')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal text-charcoal text-xs tracking-[0.15em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              {t('ctaContact')}
            </Link>
          </motion.div>
        </div>

        <div className="w-full flex items-center justify-center">
          <img
            src="/images/lumineux.png"
            alt={t('imgAlt')}
            style={{ width: 'auto', height: 'auto', transform: 'scale(1.275)' }}
          />
        </div>
      </div>
    </div>


    </section>
  )
}
