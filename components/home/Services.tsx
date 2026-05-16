'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import type { Locale } from '@/i18n'

export default function Services() {
  const t = useTranslations('Services')
  const locale = useLocale() as Locale
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const services = [
    { title: t('s1Titre'), description: t('s1Desc') },
    { title: t('s2Titre'), description: t('s2Desc') },
    { title: t('s3Titre'), description: t('s3Desc') },
  ]

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 bg-mist relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Desktop: full-section background overlay */}
      <div
        className="hidden md:block absolute inset-0 bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '43%' }}
      />
      <div
        className="hidden md:block absolute inset-0 bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '43%', transform: 'scaleX(-1)' }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl text-charcoal"
          >
            {t('titre')}
          </h2>
        </motion.div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.14,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="font-serif text-xl text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: background image inline between services and CTA */}
        <div className="md:hidden relative h-48 mb-16">
          <div
            className="absolute inset-0 bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '50%' }}
          />
          <div
            className="absolute inset-0 bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '50%', transform: 'scaleX(-1)' }}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`/${locale}/contact`}
            className="text-xs tracking-[0.2em] uppercase text-stone-500 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
