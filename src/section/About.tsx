'use client'

import React, { useState, useEffect } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { SectionFooter } from '@/components/SectionFooter'
import { useLanguage } from '@/contexts/LanguageContext'
import { FiGlobe, FiUsers, FiStar, FiZap } from 'react-icons/fi'

export function About() {
  const [mounted, setMounted] = useState(false)
  const [visibleStats, setVisibleStats] = useState<number[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    
    // Animate stats with stagger effect
    const timer = setInterval(() => {
      setVisibleStats(prev => {
        if (prev.length < 4) {
          return [...prev, prev.length]
        }
        clearInterval(timer)
        return prev
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { value: '2', label: t('about.stats.countries'), suffix: 'Countries', color: 'text-[var(--color-accent-primary)]' },
    { value: '7+', label: t('about.stats.partners'), suffix: 'Partners', color: 'text-[var(--color-terminal)]' },
    { value: '1000+', label: t('about.stats.members'), suffix: 'Members', color: 'text-blue-500' },
    { value: '∞', label: t('about.stats.ideas'), suffix: 'Ideas', color: 'text-[var(--color-accent-primary)]' }
  ]

  const features = [
    {
      icon: FiGlobe,
      title: t('about.features.culturalBridge.title'),
      description: t('about.features.culturalBridge.description')
    },
    {
        icon: FiZap,
      title: t('about.features.ideasExchange.title'),
      description: t('about.features.ideasExchange.description')
    },
    {
      icon: FiUsers,
      title: t('about.features.collaborativeLearning.title'),
      description: t('about.features.collaborativeLearning.description')
    },
    {
      icon: FiStar,
      title: t('about.features.futureCreation.title'),
      description: t('about.features.futureCreation.description')
    }
  ]

  return (
    <section id="about" className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="max-w-7xl mx-auto h-full">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }, (_, i) => (
                <div 
                  key={i} 
                  className={`border-r border-[var(--color-accent-primary)]/30 last:border-r-0 relative ${
                    mounted ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-accent-primary)]/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader 
          index="01"
          category="ABOUT"
          title={t('about.title')}
          description={t('about.description')}
        />
        {/* Mission Statement */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)]/30 via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]/30 border border-[var(--color-border)] p-8 relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent-primary)]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent-primary)]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent-primary)]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent-primary)]" />
              
              <div className="font-mono text-sm text-[var(--color-text-meta)] mb-4">
                {'// MISSION STATEMENT'}
              </div>
              <blockquote className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-relaxed font-light">
                &ldquo;{t('about.mission')}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Features Grid - */}
        <div className="mb-20 relative">
          {/* Central Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-primary)]/20 via-[var(--color-accent-primary)]/60 to-[var(--color-accent-primary)]/20 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 relative`}
              >
                {/* Feature Content Card */}
                <div className="flex-1 relative">
                  <div className="bg-[var(--color-bg-primary)] relative p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    {/* Diagonal Cut Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--color-accent-primary)] transform rotate-45 translate-x-4 -translate-y-4 opacity-20 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/20 rounded-lg group-hover:bg-[var(--color-accent-primary)]/20 group-hover:border-[var(--color-accent-primary)]/40 transition-all duration-300">
                          <feature.icon 
                            className="text-2xl text-[var(--color-accent-primary)] group-hover:scale-110 transition-transform duration-300" 
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-mono text-xl font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors mb-2">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Border Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-16 h-px bg-[var(--color-accent-primary)] group-hover:w-full transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-16 h-px bg-[var(--color-accent-primary)] group-hover:w-full transition-all duration-500 delay-100" />
                      <div className="absolute top-0 left-0 w-px h-16 bg-[var(--color-accent-primary)] group-hover:h-full transition-all duration-500 delay-200" />
                      <div className="absolute bottom-0 right-0 w-px h-16 bg-[var(--color-accent-primary)] group-hover:h-full transition-all duration-500 delay-300" />
                    </div>
                  </div>
                </div>

                {/* Central Hexagon Connector */}
                <div className="flex-shrink-0 relative z-20 hidden md:block">
                  <div className="w-16 h-16 bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent-primary)] transform rotate-45 flex items-center justify-center group-hover:rotate-90 transition-all duration-500">
                    <div className="font-mono text-xs font-black text-[var(--color-accent-primary)] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Connection Line to Content */}
                  <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-full' : 'left-full'} w-8 h-px bg-[var(--color-accent-primary)]/40 transform -translate-y-1/2 group-hover:bg-[var(--color-accent-primary)] transition-colors`} />
                </div>

                {/* Mobile Number Badge */}
                <div className="md:hidden absolute top-4 left-4 w-8 h-8 bg-[var(--color-accent-primary)] text-black font-mono text-sm font-black flex items-center justify-center rounded-full">
                  {index + 1}
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-500 ${
                  visibleStats.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] p-6 transition-all duration-300 group">
                  <div className={`font-mono text-4xl md:text-5xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-[var(--color-text-primary)] font-mono font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[var(--color-text-support)] font-mono">
                    {stat.suffix}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-transparent via-[var(--color-bg-secondary)]/20 to-transparent border-y border-[var(--color-border)] py-12">
          <div className="font-mono text-sm text-[var(--color-text-meta)] mb-4">
            {`// ${t('about.cta.ready')}`}
          </div>
          <h3 className="font-mono text-2xl md:text-3xl font-black text-[var(--color-text-primary)] mb-6">
            {t('about.cta.question')}
          </h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#curriculum">
              <button className="bg-[var(--color-accent-primary)] text-black px-8 py-4 font-mono font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative group">
                <span className="relative z-10">{t('about.cta.explore')}</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </a>
            <a href="#contact">
              <button className="bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] px-8 py-4 font-mono font-medium transition-all duration-200 relative group overflow-hidden">
                <span className="relative z-10">{t('about.cta.connect')}</span>
                <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </a>
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message={t('about.footer')} />
      </div>
    </section>
  )
}