'use client'

import React from 'react'
import { ParticleBackground } from '@/components/ParticleBackground'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'
import { useLanguage } from '@/contexts/LanguageContext'

export function Cooperators() {
  const { t } = useLanguage()
  const partnersData = [
    {
      title: t('cooperators.organizations.starup.title'),
      role: t('cooperators.organizations.starup.role'),
      description: t('cooperators.organizations.starup.description'),
      type: 'innovation' as const,
      logoPlaceholder: '/partner/starup.png'
    },
    {
      title: t('cooperators.organizations.sakuranesia.title'),
      role: t('cooperators.organizations.sakuranesia.role'),
      description: t('cooperators.organizations.sakuranesia.description'),
      type: 'education' as const,
      logoPlaceholder: '/partner/sakuranesia.png'
    },
    {
      title: t('cooperators.organizations.government.title'),
      role: t('cooperators.organizations.government.role'),
      description: t('cooperators.organizations.government.description'),
      type: 'government' as const,
      logoPlaceholder: '/partner/gyousei.png'
    }
  ]

  return (
    <section id="partners" className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground className="left-1/3 top-3/5 w-full h-full scale-150 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader 
          index="03"
          category="COOPERATORS"
          title={t('cooperators.title')}
          description={t('cooperators.description')}
        />

        {/* Partnership Connection Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="hidden lg:block lg:col-span-4"></div>
          {/* Partners Vertical Stack */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            {partnersData.map((partner, index) => {
              const roleColors = {
                innovation: 'text-[var(--color-accent-primary)] border-[var(--color-accent-primary)]',
                education: 'text-[var(--color-terminal)] border-[var(--color-terminal)]',
                government: 'text-blue-500 border-blue-500'
              }
              
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center border-l-4 ${roleColors[partner.type].split(' ')[1]} transition-all duration-200 group relative`}>
                  
                  {/* Connection Indicator - Hidden on mobile */}
                  <div className={`absolute -left-6 w-12 h-px ${roleColors[partner.type].split(' ')[1].replace('border-', 'bg-')} opacity-60 hidden md:block`} />
                  
                  {/* Logo Section */}
                  <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] flex items-center justify-center m-4">
                    {partner.logoPlaceholder ? (
                      <img 
                        src={partner.logoPlaceholder} 
                        alt={`${partner.title} logo`}
                        className="max-h-12 max-w-16 md:max-h-16 md:max-w-20 object-contain opacity-80"
                      />
                    ) : (
                      <div className="text-[var(--color-text-meta)] font-mono text-xs font-bold text-center">
                        {partner.title}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                      <h3 className="text-lg md:text-xl font-black text-[var(--color-text-primary)] font-mono">
                        {partner.title}
                      </h3>
                      <span className={`self-start sm:self-auto px-3 py-1 text-xs font-mono border ${roleColors[partner.type]} bg-[var(--color-bg-secondary)]/50 rounded whitespace-nowrap`}>
                        {partner.role}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message={t('cooperators.footer')} />
      </div>
    </section>
  )
}