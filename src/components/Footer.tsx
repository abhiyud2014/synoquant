import React from 'react'
import Logo from './Logo'
import { FOOTER_COLS } from '../data/content'

const Footer: React.FC = () => {
  const go = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/[0.65]">
              Industrial IoT + AI ecosystems for plants, grids, and enterprises that can't afford to
              guess.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/65 transition-all hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_16px_rgba(45,212,191,0.25)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.6c0-2.05-.04-4.7-2.86-4.7-2.86 0-3.3 2.24-3.3 4.55V24H8V8z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/65 transition-all hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_16px_rgba(45,212,191,0.25)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.6-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L6.6 3.3h-2.2l13.2 17.3z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/65 transition-all hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_16px_rgba(45,212,191,0.25)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => {
                  const isAnchor = ['About', 'Platforms', 'Verticals', 'Industries', 'How we work', 'Why us', 'Leadership'].includes(l)
                  return (
                    <li key={l}>
                      {isAnchor ? (
                        <button
                          onClick={() => go(`#${l === 'How we work' ? 'process' : l === 'Why us' ? 'why' : l.toLowerCase()}`)}
                          className="text-[13px] text-white/65 transition-colors hover:text-teal-300"
                        >
                          {l}
                        </button>
                      ) : (
                        <span className="text-[13px] text-white/65">{l}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row">
          <p className="text-xs text-white/50">© 2026 Synoquant Pvt. Ltd. All rights reserved.</p>
          <p className="text-xs font-semibold text-teal-400/80">Built for enterprises that measure what matters.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
