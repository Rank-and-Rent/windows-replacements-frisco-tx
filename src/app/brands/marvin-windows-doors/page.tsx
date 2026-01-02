import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Marvin Windows & Doors Frisco TX | Authorized Dealer',
  description: 'Authorized Marvin Windows and Doors dealer in Frisco, TX. Professional installation of premium Marvin products. Call (469) 908-2440 for free estimate.',
  keywords: 'Marvin windows Frisco TX, Marvin doors, Marvin dealer, custom windows, Marvin installation',
}

export default function MarvinPage() {
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
              <li className="text-navy-700 font-medium">Marvin</li>
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
                Marvin Window & Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Premium custom windows and doors since 1912. We are proud to be an authorized Marvin dealer in Frisco.
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

        {/* About Marvin */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  About Marvin Windows & Doors
                </h2>
                <p className="text-gray-600 mb-6">
                  Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance.
                </p>
                <p className="text-gray-600 mb-6">
                  Their extensive product lines, including Marvin Signature, Marvin Elevate, and Marvin Essential collections, offer unparalleled customization options in materials, finishes, and hardware. For Frisco homeowners seeking luxury, durability, and architectural distinction, Marvin delivers exceptional value.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">Why Choose Marvin</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Made-to-Order</span>
                      <p className="text-sm text-gray-600">Every window and door built to your exact specifications</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Premium Materials</span>
                      <p className="text-sm text-gray-600">Ultrex fiberglass exteriors, warm wood interiors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Unlimited Options</span>
                      <p className="text-sm text-gray-600">Virtually unlimited sizes, shapes, and configurations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Architectural Excellence</span>
                      <p className="text-sm text-gray-600">Designed for distinctive homes and demanding projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Collections */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Marvin Collections We Install
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Signature</h3>
                <p className="text-gray-600 mb-4">The ultimate in custom craftsmanship with unlimited design possibilities.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Ultimate and Modern lines</li>
                  <li>Premium wood interiors</li>
                  <li>Exclusive hardware options</li>
                  <li>Largest customization range</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Elevate</h3>
                <p className="text-gray-600 mb-4">The perfect balance of beauty, strength, and performance.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Ultrex fiberglass exteriors</li>
                  <li>Warm wood interiors</li>
                  <li>Exceptional durability</li>
                  <li>Extensive style options</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Essential</h3>
                <p className="text-gray-600 mb-4">Streamlined design with outstanding performance at accessible pricing.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>All-fiberglass construction</li>
                  <li>Modern aesthetics</li>
                  <li>Low maintenance</li>
                  <li>Energy efficient</li>
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">What makes Marvin different from other brands?</h3>
                <p className="text-gray-600">Marvin specializes in made-to-order products with virtually unlimited customization options. Their focus on craftsmanship and architectural excellence sets them apart for discerning homeowners.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is Ultrex fiberglass?</h3>
                <p className="text-gray-600">Ultrex is Marvin&apos;s proprietary fiberglass material that is 8 times stronger than vinyl. It resists expansion and contraction, ensuring lasting performance and tight seals in Texas climate extremes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does a Marvin custom order take?</h3>
                <p className="text-gray-600">Marvin custom orders typically take 8-12 weeks depending on the complexity and product line. We provide accurate timelines during your design consultation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Is Marvin worth the premium price?</h3>
                <p className="text-gray-600">For homeowners who value custom craftsmanship, architectural distinction, and lasting quality, Marvin provides exceptional value. Their products often last decades longer than standard options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Marvin Windows & Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free design consultation and estimate on Marvin products for your Frisco home.
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
