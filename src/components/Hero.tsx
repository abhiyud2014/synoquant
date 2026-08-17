import React from 'react'
import { HERO_BG_IMG, TICKER_ITEMS } from '../data/content'

const Hero: React.FC = () => (
  <section id="top" className="relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG_IMG})` }}
    />
    <div className="absolute inset-0 bg-[#050507]/88" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/70 via-transparent to-[#050507]" />
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background:
          'radial-gradient(circle at 25% 25%, rgba(15,110,86,0.35) 0%, transparent 45%), radial-gradient(circle at 75% 70%, rgba(45,212,191,0.2) 0%, transparent 45%)',
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="max-w-3xl">
        <div className="animate-subtitle-reveal mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-gradient-to-r from-transparent to-teal-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-teal-400">
            Industrial IoT · AI Analytics · Automation
          </span>
        </div>

        <h1 className="font-logo-serif text-4xl font-bold leading-[1.12] text-white md:text-6xl">
          <span className="shimmer-text">Industrial IoT + AI ecosystems</span>
          <br />
          for plants, grids, and enterprises that{' '}
          <span className="glow-heading gradient-text italic">can't afford to guess.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/[0.7]">
          Synoquant designs, builds, and runs mission-critical IIoT and AI platforms — monitoring,
          analytics, and automation for industrial operations that run 24×7.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="btn-premium animate-cta-primary rounded-xl bg-teal-400 px-7 py-3.5 text-sm font-bold text-black"
          >
            Book a consult
            <svg className="ml-2 inline h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#platforms"
            className="btn-premium rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md"
          >
            See what we build
          </a>
        </div>
      </div>
    </div>

    <div className="ticker full-bleed">
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map(([name, desc], i) => (
          <span key={i}>
            <b>{name}</b>
            <span className="mx-2 text-white/30">·</span>
            {desc}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Hero