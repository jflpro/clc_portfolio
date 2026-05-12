'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AboutContent() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().then(() => {
      video.muted = false
      setIsMuted(false)
    }).catch(() => {
      setIsMuted(true)
    })
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
            À propos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] mb-12">
            Mon parcours
          </h1>

          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-base md:text-lg">
            <p>
              Je suis une artiste passionnée par la création visuelle sous toutes
              ses formes. Mon travail s&apos;articule autour de trois axes : la
              peinture sur vitrines, la communication animale, et la création
              artistique personnelle.
            </p>
            <p>
              Depuis mes premiers projets, j&apos;ai eu la chance de collaborer
              avec de nombreux commerçants et particuliers pour donner vie à
              leurs espaces à travers des vitrines uniques et sur mesure.
            </p>
            <p>
              La communication animale est venue enrichir ma pratique en y
              apportant une dimension sensible et intuitive. Elle m&apos;a permis
              de développer une approche plus profonde du lien entre l&apos;humain
              et l&apos;animal, que je retranscris dans mes créations.
            </p>
            <p>
              Chaque projet est pour moi une nouvelle aventure, une opportunité
              de raconter une histoire à travers les couleurs, les formes et les
              textures.
            </p>
          </div>

          <div className="relative mt-16 mx-auto max-w-2xl w-full">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              src="/videos/cut-vidsound.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/50 transition-all duration-300 shadow-lg"
              aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? '🔊' : '🔇'}
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
