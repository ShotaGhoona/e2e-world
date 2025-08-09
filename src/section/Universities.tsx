'use client'

import React from 'react'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'

export function Universities() {
  const universitiesData = [
    {
      name: 'STIKOM Bali',
      nameEn: 'STIKOM Bali',
      location: 'バリ, インドネシア',
      logo: '/uni/stikom-bali.webp',
      specialty: 'コンピューター・情報技術'
    },
    {
      name: 'UIN Jakarta',
      nameEn: 'Universitas Islam Negeri Syarif Hidayatullah Jakarta',
      location: 'ジャカルタ, インドネシア', 
      logo: '/uni/uin-jakarta.jpg',
      specialty: 'イスラム総合大学'
    },
    {
      name: 'UPI',
      nameEn: 'Universitas Pendidikan Indonesia',
      location: 'バンドン, インドネシア',
      logo: '/uni/upi.png',
      specialty: '教育・工学'
    },
    {
      name: 'UNLA Bandung',
      nameEn: 'Universitas Langlangbuana Bandung',
      location: 'バンドン, インドネシア',
      logo: '/uni/unla-bandung.png',
      specialty: '総合大学'
    },
    {
      name: 'UI FMIPA',
      nameEn: 'Universitas Indonesia - FMIPA',
      location: 'ジャカルタ, インドネシア',
      logo: '/uni/ui-fmipa.png',
      specialty: '数学・自然科学'
    },
    {
      name: 'ITS',
      nameEn: 'Institut Teknologi Sepuluh Nopember',
      location: 'スラバヤ, インドネシア',
      logo: '/uni/its.png',
      specialty: '工学・技術'
    },
    {
      name: 'UNEJ',
      nameEn: 'Universitas Jember',
      location: 'ジャンベル, インドネシア',
      logo: '/uni/unej.webp',
      specialty: '総合大学'
    }
  ]

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
            category="UNIVERSITIES"
            title="参画大学"
            description="インドネシアの主要大学と連携し、実践的なエンジニア育成プログラムを展開しています。"
          />
        </div>

        {/* Universities Infinite Scroll */}
        <div className="mb-16 overflow-hidden">
          <div className="animate-scroll-x flex space-x-6">
            {/* First set */}
            {universitiesData.map((university, index) => (
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
            {universitiesData.map((university, index) => (
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
        <SectionFooter message="CONNECTING KNOWLEDGE ACROSS BORDERS" />
      </div>
    </section>
  )
}