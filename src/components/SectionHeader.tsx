import React from 'react'

interface SectionHeaderProps {
  index: string
  category: string
  title: string
  description: string
  className?: string
}

export function SectionHeader({ index, category, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <div className="font-mono text-sm text-[var(--color-text-meta)] mb-4">
        {index} / {category.toUpperCase()}
      </div>
      
      <h2 className="font-mono text-4xl md:text-6xl font-black text-[var(--color-text-primary)] mb-2">
        {title}
      </h2>
      
      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
        {description}
      </p>
    </div>
  )
}