import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['fr', 'en', 'pt'] as const
export const defaultLocale = 'fr' as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale: rawLocale }) => {
  const locale: string = rawLocale ?? defaultLocale
  if (!locales.includes(locale as Locale)) notFound()

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
