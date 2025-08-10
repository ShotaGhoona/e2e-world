'use client'
import React, { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navigationItems = [
  { label: 'e2eとは', href: '#about', index: '01' },
  { label: '学べること', href: '#curriculum', index: '02' },
  { label: 'パートナー', href: '#partners', index: '03' },
  { label: '参画大学', href: '#universities', index: '04' },
  { label: 'お知らせ', href: '#news', index: '05' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

            <a href="#contact">
              <button className="bg-[var(--color-accent-primary)] text-black px-6 py-3 text-sm font-mono font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative group">
                <span className="relative z-10">お問い合わせ</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </a>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors duration-200 p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="fixed inset-0 z-50 md:hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="absolute top-0 right-0 h-full w-80 bg-[var(--color-bg-primary)] border-l border-[var(--color-border)] shadow-2xl transform transition-transform duration-300 ease-out">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full">
              <div className="grid grid-cols-4 h-full">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="border-r border-[var(--color-border-subtle)] last:border-r-0" />
                ))}
              </div>
            </div>
          </div>

          {/* Menu Header */}
          <div className="relative z-10 px-8 py-6 border-b border-[var(--color-border)]">
            <div className="flex items-center justify-between">
              <div className="font-mono font-black text-xl">
                <span className="text-[var(--color-text-primary)]">&lt;</span>
                <span className="text-[var(--color-accent-primary)]">/</span>
                <span className="text-[var(--color-text-primary)]">e2e&gt;</span>
                <span className="text-base text-[var(--color-text-primary)] ml-2">World</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors duration-200 p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="relative z-10 px-8 py-8">
            <nav className="space-y-6">
              {navigationItems.map((item, index) => (
                <div key={item.label} className="group">
                  <a 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 border-b border-[var(--color-border)]/30 group-hover:border-[var(--color-accent-primary)]/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-sm text-[var(--color-text-support)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                          [{item.index}]
                        </span>
                        <span className="font-mono text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <div className="w-6 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-accent-primary)] transition-all duration-300 group-hover:w-12" />
                    </div>
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 border-t border-[var(--color-border)]">
            <div className="space-y-4">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-[var(--color-text-support)]">テーマ</span>
                <ThemeToggle />
              </div>
              
              {/* Contact Button */}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[var(--color-accent-primary)] text-black py-3 px-6 font-mono font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative group">
                  <span className="relative z-10">お問い合わせ</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
                </button>
              </a>

              {/* Meta Info */}
              <div className="text-center font-mono text-xs text-[var(--color-text-support)]">
                v2.0.1
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}