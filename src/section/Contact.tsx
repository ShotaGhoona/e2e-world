'use client'

import React, { useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { SectionFooter } from '@/components/SectionFooter'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert('お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。')
  }

  const inquiryTypes = [
    { value: '', label: '--- 選択してください ---' },
    { value: 'program', label: 'プログラム内容について' },
    { value: 'partnership', label: 'パートナーシップについて' },
    { value: 'university', label: '大学連携について' },
    { value: 'career', label: 'キャリアサポートについて' },
    { value: 'other', label: 'その他' }
  ]


  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)] relative">
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
          index="06"
          category="CONTACT"
          title="お問い合わせ"
          description="プログラムに関するご質問やご相談、お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。"
        />

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] p-8">
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-[var(--color-border)]">
              <h3 className="font-mono text-xl font-black text-[var(--color-text-primary)] mb-2">
                お問い合わせフォーム
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder="山田太郎"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Organization and Inquiry Type Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organization Field */}
                <div className="space-y-2">
                  <label htmlFor="organization" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    ご所属（任意）
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder="株式会社○○ / ○○大学 など"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    お問い合わせ内容
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                  詳細メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)] resize-vertical"
                  placeholder="お問い合わせの詳細をご記入ください..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[var(--color-accent-primary)] text-black px-8 py-4 font-mono font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 border-2 border-[var(--color-accent-primary)] hover:border-[var(--color-accent-hover)] relative group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'SENDING...' : 'SEND_MESSAGE()'}
                  </span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message="WE'RE HERE TO HELP YOU SUCCEED" />
      </div>
    </section>
  )
}