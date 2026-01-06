import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Pella Windows & Doors Frisco TX',
  description: 'Authorized Pella Windows and Doors dealer in Frisco, TX. Professional installation of Pella products. Call (469) 908-2440 for free estimate.',
  keywords: 'Pella windows Frisco TX, Pella doors, Pella dealer, InsulShield glass, Pella installation',
  alternates: {
    canonical: 'https://windowreplacementfrisco.com/brands/pella-windows-doors',
  },
}

export default function PellaPage() {
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
              <li><Link href="/brands" className="hover:text-navy-700">Brands</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Pella</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/brands/pella-windows-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Pella Window & Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Industry leader in window innovation since 1925. We are proud to be an authorized Pella dealer in Frisco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                  Call (469) 908-2440
                </a>
                <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide text-center hover:bg-gray-100 transition-colors">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/pella-windows-and-doors-frisco-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className="h-20 lg:h-24 w-auto mx-auto mb-4"
                />
                <h2 className="text-xl lg:text-2xl font-serif text-navy-600">Authorized Pella Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        {/* About Pella */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  About Pella Windows & Doors
                </h2>
                <p className="text-gray-600 mb-6">
                  Pella has been an industry leader in window and door innovation since 1925. Renowned for their energy-efficient designs and extensive customization options, Pella windows and doors feature advanced technologies like their proprietary InsulShield glass packages and innovative between-the-glass blinds and shades.
                </p>
                <p className="text-gray-600 mb-6">
                  From traditional double-hung and casement windows to elegant patio doors and entry systems, Pella products combine beauty, functionality, and lasting performance for Frisco homes. Their commitment to innovation has resulted in numerous patents and industry-first features.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">Why Choose Pella</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">InsulShield Technology</span>
                      <p className="text-sm text-gray-600">Advanced glass packages for superior energy efficiency</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Between-the-Glass Options</span>
                      <p className="text-sm text-gray-600">Built-in blinds and shades that stay dust-free</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Extensive Colors</span>
                      <p className="text-sm text-gray-600">Wide range of interior and exterior finish options</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Premium Warranties</span>
                      <p className="text-sm text-gray-600">Comprehensive coverage for peace of mind</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Pella Products We Install
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Windows</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/windows/double-hung-windows" className="hover:text-blue-600 transition-colors">Double-Hung Windows</Link></li>
                  <li><Link href="/windows/single-hung-windows" className="hover:text-blue-600 transition-colors">Single-Hung Windows</Link></li>
                  <li><Link href="/windows/casement-windows" className="hover:text-blue-600 transition-colors">Casement Windows</Link></li>
                  <li><Link href="/windows/awning-windows" className="hover:text-blue-600 transition-colors">Awning Windows</Link></li>
                  <li><Link href="/windows/sliding-windows" className="hover:text-blue-600 transition-colors">Sliding Windows</Link></li>
                  <li><Link href="/windows/picture-windows" className="hover:text-blue-600 transition-colors">Picture Windows</Link></li>
                  <li><Link href="/windows/bay-bow-windows" className="hover:text-blue-600 transition-colors">Bay and Bow Windows</Link></li>
                  <li><Link href="/windows/special-shape-windows" className="hover:text-blue-600 transition-colors">Specialty Shape Windows</Link></li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Doors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/doors/entry-door-installation" className="hover:text-blue-600 transition-colors">Entry Doors</Link></li>
                  <li><Link href="/doors/patio-door-installation" className="hover:text-blue-600 transition-colors">Patio Doors</Link></li>
                  <li><Link href="/doors/french-door-installation" className="hover:text-blue-600 transition-colors">French Doors</Link></li>
                  <li><Link href="/doors/sliding-glass-door-installation" className="hover:text-blue-600 transition-colors">Sliding Glass Doors</Link></li>
                  <li><Link href="/doors/storm-door-installation" className="hover:text-blue-600 transition-colors">Storm Doors</Link></li>
                  <li><Link href="/doors/custom-door-installation" className="hover:text-blue-600 transition-colors">Custom Doors</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-stone-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is Pella InsulShield glass?</h3>
                <p className="text-gray-600">InsulShield is Pella&apos;s advanced glass technology with multiple options to optimize energy efficiency for your climate. Each level provides increasing protection against heat transfer.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What makes Pella between-the-glass blinds special?</h3>
                <p className="text-gray-600">Pella&apos;s between-the-glass blinds and shades are sealed between panes of glass, protecting them from dust, damage, and curious pets or children. They never need cleaning.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are Pella windows Energy Star certified?</h3>
                <p className="text-gray-600">Yes, many Pella windows are Energy Star certified. We can help you select the right products to maximize energy efficiency for your Frisco home.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long do Pella windows last?</h3>
                <p className="text-gray-600">With proper care, Pella windows typically last 20-30 years or more. Their quality construction and comprehensive warranties ensure long-term performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Pella Windows & Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on Pella products for your Frisco home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                Call (469) 908-2440
              </a>
              <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors">
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
