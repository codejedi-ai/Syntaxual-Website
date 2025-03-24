"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with system preference or saved preference from localStorage
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // On mount, read theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('light-theme', savedTheme === 'light')
      document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark')
    } else if (systemPrefersDark) {
      setTheme('dark')
      document.documentElement.classList.add('dark-theme')
    } else {
      setTheme('light')
      document.documentElement.classList.add('light-theme')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme)
      
      // Update document class for CSS
      document.documentElement.classList.toggle('light-theme', newTheme === 'light')
      document.documentElement.classList.toggle('dark-theme', newTheme === 'dark')
      
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
