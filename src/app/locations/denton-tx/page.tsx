import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Denton TX | Window Installation Denton | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Denton — Robson Ranch, downtown Denton, Eagle Creek, Wildwood. Mixed era housing stock, careful trim work, line-item pricing.',
  keywords: 'window replacement Denton TX, Denton window installation, downtown Denton windows, Robson Ranch windows',
}

export default function DentonPage() {
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
            <li className="text-navy-700 font-medium">Denton</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-denton-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Denton, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Denton homeowners across downtown, Robson Ranch, Eagle Creek, Country Lakes, Wildwood, and every neighborhood inside the loop. We install Andersen, Pella, Marvin, and JELD-WEN windows backed by certified installers and a written workmanship warranty. Free in-home estimates and clear, honest pricing.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Denton Has Layers</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Historic Downtown to Master-Planned Edges</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The historic neighborhoods around the Denton square have homes built between 1900 and 1940 — wood double-hung windows, original putty glaze, mortise-and-tenon sash construction. Replacing windows in these homes is an architecture decision before it is an energy decision. We specify wood-clad replacements like Andersen 400 Series, A-Series, or Marvin Elevate with simulated divided lite grids that preserve the historic look while delivering modern thermal performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                On the other end of town, Robson Ranch active-adult homes built since 2005 have their own pattern: 2x4 stud-framed walls, fiberglass-clad casement and double-hung mixes, and HOA palettes that need finish samples for board approval. We do both kinds of project and every era in between.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">University and Rental Homes</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Denton has a large rental population thanks to UNT and TWU, and many of those homes are owner-managed. The economics of rental property windows are different — durability and ease of cleaning beat premium aesthetics. We steer rental owners toward fusion-welded vinyl with tilt-in sashes and laminated glass on ground-floor and side-yard openings for security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For owner-occupied homes in family neighborhoods like Country Lakes and Eagle Creek, we focus on full-home replacement with energy-optimized glass. Most projects are 18 to 26 openings, completed in two to four working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Denton Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Wind-Country Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                North Denton catches more raw wind than most DFW suburbs. We flash with butyl tape at the sill, use low-expansion foam, and double-check fastener depth on every install.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Historic Sensitivity</h3>
              <p className="text-gray-600 leading-relaxed">
                For homes in or near the historic district, we work with HPC where required and choose products that meet preservation standards.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Hail-Resistant Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Denton sits in active spring storm tracks. Laminated glass and reinforced frame options are available where insurance carriers reward them with discounts.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">
                We sell and install Andersen, Pella, Marvin, and JELD-WEN. We pick the brand that matches your home, not the one with the highest commission.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">
                Lead and apprentice on every Denton install — no rotating subs. Drop cloths down, old units hauled away same day, every opening walked at signoff.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Quoting</h3>
              <p className="text-gray-600 leading-relaxed">
                Line-item written quotes, no high-pressure financing pitches at the kitchen table, and a price that holds for 30 days while you compare bids.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Denton Areas We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Downtown Denton</li>
              <li>• Robson Ranch</li>
              <li>• Eagle Creek</li>
              <li>• Country Lakes</li>
              <li>• Wildwood</li>
              <li>• Avondale</li>
              <li>• Hickory Creek</li>
              <li>• Pecan Creek</li>
              <li>• Mockingbird Park</li>
              <li>• Forrestridge</li>
              <li>• Vintage</li>
              <li>• All of Denton ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Denton Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Denton homeowners ask about timing, disruption, and how we handle the wide range of housing eras the city covers. Andersen and JELD-WEN factory lead times are four to six weeks at the moment. Pella runs five to seven weeks. Marvin Signature can take eight to ten for custom finishes — common on the historic-district homes around the square.</p>
            <p className="text-gray-600 leading-relaxed">Whole-home replacements in Denton typically cover sixteen to twenty-six openings and wrap in two to four days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one is removed. The home is never left exposed overnight.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window listed by location, brand, series, glass package, and trim work, with installation, flashing, and haul-away rolled in. The total is the total. The quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">The historic homes around the Denton square need their own paragraph. Original wood double-hungs from 1900-1940 had specific proportions — narrow lower rails, deep sash reveals, putty-glaze profiles, and simulated divided lites that read correctly from the street. We replace those with wood-clad products like Andersen 400 Series, A-Series, or Marvin Signature that match those proportions rather than off-the-shelf vinyl that telegraphs &quot;modern replacement&quot; from a block away. For Robson Ranch and the active-adult market on the south end, we focus on operating ease — easy-tilt sashes, low operating force casements, and large clear pulls. The replacement should fit the homeowner, not just the home.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Denton window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document any rough-opening repairs the older homes will need. The written quote arrives within 48 hours, broken out by line item. If you proceed, we order the same day and schedule the install for the day the factory ships. Most Denton projects run two to four days with two-person crews. We text daily updates and walk every opening with you at completion. For homes in the historic district, we handle HPC review applications as part of the project. For Robson Ranch and other HOA-governed neighborhoods, we handle architectural review board paperwork. The reason Denton homeowners come back is that we deliver the quote we wrote, on the schedule we promised, with the products we specified.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Denton historic district HPC review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the HPC paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can rental property windows be installed in single-day visits?</h3>
              <p className="text-gray-600 leading-relaxed">Often, yes — if the unit count is six or fewer and the rough openings are square. We schedule rental projects around tenant availability.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are wood-clad replacements available for the historic neighborhoods?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — Andersen 400 Series, A-Series, and Marvin Signature all have wood-clad lines suited to historic-district replacement.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Denton service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Denton Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or request an online estimate. A senior estimator will be at your Denton home within the week with samples, energy data, and a fixed written quote.</p>
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
