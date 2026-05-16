'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale } from '@/i18n'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const locale = useLocale() as Locale
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: `/${locale}/home`, label: t('home') },
    { href: `/${locale}/galerie`, label: t('galerie') },
    { href: `/${locale}/ebook`, label: t('ebook') },
    { href: `/${locale}/animale`, label: t('animale') },
    { href: `/${locale}/a-propos`, label: t('aPropos') },
    { href: `/${locale}/contact`, label: t('contact') },
    { href: `/${locale}/blog`, label: t('blog') },
  ]

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
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="w-full h-16 flex items-center">
        {/* Logo */}
        <Link href={`/${locale}/home`} aria-label={t('logoAria')}>
          <Image
            src="/images/intro/BCLC.png"
            alt="CLC"
            width={64}
            height={64}
            priority
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
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t('menuClose') : t('menuOpen')}
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-[90dvh] opacity-100' : 'max-h-0 opacity-0'
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
                className={`text-xs tracking-wider uppercase transition-colors duration-300 py-3 ${
                  pathname === link.href ? 'text-charcoal' : 'text-stone-400'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </header>
  )
}
