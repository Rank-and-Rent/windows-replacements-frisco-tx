import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors Frisco TX',
  description: 'Authorized Andersen Windows and Doors dealer in Frisco, TX. Professional installation of Andersen products. Call (469) 908-2440 for free estimate.',
  keywords: 'Andersen windows Frisco TX, Andersen doors, Andersen dealer, Fibrex windows, Andersen installation',
  alternates: {
    canonical: 'https://windowreplacementfrisco.com/brands/andersen-windows-doors',
  },
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
            style={{ backgroundImage: 'url(/brands/andersen-windows-frisco-tx.jpg)' }}
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

        {/* Prominent Brand Logo */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/andersen-windows-and-doors-frisco-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-20 lg:h-24 w-auto mx-auto mb-4"
                />
                <h2 className="text-xl lg:text-2xl font-serif text-navy-600">Authorized Andersen Dealer</h2>
              </div>
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
                <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Andersen History and Manufacturing</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Andersen Windows is the largest window manufacturer in North America by volume and one of the oldest — founded in 1903 in Hudson, Wisconsin and still family-owned. The company produces Andersen 100 Series, 200 Series, 400 Series, and the premium A-Series, plus the Renewal by Andersen retrofit line. Each tier targets a different price-to-performance balance. We are an authorized Andersen dealer in Frisco and install all four core lines, with most Frisco projects falling in the 400 Series and A-Series range.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Where Andersen Fits Best in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Andersen 400 Series is our most-installed Andersen line in Frisco. The wood-clad construction (vinyl exterior over a wood interior) reads as authentic on the brick traditionals of The Trails, Heritage Lakes, Plantation Resort, and Phillips Creek Ranch. The A-Series is a fit for upscale Frisco custom homes in Newman Village, Edgestone at Legacy, and Stonebriar where the homeowner wants the design flexibility of pure custom dimensioning, dark exterior finishes, and the deepest sash profiles available in production product. The 100 Series and 200 Series Fibrex composite line is a strong value play for full-home replacements where the homeowner wants Andersen quality at the lower end of the price range.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Andersen Warranty and Service</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Andersen 400 Series and A-Series carry the strongest warranty in the industry — 20 years on glass, 10 years on non-glass parts, and lifetime coverage on parts and labor for some components. We register every Andersen warranty in your name on completion day and back our installation labor with our own multi-year written warranty. Service calls in Frisco for Andersen warranty work typically scheduled within a week. Andersen has a network of regional service centers that handles warranty claims quickly — one of the reasons we recommend the brand for homeowners staying in their home long-term.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Common Andersen Configurations We Install in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Most Andersen Frisco projects are full-home replacements involving 18 to 28 openings of mixed double-hung, casement, and picture units. Master bedroom and primary-living openings get double-hung in the 400 Series with simulated divided lite grids on the front elevation. Kitchens use casement over the sink with a picture window flank. Two-story foyers use stacked picture-with-arch-transom configurations. We finish with the same Fibrex or wood-clad spec across the full home for visual consistency.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Andersen has the broadest dealer network in North Texas, which translates to faster lead times, better service availability, and easier warranty resolution than smaller brands. We have direct factory relationships for the 100, 200, 400, and A-Series lines and ship orders directly from the Andersen plant in Wisconsin to our Frisco shop. Most Andersen orders ship within four to six weeks of order, with custom A-Series orders running eight to twelve weeks for the most specialized configurations.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Andersen&apos;s Renewal by Andersen retrofit division is widely advertised but is a separate dealer network from the standard Andersen product. We are an authorized dealer for the standard Andersen lines (100, 200, 400, A-Series), which generally deliver better price-to-performance value than the Renewal product for most Frisco replacement scenarios. For homeowners who specifically want Renewal, we can refer you to a Renewal dealer.</p>
          </div>
        </div>
      </section>

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
