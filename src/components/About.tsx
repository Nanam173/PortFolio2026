import { useLocale } from '../i18n/LocaleContext'

export function About() {
  const { content } = useLocale()
  const { profile, about } = content

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          About
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {about.title}
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="glass rounded-2xl p-8">
            <dl className="space-y-6">
              <div>
                <dt className="mb-1 text-sm text-muted">{about.experienceYears}</dt>
                <dd className="font-medium text-white">{about.experienceYearsValue}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">{about.specialty}</dt>
                <dd className="font-medium text-white">{about.specialtyValue}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">{about.devStyle}</dt>
                <dd className="font-medium text-white">{about.devStyleValue}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">{about.locationLabel}</dt>
                <dd className="font-medium text-white">{profile.location}</dd>
              </div>
              {profile.email && (
                <div>
                  <dt className="mb-1 text-sm text-muted">{about.emailLabel}</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
