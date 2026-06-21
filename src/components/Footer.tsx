import { useLocale } from '../i18n/LocaleContext'

export function Footer() {
  const { content } = useLocale()
  const { profile, footer } = content
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <a
          href="#"
          className="text-sm text-muted transition hover:text-white"
        >
          {footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
