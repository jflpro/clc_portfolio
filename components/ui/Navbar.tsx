'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/home', label: 'Accueil' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/animale', label: 'Communication animale' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-sm border-b border-stone-100 shadow-sm shadow-stone-50'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full h-16 flex items-center">
        {/* Logo */}
        <Link href="/home" aria-label="CLC — Retour à l'accueil">
          <Image
            src="/images/intro/BCLC.png"
            alt="CLC"
            width={96}
            height={96}
            className="hover:opacity-60 transition-opacity duration-300"
          />
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-10 ml-auto pr-6 md:pr-12" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-wider uppercase transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-charcoal border-b border-charcoal pb-0.5'
                    : 'text-stone-400 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul
          className="bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-6"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-wider uppercase transition-colors duration-300 ${
                  pathname === link.href ? 'text-charcoal' : 'text-stone-400'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
