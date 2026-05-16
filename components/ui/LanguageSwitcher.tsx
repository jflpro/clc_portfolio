'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/i18n'

const labels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  pt: 'PT',
}

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()

  const stripLocale = (path: string) => {
    const regex = new RegExp(`^/(${locales.join('|')})(/|$)`)
    return path.replace(regex, '/')
  }

  const pathWithoutLocale = stripLocale(pathname)

  return (
    <div className="flex items-center gap-1.5 ml-6 pl-6 border-l border-stone-200">
      {locales.map((l) => {
        const isActive = l === locale
        const href = pathWithoutLocale === '/' ? `/${l}` : `/${l}${pathWithoutLocale}`
        return (
          <Link
            key={l}
            href={href}
            className={`text-xs tracking-wider uppercase transition-colors duration-200 px-1.5 py-0.5 rounded ${
              isActive
                ? 'text-charcoal font-medium'
                : 'text-stone-300 hover:text-stone-500'
            }`}
            aria-current={isActive ? 'true' : undefined}
          >
            {labels[l]}
          </Link>
        )
      })}
    </div>
  )
}
