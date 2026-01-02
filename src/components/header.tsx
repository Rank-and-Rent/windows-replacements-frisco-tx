'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const windowTypes = [
  { name: 'Double-Hung Windows', href: '/windows/double-hung-windows' },
  { name: 'Single-Hung Windows', href: '/windows/single-hung-windows' },
  { name: 'Casement Windows', href: '/windows/casement-windows' },
  { name: 'Awning Windows', href: '/windows/awning-windows' },
  { name: 'Sliding Windows', href: '/windows/sliding-windows' },
  { name: 'Picture Windows', href: '/windows/picture-windows' },
  { name: 'Bay & Bow Windows', href: '/windows/bay-bow-windows' },
  { name: 'Special Shape Windows', href: '/windows/special-shape-windows' },
]

const doorTypes = [
  { name: 'Entry Doors', href: '/doors/entry-door-installation' },
  { name: 'Patio Doors', href: '/doors/patio-door-installation' },
  { name: 'French Doors', href: '/doors/french-door-installation' },
  { name: 'Sliding Glass Doors', href: '/doors/sliding-glass-door-installation' },
  { name: 'Storm Doors', href: '/doors/storm-door-installation' },
  { name: 'Custom Doors', href: '/doors/custom-door-installation' },
]

const brands = [
  { name: 'Andersen Windows & Doors', href: '/brands/andersen-windows-doors' },
  { name: 'Pella Windows & Doors', href: '/brands/pella-windows-doors' },
  { name: 'JELD-WEN Windows & Doors', href: '/brands/jeld-wen-windows-doors' },
  { name: 'Marvin Windows & Doors', href: '/brands/marvin-windows-doors' },
]

const locations = [
  { name: 'Frisco', href: '/locations/frisco-tx' },
  { name: 'Plano', href: '/locations/plano-tx' },
  { name: 'McKinney', href: '/locations/mckinney-tx' },
  { name: 'Allen', href: '/locations/allen-tx' },
  { name: 'The Colony', href: '/locations/the-colony-tx' },
  { name: 'Little Elm', href: '/locations/little-elm-tx' },
  { name: 'Prosper', href: '/locations/prosper-tx' },
  { name: 'Celina', href: '/locations/celina-tx' },
  { name: 'Lewisville', href: '/locations/lewisville-tx' },
  { name: 'Carrollton', href: '/locations/carrollton-tx' },
]

