import { useLocale } from '../i18n/LocaleContext'

export function Experience() {
  const { content } = useLocale()
  const { experience, stats } = content

  return (
    <section id="experience" className="border-t border-white/5 bg-surface-elevated/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Experience
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {experience.sectionTitle}
        </p>

        <article className="glass mb-12 overflow-hidden rounded-2xl">
          <div className="border-b border-white/10 p-8 sm:p-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {experience.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              {experience.title}
            </h3>

            <dl className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <div className="flex gap-2">
                <dt className="text-white/50">{experience.roleLabel}</dt>
                <dd>{experience.role}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">{experience.periodLabel}</dt>
                <dd>{experience.period}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">{experience.teamLabel}</dt>
                <dd>{experience.team}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/50">{experience.methodLabel}</dt>
                <dd>{experience.method}</dd>
              </div>
            </dl>

            <p className="mb-4 text-lg leading-relaxed text-muted">{experience.description}</p>
            <p className="text-sm leading-relaxed text-muted/80">{experience.context}</p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-elevated/80 px-4 py-6 text-center sm:px-6"
              >
                <p className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                <p className="text-xs text-muted">{stat.sub}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
