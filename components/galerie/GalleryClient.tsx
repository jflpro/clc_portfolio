'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { galleryItems, galleryCategories, type GalleryCategory } from '@/lib/gallery-data'
import Lightbox from './Lightbox'

type FilterKey = 'all' | GalleryCategory

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal">
            Galerie
          </h1>
        </motion.div>
      </section>

      {/* Filtres */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto mb-10">
        <nav aria-label="Filtrer par catégorie">
          <ul className="flex flex-wrap gap-6 border-b border-stone-100 pb-5" role="list">
            {galleryCategories.map((cat) => (
              <li key={cat.key}>
                <button
                  onClick={() => setActiveFilter(cat.key as FilterKey)}
                  className={`text-xs tracking-wider uppercase transition-all duration-300 pb-1 ${
                    activeFilter === cat.key
                      ? 'text-charcoal border-b border-charcoal'
                      : 'text-stone-400 hover:text-stone-600'
                  }`}
                  aria-pressed={activeFilter === cat.key}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Grille */}
      <section
        className="px-6 md:px-12 max-w-6xl mx-auto pb-40"
        aria-label="Galerie d'œuvres"
      >
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-square bg-stone-100 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
                aria-label={`Ouvrir ${item.title ?? item.alt}`}
              >
{item.video ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/8 transition-colors duration-400" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-400 text-sm py-20 tracking-wide">
            Aucune création dans cette catégorie pour l&apos;instant.
          </p>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>

      {/* Scroll to top — fixed, discret */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm border border-stone-200 text-stone-400 hover:text-charcoal hover:border-stone-400 transition-all duration-300 shadow-sm"
        aria-label="Remonter en haut de page"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}
