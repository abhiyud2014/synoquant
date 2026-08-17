import React from 'react'
import { WHY_ITEMS } from '../data/content'

const WhyUs: React.FC = () => (
  <section id="why" className="cosmic-bg relative py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
          Why Synoquant
        </span>
        <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
          Platforms engineered for measurable operational outcomes
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/[0.72]">
          Not demos, not slideware — deployed platforms with telemetry, alerts, and analytics in
          production.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_ITEMS.map((w, i) => (
          <div
            key={w.title}
            className="check-card glass animate-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="check-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{w.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/[0.72]">{w.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyUs
