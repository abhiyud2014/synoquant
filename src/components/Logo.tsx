import React from 'react'

const Logo: React.FC<{ compact?: boolean }> = () => (
  <a href="#top" className="group flex select-none items-center" aria-label="Synoquant home">
    <img
      src="/assets/synoquant/logo-icon.png"
      alt="Synoquant"
      className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.35)]"
    />
    <span className="ml-0 flex max-w-0 flex-col overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-[170px] group-hover:opacity-100">
      <span className="font-logo-serif text-lg font-bold leading-none tracking-wide text-white">Synoquant</span>
      <span className="mt-1 text-[8px] font-bold uppercase leading-none tracking-[0.28em] text-teal-400/90">
        Industrial IoT · AI Ecosystems
      </span>
    </span>
  </a>
)

export default Logo