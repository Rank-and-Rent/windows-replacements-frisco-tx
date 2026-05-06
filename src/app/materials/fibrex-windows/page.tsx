import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Frisco TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite for Stonebriar and Newman Village luxury elevations. 2x stronger than vinyl, dark exterior options, 20-year color warranty in Texas sun.',
  keywords: 'fibrex windows Frisco TX, fibrex replacement windows, Andersen fibrex, composite windows',
}

export default function FibrexWindowsPage() {
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
              <li className="text-navy-700 font-medium">Fibrex Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/fibrex-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Fibrex Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Andersen&apos;s premium composite material combining wood-like beauty with advanced durability. The ultimate in window frame technology.
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
                  Premium Fibrex Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Fibrex is Andersen&apos;s proprietary composite material that combines the best qualities of wood and vinyl. Made from reclaimed wood fibers and thermoplastic polymer, Fibrex offers authentic wood aesthetics with superior durability and minimal maintenance.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Wood-Like Beauty
                </h3>
                <p className="text-gray-600 mb-6">
                  Fibrex windows replicate the natural beauty and warmth of wood with stunning accuracy. The material accepts stains and paints just like wood, allowing complete customization to match your Frisco home&apos;s architectural style. The wood-grain texture is virtually indistinguishable from authentic wood.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Composite Strength
                </h3>
                <p className="text-gray-600 mb-6">
                  Fibrex combines wood&apos;s natural insulating properties with polymer&apos;s structural strength. The result is a material that&apos;s twice as strong as vinyl and more stable than wood. Fibrex resists warping, cracking, and rotting while maintaining dimensional stability in Frisco&apos;s variable climate.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Premium Performance
                </h3>
                <p className="text-gray-600 mb-6">
                  Fibrex windows deliver exceptional energy efficiency with superior thermal performance. The material&apos;s low thermal conductivity creates natural insulation, reducing heating and cooling costs. Combined with Andersen&apos;s advanced glass packages, Fibrex windows provide premium performance that discerning Frisco homeowners demand.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Fibrex Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Wood-like beauty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Composite strength</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Premium performance</span>
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
                      <span className="text-sm text-gray-600">Energy efficient</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Andersen exclusive</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to Fibrex windows? Contact us for a free consultation and estimate.
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
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">What Fibrex Actually Is</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Fibrex is Andersen&apos;s proprietary composite material — a blend of reclaimed wood fiber from their other manufacturing processes (40 percent) and thermoplastic polymer (60 percent). The result is a frame material that combines wood&apos;s natural warmth and dimensional stability with vinyl&apos;s low maintenance and weather resistance. Fibrex is twice as strong as standard vinyl and 38 percent stronger than fiberglass, which lets Andersen build narrower frame profiles with more glass area than equivalent vinyl windows. We are an authorized Andersen dealer in Frisco and install Fibrex on the 100 Series and 200 Series lines.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Fibrex Performance in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Fibrex windows hit U-factors of 0.27 to 0.30 with triple-silver Low-E and argon — competitive with the best vinyl and approaching premium fiberglass. The dark exterior finishes carry a 20-year color warranty, which is the longest in the industry on a non-paint frame product. For Frisco homes where the homeowner wants a finish that holds true black or bronze through fifteen Texas summers without fade, Fibrex is the only mass-market option that delivers.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Where Fibrex Fits Best in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Fibrex on the Andersen 100 Series is the strongest budget-tier option for Frisco full-home replacements when the homeowner wants the brand reputation of Andersen at a price competitive with mid-tier vinyl. The 100 Series has a slimmer profile than 200 Series, suits modern facades better, and ships with the same Fibrex composite as the more expensive lines. Many Phillips Creek Ranch, Lone Star Ranch, and Hollyhock production-home replacements pick Fibrex for this reason. The 200 Series adds a wider grid and color selection for traditional brick facades in The Trails, Heritage Lakes, and Plantation Resort.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Fibrex Warranty and Service</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Andersen warranties Fibrex frames against material defects for 20 years and the dark exterior finishes for 20 years against fade. Glass is warrantied for 20 years against insulating glass seal failure. We register every Andersen warranty in your name on completion day and back our installation labor with our own multi-year written warranty. Service calls in Frisco for Andersen Fibrex warranty work typically scheduled within a week.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Fibrex is exclusive to Andersen, which means the brand decision and the material decision are linked. For Frisco homeowners who want the brand reputation of Andersen at a price competitive with mid-tier vinyl from other manufacturers, Fibrex on the 100 Series is the answer. The 200 Series steps up to wider grid options and broader color palette for traditional brick facades. The 400 Series and A-Series move into the wood-clad category with Fibrex remaining as the exterior cladding option on those lines.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Fibrex on the Andersen 100 Series is the most-installed budget-tier Andersen product in Frisco. The combination of Andersen brand reputation, slim modern profiles, and pricing competitive with mid-tier vinyl from JELD-WEN or Pella makes it a strong value play for full-home Frisco replacements. The 200 Series adds wider grid options and broader color palette for traditional brick facades; the 400 Series and A-Series move into the wood-clad category with Fibrex remaining as the exterior cladding.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Andersen&apos;s patented Fibrex composite is unique in the industry — no other manufacturer offers the same blend of wood fiber and thermoplastic polymer. The material&apos;s combination of strength, thermal performance, and dark-finish stability makes it a strong fit for Frisco facades that demand the look of wood with the maintenance profile of vinyl. We have installed Fibrex 100 Series, 200 Series, 400 Series, and A-Series across a range of Frisco neighborhoods with consistently positive results.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Fibrex Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your Fibrex window project.
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
