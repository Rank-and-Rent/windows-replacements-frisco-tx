'use client'

import { useState } from 'react'
import Link from 'next/link'

const windowTypes = [
  { name: 'Double-Hung Windows', href: '/windows/double-hung' },
  { name: 'Single-Hung Windows', href: '/windows/single-hung' },
  { name: 'Awning Windows', href: '/windows/awning' },
  { name: 'Casement Windows', href: '/windows/casement' },
  { name: 'Sliding Windows', href: '/windows/sliding' },
  { name: 'Picture Windows', href: '/windows/picture' },
  { name: 'Bay & Bow Windows', href: '/windows/bay-bow' },
  { name: 'Special Shape Windows', href: '/windows/special-shape' },
]

const brands = [
  { name: 'Andersen', href: '/brands/andersen' },
  { name: 'Pella', href: '/brands/pella' },
  { name: 'Jeld-Wen', href: '/brands/jeld-wen' },
]

const locations = [
  { name: 'Plano', href: '/locations/plano-tx' },
  { name: 'McKinney', href: '/locations/mckinney-tx' },
  { name: 'Allen', href: '/locations/allen-tx' },
  { name: 'The Colony', href: '/locations/the-colony-tx' },
  { name: 'Little Elm', href: '/locations/little-elm-tx' },
  { name: 'Prosper', href: '/locations/prosper-tx' },
  { name: 'Celina', href: '/locations/celina-tx' },
  { name: 'Lewisville', href: '/locations/lewisville-tx' },
  { name: 'Carrollton', href: '/locations/carrollton-tx' },
  { name: 'Denton', href: '/locations/denton-tx' },
  { name: 'Richardson', href: '/locations/richardson-tx' },
  { name: 'Addison', href: '/locations/addison-tx' },
  { name: 'Dallas', href: '/locations/dallas-tx' },
  { name: 'Coppell', href: '/locations/coppell-tx' },
  { name: 'Flower Mound', href: '/locations/flower-mound-tx' },
]

export default function Header() {
  const [windowsOpen, setWindowsOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="section-divider" />
      
      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              {/* Window arch icon similar to Adler */}
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

            {/* Center - Phone + Social (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-navy-600 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-navy-600 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-navy-600 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-navy-600 transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
              
              {/* Divider */}
              <div className="h-5 w-px bg-navy-200" />
              
              {/* Phone */}
              <a href="tel:469-908-2440" className="text-navy-600 font-medium tracking-wide hover:text-slate-blue transition-colors">
                (469) 908-2440
              </a>
              
              {/* Divider */}
              <div className="h-5 w-px bg-navy-200" />
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
                  <div className="w-52 bg-white shadow-xl border border-gray-100 py-3">
                    {brands.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-navy-500 hover:text-navy-700 hover:bg-accent-light transition-all duration-200 tracking-wide"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Link */}
              <Link href="/services" className="nav-link text-navy-600">
                Services
              </Link>
              
              {/* Locations Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button className="nav-link text-navy-600 flex items-center gap-1">
                  Locations
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
                  </div>
                </div>
              </div>

              <Link href="/gallery" className="nav-link text-navy-600">
                Gallery
              </Link>

              <Link href="/contact" className="nav-link text-navy-600">
                Contact
                <svg className="w-3 h-3 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-navy-600"
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

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-elegant ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-6">
            <a href="tel:469-908-2440" className="block text-lg text-navy-600 font-medium mb-6">
              (469) 908-2440
            </a>
            
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Window Types</p>
              {windowTypes.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-100 my-6" />
            
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Brands</p>
              {brands.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-100 my-6" />
            
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-navy-400 mb-3">Locations</p>
              {locations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-navy-600 hover:text-slate-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-100 my-6" />
            
            <div className="space-y-1">
              <Link href="/services" className="block py-2 text-navy-600 hover:text-slate-blue transition-colors">Services</Link>
              <Link href="/gallery" className="block py-2 text-navy-600 hover:text-slate-blue transition-colors">Gallery</Link>
              <Link href="/contact" className="block py-2 text-navy-600 hover:text-slate-blue transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
