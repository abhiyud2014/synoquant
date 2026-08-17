import React, { useEffect } from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, subtitle, children }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay open" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3 className="font-logo-serif text-2xl font-semibold text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-400">{subtitle}</p>}
        <div className="mt-5 text-sm leading-relaxed text-white/[0.72]">{children}</div>
      </div>
    </div>
  )
}

export default Modal
