import React from 'react'

interface SectionFooterProps {
  message: string
  className?: string
}

export function SectionFooter({ message, className = '' }: SectionFooterProps) {
  return (
    <div className={`text-center mt-16 ${className}`}>
      <div className="inline-flex items-center space-x-2 text-sm text-[var(--color-text-meta)]">
        <span className="w-2 h-px bg-[var(--color-accent-primary)]" />
        <span className="font-mono">{message}</span>
        <span className="w-2 h-px bg-[var(--color-accent-primary)]" />
      </div>
    </div>
  )
}