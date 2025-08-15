'use client'

import { useTheme } from './theme-provider'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 w-8 h-8 rounded-full bg-gray-100 dark:bg-black" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-8 h-8 text-black dark:text-slate-100" />
      ) : (
        <Sun className="w-8 h-8 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
