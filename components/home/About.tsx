'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import type { Locale } from '@/i18n'

export default function About() {
  const t = useTranslations('About')
  const locale = useLocale() as Locale
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-0 md:py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
              {t('label')}
            </p>
            {/* TODO: Remplacer par votre titre de section */}
            <h2
              id="about-heading"
              className="font-serif text-4xl md:text-5xl leading-[1.15] text-charcoal whitespace-pre-line"
            >
              {t('titre')}
            </h2>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p1')}
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p2')}
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p3')}
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p4')}
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p5')}
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              {t('p6')}
            </p>


            <div className="pt-4">
              <Link
                href={`/${locale}/animale`}
                className="text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
              >
                {t('cta')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
