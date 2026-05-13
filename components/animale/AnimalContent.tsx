'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function AnimalContent() {
  const textRef = useRef(null)
  const quoteRef = useRef(null)
  const isTextInView = useInView(textRef, { once: true, margin: '-80px' })
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-80px' })

  return (
    <div className="bg-white">
      {/* En-tête */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
            Sensibilité · Intuition
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] mb-8">
            Communication
            <br />
            animale
          </h1>
          {/* TODO: Remplacer par votre texte d'introduction */}
          <p className="text-base md:text-lg text-stone-500 leading-relaxed font-light max-w-lg">
            Avant d&apos;être une pratique, la communication animale est une
            façon d&apos;être au monde. Une écoute que j&apos;ai développée
            depuis toujours, et qui nourrit profondément mon travail artistique.
          </p>
        </motion.div>
      </section>

      {/* Vidéo 1 — grande, immersive */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[16/7] bg-stone-100 overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/animale/animale-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </section>

      {/* Texte principal */}
      <section
        ref={textRef}
        className="max-w-6xl mx-auto px-6 md:px-12 mb-28"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* TODO: Remplacer par votre titre de section */}
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
              L&apos;écoute comme
              <br />
              forme d&apos;art
            </h2>
            {/* TODO: Remplacer par votre texte principal */}
            <div className="space-y-5 text-stone-500 font-light leading-relaxed">
              <p>
                Je pratique la communication animale depuis des années. Ce
                n&apos;est pas un outil. C&apos;est un langage que j&apos;ai
                appris à lire — dans les silences, les gestes, les regards.
              </p>
              <p>
                Ce lien avec le vivant est présent dans chaque œuvre. Il guide
                ma main, oriente mes couleurs, inspire mes formes.
              </p>
              <p>
                Les animaux m&apos;apprennent la présence absolue — cette
                qualité d&apos;attention que je cherche aussi à transmettre dans
                mes créations sur verre.
              </p>
            </div>
          </motion.div>

          {/* Note personnelle optionnelle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
              Note personnelle
            </p>
            {/*
              TODO: Remplacer par votre note personnelle
              Supprimer ce bloc si vous ne souhaitez pas le garder
            */}
            <blockquote className="font-serif text-xl md:text-2xl text-stone-400 leading-relaxed italic">
              &ldquo;TODO : Votre phrase personnelle ici. Une pensée, une
              anecdote, une conviction qui vous ressemble.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Vidéo 2 — format portrait, intimiste */}
      <section
        ref={quoteRef}
        className="max-w-2xl mx-auto px-6 md:px-12 mb-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isQuoteInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-square bg-stone-100 overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/animale/animale-2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </section>

      {/* CTA vers contact */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-32 text-center">
        <p className="text-stone-400 font-light text-sm mb-6">
          Vous souhaitez en savoir plus sur cette pratique ?
        </p>
        <Link
          href="/contact"
          className="inline-block text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
        >
          Me contacter →
        </Link>
      </section>
    </div>
  )
}
