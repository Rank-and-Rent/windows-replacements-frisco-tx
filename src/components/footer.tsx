'use client'

import Link from 'next/link'

const windowTypes = [
  { name: 'Double-Hung', href: '/windows/double-hung' },
  { name: 'Single-Hung', href: '/windows/single-hung' },
  { name: 'Casement', href: '/windows/casement' },
  { name: 'Awning', href: '/windows/awning' },
  { name: 'Sliding', href: '/windows/sliding' },
  { name: 'Picture', href: '/windows/picture' },
  { name: 'Bay & Bow', href: '/windows/bay-bow' },
  { name: 'Special Shape', href: '/windows/special-shape' },
]

const brands = [
  { name: 'Andersen', href: '/brands/andersen' },
  { name: 'Pella', href: '/brands/pella' },
  { name: 'Jeld-Wen', href: '/brands/jeld-wen' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-600">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Logo & Info */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 50 45" className="w-12 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 44V18C4 8 14 2 25 2C36 2 46 8 46 18V44" stroke="white" strokeWidth="2.5" fill="none"/>
                <path d="M10 44V20C10 12 16 6 25 6C34 6 40 12 40 20V44" stroke="white" strokeWidth="1.5" fill="none"/>
                <line x1="25" y1="6" x2="25" y2="44" stroke="white" strokeWidth="1.5"/>
                <line x1="4" y1="30" x2="46" y2="30" stroke="white" strokeWidth="1.5"/>
                <rect x="4" y="44" width="42" height="1" fill="white"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-serif font-semibold text-white tracking-wide">FRISCO WINDOW</span>
                <span className="text-[15px] font-serif font-semibold text-white tracking-wide">REPLACEMENTS</span>
              </div>
            </Link>

            {/* Address Section */}
            <div className="mt-10 space-y-6">
              <div>
                <h4 className="text-sm font-serif text-white mb-2">Location</h4>
                <address className="not-italic text-sm text-white/70 leading-relaxed">
                  1125 Legacy Dr #230<br />
                  Frisco, TX 75034
                </address>
              </div>
              
              <div>
                <h4 className="text-sm font-serif text-white mb-2">Contact Us</h4>
                <div className="space-y-1">
                  <a href="tel:469-908-2440" className="block text-sm text-white/70 hover:text-white transition-colors">
                    (469) 908-2440
                  </a>
                  <a href="mailto:info@windowreplacementfrisco.com" className="block text-sm text-white/70 hover:text-white transition-colors">
                    info@windowreplacementfrisco.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="text-sm font-serif text-white mb-3">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Tagline & Navigation */}
          <div className="lg:col-span-8">
            {/* Tagline + Back to Top */}
            <div className="flex items-start justify-between mb-10 lg:mb-12">
              <p className="text-xl lg:text-2xl font-serif italic text-white max-w-md">
                Frisco&apos;s Premier Window Replacement Specialists.
              </p>
              <button 
                onClick={scrollToTop}
                className="hidden lg:flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.15em]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Top
              </button>
            </div>

            {/* Navigation Columns */}
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Window Types */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Window Types</h4>
                <ul className="space-y-2">
                  {windowTypes.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-[0.1em]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Brands</h4>
                <ul className="space-y-2">
                  {brands.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-[0.1em]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-xs text-white/60 hover:text-white transition-colors uppercase tracking-[0.1em]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              {new Date().getFullYear()} Window Replacements of Frisco. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
