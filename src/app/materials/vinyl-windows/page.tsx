import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement Frisco TX | Low Maintenance, Energy Efficient',
  description: 'Vinyl replacement for Phillips Creek Ranch, Lone Star Ranch, and The Trails homes hitting the 15-25 year window. Multi-chamber frames, Low-E argon, 25-year warranty.',
  keywords: 'vinyl windows Frisco TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows',
}

export default function VinylWindowsPage() {
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
              <li className="text-navy-700 font-medium">Vinyl Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/window-types/vinyl-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Vinyl Windows Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Low-maintenance excellence with superior energy performance. Premium vinyl windows from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium Vinyl Windows for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Frisco homeowners are embracing vinyl windows for their perfect blend of modern efficiency and Texas durability. Vinyl windows deliver exceptional energy efficiency, minimal maintenance, and lasting beauty that suits Frisco&apos;s mix of established neighborhoods and growing communities.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Low Maintenance for Busy Frisco Professionals
                </h3>
                <p className="text-gray-600 mb-6">
                  Vinyl windows respect busy lifestyles by requiring virtually no maintenance, unlike wood windows that demand regular refinishing or aluminum windows that need periodic painting. The smooth, non-porous vinyl surface resists Frisco&apos;s urban pollutants and occasional dust storms, staying looking new with minimal effort.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Energy Efficiency in North Texas Climate
                </h3>
                <p className="text-gray-600 mb-6">
                  Frisco&apos;s North Texas location brings hot summers and cool winters that vinyl windows handle with exceptional efficiency. The multi-chambered construction creates superior thermal barriers that reduce heating and cooling costs by 25-35%. Low-E coatings and argon gas fills optimize performance for Frisco&apos;s climate.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Contemporary and Traditional Styling
                </h3>
                <p className="text-gray-600 mb-6">
                  Frisco&apos;s diverse architecture ranges from modern glass-and-steel aesthetic to traditional neighborhoods with established homes. Vinyl windows adapt beautifully to both styles with versatile design options. The material accepts unlimited color options, allowing customization for Frisco&apos;s varied architectural preferences.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Vinyl Window Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Low maintenance - never needs painting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Superior energy efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Weather resistant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Wide color selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Cost-effective solution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Long-lasting durability</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade to vinyl windows? Contact us for a free consultation and estimate.
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
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Vinyl Performance in Frisco Climate</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Multi-chambered fusion-welded vinyl frames deliver excellent thermal performance in Frisco&apos;s hot, humid summers and short cold snaps. The hollow chamber construction provides built-in thermal breaks that keep the interior frame cool even when the exterior frame sits in direct afternoon sun. Modern formulations include UV inhibitors that prevent yellowing and chalking even after fifteen Texas summers. Quality vinyl from Andersen, Pella, JELD-WEN, and Marvin holds up through Frisco hail events better than the snap-together aluminum that came with many older homes.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Why Vinyl Is the Most-Installed Material in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Vinyl is the right answer for the majority of Frisco full-home replacement projects because it hits the price-to-performance sweet spot. A whole-home vinyl replacement runs $850 to $1,800 per opening installed, depending on size and brand. Equivalent fiberglass runs 20 to 40 percent more. Wood-clad runs 50 to 100 percent more. For Frisco homeowners who want better thermal performance, lower maintenance, and a cleaner facade than the original builder-grade product without doubling the budget, vinyl is the answer.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Vinyl Color and Finish Options</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Vinyl is no longer just white. Premium lines from Andersen 100 Series, Pella 250 Series, JELD-WEN Premium Vinyl, and Marvin Elements offer dark exterior options including bronze, black, and earth tones that complement the brick-and-stone facades found across Stonebriar, Newman Village, and Hollyhock. We bring physical finish samples to the in-home estimate so you can hold each option against your existing brick or stucco. Custom colors are available on most premium lines for an upcharge.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Vinyl Service Life and Warranty</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Quality vinyl windows from Andersen, Pella, JELD-WEN, or Marvin last 25 to 30 years in Frisco&apos;s climate when properly installed and registered. The frame warranty on most premium lines is 20 to 30 years; the insulating glass unit warranty is 10 to 20 years. We register every warranty in your name on completion day and back our installation labor with our own multi-year written warranty. Service calls for vinyl warranty work typically scheduled within a week.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Vinyl is the dominant material in Frisco replacement projects because it solves the most common homeowner problem — better thermal performance and lower maintenance than the original builder-grade window — at a price that fits typical full-home replacement budgets. We install vinyl from Andersen 100 Series, Pella 250 Series, JELD-WEN Premium Vinyl, and Marvin Elements, picking the brand that fits the home and the homeowner rather than pushing one line on every customer.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Vinyl projects in Frisco run the full price-and-quality spectrum — from budget-tier 16-window replacements at $14,000 total to premium dark-exterior 26-window full-home replacements at $40,000+. We pick the brand and line that fits your home, your timeline, and your budget rather than pushing one tier on every customer. Most Frisco vinyl projects fall in the $20,000 to $30,000 range for full-home replacements, with line-item written quotes that include all materials, installation, flashing, sealing, exterior trim, and haul-away.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Vinyl quality varies enormously between brands and lines. The cheapest no-name vinyl from a big-box retailer can warp, chalk, and fail seals within a decade in Frisco&apos;s climate. The premium vinyl we install — Andersen 100 Series, Pella 250 Series, JELD-WEN Premium Vinyl, Marvin Elements — delivers 25 to 30 year service life with full manufacturer warranty support. The price difference between budget vinyl and premium vinyl is real but small, and the long-term value gap is enormous. We only install premium-tier vinyl product.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Vinyl Windows?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your vinyl window project.
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
