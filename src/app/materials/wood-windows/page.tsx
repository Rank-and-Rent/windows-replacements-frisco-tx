import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement Frisco TX | Traditional Beauty & Insulation',
  description: 'Premium wood replacement windows in Frisco, TX. Traditional wood windows with natural beauty and superior insulation. Everything priced including installation.',
  keywords: 'wood windows Frisco TX, wood replacement windows, traditional windows, natural wood windows',
}

export default function WoodWindowsPage() {
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
              <li><Link href="/materials" className="hover:text-navy-700">Materials</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Wood Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/wood-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Wood Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship for discerning Frisco homeowners.
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

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 prose-elegant">
                <h2 className="text-2xl lg:text-3xl font-serif text-navy-600 mb-6">
                  Premium Wood Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Wood windows represent the pinnacle of traditional craftsmanship and natural beauty. For Frisco homeowners who value authentic materials and timeless elegance, wood windows provide unmatched character and superior thermal performance.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Natural Beauty
                </h3>
                <p className="text-gray-600 mb-6">
                  Wood windows offer the natural warmth and character that only real wood can provide. Each piece of wood has unique grain patterns and natural variations that create visual interest and architectural authenticity. Wood can be stained to enhance its natural beauty or painted to match any color scheme.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Superior Insulation
                </h3>
                <p className="text-gray-600 mb-6">
                  Wood is a natural insulator with thermal properties superior to aluminum and comparable to vinyl. This natural insulation helps maintain comfortable indoor temperatures and reduces energy costs. Combined with modern glass packages, wood windows deliver exceptional energy performance.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Timeless Character
                </h3>
                <p className="text-gray-600 mb-6">
                  Wood windows have been used in architecture for centuries, making them the perfect choice for historic homes and traditional designs. The material ages gracefully, developing a patina that adds character over time. Modern wood windows feature advanced treatments that protect against moisture and insects while maintaining wood&apos;s natural beauty.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Wood Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Natural beauty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Superior insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Timeless character</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Customizable finishes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Architectural authenticity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Modern protection treatments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to wood windows? Contact us for a free consultation and estimate.
                  </p>
                  <a 
                    href="tel:469-908-2440" 
                    className="block w-full bg-white text-navy-600 text-center py-3 font-medium rounded hover:bg-gray-100 transition-colors mb-3"
                  >
                    (469) 908-2440
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-white text-white text-center py-3 font-medium rounded hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Wood Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your wood window project.
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
