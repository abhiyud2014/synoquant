import React from 'react'
import { PROCESS_STEPS, ENGAGE_CHIPS } from '../data/content'

const Process: React.FC = () => (
  <section id="process" className="relative py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
          How we work
        </span>
        <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
          A seven-step model, run the same way every time
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/[0.72]">
          From first discovery call to continuous improvement — a predictable delivery model you can
          plan around.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PROCESS_STEPS.map((s, i) => (
          <div
            key={s.num}
            className="step-card glass animate-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="step-num">{s.num}</div>
            <h3 className="text-base font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-white/[0.72]">{s.desc}</p>
          </div>
        ))}

        <div className="step-card flex flex-col justify-center rounded-[20px] border border-dashed border-teal-500/30 bg-teal-500/[0.04]">
          <h3 className="text-base font-bold text-teal-400">Engage your way</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/[0.72]">
            Every engagement model below is supported — pick the one that fits your stage.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2.5">
        {ENGAGE_CHIPS.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/60 transition-colors hover:border-teal-500/40 hover:text-teal-300"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Process
