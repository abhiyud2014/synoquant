import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { INDUSTRIES, INDUSTRY_DATA } from '../data/content'

const Industries: React.FC = () => {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const data = openKey ? INDUSTRY_DATA[openKey] : null

  useEffect(() => {
    const onSelect = (e: Event) => {
      const d = (e as CustomEvent<{ target?: string; key?: string }>).detail
      if (d && d.target === 'industries' && d.key) setOpenKey(d.key)
    }
    window.addEventListener('spotlight-select', onSelect)
    return () => window.removeEventListener('spotlight-select', onSelect)
  }, [])

  return (
    <section id="industries" className="cosmic-bg relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
            Industries
          </span>
          <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
            Built for environments where downtime isn't an option
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/[0.72]">
            Nine industries, one playbook: measure, monitor, predict, prevent. Select an industry to
            see how we deploy.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.key}
              onClick={() => setOpenKey(ind.key)}
              className="ind-card glass text-left animate-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-teal-500/25 bg-teal-500/10 text-teal-400">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: ind.icon }}
                />
              </div>
              <h3 className="text-lg font-bold text-white">{ind.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/[0.72]">{ind.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal-400">
                View use cases
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal
        open={!!data}
        onClose={() => setOpenKey(null)}
        title={data?.title ?? ''}
        subtitle="Industry use cases"
      >
        <p className="text-white/[0.7]">{data?.desc}</p>
        <ul className="mt-5 grid gap-2.5">
          {data?.uses.map((u) => (
            <li key={u} className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-white/[0.75]">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {u}
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  )
}

export default Industries
