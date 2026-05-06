import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Carrollton TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Carrollton — Hebron, Castle Hills, Country Place, Old Downtown. 1980s-90s brick traditionals hitting replacement cycle, line-item quote.',
  keywords: 'window replacement Carrollton TX, Carrollton window installation, Hebron windows, Castle Hills windows',
}

export default function CarrolltonPage() {
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
            <li className="text-navy-700 font-medium">Carrollton</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-carrollton-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Carrollton, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Carrollton homeowners across Hebron, Castle Hills, Country Place, Old Downtown Carrollton, and every neighborhood in between. We install Andersen, Pella, Marvin, and JELD-WEN windows backed by certified installers and a written workmanship warranty. Free in-home estimates and clear, line-item pricing.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Three Different Carrolltons in One City</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Old Downtown Carrollton</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The historic core around the square has homes dating back to the 1920s and 1930s, with original wood double-hung windows that have been painted over a dozen times. We approach these projects with respect for the architecture: simulated divided lite grids, putty-glaze profiles, and wood-clad replacements like Andersen 400 Series A-Series or Marvin Elevate that preserve the historic look while delivering modern energy performance. Window choice in old-town Carrollton is as much about character as efficiency.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Castle Hills</h3>
              <p className="text-gray-600 leading-relaxed">
                The Castle Hills master-planned community pulls a different crowd. Homes are 2000s and newer, with two-story foyers, oversized rear elevations, and tall transom windows. Our Castle Hills projects lean toward fiberglass or Fibrex frames in dark exterior finishes, with triple-silver Low-E and laminated glass on the west and southwest sides where afternoon sun is most aggressive.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Hebron and Country Place</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Hebron and Country Place corridor is largely 1990s and early 2000s production homes. The original builder-grade windows in these neighborhoods are the most common reason Carrollton homeowners call us — failed seals, cloudy glass, and warped vinyl that no longer locks. Replacement is a comfort-and-bills issue more than an aesthetic one.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whichever Carrollton you live in, we have done your kind of project. We will measure every opening, walk you through brand and glass options, and leave you with a fixed written quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Carrollton Homeowners Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand Dealer</h3>
              <p className="text-gray-600 leading-relaxed">
                Andersen, Pella, Marvin, JELD-WEN — we sell and install all four. We recommend the brand that fits your home, not the one that fits a quota.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Local, Not National</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Frisco shop is fifteen minutes from most Carrollton zip codes. Service calls are fast, and the same crew that installed your windows is the one that comes back if anything is off.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Line-item written quotes that hold for 30 days. No high-pressure financing pitches at the kitchen table. No mystery fees added at install.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Permit and HOA Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Castle Hills and several other Carrollton communities have architectural review boards. We pull samples and write the spec sheet for board approval as part of the job.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Insurance-Claim Help</h3>
              <p className="text-gray-600 leading-relaxed">
                After hail events, we work directly with your carrier — providing photos, scope, and impact-rated glass options that meet adjuster requirements.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Clean Job Sites</h3>
              <p className="text-gray-600 leading-relaxed">
                Drop cloths, vacuumed floors, and old sashes hauled away the same day. We treat your Carrollton home the way we would treat our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Carrollton Neighborhoods and Districts</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Old Downtown Carrollton</li>
              <li>• Castle Hills</li>
              <li>• Hebron</li>
              <li>• Country Place</li>
              <li>• Rosemeade</li>
              <li>• Furneaux Creek</li>
              <li>• Carrollton Park</li>
              <li>• Indian Creek</li>
              <li>• Highlands of Carrollton</li>
              <li>• Tiffany Estates</li>
              <li>• Lakeview Park</li>
              <li>• All Carrollton ZIPs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Carrollton Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Carrollton homeowners commonly ask about the timeline, the price structure, and how we handle the architectural details that matter on older and HOA-governed homes. Lead times right now run four to six weeks for Andersen and JELD-WEN, five to seven for Pella, and eight to ten for Marvin Signature with custom finishes. We hold the install slot until the order ships and schedule the start date the day the truck leaves the factory.</p>
            <p className="text-gray-600 leading-relaxed">A typical Carrollton whole-home project covers eighteen to twenty-four openings and wraps in two to three working days. Crews work room by room — furniture moved off the wall, drop cloths down, new window staged and ready before the old one comes out. Your home is never left open overnight.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item. Each window is listed by location, brand, series, glass package, and trim work. Installation, flashing, sealing, exterior caulking, and haul-away are all rolled in. The number at the bottom is the total you pay, and the quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">For the older homes around the Carrollton square, we focus on architectural fidelity — simulated divided lite grids, putty-glaze profiles, and exterior finishes that pass a historic-district eye test. For Castle Hills and Hebron HOA homes, we coordinate with the architectural review board and provide samples for board approval as part of the project. The replacement should look better than what it replaced and feel like an honest upgrade rather than a band-aid.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Carrollton window project is simple. Call or message us, and we will schedule the in-home estimate at a time that fits your week. The estimator measures every opening, photographs conditions, and brings physical samples of finish, glass, and grid options. We listen to what is bothering you about the current windows — fading floors, hot upstairs bedrooms, foggy panes, drafts — and recommend products that solve those specific problems. The written quote arrives within 48 hours, broken out line by line. No pressure to sign on the spot. No kitchen-table financing pitch. If you decide to proceed, we place the order the same day and lock in the install date for the day the factory ships your order. During install we text daily updates and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own written multi-year warranty. The reason Carrollton homeowners return to us for second projects — and refer their neighbors — is that the experience does not surprise them. The number on the quote is the number on the invoice. The crew on day one is the crew on day three.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Carrollton projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. Recommendations are independent of how you choose to pay.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you handle the Castle Hills ARB application?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the architectural review paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the install for an old-town Carrollton historic home?</h3>
              <p className="text-gray-600 leading-relaxed">Typically two to three days for 12 to 18 openings, longer if simulated divided lite grids and putty-glaze profiles are involved.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, in addition to the manufacturer warranty on the product. Carrollton service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Schedule Your Free Carrollton Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Carrollton home within the week with samples, energy data, and a written quote.</p>
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
