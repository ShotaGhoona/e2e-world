'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const navigationItems = [
    { label: t('navigation.about'), href: '#about', index: '01' },
    { label: t('navigation.curriculum'), href: '#curriculum', index: '02' },
    { label: t('navigation.projectTeam'), href: '#partners', index: '03' },
    { label: t('navigation.partners'), href: '#universities', index: '04' },
    { label: t('navigation.news'), href: '#news', index: '05' },
    { label: t('navigation.contact'), href: '#contact', index: '06' }
  ]


  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-[var(--color-border-subtle)] last:border-r-0" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="font-mono font-black text-3xl text-[var(--color-accent-primary)]">
                  PAI
                </div>
                <div className="font-mono text-xl text-[var(--color-text-primary)]">: People and Ideas</div>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="font-mono text-sm text-[var(--color-text-meta)]">{t('footer.contact')}</div>
              <div className="text-[var(--color-text-secondary)]">
                <div>Email: info@pai-world.com</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
              {t('footer.navigation')}
            </div>
            <nav>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="group flex items-center space-x-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors duration-200 font-mono"
                    >
                      <span className="text-[var(--color-text-support)] group-hover:text-[var(--color-accent-primary)]">
                        [{item.index}]
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[var(--color-text-support)] font-mono">
              {t('footer.copyright')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-[var(--color-text-support)] font-mono">
              <span>{t('footer.madeWith')}</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-px bg-[var(--color-accent-primary)]" />
                <span>v2.0.1</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}