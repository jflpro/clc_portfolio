'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

// TODO: Remplacer les lettres texte par vos 3 images
// Chaque image doit contenir une lettre (C, L, C)
// Dimensions recommandées : 400×400px, fond blanc ou transparent
const letters = [
  {
    id: 'c1',
    imageSrc: '/images/intro/letter-c1.jpg',
    fallback: 'C',
    delay: 0,
  },
  {
    id: 'l',
    imageSrc: '/images/intro/letter-l.jpg',
    fallback: 'L',
    delay: 0.9,
  },
  {
    id: 'c2',
    imageSrc: '/images/intro/letter-c2.jpg',
    fallback: 'C',
    delay: 1.8,
  },
]

export default function IntroAnimation() {
  const router = useRouter()

  useEffect(() => {
    // L'intro ne se rejoue pas dans la même session
    const seen = sessionStorage.getItem('clc_intro_seen')
    if (seen) {
      router.replace('/home')
      return
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('clc_intro_seen', '1')
      router.push('/home')
    }, 4800)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="flex items-center gap-6 md:gap-14">
        {letters.map((letter) => (
          <motion.div
            key={letter.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: letter.delay,
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative w-20 h-20 md:w-36 md:h-36"
          >
            {/*
              Une fois vos images disponibles dans /public/images/intro/,
              remplacez le <span> ci-dessous par le bloc <Image> commenté.
            */}
            <span className="absolute inset-0 flex items-center justify-center font-serif text-6xl md:text-8xl text-charcoal tracking-widest select-none">
              {letter.fallback}
            </span>

            {/* Décommenter quand vos images sont prêtes :
            <Image
              src={letter.imageSrc}
              alt={letter.fallback}
              fill
              className="object-contain"
              priority
            />
            */}
          </motion.div>
        ))}
      </div>

      {/* Indication de chargement discrète */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-6 bg-stone-200 mx-auto" />
      </motion.div>
    </div>
  )
}
