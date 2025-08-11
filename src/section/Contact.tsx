'use client'

import React, { useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { SectionFooter } from '@/components/SectionFooter'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
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
    alert(t('contact.form.submitSuccess'))
  }

  const inquiryTypes = [
    { value: '', label: t('contact.form.inquiryTypes.placeholder') },
    { value: 'program', label: t('contact.form.inquiryTypes.program') },
    { value: 'partnership', label: t('contact.form.inquiryTypes.partnership') },
    { value: 'university', label: t('contact.form.inquiryTypes.university') },
    { value: 'career', label: t('contact.form.inquiryTypes.career') },
    { value: 'other', label: t('contact.form.inquiryTypes.other') }
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
          title={t('contact.title')}
          description={t('contact.description')}
        />

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] p-8">
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-[var(--color-border)]">
              <h3 className="font-mono text-xl font-black text-[var(--color-text-primary)] mb-2">
                {t('contact.form.title')}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              {/* Organization and Inquiry Type Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Organization Field */}
                <div className="space-y-2">
                  <label htmlFor="organization" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    {t('contact.form.organization')}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)]"
                    placeholder={t('contact.form.organizationPlaceholder')}
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="flex items-center text-sm font-mono text-[var(--color-text-primary)]">
                    <span className="text-[var(--color-accent-primary)] mr-1">*</span>
                    {t('contact.form.inquiryType')}
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
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] focus:border-[var(--color-accent-primary)] focus:outline-none transition-colors font-mono text-[var(--color-text-primary)] resize-vertical"
                  placeholder={t('contact.form.messagePlaceholder')}
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
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Section Footer */}
        <SectionFooter message={t('contact.footer')} />
      </div>
    </section>
  )
}