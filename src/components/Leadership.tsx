import React, { useState } from 'react'
import Modal from './Modal'
import { LEADERS, LEADER_DATA } from '../data/content'

const Leadership: React.FC = () => {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const data = openKey ? LEADER_DATA[openKey] : null
  const leader = LEADERS.find((l) => l.key === openKey)

  return (
    <section id="leadership" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
            Leadership
          </span>
          <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
            Structured for strategy, technology, and delivery
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/[0.72]">
            Four directors, four mandates — one operating model designed so nothing falls between
            the cracks.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((l, i) => (
            <button
              key={l.key}
              onClick={() => setOpenKey(l.key)}
              className="lead-card glass text-left animate-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="lead-avatar">{l.initials}</div>
              <h3 className="text-base font-bold text-white">{l.name}</h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-400">{l.role}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/[0.72]">{l.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal-400">
                View profile
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
        subtitle={data?.role ?? ''}
      >
        <p className="text-white/[0.72]">{data?.desc}</p>
        <div className="mt-6 rounded-xl border border-teal-500/20 bg-teal-500/[0.06] p-5">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-400">Mandate</h4>
          <p className="mt-2 text-sm leading-relaxed text-white/[0.75]">{data?.focus}</p>
        </div>
        {leader && (
          <div className="mt-6 flex items-center gap-3">
            <div className="lead-avatar mb-0">{leader.initials}</div>
            <div>
              <div className="text-sm font-bold text-white">{leader.name}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">{leader.role}</div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Leadership
