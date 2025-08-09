'use client'

import React from 'react'
import { ParticleBackground } from '@/components/ParticleBackground'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'

export function Partners() {
  const partnersData = [
    {
      title: 'STARUP',
      role: '技術革新パートナー',
      description: '最新技術の研究開発と実践的なカリキュラム設計を担当。業界のトレンドを反映した実用的なプログラムを提供し、学習者が現場で即戦力となれるよう支援します。',
      type: 'innovation' as const,
      logoPlaceholder: '/partner/starup.png'
    },
    {
      title: 'サクラネシア財団',
      role: '教育支援パートナー',
      description: '教育資金の提供と学習環境の整備を通じて、質の高い教育機会を創出。奨学金制度や施設提供により、多くの学習者がプログラムに参加できる基盤を構築します。',
      type: 'education' as const,
      logoPlaceholder: '/partner/sakuranesia.png'
    },
    {
      title: '行政機関',
      role: '政策支援パートナー',
      description: 'デジタル人材育成に関する政策立案と制度整備を推進。国際的な人材交流促進や資格認定制度の構築により、持続可能な人材育成エコシステムを支援します。',
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
          category="PARTNERS"
          title="パートナー"
          description="産学官連携により、包括的な人材育成エコシステムを構築しています。"
        />

        {/* Partnership Connection Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4"></div>
          {/* Partners Vertical Stack */}
          <div className="lg:col-span-8 space-y-6">
            {partnersData.map((partner, index) => {
              const roleColors = {
                innovation: 'text-[var(--color-accent-primary)] border-[var(--color-accent-primary)]',
                education: 'text-[var(--color-terminal)] border-[var(--color-terminal)]',
                government: 'text-blue-500 border-blue-500'
              }
              
              return (
                <div key={index} className={`flex items-center border-l-4 ${roleColors[partner.type].split(' ')[1]} transition-all duration-200 group relative`}>
                  
                  {/* Connection Indicator */}
                  <div className={`absolute -left-6 w-12 h-px ${roleColors[partner.type].split(' ')[1].replace('border-', 'bg-')} opacity-60`} />
                  
                  {/* Logo Section */}
                  <div className="flex-shrink-0 w-24 h-24 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] flex items-center justify-center m-4">
                    {partner.logoPlaceholder ? (
                      <img 
                        src={partner.logoPlaceholder} 
                        alt={`${partner.title} logo`}
                        className="max-h-16 max-w-20 object-contain opacity-80"
                      />
                    ) : (
                      <div className="text-[var(--color-text-meta)] font-mono text-xs font-bold text-center">
                        {partner.title}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-black text-[var(--color-text-primary)] font-mono">
                        {partner.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-mono border ${roleColors[partner.type]} bg-[var(--color-bg-secondary)]/50 rounded`}>
                        {partner.role}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message="STRONGER TOGETHER, BRIGHTER FUTURE" />
      </div>
    </section>
  )
}