import { en } from './en'
import { ja } from './ja'
import type { Locale, PortfolioContent } from './types'

export type { Locale, PortfolioContent }

export const locales: Record<Locale, PortfolioContent> = { ja, en }

export const localeLabels: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
}

export function detectLocale(): Locale {
  const stored = localStorage.getItem('locale')
  if (stored === 'ja' || stored === 'en') return stored

  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('ja') ? 'ja' : 'en'
}
