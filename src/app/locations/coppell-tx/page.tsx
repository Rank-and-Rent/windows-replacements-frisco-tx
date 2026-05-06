import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Coppell TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Coppell, TX. Energy-efficient windows for Old Town Coppell, Magnolia Park, Riverchase, and every neighborhood. Free estimates.',
  keywords: 'window replacement Coppell TX, Coppell window installation, Old Town Coppell windows',
}

export default function CoppellPage() {
  return (
    <main>
      <Header />

      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center space-x-2 text-sm text-navy-500">
            <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/locations" className="hover:text-navy-700">Locations</Link></li>
            <li>/</li>
            <li className="text-navy-700 font-medium">Coppell</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-coppell-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Coppell, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Coppell with full-service window replacement and installation across Old Town Coppell, Magnolia Park, Riverchase, the Lakes, and every neighborhood in 75019. We install Andersen, Pella, Marvin, and JELD-WEN windows backed by a written workmanship warranty. Free in-home estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Get Free Estimate</Link>
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Tight, Established Coppell Market</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Coppell is one of the most stable, owner-occupied suburbs in DFW. Most of the housing stock was built between 1985 and 2005, which means we are now squarely in the replacement-window window for the city. Original aluminum and early dual-pane vinyl have aged out — failed seals, foggy glass, chalky frames, sliding sashes that no longer lock. Coppell ISD is consistently top-rated, families do not move much, and the dominant motivator we hear is comfort and bills, not resale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The other Coppell trend is upgrade. Many homes still have the original builder-grade clear glass with no Low-E coating. Replacing those panes with modern triple-silver Low-E and argon insulating glass cuts cooling load by 25 to 30 percent, and most homeowners notice the difference within a single billing cycle.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Coppell sits adjacent to the DFW Airport flight corridor, and noise reduction is a real conversation in master bedrooms and home offices. Laminated glass with asymmetric pane thicknesses can knock 4 to 8 STC points off perceived noise — a meaningful difference. We add it as a glass-package upgrade on the elevations where it matters most without bumping the entire scope.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For Old Town Coppell, where the housing stock is older and architectural character matters, we lean toward wood-clad and Fibrex frames with simulated divided lite grids. The replacement should look like it belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Coppell Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Dealer Status</h3>
              <p className="text-gray-600 leading-relaxed">
                We are an authorized Andersen, Pella, Marvin, and JELD-WEN dealer. There is no big-box markup. Coppell homeowners get factory pricing plus expert installation in one quote.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Heat-Optimized Glass</h3>
              <p className="text-gray-600 leading-relaxed">
                Soft-coat triple-silver Low-E glass with argon, tuned for the North Texas sun. Solar heat gain coefficients drop below 0.25 while interiors stay bright.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Airport Noise Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Laminated glass and asymmetric pane thicknesses for bedrooms and offices in the DFW flight corridor. Real STC gains, not marketing language.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">
                Lead and apprentice on every Coppell job — no rotating crews, no subcontracted strangers. Drop cloths, vacuumed floors, old units hauled away.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Approvals</h3>
              <p className="text-gray-600 leading-relaxed">
                Magnolia Park, the Lakes, and several other Coppell communities run architectural review. We provide finish samples and product sheets for board approval.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Written Quotes</h3>
              <p className="text-gray-600 leading-relaxed">
                Line-item written quotes that hold for 30 days. No high-pressure financing pitches at the kitchen table, no mystery fees added at install.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Coppell Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Old Town Coppell</li>
              <li>• Magnolia Park</li>
              <li>• Riverchase</li>
              <li>• The Lakes</li>
              <li>• Northlake Woodlands</li>
              <li>• Riverview</li>
              <li>• Stratford Manor</li>
              <li>• Brock Estates</li>
              <li>• The Reserve</li>
              <li>• Saddle Ridge Estates</li>
              <li>• Westchester</li>
              <li>• All of Coppell ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Coppell Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Coppell homeowners typically ask about lead times, project disruption, and what we recommend for the airport corridor. Andersen and JELD-WEN orders are running four to six weeks. Pella is five to seven weeks. Marvin Signature stretches to eight to ten weeks when custom dark exterior finishes are involved. We hold the install slot until the order ships and lock the start date the day the factory truck leaves.</p>
            <p className="text-gray-600 leading-relaxed">Whole-home replacements in Coppell typically cover eighteen to twenty-four openings and wrap in two to three days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged and ready before the old one comes out. The home is never left exposed overnight.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item every time. Each window listed by location, brand, series, glass package, and trim work, with installation, flashing, sealing, and haul-away rolled in. The bottom number is the total you pay, and the quote holds for 30 days.</p>
            <p className="text-gray-600 leading-relaxed">For Coppell&apos;s airport-corridor homes, the laminated glass conversation is real. A standard dual-pane insulated unit gets you to roughly an STC 28. Pairing it with a laminated outer pane in asymmetric thicknesses pushes that into the mid 30s, which a person can hear as a meaningful drop in jet noise — not silence, but enough that bedrooms sleep better and home offices feel quieter on calls. We add the upgrade only on the elevations where the math actually works rather than blanket-pricing the whole house.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Coppell window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — so you can compare them in your own light. We measure every opening, document the conditions, and listen to what is bothering you about the current windows. The written quote arrives within 48 hours, broken out by line item. If you proceed, we order the same day and schedule the install for the day the factory ships. Most Coppell projects run two to three days with two-person crews and daily text updates. We register the manufacturer warranty in your name on completion day and back our install labor with our own multi-year written warranty. Service calls in Coppell are usually scheduled within a week. The reason Coppell homeowners refer us most is the consistency — the same lead and apprentice on every install, the same exact price as the quote, and the same person available to pick up the phone if anything is off after install.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Coppell projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. We do not earn commission on financing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you handle Magnolia Park architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How much sound reduction can laminated glass deliver in the airport corridor?</h3>
              <p className="text-gray-600 leading-relaxed">From a baseline STC 28 dual-pane unit to STC 34-38 with asymmetric laminated configurations — a clearly noticeable difference indoors.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, in addition to the manufacturer warranty on the product. Coppell service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Schedule Your Free Coppell Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Coppell home within the week with samples, energy data, and a fixed written quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Request Quote</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
