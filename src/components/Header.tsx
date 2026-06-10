'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/libros', label: 'Libros' },
  { href: '/#mision', label: 'Sobre nosotros' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/#reservar', label: 'Reservar cita' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-200"
      style={{
        backgroundColor: 'rgba(245,240,232,.96)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(74,124,158,.20)',
        boxShadow: scrolled ? '0 2px 16px rgba(58,50,40,.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Moonmoss Studio — Inicio">
          <Image
            src="/moonmoss_logo_transparent.png"
            alt="Moonmoss Studio"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-sm font-semibold transition-colors duration-200"
              style={{ color: '#6b5d52' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4a7c9e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b5d52')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full font-lato font-bold text-sm hidden md:inline-flex"
            style={{ backgroundColor: '#4a7c9e', color: '#fff' }}
          >
            <Link href="/libros">Ver libros</Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            style={{ color: '#3a3228' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-5 py-4 flex flex-col gap-4"
          style={{ borderColor: 'rgba(74,124,158,.20)', backgroundColor: 'rgba(245,240,232,.98)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-lato text-sm font-semibold"
              style={{ color: '#3a3228' }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="rounded-full font-lato font-bold w-full mt-1"
            style={{ backgroundColor: '#4a7c9e', color: '#fff' }}
          >
            <Link href="/libros" onClick={() => setMenuOpen(false)}>Ver libros</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
