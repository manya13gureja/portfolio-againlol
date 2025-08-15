'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}px`
      )
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
