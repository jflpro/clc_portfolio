'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Section principale"
    >
      <div
        className="absolute inset-0 bg-center"
        style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '50%' }}
      />
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
            Peinture sur vitrines · Créations artistiques
          </motion.p>

          {/* Titre principal — H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl md:text-7xl leading-[1.08] text-charcoal mb-6 text-balance"
          >
            L&apos;art qui{' '}
            <em className="not-italic text-stone-400">transforme</em>
            <br />
            vos espaces
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-stone-500 max-w-md leading-relaxed mb-12 font-light"
          >
            Je peins directement sur vos vitrines et surfaces vitrées. Chaque
            création est unique, pensée pour votre espace et votre identité.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/galerie"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white text-xs tracking-[0.15em] uppercase hover:bg-stone-800 transition-colors duration-300"
            >
              Voir les créations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal text-charcoal text-xs tracking-[0.15em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>

        <div className="w-full">
          <img
            src="/images/hero-bg.png"
            alt="Création CLC"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-300">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-stone-200"
        />
      </motion.div>
    </section>
  )
}
