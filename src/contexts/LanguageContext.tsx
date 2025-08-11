'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations from '@/data/translations.json';

type Language = 'en' | 'ja' | 'id';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageLabel: (lang: Language) => string;
  getLanguageFlag: (lang: Language) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // クライアントサイドでlocalStorageから読み込み
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ja', 'id'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: unknown = translations[language];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && result !== null) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key; // fallback to key if path not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English';
      case 'ja': return '日本語';
      case 'id': return 'Bahasa Indonesia';
      default: return lang;
    }
  };

  const getLanguageFlag = (lang: Language) => {
    switch (lang) {
      case 'en': return '🇺🇸';
      case 'ja': return '🇯🇵';
      case 'id': return '🇮🇩';
      default: return '🌐';
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    getLanguageLabel,
    getLanguageFlag,
    isLoaded
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}