'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/gallery-data'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const item = items[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < items.length - 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1)
      if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [currentIndex, hasPrev, hasNext, onClose, onNavigate])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} sur ${items.length}`}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/95"
        onClick={onClose}
      />

      {/* Image container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-4xl w-full mx-8 md:mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] bg-stone-100">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Caption */}
          {item.title && (
            <div className="mt-4 text-center">
              <p className="text-stone-600 text-xs tracking-widest uppercase">
                {item.title}
              </p>
            </div>
          )}

          {/* Compteur */}
          <p className="mt-2 text-center text-stone-500 text-xs">
            {currentIndex + 1} / {items.length}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Fermer */}
      <button
        onClick={onClose}
         className="absolute top-5 right-5 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 text-sm tracking-widest p-2"
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Précédent */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex - 1)
          }}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 p-3 text-xl"
          aria-label="Image précédente"
        >
          ←
        </button>
      )}

      {/* Suivant */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex + 1)
          }}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 p-3 text-xl"
          aria-label="Image suivante"
        >
          →
        </button>
      )}
    </div>
  )
}
