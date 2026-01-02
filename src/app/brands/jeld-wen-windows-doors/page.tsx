import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'JELD-WEN Windows & Doors Frisco TX | Authorized Dealer',
  description: 'Authorized JELD-WEN Windows and Doors dealer in Frisco, TX. Professional installation of JELD-WEN products. Call (469) 908-2440 for free estimate.',
  keywords: 'JELD-WEN windows Frisco TX, JELD-WEN doors, JELD-WEN dealer, AuraLast wood, JELD-WEN installation',
}

export default function JeldWenPage() {
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
              <li className="text-navy-700 font-medium">JELD-WEN</li>
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
                JELD-WEN Window & Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Global leader in reliable, affordable windows and doors. We are proud to be an authorized JELD-WEN dealer in Frisco.
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

        {/* About JELD-WEN */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  About JELD-WEN Windows & Doors
                </h2>
                <p className="text-gray-600 mb-6">
                  JELD-WEN is a global leader in window and door manufacturing, offering reliable and affordable solutions for residential applications. With a focus on quality craftsmanship and energy efficiency, JELD-WEN provides a wide selection of vinyl, wood, and aluminum-clad windows, as well as interior and exterior doors.
                </p>
                <p className="text-gray-600 mb-6">
                  Their AuraLast wood protection technology and Low-E glass options make JELD-WEN products an excellent choice for Frisco homeowners seeking value and performance. JELD-WEN combines affordability with quality that stands the test of time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">Why Choose JELD-WEN</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">AuraLast Wood</span>
                      <p className="text-sm text-gray-600">Pine treated to resist rot, decay, and termites</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Wide Selection</span>
                      <p className="text-sm text-gray-600">Extensive product lines for every budget and style</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Competitive Pricing</span>
                      <p className="text-sm text-gray-600">Quality products at accessible price points</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Energy Efficient</span>
                      <p className="text-sm text-gray-600">Low-E glass and quality construction</p>
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
              JELD-WEN Products We Install
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is JELD-WEN AuraLast wood?</h3>
                <p className="text-gray-600">AuraLast is JELD-WEN&apos;s proprietary wood protection process that treats pine to be highly resistant to rot, decay, and termite damage. It carries a 20-year warranty against wood decay.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Is JELD-WEN a good value compared to other brands?</h3>
                <p className="text-gray-600">JELD-WEN offers excellent value, providing quality construction and energy efficiency at competitive price points. They are ideal for budget-conscious homeowners who want to avoid compromising quality.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What warranty does JELD-WEN offer?</h3>
                <p className="text-gray-600">JELD-WEN offers various warranty options depending on the product line, including limited lifetime warranties on many products. Specific coverage details vary by product.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are JELD-WEN windows energy efficient?</h3>
                <p className="text-gray-600">Yes, JELD-WEN offers Energy Star certified windows with Low-E glass options that help reduce energy costs. We can help you select the most efficient options for your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for JELD-WEN Windows & Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on JELD-WEN products for your Frisco home.
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
