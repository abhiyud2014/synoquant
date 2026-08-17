import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { PLATFORMS, INDUSTRIES } from '../data/content'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = ['top', 'platforms', 'verticals', 'industries', 'about', 'process', 'why', 'leadership', 'contact']
      let current = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onDocClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.dd-root')) setOpenGroup(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const links = [
    { id: 'platforms', label: 'Platforms' },
    { id: 'verticals', label: 'Verticals' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'How We Work' },
    { id: 'why', label: 'Why Us' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ]

  const dropdowns: Record<string, { items: { title: string; href: string; key?: string }[]; seeAll: string }> = {
    platforms: {
      items: PLATFORMS.map((p) => ({ title: p.label, href: '#platforms', key: p.key })),
      seeAll: 'All Platforms',
    },
    industries: {
      items: INDUSTRIES.map((i) => ({ title: i.name, href: '#industries', key: i.key })),
      seeAll: 'All Industries',
    },
  }

  const toggleGroup = (key: string) => setOpenGroup((prev) => (prev === key ? null : key))
  const go = (href: string, key?: string) => {
    setMenuOpen(false)
    setOpenGroup(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    if (key) {
      window.dispatchEvent(new CustomEvent('spotlight-select', { detail: { target: href.slice(1), key } }))
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050507]/85 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const dd = dropdowns[l.id]
            return (
              <div
                  key={l.id}
                  className="dd-root relative"
                  onMouseEnter={() => {
                    if (dd) setOpenGroup(l.id)
                  }}
                  onMouseLeave={() => {
                    if (dd) setOpenGroup(null)
                  }}
                >
                <button
                  onClick={(e) => {
                    if (dd) {
                      e.stopPropagation()
                      toggleGroup(l.id)
                    } else {
                      go(`#${l.id}`)
                    }
                  }}
                  className={`nav-link px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                    active === l.id ? 'active' : 'text-white/60'
                  }`}
                >
                  {l.label}
                  {dd && (
                    <svg
                      className={`ml-1 inline h-3 w-3 transition-transform duration-300 ${openGroup === l.id ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </button>

                {dd && (
                  <div
                    className={`absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      openGroup === l.id
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14]/95 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                      <div className="border-b border-white/[0.06] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                        {dd.seeAll}
                      </div>
                      <div className="max-h-72 overflow-y-auto p-2">
                        {dd.items.map((it) => (
                          <button
                            key={it.title}
                            onClick={() => go(it.href, it.key)}
                            className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-white/85 transition-colors hover:bg-teal-500/10 hover:text-teal-300"
                          >
                            {it.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => go('#contact')}
            className="btn-premium rounded-xl bg-teal-400 px-5 py-2.5 text-[13px] font-bold text-black"
          >
            Book a consult
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#050507]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(`#${l.id}`)}
              className={`py-3 text-left text-sm font-semibold ${active === l.id ? 'text-teal-400' : 'text-white/70'}`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('#contact')}
            className="btn-premium mt-3 rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-black"
          >
            Book a consult
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
