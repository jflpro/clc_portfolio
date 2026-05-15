'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

// TODO: Personnaliser les intitulés et descriptions de services
const services = [
  {
    number: '01',
    title: 'Vitrines commerciales',
    description:
      'Peinture directement sur vos vitrines. Boutiques, restaurants, hôtels — je transforme vos surfaces vitrées en œuvres vivantes qui attirent le regard et racontent votre univers.',
  },
  {
    number: '02',
    title: 'Projets sur mesure',
    description:
      'Chaque espace a une âme. Je crée des compositions uniques adaptées à votre identité, votre vision, votre lieu. De la conception à la réalisation.',
  },
  {
    number: '03',
    title: 'Installations artistiques',
    description:
      'Pour événements, expositions et espaces éphémères. Des créations marquantes, pensées pour laisser une empreinte dans la mémoire de vos visiteurs.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 bg-mist relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute inset-0 bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '50%' }}
      />
      <div
        className="absolute inset-0 bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/services-bg.png')", opacity: 0.2, backgroundSize: '50%', transform: 'scaleX(-1)' }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-4">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl text-charcoal"
          >
            Ce que je propose
          </h2>
        </motion.div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.14,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-stone-300 text-sm font-light mb-5">
                {service.number}
              </p>
              <h3 className="font-serif text-xl text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
          >
            Discutons de votre projet →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
