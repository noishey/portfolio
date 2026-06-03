"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const cycleTheme = useCallback(() => {
    const order: Array<'system' | 'light' | 'dark'> = ['system', 'light', 'dark']
    const current = (theme as 'system' | 'light' | 'dark') ?? 'system'
    const next = order[(order.indexOf(current) + 1) % order.length]
    setTheme(next)
  }, [setTheme, theme])

  if (!mounted) return null

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor

  return (
    <button
      aria-label="Toggle theme"
      onClick={cycleTheme}
      className="inline-flex items-center justify-center rounded border px-2 py-1 text-sm bg-transparent hover:bg-white/3 transition-colors"
      title={`Theme: ${theme ?? 'system'}`}
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}

export default React.memo(ThemeToggle)
