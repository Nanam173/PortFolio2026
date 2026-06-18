import { sideProject } from '../data/portfolio'

export function SideProject() {
  return (
    <section id="side-project" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Personal Project
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          個人開発
        </p>

        <article className="relative overflow-hidden glass rounded-2xl border-dashed border-white/15 p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                {sideProject.badge}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                {sideProject.status}
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              {sideProject.title}
            </h3>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
              {sideProject.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {sideProject.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
