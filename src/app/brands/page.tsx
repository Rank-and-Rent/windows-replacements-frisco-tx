import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Window & Door Brands | Andersen, Pella, JELD-WEN, Marvin | Frisco, TX',
  description: 'We install premium windows and doors from Andersen, Pella, JELD-WEN, and Marvin in Frisco, TX. Expert installation. Call (469) 908-2440.',
  keywords: 'Andersen windows Frisco, Pella windows Frisco, JELD-WEN windows, Marvin windows, window brands',
  alternates: {
    canonical: 'https://windowreplacementfrisco.com/brands',
  },
}

const brands = [
  {
    name: 'Andersen Windows & Doors',
    slug: 'andersen-windows-doors',
    description: 'America\'s most trusted window brand with over 120 years of innovation. Known for energy efficiency and durability.',
    features: ['Fibrex composite material', 'Energy Star certified', '120+ years of innovation', 'Limited lifetime warranty'],
    image: '/windows/double-hung-windows-frisco-tx.jpg',
  },
  {
    name: 'Pella Windows & Doors',
    slug: 'pella-windows-doors',
    description: 'Industry leader in window innovation since 1925. Premium quality with extensive customization options.',
    features: ['InsulShield glass technology', 'Between-the-glass blinds', 'Extensive color options', 'Premium warranties'],
    image: '/windows/double-hung-windows-frisco-tx.jpg',
  },
  {
    name: 'JELD-WEN Windows & Doors',
    slug: 'jeld-wen-windows-doors',
    description: 'Global leader offering reliable, affordable windows and doors. Excellent value without compromising quality.',
    features: ['AuraLast wood protection', 'Wide product selection', 'Competitive pricing', 'Energy efficient options'],
    image: '/windows/double-hung-windows-frisco-tx.jpg',
  },
  {
    name: 'Marvin Windows & Doors',
    slug: 'marvin-windows-doors',
    description: 'Premium custom windows and doors since 1912. Family-owned with unmatched craftsmanship and customization.',
    features: ['Made-to-order customization', 'Premium wood interiors', 'Ultrex fiberglass exteriors', 'Architectural distinction'],
    image: '/windows/double-hung-windows-frisco-tx.jpg',
  },
]

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="bg-stone-100 py-4 pt-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ol className="flex items-center space-x-2 text-sm text-navy-500">
              <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Brands</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              Premium Window & Door Brands in Frisco, TX
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We offer America&apos;s most trusted window and door manufacturers.
              Each brand offers unique advantages for your Frisco home.
            </p>
          </div>
        </section>

        {/* Prominent Brand Logos */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/andersen-windows-and-doors-frisco-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/pella-windows-and-doors-frisco-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/jeld-wen-windows-and-doors-frisco-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/marvin-windows-and-doors-frisco-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 gap-8">
              {brands.map((brand) => (
                <Link 
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${brand.image})` }}
                    />
                    <div className="absolute inset-0 bg-navy-600/30 group-hover:bg-navy-600/20 transition-colors" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 px-4 py-2 text-sm font-medium text-navy-600 rounded">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-navy-600 mb-3 group-hover:text-slate-blue transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{brand.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {brand.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 text-slate-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-sm font-medium text-slate-blue group-hover:text-navy-600 transition-colors">
                      Learn More About {brand.name.split(' ')[0]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Brands */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Why We Partner With These Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Proven Quality</h3>
                <p className="text-sm text-gray-600">These manufacturers have decades of proven performance and stand behind their products with comprehensive warranties.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Energy Efficiency</h3>
                <p className="text-sm text-gray-600">All brands offer Energy Star certified options that help reduce heating and cooling costs in Texas climate.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Style Options</h3>
                <p className="text-sm text-gray-600">From traditional to contemporary, these brands offer styles and finishes to complement any Frisco home architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Find the Perfect Brand for Your Home
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Not sure which brand is right for you? Our experts can help you choose based on your home, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:469-908-2440" 
                className="btn-outline-light px-8 py-4"
              >
                Call (469) 908-2440
              </a>
              <Link 
                href="/contact" 
                className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
