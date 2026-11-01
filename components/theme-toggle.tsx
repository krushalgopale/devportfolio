'use client'

import { Moon, Sun } from 'lucide-react'
import { useRef } from 'react'

const themeColorProperties = [
  ['color', 'color'],
  ['backgroundColor', 'background-color'],
  ['borderTopColor', 'border-top-color'],
  ['borderRightColor', 'border-right-color'],
  ['borderBottomColor', 'border-bottom-color'],
  ['borderLeftColor', 'border-left-color'],
  ['textDecorationColor', 'text-decoration-color'],
  ['outlineColor', 'outline-color'],
  ['fill', 'fill'],
  ['stroke', 'stroke'],
  ['caretColor', 'caret-color'],
  ['columnRuleColor', 'column-rule-color'],
] as const

function readThemeColors(element: Element) {
  const styles = getComputedStyle(element)

  return Object.fromEntries(
    themeColorProperties.map(([key, property]) => [
      key,
      styles.getPropertyValue(property),
    ]),
  )
}

export function ThemeToggle() {
  const animations = useRef<Animation[]>([])
  const transitionId = useRef(0)

  function toggle() {
    const root = document.documentElement
    const next = root.classList.contains('dark') ? 'light' : 'dark'
    const currentTransitionId = ++transitionId.current

    animations.current.forEach((animation) => animation.cancel())
    animations.current = []

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || typeof Element.prototype.animate !== 'function') {
      root.classList.remove('theme-switching', 'light', 'dark')
      root.classList.add(next)
      try {
        localStorage.setItem('theme', next)
      } catch {}
      return
    }

    const elements = [
      root,
      ...Array.from(document.body.querySelectorAll('*')),
    ]

    root.classList.add('theme-switching')
    const previousColors = elements.map(readThemeColors)

    root.classList.remove('light', 'dark')
    root.classList.add(next)

    const nextColors = elements.map(readThemeColors)
    const nextAnimations: Animation[] = []

    elements.forEach((element, index) => {
      if (element instanceof SVGElement && element.closest('.hero-prompt-connector')) {
        return
      }

      const keyframes: PropertyIndexedKeyframes = {}

      themeColorProperties.forEach(([key]) => {
        const previousColor = previousColors[index][key]
        const nextColor = nextColors[index][key]

        if (previousColor !== nextColor) {
          keyframes[key] = [previousColor, nextColor]
        }
      })

      if (Object.keys(keyframes).length > 0) {
        nextAnimations.push(
          element.animate(keyframes, {
            duration: 400,
            easing: 'ease',
          }),
        )
      }
    })

    try {
      localStorage.setItem('theme', next)
    } catch {}

    if (nextAnimations.length === 0) {
      root.classList.remove('theme-switching')
      return
    }

    animations.current = nextAnimations
    let remainingAnimations = nextAnimations.length

    nextAnimations.forEach((animation) => {
      animation.onfinish = () => {
        if (currentTransitionId !== transitionId.current) return

        remainingAnimations -= 1
        if (remainingAnimations === 0) {
          root.classList.remove('theme-switching')
          animations.current = []
        }
      }
    })
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
