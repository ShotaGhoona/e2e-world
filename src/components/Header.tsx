import React from 'react'
import { ThemeToggle } from './ThemeToggle'

const navigationItems = [
  { label: 'e2eとは', href: '#about', index: '01' },
  { label: '学べること', href: '#curriculum', index: '02' },
  { label: 'パートナー', href: '#partners', index: '03' },
  { label: '参画大学', href: '#universities', index: '04' },
  { label: 'お知らせ', href: '#news', index: '05' },
]

export function Header() {
  return (
    <>
    <header className="fixed left-0 right-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-[var(--color-border-subtle)] last:border-r-0" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className={`flex items-center space-x-4`}>
          <div className="font-mono font-black text-2xl">
            <span className="text-[var(--color-text-primary)]">&lt;</span>
            <span className="text-[var(--color-accent-primary)]">/</span>
            <span className="text-[var(--color-text-primary)]">e2e&gt;</span>
          </div>
          <div className="font-mono text-2xl text-[var(--color-text-primary)]">World</div>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="font-mono">
            <ul className="flex space-x-6">
              {navigationItems.map((item) => (
                <li key={item.label} className="group">
                  <a 
                    href={item.href}
                    className="flex items-center space-x-2 text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors duration-200"
                  >
                    <span className="text-[var(--color-text-support)] group-hover:text-[var(--color-accent-primary)]">[{item.index}]</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Theme Toggle and Contact Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="bg-[var(--color-accent-primary)] text-black px-6 py-3 text-sm font-mono font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative group">
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors duration-200 p-2">
            <div className="font-mono text-xs mb-1 text-[var(--color-text-support)]">menu()</div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </header>
    </>
  )
}