'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedImages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-8 bg-white"
      aria-label="Images à la une"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] bg-stone-100 overflow-hidden group"
          >
            <Image
              src="/images/featured/featured-1.jpg"
              alt="Création artistique CLC"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-gallery"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] bg-stone-100 overflow-hidden group md:mt-16"
          >
            <Image
              src="/images/featured/featured-2.jpg"
              alt="Création artistique CLC"
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-gallery"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-right"
        >
          <Link
            href="/galerie"
            className="text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
          >
            Voir toutes les créations →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
