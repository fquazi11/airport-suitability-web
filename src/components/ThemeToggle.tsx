'use client'

import { useTheme } from './ThemeProvider'
import { Button } from './ui/Button'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  )
} 