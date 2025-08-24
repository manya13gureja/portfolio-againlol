'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: '/work', label: 'work' },
  { href: '/writing', label: 'thoughts' },
]

// Reusable NavItem component
interface NavItemProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  isMobile?: boolean
}

function NavItem({ href, label, isActive, onClick, isMobile = false }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm px-2 transition-all duration-200 border border-transparent hover:border-black hover:border-dotted",
        isMobile ? "py-2 rounded" : "py-1",
        isActive && "font-medium",
        isActive && isMobile && "bg-black/5"
      )}
    >
      {label}
    </Link>
  )
}

// Desktop/Tablet navigation component
interface DesktopNavProps {
  pathname: string
}

function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <div className="hidden md:flex items-center gap-9 lg:gap-9 md:gap-6">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={pathname === item.href}
        />
      ))}
      <div className="px-2 py-1 border border-transparent hover:border-black hover:border-dotted">
        <ThemeToggle />
      </div>
    </div>
  )
}

// Mobile navigation component
interface MobileNavProps {
  pathname: string
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function MobileNav({ pathname, isOpen, onToggle, onClose }: MobileNavProps) {
  return (
    <div className="md:hidden flex items-center gap-4">
      <div className="px-2 py-1 border border-transparent hover:border-black hover:border-dotted">
        <ThemeToggle />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="px-2 py-1 border border-transparent hover:border-black hover:border-dotted transition-all duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}

// Main Navigation component
export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={cn(
      "z-50 transition-all duration-300 ease-out shadow-manya",
      isScrolled
        ? "fixed left-1/2 -translate-x-1/2 w-full rounded-2xl backdrop-blur-[8px] border border-black/10 shadow-md"
        : "absolute left-1/2 -translate-x-1/2 w-full max-w-[960px] bg-transparent"
    )}>
      <div className="px-8 py-6 pb-24">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium transition-colors duration-200"
          >
            Manya
          </Link>

          <DesktopNav pathname={pathname} />
          
          <MobileNav
            pathname={pathname}
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
            onClose={closeMobileMenu}
          />
        </div>

        {/* Mobile Menu Dropdown - moved outside to match original structure */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-6 py-4 border-t border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  onClick={closeMobileMenu}
                  isMobile
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}