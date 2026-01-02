import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Window Installation & Replacement Services | Frisco, TX',
  description: 'Professional window installation and replacement services in Frisco, TX. Double-hung, casement, sliding, bay, picture windows and more. Call (469) 908-2440.',
  keywords: 'window installation Frisco TX, window replacement, double-hung windows, casement windows, sliding windows, bay windows',
}

const windowServices = [
  {
    name: 'Double-Hung Windows',
    href: '/windows/double-hung-windows',
    description: 'Classic windows with top and bottom sashes that slide vertically. Easy to clean and maintain, with excellent ventilation options.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
  },
  {
    name: 'Single-Hung Windows',
    href: '/windows/single-hung-windows',
    description: 'Traditional windows with a fixed upper sash and movable lower sash. A budget-friendly option with timeless appeal.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
  },
  {
    name: 'Casement Windows',
    href: '/windows/casement-windows',
    description: 'Side-hinged windows that open outward with a crank mechanism. Maximum ventilation and unobstructed views.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
  },
  {
    name: 'Awning Windows',
    href: '/windows/awning-windows',
    description: 'Top-hinged windows that open outward, creating an awning effect. Perfect for ventilation even during light rain.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
  },
  {
    name: 'Sliding Windows',
    href: '/windows/sliding-windows',
    description: 'Horizontally sliding windows that are perfect for wide openings. Space-saving design with smooth operation.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=800',
  },
  {
    name: 'Picture Windows',
    href: '/windows/picture-windows',
    description: 'Large fixed windows that provide unobstructed views and flood rooms with natural light. Perfect for showcasing outdoor scenery.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800',
  },
  {
    name: 'Bay & Bow Windows',
    href: '/windows/bay-bow-windows',
    description: 'Multi-panel windows that project outward, creating additional interior space and dramatic visual impact.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800',
  },
  {
    name: 'Special Shape Windows',
    href: '/windows/special-shape-windows',
    description: 'Custom-shaped windows including arched, circular, and geometric designs. Add architectural distinction to your home.',
    image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=800',
  },
]

export default function WindowsPage() {
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
              <li className="text-navy-700 font-medium">Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              Window Replacement in Frisco, TX
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Transform your home with premium windows from Andersen, Pella, JELD-WEN, and Marvin. 
              Professional installation backed by expert craftsmanship.
            </p>
          </div>
        </section>

        {/* Window Services Grid */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {windowServices.map((service) => (
                <Link 
                  key={service.name}
                  href={service.href}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-navy-600/20 group-hover:bg-navy-600/10 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif text-navy-600 mb-2 group-hover:text-slate-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                    <span className="text-sm font-medium text-slate-blue group-hover:text-navy-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Why Choose Our Window Installation Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Premium Brands</h3>
                <p className="text-sm text-gray-600">Authorized dealer for Andersen, Pella, JELD-WEN, and Marvin windows</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Energy Efficient</h3>
                <p className="text-sm text-gray-600">Low-E glass and insulated frames reduce energy costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Expert Installation</h3>
                <p className="text-sm text-gray-600">Factory-trained installers ensure perfect fit and performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Warranty Protection</h3>
                <p className="text-sm text-gray-600">Comprehensive manufacturer warranties plus our workmanship guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready to Upgrade Your Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate. Our window specialists are ready to help you find the perfect solution for your Frisco home.
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
