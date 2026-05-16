import fr from '@/messages/fr.json'
import en from '@/messages/en.json'
import pt from '@/messages/pt.json'

export const allMessages = { fr, en, pt } as const

export function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}
