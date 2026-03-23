import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Faithful Hands Home Care LLC"
              className="h-12 md:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback text logo shown if logo.png is not yet added */}
            <div className="items-center gap-3 hidden">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary-dark transition-colors">
                <span className="text-white text-xl">♥</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-warm-text text-base leading-none">Faithful Hands</div>
                <div className="text-xs text-warm-muted font-medium">Home Care LLC</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-primary border-b-2 border-primary pb-0.5'
                    : 'text-warm-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8033696254"
              className="flex items-center gap-2 text-warm-muted hover:text-primary transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              (803) 369-6254
            </a>
            <Link to="/booking" className="btn-primary text-sm py-2.5 px-5">
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-warm-muted hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-light text-primary'
                    : 'text-warm-text hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 pt-3 border-t border-gray-100">
              <a
                href="tel:8033696254"
                className="flex items-center gap-2 px-4 py-3 text-warm-muted font-medium"
              >
                <Phone size={16} />
                (803) 369-6254
              </a>
              <Link to="/booking" className="btn-primary w-full text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
