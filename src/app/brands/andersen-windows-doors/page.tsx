import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors Frisco TX | Authorized Dealer',
  description: 'Authorized Andersen Windows and Doors dealer in Frisco, TX. Professional installation of Andersen products. Call (469) 908-2440 for free estimate.',
  keywords: 'Andersen windows Frisco TX, Andersen doors, Andersen dealer, Fibrex windows, Andersen installation',
}

export default function AndersenPage() {
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
              <li className="text-navy-700 font-medium">Andersen</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/windows/double-hung-windows-frisco-tx.jpg' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Andersen Window & Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                America&apos;s most trusted window brand for over 120 years. We are proud to be an authorized Andersen dealer in Frisco.
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

        {/* Prominent Brand Logos */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/andersen-windows-and-doors-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/Pella-Corp-Windows-Doors-Logo-2x1-1.png"
                  alt="Pella Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/jeld-wen-windows-and-doors-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
              <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
                <img
                  src="/Marvin-LOCKUP-CMYK-898x301.png"
                  alt="Marvin Windows & Doors"
                  className="h-16 lg:h-20 w-auto"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* About Andersen */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  About Andersen Windows & Doors
                </h2>
                <p className="text-gray-600 mb-6">
                  Andersen Windows and Doors has been a trusted name in window and door manufacturing for over 120 years. Known for exceptional quality, energy efficiency, and innovative design, Andersen offers a comprehensive range of products including double-hung windows, casement windows, sliding patio doors, and hinged French doors.
                </p>
                <p className="text-gray-600 mb-6">
                  Their revolutionary Fibrex composite material combines the strength of wood with the low-maintenance benefits of vinyl, providing superior durability and performance for Frisco homeowners. Andersen products are designed to withstand Texas weather while maintaining their beauty for decades.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">Why Choose Andersen</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Fibrex Composite</span>
                      <p className="text-sm text-gray-600">2x stronger than vinyl with the beauty of wood</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Energy Efficiency</span>
                      <p className="text-sm text-gray-600">Energy Star certified for lower utility bills</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Low Maintenance</span>
                      <p className="text-sm text-gray-600">No painting required, easy to clean</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Warranty Protection</span>
                      <p className="text-sm text-gray-600">Limited lifetime warranty coverage</p>
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
              Andersen Products We Install
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are you an authorized Andersen dealer?</h3>
                <p className="text-gray-600">Yes, we are an authorized Andersen dealer in Frisco, TX. This means we have direct access to Andersen products and factory-trained installers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is Andersen Fibrex material?</h3>
                <p className="text-gray-600">Fibrex is Andersen&apos;s exclusive composite material made from wood fiber and thermoplastic polymer. It is twice as strong as vinyl and does not require painting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What warranty comes with Andersen products?</h3>
                <p className="text-gray-600">Andersen offers a limited lifetime warranty on most products, covering defects in materials and workmanship. Specific coverage varies by product line.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does Andersen window installation take?</h3>
                <p className="text-gray-600">Most Andersen window installations in Frisco homes take 1-3 days depending on the number of windows. We provide accurate timelines during your consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Andersen Windows & Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on Andersen products for your Frisco home.
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
