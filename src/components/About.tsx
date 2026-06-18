import { about, profile } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
          About
        </h2>
        <p className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          私について
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
                <dt className="mb-1 text-sm text-muted">経験年数</dt>
                <dd className="font-medium text-white">フルスタック開発 {profile.experienceDuration}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">専門領域</dt>
                <dd className="font-medium text-white">Ruby on Rails / フルスタック開発</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">開発スタイル</dt>
                <dd className="font-medium text-white">アジャイル・保守運用まで一貫対応</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm text-muted">所在地</dt>
                <dd className="font-medium text-white">{profile.location}</dd>
              </div>
              {profile.email && (
                <div>
                  <dt className="mb-1 text-sm text-muted">メール</dt>
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
