'use client'

import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-[var(--color-text-support)] hover:text-[var(--color-accent-primary)] transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="text-lg">☀</span>
      ) : (
        <span className="text-lg">☾</span>
      )}
    </button>
  )
}