export default function Header() {
  const [windowsOpen, setWindowsOpen] = useState(false)
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* Top accent bar */}
        <div className="section-divider" />
        
        {/* Main navigation */}
        <nav className="bg-white/95 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-20 lg:h-24">
              
              {/* Logo - Left */}
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                {/* Window arch icon */}
                <svg viewBox="0 0 50 45" className="w-12 h-11 lg:w-14 lg:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 44V18C4 8 14 2 25 2C36 2 46 8 46 18V44" stroke="#4A6B7C" strokeWidth="2.5" fill="none"/>
                  <path d="M10 44V20C10 12 16 6 25 6C34 6 40 12 40 20V44" stroke="#4A6B7C" strokeWidth="1.5" fill="none"/>
                  <line x1="25" y1="6" x2="25" y2="44" stroke="#4A6B7C" strokeWidth="1.5"/>
                  <line x1="4" y1="30" x2="46" y2="30" stroke="#4A6B7C" strokeWidth="1.5"/>
                  <rect x="4" y="44" width="42" height="1" fill="#4A6B7C"/>
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-[15px] lg:text-[17px] font-serif font-semibold text-navy-600 tracking-wide">FRISCO WINDOW</span>
                  <span className="text-[15px] lg:text-[17px] font-serif font-semibold text-navy-600 tracking-wide">REPLACEMENTS</span>
                </div>
              </Link>

              {/* Center - Phone (Desktop) */}
              <div className="hidden lg:flex items-center gap-6">
                {/* Phone */}
                <a href="tel:469-908-2440" className="text-navy-600 font-medium tracking-wide hover:text-slate-blue transition-colors">
                  (469) 908-2440
                </a>
              </div>

              {/* Right - Navigation (Desktop) */}
              <div className="hidden lg:flex items-center gap-8">
                {/* Windows Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setWindowsOpen(true)}
                  onMouseLeave={() => setWindowsOpen(false)}
                >
                  <button className="nav-link text-navy-600 flex items-center gap-1">
                    Windows
                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 ${windowsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${windowsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="w-64 bg-white shadow-xl border border-gray-100 py-3">
                      {windowTypes.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-navy-500 hover:text-navy-700 hover:bg-accent-light transition-all duration-200 tracking-wide"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/windows"
                          className="block px-5 py-2.5 text-sm text-charcoal-900 hover:bg-stone-200 font-semibold tracking-wide bg-stone-50"
                        >
                          View All Windows
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doors Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setDoorsOpen(true)}
                  onMouseLeave={() => setDoorsOpen(false)}
                >
                  <button className="nav-link text-navy-600 flex items-center gap-1">
                    Doors
                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 ${doorsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${doorsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="w-64 bg-white shadow-xl border border-gray-100 py-3">
                      {doorTypes.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-navy-500 hover:text-navy-700 hover:bg-accent-light transition-all duration-200 tracking-wide"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/doors"
                          className="block px-5 py-2.5 text-sm text-charcoal-900 hover:bg-stone-200 font-semibold tracking-wide bg-stone-50"
                        >
                          View All Doors
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brands Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setBrandsOpen(true)}
                  onMouseLeave={() => setBrandsOpen(false)}
                >
                  <button className="nav-link text-navy-600 flex items-center gap-1">
                    Brands
                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 ${brandsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${brandsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="w-64 bg-white shadow-xl border border-gray-100 py-3">
                      {brands.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-navy-500 hover:text-navy-700 hover:bg-accent-light transition-all duration-200 tracking-wide"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/brands"
                          className="block px-5 py-2.5 text-sm text-charcoal-900 hover:bg-stone-200 font-semibold tracking-wide bg-stone-50"
                        >
                          View All Brands
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Locations Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  <button className="nav-link text-navy-600 flex items-center gap-1">
                    Areas We Serve
                    <svg className={`w-3 h-3 ml-1 transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${locationsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="w-64 bg-white shadow-xl border border-gray-100 py-3 max-h-96 overflow-y-auto">
                      {locations.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-navy-500 hover:text-navy-700 hover:bg-accent-light transition-all duration-200 tracking-wide"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/locations"
                          className="block px-5 py-2.5 text-sm text-charcoal-900 hover:bg-stone-200 font-semibold tracking-wide bg-stone-50"
                        >
                          View All Locations
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="nav-link text-navy-600">
                  About
                </Link>

                <Link href="/contact" className="nav-link text-navy-600">
                  Contact
                </Link>
              </div>

              {/* Mobile - Call Button + Hamburger */}
              <div className="lg:hidden flex items-center gap-3">
                <a 
                  href="tel:469-908-2440" 
                  className="px-4 py-2 bg-slate-blue text-white text-sm font-medium tracking-wide rounded"
                >
                  Call Now
                </a>
                <button 
                  className="p-2 text-navy-600"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 py-6">
              <a href="tel:469-908-2440" className="block text-lg text-navy-600 font-medium mb-6">
                (469) 908-2440
              </a>
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Windows</p>
                {windowTypes.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/windows"
                  className="block py-2 text-navy-700 font-semibold hover:text-slate-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  View All Windows
                </Link>
              </div>
              
              <div className="border-t border-gray-100 my-6" />
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Doors</p>
                {doorTypes.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/doors"
                  className="block py-2 text-navy-700 font-semibold hover:text-slate-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  View All Doors
                </Link>
              </div>
              
              <div className="border-t border-gray-100 my-6" />
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Brands</p>
                {brands.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/brands"
                  className="block py-2 text-navy-700 font-semibold hover:text-slate-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  View All Brands
                </Link>
              </div>
              
              <div className="border-t border-gray-100 my-6" />
              
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Areas We Serve</p>
                {locations.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="block py-2 text-navy-700 font-semibold hover:text-slate-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  View All Locations
                </Link>
              </div>
              
              <div className="border-t border-gray-100 my-6" />
              
              <div className="space-y-1">
                <Link href="/about" className="block py-2 text-navy-600 hover:text-slate-blue transition-colors" onClick={closeMobileMenu}>About</Link>
                <Link href="/contact" className="block py-2 text-navy-600 hover:text-slate-blue transition-colors" onClick={closeMobileMenu}>Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Sticky Mobile Call Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:469-908-2440" 
          className="block w-full bg-navy-600 text-white text-center py-4 font-medium tracking-wide rounded"
        >
          CALL NOW: (469) 908-2440
        </a>
      </div>
    </>
  )
}
