'use client'

import React from 'react'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'
import { useLanguage } from '@/contexts/LanguageContext'
import universitiesData from '@/data/universities.json'

export function Partners() {
  const { t, language } = useLanguage()
  const currentUniversitiesData = universitiesData[language] || universitiesData.en

  return (
    <section id="universities" className="py-24 bg-[var(--color-bg-primary)] relative">
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

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader 
            index="04"
            category="PARTNERS"
            title={t('partners.title')}
            description={t('partners.description')}
          />
        </div>

        {/* Universities Infinite Scroll */}
        <div className="mb-16 overflow-hidden">
          <div className="animate-scroll-x flex space-x-6">
            {/* First set */}
            {currentUniversitiesData.map((university, index) => (
              <div 
                key={`first-${index}`}
                className="group bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-all duration-300 hover:bg-[var(--color-bg-secondary)]/30 relative overflow-hidden flex-shrink-0 w-80"
              >
                {/* Logo Section */}
                <div className="aspect-square flex items-center justify-center p-8 bg-[var(--color-bg-secondary)]/20">
                  <img 
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-mono text-lg font-black text-[var(--color-text-primary)]">
                      {university.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-support)] leading-relaxed">
                      {university.nameEn}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                      <span className="font-mono text-xs text-[var(--color-text-meta)] mr-2">[LOC]</span>
                      {university.location}
                    </div>
                    <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                      <span className="font-mono text-xs text-[var(--color-text-meta)] mr-2">[SPE]</span>
                      {university.specialty}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            ))}
            
            {/* Second set for infinite loop */}
            {currentUniversitiesData.map((university, index) => (
              <div 
                key={`second-${index}`}
                className="group bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-all duration-300 hover:bg-[var(--color-bg-secondary)]/30 relative overflow-hidden flex-shrink-0 w-80"
              >
                {/* Logo Section */}
                <div className="aspect-square flex items-center justify-center p-8 bg-[var(--color-bg-secondary)]/20">
                  <img 
                    src={university.logo}
                    alt={`${university.name} logo`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-mono text-lg font-black text-[var(--color-text-primary)]">
                      {university.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-support)] leading-relaxed">
                      {university.nameEn}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                      <span className="font-mono text-xs text-[var(--color-text-meta)] mr-2">[LOC]</span>
                      {university.location}
                    </div>
                    <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
                      <span className="font-mono text-xs text-[var(--color-text-meta)] mr-2">[SPE]</span>
                      {university.specialty}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message={t('partners.footer')} />
      </div>
    </section>
  )
}