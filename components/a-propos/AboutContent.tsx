'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function AboutContent() {
  const t = useTranslations('AboutPage')
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const started = useRef(false)

  const handleCanPlay = () => {
    if (started.current) return
    started.current = true
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().then(() => {
      v.muted = false
      setMuted(false)
    }).catch(() => {
      setMuted(true)
    })
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <div className="min-h-[100dvh] bg-white">
      <section className="pt-28 md:pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
            {t('label')}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] mb-12">
            {t('titre')}
          </h1>

          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-base md:text-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
          </div>

          <div className="relative mt-16 mx-auto max-w-2xl w-full">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              src="/videos/cut-vidsound.mp4"
              autoPlay
              loop
              playsInline
              preload="none"
              onCanPlay={handleCanPlay}
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/50 transition-all duration-300 shadow-lg"
            >
              {muted ? '🔊' : '🔇'}
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
