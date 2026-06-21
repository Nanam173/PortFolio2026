import { useState } from 'react'
import { localeLabels } from '../i18n'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/types'

function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale()

  const toggle = () => {
    const next: Locale = locale === 'ja' ? 'en' : 'ja'
    setLocale(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-muted transition hover:border-white/20 hover:text-white ${className}`}
      aria-label={locale === 'ja' ? 'Switch to English' : '日本語に切り替え'}
    >
      {localeLabels[locale === 'ja' ? 'en' : 'ja']}
    </button>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { content } = useLocale()
  const { profile, navLinks, header } = content

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          {profile.name.split(' ')[0]}
          <span className="text-emerald-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10"
            onClick={() => setOpen(!open)}
            aria-label={header.openMenu}
            aria-expanded={open}
          >
            <span className="sr-only">{header.menu}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-surface-elevated px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
