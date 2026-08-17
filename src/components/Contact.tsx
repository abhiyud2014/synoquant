import React from 'react'
import { EMAILS, OFFICES } from '../data/content'

const Contact: React.FC = () => (
  <section id="contact" className="cosmic-bg relative overflow-hidden py-24">
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(circle at 50% 100%, rgba(45,212,191,0.14) 0%, transparent 55%), radial-gradient(circle at 20% 20%, rgba(15,110,86,0.16) 0%, transparent 45%)',
      }}
    />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
            Contact
          </span>
          <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
            Let's discuss what your operations need next.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/[0.72]">
            Tell us where the blind spot is — we'll show you what telemetry would find there.
          </p>
          <a
            href={`mailto:${EMAILS[0]}`}
            className="btn-premium animate-cta-primary mt-9 inline-flex items-center gap-2 rounded-xl bg-teal-400 px-8 py-4 text-sm font-bold text-black"
          >
info@synoquant.in
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { title: 'COO', email: 'dev@synoquant.in' },
            { title: 'CEO Office', email: 'raj@synoquant.in' },
            { title: 'Learning & Partnerships', email: 'tanmay@synoquant.in' },
            { title: 'Technology & AI', email: 'manasrath@synoquant.in' },
          ].map((c) => (
            <a
              key={c.title}
              href={`mailto:${c.email}`}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_12px_32px_rgba(45,212,191,0.12)]"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">{c.title}</div>
              <div className="mt-2 text-sm font-bold text-teal-400 group-hover:text-teal-300">{c.email}</div>
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-4 text-center md:grid-cols-3">
          {OFFICES.map((o) => (
            <div key={o} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-4 text-[13px] font-semibold text-white/60">
              {o}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Contact
