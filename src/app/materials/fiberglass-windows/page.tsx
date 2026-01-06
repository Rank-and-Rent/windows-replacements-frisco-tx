import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Fiberglass Windows Replacement Frisco TX | Ultimate Strength & Insulation',
  description: 'Premium fiberglass replacement windows in Frisco, TX. Maximum strength, superior insulation, and authentic wood appearance. Everything priced including installation.',
  keywords: 'fiberglass windows Frisco TX, fiberglass replacement windows, strong windows, insulated fiberglass windows',
}

export default function FiberglassWindowsPage() {
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
              <li className="text-navy-700 font-medium">Fiberglass Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/fiberglass-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Fiberglass Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Ultimate strength and insulation with authentic wood-like beauty. Premium fiberglass windows from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium Fiberglass Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Frisco homeowners seeking the pinnacle of window performance choose fiberglass for its unmatched combination of structural strength, superior thermal efficiency, and authentic wood aesthetics. In a city with luxury architecture from historic bungalows to modern developments, fiberglass windows provide the ultimate durability and energy performance that discerning Frisco residents demand.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Unrivaled Structural Strength
                </h3>
                <p className="text-gray-600 mb-6">
                  Fiberglass is fundamentally stronger than any other window frame material, making it ideal for Frisco&apos;s occasional severe weather and hail storms. The material&apos;s tensile strength exceeds steel while maintaining flexibility that prevents cracking during temperature extremes. Unlike vinyl that can become brittle or wood that warps, fiberglass maintains perfect alignment and smooth operation year-round in Frisco&apos;s variable climate.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Superior Thermal Performance
                </h3>
                <p className="text-gray-600 mb-6">
                  Fiberglass&apos;s naturally low thermal conductivity creates exceptional insulating properties that significantly reduce energy costs in Frisco&apos;s hot summers. The material conducts heat 500 times slower than aluminum and far better than wood, creating a natural thermal barrier. Frisco homeowners typically see 35-45% reductions in heating and cooling costs with fiberglass windows.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Authentic Wood Beauty Without Maintenance
                </h3>
                <p className="text-gray-600 mb-6">
                  Modern fiberglass windows replicate the natural beauty of wood with stunning accuracy, yet require none of the maintenance that authentic wood demands in Frisco&apos;s climate. Advanced manufacturing creates wood-grain textures virtually indistinguishable from real wood, perfect for Frisco&apos;s historic neighborhoods while eliminating annual refinishing requirements.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Moisture Resistance for Texas Climate
                </h3>
                <p className="text-gray-600 mb-6">
                  Fiberglass is inherently moisture-resistant, making it perfect for Frisco&apos;s humid summers and occasional heavy rains. Unlike wood that absorbs moisture and rots, fiberglass remains impervious to water damage. The material never needs sealing or protective treatments, preventing mold and mildew growth that can compromise indoor air quality.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Fiberglass Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Ultimate strength and impact resistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Superior thermal insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Authentic wood-like appearance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Zero maintenance exterior finish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Complete moisture resistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">20-25 year manufacturer warranties</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to fiberglass windows? Contact us for a free consultation and estimate.
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

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How strong are fiberglass windows?</h3>
                <p className="text-gray-600">Fiberglass is stronger than any other window frame material. It exceeds steel in tensile strength while maintaining flexibility, making it ideal for large installations and impact-prone areas in Frisco.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are fiberglass windows energy efficient?</h3>
                <p className="text-gray-600">Extremely. Fiberglass&apos;s low thermal conductivity creates superior insulation. Combined with advanced glass packages, fiberglass windows can reduce energy costs by 35-45% in Frisco&apos;s climate.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Do fiberglass windows require maintenance?</h3>
                <p className="text-gray-600">Fiberglass windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Fiberglass Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your fiberglass window project.
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
