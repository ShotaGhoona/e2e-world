'use client'

import React, { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    // Simulate loading progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Strong Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)]/80 via-[var(--color-bg-primary)]/60 to-[var(--color-bg-primary)]/20 z-10" />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div 
                key={i} 
                className={`border-r border-[var(--color-accent-primary)]/20 last:border-r-0 relative ${
                  mounted ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Vertical accent lines */}
                <div className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-accent-primary)]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="min-h-screen flex items-center max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 w-full relative z-30">
        
        {/* Left Column - Main Content */}
        <div className="col-span-12 lg:col-span-10 space-y-8 relative">
          
          {/* Meta Information */}
          <div className="font-mono text-sm text-[var(--color-text-primary)] ml-8">
            <span>{'// 次世代デジタル人材育成プロジェクト v2.0.1'}</span>
          </div>

          {/* Main Title with <e2e> styling - Consistent Typography */}
          <div className="space-y-6 ml-8">
            <div className="font-mono text-6xl md:text-8xl font-black leading-none">
              <div className="mb-4">
                <span className="text-[var(--color-text-primary)]">&lt;</span>
                <span className="text-[var(--color-accent-primary)]">e2e</span>
                <span className="text-[var(--color-text-primary)]">&gt;</span>
              </div>
              
              <div className="text-lg md:text-3xl text-[var(--color-text-primary)] font-normal mb-4">
                <span className="text-[var(--color-text-meta)]">{'// '}</span>Cross-Border AI Talent Development
              </div>
              
              <div>
                <span className="text-[var(--color-text-primary)]">&lt;/</span>
                <span className="text-[var(--color-accent-primary)]">e2e</span>
                <span className="text-[var(--color-text-primary)]">&gt;</span>
              </div>
            </div>
          </div>

          {/* Subtitle with Comment-style UI */}
          <div className="ml-8">
            <div className="font-mono text-lg md:text-xl text-[var(--color-text-support)] space-y-2">
              <div>
                <span className="text-[var(--color-text-meta)]">{'// '}</span>
                <span className="text-[var(--color-text-primary)]">日本とインドネシアの架け橋となるAI人材育成プロジェクト。</span>
              </div>
              <div>
                <span className="text-[var(--color-text-meta)]">{'// '}</span>
                <span className="text-[var(--color-text-primary)]">産学官連携により、次世代のデジタル人材を育成し、両国の持続的な発展に貢献します。</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Left Aligned */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ml-8">
            <button className="group bg-[var(--color-accent-primary)] text-black px-8 py-4 font-mono font-medium text-lg hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative overflow-hidden">
              <span className="relative z-10">START_TRAINING()</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
            
            <button className="group bg-[var(--color-bg-primary)]/90 backdrop-blur-sm text-[var(--color-text-primary)] px-8 py-4 font-mono font-medium text-lg border-2 border-[var(--color-border-strong)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] transition-all duration-200 relative overflow-hidden">
              <span className="relative z-10">VIEW_PROGRAMS()</span>
              <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
            </button>
          </div>

        </div>
      </div>


    </section>
  )
}