import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { detectLocale, locales, type Locale, type PortfolioContent } from './index'

interface LocaleContextValue {
  locale: Locale
  content: PortfolioContent
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem('locale', next)
  }

  const content = locales[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.meta.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description)
    }
  }, [locale, content])

  return (
    <LocaleContext.Provider value={{ locale, content, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
