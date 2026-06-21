import { useLocale } from '../i18n/LocaleContext'

export function Contact() {
  const { content } = useLocale()
  const { profile, contact } = content
  const hasLinks = profile.email || profile.github || profile.linkedin

  return (
    <section id="contact" className="border-t border-white/5 bg-surface-elevated/50 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Contact
        </h2>
        <p className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {contact.title}
        </p>
        <p className="mb-10 text-lg text-muted">
          {contact.subtitle}
        </p>

        {hasLinks ? (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-surface transition hover:bg-emerald-400"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contact.sendEmail}
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                LinkedIn
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted">{contact.noContactMessage}</p>
        )}
      </div>
    </section>
  )
}
