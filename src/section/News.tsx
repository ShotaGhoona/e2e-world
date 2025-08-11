'use client'

import React from 'react'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'
import { useLanguage } from '@/contexts/LanguageContext'
import newsData from '@/data/news.json'

export function News() {
  const { t, language } = useLanguage()
  const currentNewsData = newsData[language] || newsData.en

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-[var(--color-accent-primary)] text-black'
      case 'important':
        return 'bg-red-500 text-white'
      case 'completed':
        return 'bg-[var(--color-terminal)] text-black'
      default:
        return 'bg-[var(--color-text-support)] text-white'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return t('news.status.new')
      case 'important':
        return t('news.status.important')
      case 'completed':
        return t('news.status.completed')
      default:
        return t('news.status.update')
    }
  }

  return (
    <section id="news" className="py-24 bg-[var(--color-bg-primary)] relative">
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
        {/* Section Header */}
        <SectionHeader 
          index="05"
          category="NEWS"
          title={t('news.title')}
          description={t('news.description')}
        />

        {/* News Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-border)] hidden md:block" />
          
          <div className="space-y-8">
            {currentNewsData.map((news, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-[var(--color-accent-primary)] border-4 border-[var(--color-bg-primary)] rounded-full hidden md:block group-hover:bg-[var(--color-accent-hover)] transition-colors" />
                
                {/* News Card */}
                <div className="md:ml-16 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-all duration-300 hover:bg-[var(--color-bg-secondary)]/30 relative overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="p-6 border-b border-[var(--color-border)]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="font-mono text-sm text-[var(--color-text-meta)]">
                          {new Date(news.date).toLocaleDateString(
                            language === 'ja' ? 'ja-JP' : language === 'id' ? 'id-ID' : 'en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          })}
                        </div>
                        <span className="text-[var(--color-text-support)]">•</span>
                        <div className="font-mono text-sm text-[var(--color-text-support)]">
                          [{news.category.toUpperCase()}]
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 text-xs font-mono font-bold rounded ${getStatusColor(news.status)}`}>
                        {getStatusLabel(news.status)}
                      </div>
                    </div>
                    
                    <h3 className="font-mono text-xl font-black text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-primary)] transition-colors">
                      {news.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="font-mono text-sm text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors flex items-center space-x-2 group">
                        <span>{t('news.readMore')}</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                      
                      <div className="flex items-center space-x-2 text-xs font-mono text-[var(--color-text-support)]">
                        <span>[{String(index + 1).padStart(2, '0')}]</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More News Button */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)] hover:text-black px-8 py-4 font-mono font-medium transition-all duration-300 relative group overflow-hidden">
            <span className="relative z-10">{t('news.seeMore')}</span>
            <div className="absolute inset-0 bg-[var(--color-accent-primary)] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Section Footer */}
        <SectionFooter message={t('news.footer')} />
      </div>
    </section>
  )
}