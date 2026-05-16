'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('Lightbox')
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
      aria-label={t('imageAria', { current: currentIndex + 1, total: items.length })}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white"
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
          {/* Image / Vidéo */}
          <div className="relative aspect-[4/3] bg-stone-100">
            {item.video ? (
              <video
                className="absolute inset-0 w-full h-full object-contain"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            )}
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
         className="absolute top-5 right-5 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 text-sm tracking-widest p-4"
        aria-label={t('close')}
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
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 p-4 text-xl"
          aria-label={t('prev')}
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
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-charcoal transition-colors duration-200 p-4 text-xl"
          aria-label={t('next')}
        >
          →
        </button>
      )}
    </div>
  )
}
