'use client'

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

const materialTypes = [
  { name: 'Vinyl Windows', href: '/materials/vinyl-windows' },
  { name: 'Aluminum Windows', href: '/materials/aluminum-windows' },
  { name: 'Fibrex Windows', href: '/materials/fibrex-windows' },
  { name: 'Fiberglass Windows', href: '/materials/fiberglass-windows' },
  { name: 'Wood Clad Windows', href: '/materials/wood-clad-windows' },
  { name: 'Wood Windows', href: '/materials/wood-windows' },
]

const brands = [
  { name: 'Andersen', href: '/brands/andersen-windows-doors' },
  { name: 'Pella', href: '/brands/pella-windows-doors' },
  { name: 'JELD-WEN', href: '/brands/jeld-wen-windows-doors' },
  { name: 'Marvin', href: '/brands/marvin-windows-doors' },
]

const locations = [
  { name: 'Frisco', href: '/locations/frisco-tx' },
  { name: 'Plano', href: '/locations/plano-tx' },
  { name: 'McKinney', href: '/locations/mckinney-tx' },
  { name: 'Allen', href: '/locations/allen-tx' },
  { name: 'The Colony', href: '/locations/the-colony-tx' },
  { name: 'Prosper', href: '/locations/prosper-tx' },
  { name: 'Little Elm', href: '/locations/little-elm-tx' },
  { name: 'Celina', href: '/locations/celina-tx' },
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

            {/* Contact Info */}
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
                  <a href="mailto:hello@windowreplacementfrisco.com" className="block text-sm text-white/70 hover:text-white transition-colors">
                    hello@windowreplacementfrisco.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-serif text-white mb-2">Hours</h4>
                <p className="text-sm text-white/70">Open 24/7 - Available for Emergency Service</p>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="lg:col-span-8">
            {/* Tagline + Back to Top */}
            <div className="flex items-start justify-between mb-10 lg:mb-12">
              <p className="text-xl lg:text-2xl font-serif italic text-white max-w-md">
                Frisco&apos;s Premier Window and Door Replacement Specialists.
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
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-6">
              {/* Windows */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Windows</h4>
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

              {/* Doors */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Doors</h4>
                <ul className="space-y-2">
                  {doorTypes.map((item) => (
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

              {/* Materials */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Materials</h4>
                <ul className="space-y-2">
                  {materialTypes.map((item) => (
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

              {/* Service Areas */}
              <div>
                <h4 className="text-sm font-serif text-white mb-4">Service Areas</h4>
                <ul className="space-y-2">
                  {locations.map((item) => (
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

      {/* Google Maps */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h3 className="text-lg font-serif text-white text-center mb-6">Find Us</h3>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8!2d-96.8236!3d33.0978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3cbb14c37a9b%3A0x8f6e8e8e8e8e8e8e!2s1125%20Legacy%20Dr%20%23230%2C%20Frisco%2C%20TX%2075034!5e0!3m2!1sen!2sus!4v1709847600000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Window Replacements of Frisco Location"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-8">
            <h3 className="text-lg font-serif text-white mb-2">Trusted Brands</h3>
            <p className="text-sm text-white/60">We proudly install products from America&apos;s finest manufacturers</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/andersen-windows-and-doors-frisco-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-12 lg:h-14 w-auto"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/pella-windows-and-doors-frisco-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-12 lg:h-14 w-auto"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/jeld-wen-windows-and-doors-frisco-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-12 lg:h-14 w-auto"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
              <img
                src="/marvin-windows-and-doors-frisco-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-12 lg:h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Disclosure */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-xs text-white/50 text-center max-w-3xl mx-auto leading-relaxed">
            Our platform facilitates connections with licensed window and door professionals through our trusted fulfillment partners, ensuring quality craftsmanship and reliable project management.
          </p>
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
              <Link href="/about" className="text-xs text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-xs text-white/50 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-xs text-white/50 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
