'use client'

import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const next = root.classList.contains('dark') ? 'light' : 'dark'
    root.classList.remove('light', 'dark')
    root.classList.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="theme-toggle inline-flex size-9 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Sun
        className="theme-toggle-icon theme-toggle-sun size-4"
        aria-hidden="true"
      />
      <Moon
        className="theme-toggle-icon theme-toggle-moon size-4"
        aria-hidden="true"
      />
    </button>
  )
}
