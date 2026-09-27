import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteData'
import Button from './Button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className={`navbar-shell ${isScrolled ? 'scrolled' : ''}`}>
        <NavLink to="/" className="brand-lockup" aria-label="The VINES CAFE home">
          <span className="brand-mark">V</span>
          <span className="brand-word">The VINES CAFE</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-cta" aria-hidden="true" />

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Button href="/menu" className="mobile-action">Explore the menu</Button>
        </nav>
      </div>
    </header>
  )
}
