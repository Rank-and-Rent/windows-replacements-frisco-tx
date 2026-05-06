import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Frisco TX | Authentic Wood Interiors',
  description: 'Premium wood-clad replacement windows in Frisco, TX. Authentic wood interiors with weather-resistant exterior protection. Everything priced including installation.',
  keywords: 'wood clad windows Frisco TX, wood clad replacement windows, wood windows, aluminum clad windows',
}

export default function WoodCladWindowsPage() {
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
              <li className="text-navy-700 font-medium">Wood Clad Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/wood-clad-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Wood Clad Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Authentic wood interiors with weather-resistant exterior protection. Traditional beauty meets modern durability and low maintenance.
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
                  Premium Wood Clad Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Wood-clad windows offer the perfect combination of authentic wood beauty on the interior and durable, low-maintenance protection on the exterior. This hybrid design gives Frisco homeowners the warmth and character of wood inside while protecting against Texas weather outside.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Authentic Wood Interiors
                </h3>
                <p className="text-gray-600 mb-6">
                  The interior of wood-clad windows features real wood that can be stained or painted to match any décor. This authentic wood surface provides the natural warmth and character that only real wood can offer, perfect for Frisco homes seeking traditional elegance.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Weather Protection
                </h3>
                <p className="text-gray-600 mb-6">
                  The exterior is protected by a durable cladding material—typically aluminum or vinyl—that shields the wood from moisture, UV rays, and temperature extremes. This protection eliminates the need for exterior painting and dramatically reduces maintenance requirements.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Traditional Appeal
                </h3>
                <p className="text-gray-600 mb-6">
                  Wood-clad windows maintain the traditional appeal and architectural authenticity that many Frisco homeowners desire, while providing modern performance and durability. The combination makes wood-clad windows ideal for both historic renovations and new construction.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Wood Clad Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Authentic wood interiors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Weather protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Traditional appeal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Low maintenance exterior</span>
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
                      <span className="text-sm text-gray-600">Customizable finishes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to wood-clad windows? Contact us for a free consultation and estimate.
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
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Why Wood-Clad Is the Premium Choice for Frisco Custom Homes</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Wood-clad windows pair the warmth of authentic wood interiors with the low-maintenance protection of aluminum, vinyl, or Fibrex on the exterior. For Frisco custom homes in Newman Village, Edgestone at Legacy, Stonebriar, and Hollyhock, the look is hard to match with any synthetic alternative. The wood interior accepts stain or paint to match interior trim and millwork. The exterior cladding handles Texas UV, rain, and hail without the maintenance demands of all-wood construction. Premium wood-clad lines from Andersen, Pella, Marvin, and JELD-WEN deliver 30+ year service life with proper installation.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Wood Species and Interior Finish Options</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Wood-clad windows ship with a range of interior species — pine is standard, but most premium lines also offer fir, cherry, oak, and mahogany. Pine is the value tier and accepts stain or paint readily. Cherry and mahogany are upscale options for premium Frisco custom homes where the wood becomes a focal element of the room. Marvin Signature, Andersen A-Series, and Pella Reserve all offer the broadest species selection. We bring physical wood samples to every wood-clad estimate so you can see exactly how each species takes stain in your home&apos;s lighting.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Wood-Clad Maintenance</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">The exterior cladding (aluminum, vinyl, or Fibrex) requires almost no maintenance — periodic cleaning is the extent of it. The interior wood requires the same care as any other wood millwork in the home — periodic dusting and cleaning, occasional touch-up if the finish gets scuffed, and a refinish every 15 to 25 years if the homeowner wants to refresh the look. For most Frisco custom-home owners, this maintenance level is consistent with the rest of the home&apos;s woodwork.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Wood-Clad Service Life</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Properly installed wood-clad windows last 30 to 40+ years. The cladding protects the wood from moisture and UV indefinitely, and the wood interior — protected from weather — does not degrade over time. Premium lines from Andersen, Pella, and Marvin all carry 20-year glass warranties and 10-year non-glass component warranties. We register every warranty in your name on completion day and back our installation labor with our own multi-year written warranty.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Wood-clad projects in Frisco are typically high-end custom-home installations rather than production-builder replacements. The price premium over vinyl runs 50 to 100 percent on equivalent configurations, which is a real budget consideration. For Newman Village, Edgestone at Legacy, Stonebriar, and Hollyhock custom builds where the homeowner wants the warmth of wood interiors paired with low-maintenance exteriors, wood-clad is the right answer. We bring physical samples and walk through the species, finish, and grid options at the in-home estimate.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Wood-clad projects are the second-most-common Frisco full-home replacement material after vinyl. The price premium runs 50 to 100 percent over vinyl — typically $30,000 to $55,000 for a full-home wood-clad replacement vs $20,000 to $30,000 for vinyl. Homeowners who choose wood-clad value the warmth of authentic wood interiors over the lower price of vinyl. For Newman Village, Edgestone at Legacy, Stonebriar, and Hollyhock custom builds, wood-clad is often the right answer.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Wood-clad installation projects in Frisco span a wide design range. Andersen 400 Series wood-clad with white interior and bronze exterior reads as classic traditional. Pella Reserve mahogany interior with black exterior reads as contemporary upscale. Marvin Signature pine interior with simulated divided lite grids reads as authentic period-correct. JELD-WEN Siteline cherry interior with bronze exterior reads as warm modern. We bring physical samples to every wood-clad estimate so you can see exactly how each combination reads in your home.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Wood Clad Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your wood-clad window project.
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
