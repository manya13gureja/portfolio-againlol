'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing' },

]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <nav className={`
  z-50 transition-all duration-300 ease-out
  ${isScrolled 
    ? 'fixed left-1/2 -translate-x-1/2 w-full max-w-[960px] rounded-2xl  backdrop-blur-[8px] border border-black/10 shadow-md' 
    : 'absolute left-1/2 -translate-x-1/2 w-full max-w-[960px] bg-transparent'
  }
`}>
      <div className="px-8 py-6 pb-24">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-medium] transition-colors duration-200"
          >
            Manya
          </Link>
          
          <div className="flex items-center gap-9">
            
            {NAV_ITEMS.map((item) => (
             <Link 
              key={item.href}
              href={item.href} 
              className={`text-sm px-2 py-1 transition-all duration-200 border border-transparent hover:border-black hover:border-dotted ${
              pathname === item.href ? 'font-medium' : ''
              }`}
              >
            {item.label}
      </Link>
           ))}
            <div className="px-2 py-1 border border-transparent hover:border-black hover:border-dotted">
            <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
