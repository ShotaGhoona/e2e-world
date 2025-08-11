'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToast() {
  const { language, changeLanguage, getLanguageLabel, getLanguageFlag } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    { code: 'ja' as const, label: '日本語', flag: '🇯🇵' },
    { code: 'id' as const, label: 'Bahasa Indonesia', flag: '🇮🇩' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-[var(--color-accent-primary)] text-black px-4 py-3 rounded-lg font-mono text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Language Options */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 right-0 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg shadow-xl min-w-[180px] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-mono text-left hover:bg-[var(--color-bg-secondary)] transition-colors ${
                language === lang.code 
                  ? 'bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] border-l-2 border-[var(--color-accent-primary)]' 
                  : 'text-[var(--color-text-primary)]'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {language === lang.code && (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}