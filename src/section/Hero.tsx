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
      <div className="min-h-screen flex items-center max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 w-full relative z-30">
        
        {/* Left Column - Main Content */}
        <div className="col-span-12 lg:col-span-10 space-y-8 relative">
          
          {/* Meta Information */}
          <div className="font-mono text-sm text-[var(--color-text-primary)">
            <span>{'// People and Ideas connecting for a brighter future v2.0.1'}</span>
          </div>

          {/* Main Title with PAI styling - Consistent Typography */}
          <div className="space-y-6">
            <div className="font-mono text-4xl md:text-8xl font-black leading-none">
              <div className="mb-4">
                <span className="text-[var(--color-accent-primary)]">PAI</span>
                <span className="text-[var(--color-text-primary)]">:</span>
              </div>
              
              <div className="text-2xl md:text-4xl text-[var(--color-text-primary)] font-normal mb-4">
                People and Ideas
              </div>
              
              <div className="text-lg md:text-2xl text-[var(--color-text-support)] font-normal">
                <span className="text-[var(--color-text-meta)]">{'// '}</span>
                Where people and ideas shape a brighter future.
              </div>
            </div>
          </div>

          {/* Subtitle with Comment-style UI */}
          <div>
            <div className="font-mono text-lg md:text-xl text-[var(--color-text-support)] space-y-2">
              <div>
                <span className="text-[var(--color-text-meta)]">{'// '}</span>
                <span className="text-[var(--color-text-primary)]">多様な人の知恵や文化を結びつけるコミュニティプラットフォーム。</span>
              </div>
              <div>
                <span className="text-[var(--color-text-meta)]">{'// '}</span>
                <span className="text-[var(--color-text-primary)]">日本とインドネシアの人々とアイデアが出会い、共創する場を提供します。</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Left Aligned */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#curriculum">
              <button className="group bg-[var(--color-accent-primary)] text-black px-8 py-4 font-mono font-medium text-lg hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative overflow-hidden">
                <span className="relative z-10">MORE_INFO()</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </a>
            <a href="#contact">
              <button className="group bg-[var(--color-bg-primary)]/90 backdrop-blur-sm text-[var(--color-text-primary)] px-8 py-4 font-mono font-medium text-lg border-2 border-[var(--color-border-strong)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] transition-all duration-200 relative overflow-hidden">
                <span className="relative z-10">CONNECT_WITH_US()</span>
                <div className="absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </a>
          </div>

        </div>
      </div>


    </section>
  )
}