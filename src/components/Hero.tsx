import { useLocale } from '../i18n/LocaleContext'

export function Hero() {
  const { content } = useLocale()
  const { profile, hero } = content

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(52, 211, 153, 0.25), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Full-stack Engineer · {profile.experienceDuration}
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="mb-2 text-xl text-white/90 sm:text-2xl">{profile.role}</p>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-surface transition hover:bg-emerald-400"
          >
            {hero.viewProjects}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {hero.viewContributions}
          </a>
        </div>
      </div>
    </section>
  )
}
