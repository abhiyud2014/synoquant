import React, { useEffect, useRef, useState } from 'react'
import { PALETTE, type CarouselItem } from '../data/content'

type SpotlightProps = {
  id?: string
  title: string
  eyebrow: string
  blurb: string
  items: CarouselItem[]
  art?: boolean
}

const Spotlight: React.FC<SpotlightProps> = ({ id, title, eyebrow, blurb, items, art }) => {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const [seen, setSeen] = useState<Set<number>>(new Set([0]))
  const [open, setOpen] = useState(false)
  const progressRef = useRef<number>(0)
  const artWrapRef = useRef<HTMLDivElement | null>(null)

  const idxRef = useRef(idx)
  const current = items[idx]
  const pal = PALETTE[idx % PALETTE.length]

  const goTo = (i: number, viaUser = true) => {
    if (i === idx) return
    if (viaUser) progressRef.current = 0
    setFading(true)
    setSeen((s) => new Set(s).add(i))
    window.setTimeout(() => {
      setIdx(i)
      setFading(false)
    }, 350)
  }

  useEffect(() => {
    const onSelect = (e: Event) => {
      const d = (e as CustomEvent<{ target?: string; key?: string }>).detail
      if (!d || d.target !== id) return
      const i = items.findIndex((it) => it.key === d.key)
      if (i >= 0) goTo(i, true)
    }
    window.addEventListener('spotlight-select', onSelect)
    return () => window.removeEventListener('spotlight-select', onSelect)
  }, [id, items])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') goTo((idxRef.current + 1) % items.length, false)
      if (e.key === 'ArrowLeft') goTo((idxRef.current - 1 + items.length) % items.length, false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, items.length])

  useEffect(() => {
    if (art && artWrapRef.current) {
      artWrapRef.current.innerHTML = `<svg class="hub-art" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">${current.art ?? ''}</svg>`
    }
  }, [idx, art, current])

  useEffect(() => {
    if (art) return
    const preload = (i: number) => {
      const url = items[i % items.length].images?.[0]?.url
      if (url) {
        const img = new Image()
        img.src = url
      }
    }
    preload(idx + 1)
    preload(idx + 2)
  }, [idx, art, items])

  useEffect(() => {
    progressRef.current = 0
    const auto = setInterval(() => goTo((idxRef.current + 1) % items.length, false), 5500)
    return () => clearInterval(auto)
  }, [items.length])

  useEffect(() => {
    idxRef.current = idx
  }, [idx])

  useEffect(() => {
    idxRef.current = idx
  }, [idx])

  useEffect(() => {
    const tick = setInterval(() => {
      progressRef.current += 50 / 5500
      const bar = document.getElementById('spot-progress')
      if (bar) bar.style.transform = `scaleX(${Math.min(1, progressRef.current)})`
    }, 50)
    return () => clearInterval(tick)
  }, [])

  return (
    <section id={id} className="cosmic-bg relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
            {eyebrow}
          </span>
          <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/[0.72]">{blurb}</p>
        </div>

        <div className="glass relative overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className={`relative min-h-[300px] overflow-hidden border-b border-white/[0.06] lg:border-b-0 lg:border-r ${pal.glow}`}>
              {art ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div ref={artWrapRef} />
                </div>
              ) : (
                <button
                  type="button"
                  aria-label="View full image"
                  onClick={() => setOpen(true)}
                  className={`absolute inset-0 block w-full cursor-zoom-in bg-contain bg-center bg-no-repeat transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
                  style={{ backgroundImage: `url(${current.images?.[0]?.url ?? ''})` }}
                />
              )}
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/15 bg-[#050507]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Full view
              </span>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2">
                  <span className={`dot ${pal.cardBorder}`} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                    {current.tagline}
                  </span>
                </div>
              </div>
            </div>

            <div className={`relative flex flex-col justify-center p-6 transition-opacity duration-300 md:p-10 ${fading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-teal-400">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: current.icon }}
                />
              </div>

              <h3 className={`text-xl font-bold md:text-2xl ${pal.accent}`}>{current.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/[0.7]">{current.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-white/[0.75]">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <svg className="h-4 w-4 shrink-0 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              {current.highlights.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {current.highlights.map((h) => (
                    <div key={h.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 text-center">
                      <div className="text-base font-extrabold text-white">{h.value}</div>
                      <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">{h.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <a
                href="#contact"
                className="btn-premium mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 text-sm font-bold text-black"
              >
                {current.ctaText}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-0 h-1 bg-white/[0.06]">
            <div id="spot-progress" className={`h-full origin-left ${pal.progressColor}`} style={{ transform: 'scaleX(0)' }} />
          </div>

          <button
            aria-label="Previous"
            onClick={() => goTo((idx - 1 + items.length) % items.length)}
            className="absolute left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#050507]/60 text-white/70 backdrop-blur-md transition-all hover:border-teal-400/50 hover:text-teal-300 md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => goTo((idx + 1) % items.length)}
            className="absolute right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#050507]/60 text-white/70 backdrop-blur-md transition-all hover:border-teal-400/50 hover:text-teal-300 md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.06] bg-[#050507]/40 px-5 py-4">
            {items.map((it, i) => {
              const isActive = i === idx
              const isSeen = seen.has(i)
              return (
                <button
                  key={it.key}
                  onClick={() => goTo(i)}
                  className={`rounded-lg border px-3 py-1.5 text-[11px] font-bold transition-all duration-300 ${
                    isActive
                      ? `scale-105 border-transparent ${PALETTE[i % PALETTE.length].tab}`
                      : `border-white/10 ${isSeen ? 'text-white/60 hover:text-white/90' : 'text-white/45 hover:text-white/70'}`
                  }`}
                >
                  {it.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#050507]/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.heading} full view`}
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xl text-white/80 transition-colors hover:border-teal-400/60 hover:text-teal-300"
          >
            ✕
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              goTo((idxRef.current - 1 + items.length) % items.length, false)
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition-colors hover:border-teal-400/60 hover:text-teal-300 md:left-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.images?.[0]?.url ?? ''}
              alt={current.heading}
              className="max-h-[82vh] max-w-[94vw] rounded-xl border border-white/10 object-contain shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                {idx + 1} / {items.length}
              </span>
              <span className="text-xs font-semibold text-teal-300">{current.images?.[0]?.caption}</span>
            </div>
          </div>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              goTo((idxRef.current + 1) % items.length, false)
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition-colors hover:border-teal-400/60 hover:text-teal-300 md:right-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Spotlight
