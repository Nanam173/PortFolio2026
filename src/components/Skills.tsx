import { useLocale } from '../i18n/LocaleContext'

export function Skills() {
  const { content } = useLocale()
  const { skills } = content

  return (
    <section id="skills" className="border-y border-white/5 bg-surface-elevated/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Skills
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          {skills.title}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
