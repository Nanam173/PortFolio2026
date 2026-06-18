import { contributions } from '../data/portfolio'

export function Work() {
  const featured = contributions.find((c) => c.featured)
  const rest = contributions.filter((c) => !c.featured)

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Work
        </h2>
        <p className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          主な貢献
        </p>
        <p className="mb-12 max-w-2xl text-muted">
          設計から運用まで、プロダクトの価値向上に直結する機能を複数リードしてきました。
        </p>

        {featured && (
          <article className="mb-6 glass rounded-2xl border-emerald-500/20 p-8 sm:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {featured.badge && (
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-surface">
                  {featured.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white sm:text-2xl">{featured.title}</h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-muted">{featured.description}</p>
            <ul className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((item) => (
            <article
              key={item.title}
              className="flex flex-col glass rounded-2xl p-6 transition hover:border-emerald-500/20 hover:bg-white/[0.04]"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {item.badge && (
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
