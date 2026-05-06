import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Aluminum Windows Replacement Frisco TX | Durable & Modern',
  description: 'Premium aluminum replacement windows in Frisco, TX. Durable, modern thermal efficiency, and sleek contemporary styling. Everything priced including installation.',
  keywords: 'aluminum windows Frisco TX, aluminum replacement windows, durable windows, modern windows',
}

export default function AluminumWindowsPage() {
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
              <li className="text-navy-700 font-medium">Aluminum Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/aluminum-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Aluminum Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Durable aluminum windows with modern thermal efficiency and sleek contemporary styling. Exceptional strength for any Frisco home.
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
                  Premium Aluminum Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Aluminum windows offer exceptional strength and durability with sleek contemporary styling. Modern thermal break technology has transformed aluminum windows into energy-efficient solutions perfect for Frisco&apos;s climate.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Modern Thermal Efficiency
                </h3>
                <p className="text-gray-600 mb-6">
                  Today&apos;s aluminum windows feature thermal break technology that dramatically improves energy performance. The thermal barrier prevents heat transfer, making modern aluminum windows nearly as efficient as vinyl while maintaining aluminum&apos;s structural advantages.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Exceptional Strength and Durability
                </h3>
                <p className="text-gray-600 mb-6">
                  Aluminum is inherently strong and resistant to warping, cracking, and rotting. This makes aluminum windows ideal for large openings and impact-prone areas. The material withstands Frisco&apos;s weather extremes without degradation.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Sleek Contemporary Design
                </h3>
                <p className="text-gray-600 mb-6">
                  Aluminum windows feature slim profiles that maximize glass area and natural light. The clean lines complement modern and contemporary architecture while providing structural integrity for large window openings.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Aluminum Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Durable & strong</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Sleek modern design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Impact resistant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Thermal break technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Low maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Wide color options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to aluminum windows? Contact us for a free consultation and estimate.
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
                <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Where Aluminum Windows Fit in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-4">Aluminum is the right material for two specific Frisco scenarios: contemporary architectural facades that demand the slim sightlines aluminum makes possible, and high-end custom builds where the homeowner wants the structural strength to support oversized glass. The Hollyhock contemporary builds, the modern subset of Newman Village, and the larger Edgestone at Legacy custom homes are typical aluminum customers. For traditional brick Frisco facades, aluminum is rarely the right answer — vinyl, fiberglass, or wood-clad fits the architectural intent better.</p>
              <p className="text-gray-600 leading-relaxed">Aluminum&apos;s strength-to-weight ratio enables window configurations that no other material can deliver. Frame profiles can run as thin as 1.5 inches while supporting glass units 8 feet tall and 4 feet wide. The result is a window that reads as almost pure glass — a signature element of contemporary Frisco architecture and a frequent ask for the rear elevations of custom homes facing greenbelts, golf courses, and creek corridors. We work with Marvin Modern, Pella aluminum-clad, and pure-aluminum specialty product depending on the architectural intent.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Thermal Break Technology</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Modern aluminum windows use thermal break technology — a non-conductive polymer strip inserted between the interior and exterior aluminum sections — to dramatically improve thermal performance. Without thermal breaks, aluminum is the worst frame material for thermal insulation. With thermal breaks, aluminum performs in the same range as vinyl. We only install thermally broken aluminum on Frisco projects, never the bare-aluminum old stock that ships in commercial product.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Aluminum Maintenance Considerations</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Aluminum windows require more exterior maintenance than vinyl or fiberglass — typically a repaint every 8 to 12 years to maintain finish appearance and prevent oxidation. The frames themselves never corrode or degrade, so the maintenance is purely cosmetic. For Frisco custom-home owners with budget for periodic refinishing, this is a non-issue. For homeowners who want a set-and-forget product, vinyl or fiberglass is a better fit. We will walk through the trade-off at the estimate.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Common Aluminum Configurations We Install</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Most Frisco aluminum projects involve large picture units paired with operable casements or awnings on contemporary facades. Marvin Modern is our most-installed aluminum-style line in Frisco — technically a wood-clad with aluminum exterior treatment, but reads as aluminum on the facade. We also install pure aluminum in commercial-style applications on the most contemporary custom builds, with thermal breaks and high-performance Low-E glass. Pricing on aluminum runs 15 to 30 percent more than equivalent vinyl, less than premium wood-clad.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Aluminum window installation in Frisco is a niche category. Most projects fall into one of three buckets: contemporary architectural builds where the slim sightlines matter (Hollyhock contemporary, Edgestone at Legacy modern), high-end custom homes with oversized openings that need the structural strength (Newman Village, Stonebriar custom), or commercial-grade renovations where aluminum&apos;s durability and dimensional stability are required. We will walk through whether aluminum is the right answer for your specific home or whether vinyl, fiberglass, or wood-clad is a better fit.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Aluminum installation in Frisco is a small fraction of our project mix — most homeowners are better served by vinyl, fiberglass, or wood-clad. We will be honest at the in-home estimate about whether aluminum is the right answer for your specific home or whether a different material delivers better long-term value. Most contemporary Frisco builds end up using fiberglass or wood-clad with aluminum-look exterior treatments rather than pure aluminum.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Aluminum installation projects in Frisco are typically targeted upgrades on contemporary facades or oversized openings rather than full-home replacements. We have done aluminum casement-and-picture wall systems in Hollyhock contemporary builds, oversized aluminum sliders in Edgestone at Legacy custom homes, and a handful of commercial-grade aluminum installations in mixed-use buildings. The aluminum category serves a small but specific need that vinyl and fiberglass cannot fully replicate.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Aluminum Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your aluminum window project.
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
