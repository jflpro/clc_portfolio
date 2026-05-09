'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
              Démarche artistique
            </p>
            {/* TODO: Remplacer par votre titre de section */}
            <h2
              id="about-heading"
              className="font-serif text-4xl md:text-5xl leading-[1.15] text-charcoal"
            >
              Une sensibilité
              <br />
              qui habite
              <br />
              chaque trait
            </h2>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            {/* TODO: Remplacer par votre texte de présentation */}
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              Je peins la lumière là où elle traverse — sur le verre, sur les
              vitrines, sur toutes ces surfaces qui séparent et relient à la
              fois. Mon travail naît d&apos;une observation profonde : des
              animaux, de la nature, des silences entre les choses.
            </p>
            <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
              Chaque création est un dialogue. Entre moi et l&apos;espace.
              Entre l&apos;espace et celui qui le traverse.
            </p>

            <div className="pt-4">
              <Link
                href="/animale"
                className="text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
              >
                Communication animale →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
