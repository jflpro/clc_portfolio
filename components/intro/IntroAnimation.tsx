'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const refH = 78

const letters = [
  {
    id: 'c1',
    imageSrc: '/images/intro/c1.png',
    alt: 'C',
    delay: 0,
    w: Math.round(113 * refH / 151),
    h: refH,
  },
  {
    id: 'l',
    imageSrc: '/images/intro/l.png',
    alt: 'L',
    delay: 0.9,
    w: Math.round(149 * refH / 156),
    h: refH,
  },
  {
    id: 'c2',
    imageSrc: '/images/intro/c2.png',
    alt: 'C',
    delay: 1.8,
    w: Math.round(112 * refH / 151),
    h: refH,
  },
]

export default function IntroAnimation() {
  const router = useRouter()
  const lRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const [circleOffset, setCircleOffset] = useState(0)

  useEffect(() => {
    if (lRef.current && outerRef.current) {
      const lRect = lRef.current.getBoundingClientRect()
      const outerRect = outerRef.current.getBoundingClientRect()
      const lCenter = lRect.left + lRect.width / 2
      const outerCenter = outerRect.left + outerRect.width / 2
      setCircleOffset(lCenter - outerCenter)
    }
  }, [])

  useEffect(() => {
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
    <div ref={outerRef} className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <div className="flex items-center gap-[10px]">
        {letters.map((letter) => (
          <motion.div
            key={letter.id}
            ref={letter.id === 'l' ? lRef : undefined}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: letter.delay,
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={letter.id === 'c1' ? { marginRight: -19 } : undefined}
          >
            <Image
              src={letter.imageSrc}
              alt={letter.alt}
              width={letter.w}
              height={letter.h}
              priority
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-8"
        style={{ transform: `translateX(${circleOffset}px)` }}
      >
        <Image
          src="/images/intro/circle.png"
          alt="Cercle"
          width={100}
          height={100}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-4 z-10"
        style={{ transform: `translateX(${circleOffset}px)` }}
      >
        <Image
          src="/images/intro/ihjihj.png"
          alt=""
          width={200}
          height={200}
          priority
          className="object-contain"
        />
      </motion.div>

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
