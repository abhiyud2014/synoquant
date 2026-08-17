import React from 'react'

const About: React.FC = () => (
  <section id="about" className="relative py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-4 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-teal-400">
            About Synoquant
          </span>
          <h2 className="glow-heading font-logo-serif text-4xl font-bold text-white md:text-5xl">
            Built for enterprises that{' '}
            <span className="gradient-text italic">measure what matters.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/[0.7]">
            Synoquant is an Industrial IoT, AI, and enterprise automation company. We design and
            deploy mission-critical platforms for plants, utilities, and enterprises where downtime
            isn't an option and guessing isn't a strategy.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/[0.7]">
            From VFD and conveyor monitoring to computer-vision safety and AI energy intelligence,
            every platform ships with real-time telemetry, predictive analytics, and dashboards
            operators actually use.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            {
              title: 'Our Mission',
              desc: 'To make industrial operations intelligent, visible, and predictable — through AI, IoT, and automation that run in production, not in presentations.',
            },
            {
              title: 'Our Vision',
              desc: 'An ecosystem of connected industrial platforms that every plant, grid, and enterprise can trust with the operations that matter most.',
            },
            {
              title: 'Our Philosophy',
              desc: 'Measure everything. Predict what you can. Prevent what you can\u2019t. Every platform we build follows the same principle: telemetry first, intelligence always.',
            },
          ].map((b, i) => (
            <div
              key={b.title}
              className="glass cyber-pulse rounded-2xl p-6 animate-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-400">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/[0.7]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
