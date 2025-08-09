'use client'

import React, { useState, useEffect } from 'react'
import { SectionFooter } from '@/components/SectionFooter'
import { SectionHeader } from '@/components/SectionHeader'

interface SkillCardProps {
  title: string
  description: string
  technologies: string[]
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  isActive: boolean
  onClick: () => void
}

function SkillCard({ title, description, technologies, level, duration, isActive, onClick }: SkillCardProps) {
  const levelLabels = {
    beginner: '初級',
    intermediate: '中級', 
    advanced: '上級'
  }

  const levelColors = {
    beginner: 'text-[var(--color-terminal)] bg-[var(--color-terminal)]/10',
    intermediate: 'text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10', 
    advanced: 'text-red-500 bg-red-500/10'
  }

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-all duration-200 bg-[var(--color-bg-primary)] hover:bg-[var(--color-bg-secondary)]/50 relative overflow-hidden p-6 ${
        isActive ? 'border-[var(--color-accent-primary)] bg-[var(--color-bg-secondary)]/30' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 text-xs font-mono rounded ${levelColors[level]}`}>
          {levelLabels[level]}
        </span>
        <span className="text-xs text-[var(--color-text-support)] font-mono">
          {duration}
        </span>
      </div>
      
      <h3 className="text-xl font-black mb-3 text-[var(--color-text-primary)] font-mono">
        {title}
      </h3>
      
      <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        {description}
      </p>

      {/* Course Image */}
      <div className="mb-4">
        <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
          <img 
            src="/hero-background.jpg" 
            alt={title}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-3">
        <h4 className="text-sm font-mono font-medium text-[var(--color-text-support)]">
          学習技術
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-mono bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-[var(--color-accent-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-200 ${
        isActive ? 'opacity-5' : ''
      }`} />
    </div>
  )
}

export function Curriculum() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const curriculumData = [
    {
      title: 'Web制作・ECサイト制作',
      description: 'モダンなウェブサイトとECサイトの構築技術を学習。フロントエンドからバックエンドまで幅広くカバーします。',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
      level: 'beginner' as const,
      duration: '3-4ヶ月'
    },
    {
      title: 'システム開発',
      description: 'エンタープライズレベルのシステム構築技術。スケーラブルなアーキテクチャ設計を習得できます。',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'GraphQL', 'Microservices'],
      level: 'intermediate' as const,
      duration: '4-6ヶ月'
    },
    {
      title: 'モバイルアプリ開発',
      description: 'iOS・Android対応のクロスプラットフォーム開発。ネイティブアプリの開発手法も学習します。',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Native APIs'],
      level: 'intermediate' as const,
      duration: '4-5ヶ月'
    },
    {
      title: 'サーバー構築',
      description: 'クラウドインフラとDevOps実践。現代的なサーバー運用とデプロイメント手法を習得。',
      technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
      level: 'advanced' as const,
      duration: '5-6ヶ月'
    },
    {
      title: 'AI・機械学習',
      description: '人工知能とデータサイエンスの実装。最新のAI技術を活用したアプリケーション開発。',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter', 'Pandas', 'OpenAI API'],
      level: 'advanced' as const,
      duration: '6-8ヶ月'
    },
    {
      title: 'ブロックチェーン開発',
      description: 'Web3・DApp・スマートコントラクト開発。分散型アプリケーションの構築技術。',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'IPFS', 'MetaMask'],
      level: 'advanced' as const,
      duration: '4-6ヶ月'
    }
  ]

  return (
    <section id="curriculum" className="py-24 bg-[var(--color-bg-primary)] relative">
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
          index="02"
          category="CURRICULUM"
          title="学べること"
          description="実践的なスキルセットで次世代のデジタル人材に。現場で求められる技術を体系的に学習できます。"
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {curriculumData.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              isActive={activeCard === index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            />
          ))}
        </div>

        {/* Additional Information Panel */}
        {activeCard !== null && (
          <div className="bg-[var(--color-bg-secondary)]/90 backdrop-blur-sm border border-[var(--color-border)] p-8 rounded">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-mono font-black text-[var(--color-text-primary)]">
                {curriculumData[activeCard].title}
              </h3>
              <button 
                onClick={() => setActiveCard(null)}
                className="text-[var(--color-text-support)] hover:text-[var(--color-accent-primary)] transition-colors text-xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-[var(--color-text-secondary)] leading-relaxed">
                {curriculumData[activeCard].description}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-mono font-medium text-[var(--color-text-primary)]">学習内容</h4>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>• 実践的なプロジェクトベース学習</li>
                  <li>• 現役エンジニアによるメンタリング</li>
                  <li>• ポートフォリオ制作とキャリアサポート</li>
                  <li>• 業界標準のツールとワークフロー</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Section Footer */}
        <SectionFooter message="LEARN BY DOING, GROW BY CREATING" />
      </div>
    </section>
  )
}