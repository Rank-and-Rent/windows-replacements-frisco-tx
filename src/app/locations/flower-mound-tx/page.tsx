import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Flower Mound TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Flower Mound — Bridlewood, Wellington, Lakeside DFW. Equestrian-estate elevations, big-glass picture units, line-item written quote.',
  keywords: 'window replacement Flower Mound TX, Flower Mound window installation, Bridlewood windows',
}

export default function FlowerMoundPage() {
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
            <li className="text-navy-700 font-medium">Flower Mound</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-flower-mound-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Flower Mound, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Flower Mound homeowners across Bridlewood, Wellington, Lakeside DFW, Garden Ridge, and the established neighborhoods around Long Prairie Road and FM 1171. We install Andersen, Pella, Marvin, and JELD-WEN windows backed by a written workmanship warranty. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Big Lots, Big Glass, Big Trees</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Established Master-Planned Stock</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Flower Mound came into its own between 1995 and 2010, with master-planned communities like Bridlewood and Wellington setting the architectural template — large lots, two-story brick traditionals, and oversized rear elevations facing west and southwest toward the late-afternoon sun. Many of those original windows are now hitting the 20- to 30-year mark and showing the wear: failed insulating glass seals, foggy windows between the panes, sashes that no longer balance properly. Replacement is the most impactful upgrade these homes will see.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Bigger Glass Means Bigger Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                Flower Mound homes love big windows — two-story foyers with stacked transoms, kitchen sliders that open to outdoor entertaining areas, primary bedroom picture walls with views over the yard. We size and spec each opening individually rather than ordering a one-size-fits-all package. Triple-silver Low-E and argon are the default. Laminated glass goes on the worst-exposed elevations.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">HOA Approvals and Architectural Review</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bridlewood, Wellington, and most Flower Mound master-planned communities run an architectural review board. Color, finish, grid pattern, and even brand can require board sign-off. We pull samples, fill out the spec sheet, and walk the application through approval as part of the project — not an extra-cost add-on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For homeowners outside an HOA, we still match the existing facade. The replacement should look like an upgrade, not a band-aid. Color matching, sash proportions, and grid spacing all get attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">What Sets Us Apart in Flower Mound</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — we sell and install all four. Brand recommendations match your home, not a quota.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm-Country Glass</h3>
              <p className="text-gray-600 leading-relaxed">Spring hail events are common in Flower Mound. Laminated glass options reduce damage and may earn carrier discounts.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Story Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Tall foyers and stacked transoms are routine. We use lifts where required and finish-carpenter every casing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">We handle architectural review applications for Bridlewood, Wellington, and other Flower Mound communities.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Flower Mound job — no rotating subs. Drop cloths, vacuumed floors, old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Line-item written quotes that hold for 30 days. No high-pressure financing pitches at the kitchen table.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Flower Mound Neighborhoods</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Bridlewood</li>
              <li>• Wellington</li>
              <li>• Lakeside DFW</li>
              <li>• Garden Ridge</li>
              <li>• Highland Shores</li>
              <li>• Wood Creek</li>
              <li>• Long Prairie Road</li>
              <li>• Stonecreek</li>
              <li>• Stone Hill Farms</li>
              <li>• Steeplechase</li>
              <li>• Forestwood</li>
              <li>• All Lewisville ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Flower Mound Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Flower Mound homeowners commonly ask about timing, disruption, and how we coordinate with HOAs and architectural review boards. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can stretch to eight or ten weeks for custom dark finishes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Flower Mound whole-home project covers twenty to thirty openings — homes here run larger than the older inner suburbs — and wraps in three to four days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: every window detailed by location, brand, series, glass package, and trim work, with installation and haul-away rolled in. The total is the total. The quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">Bridlewood and Wellington both run active architectural review boards that scrutinize window finish, grid pattern, and brand. We pull samples from each approved palette and walk the application paperwork through the board on every project. Because we have done dozens of these submissions, we know which boards approve which alternates and which finishes will trigger a redesign request. That experience saves homeowners weeks of revision rounds. We also provide written recommendations for west-elevation glass packages — most Flower Mound homes have oversized rear windows facing afternoon sun, and the right Low-E spec is the difference between a comfortable family room and one nobody uses from June through September.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Flower Mound window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document HOA-relevant details for Bridlewood, Wellington, and other architectural review boards. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit the HOA application paperwork as part of the project. Install runs three to four days for most Flower Mound homes. We text daily updates and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. Service calls are usually scheduled within a week. The reason Flower Mound homeowners refer us most is that we treat the HOA paperwork as part of the job rather than an excuse to charge an additional fee.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Bridlewood and Wellington architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you replace oversized two-story foyer transoms in a single day?</h3>
              <p className="text-gray-600 leading-relaxed">Usually, yes — if the openings are square and the lift access is clear. Larger custom shapes may require a second day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are dark exterior finishes available for facade refresh?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — every major brand offers dark exterior options. Custom colors are available on most premium lines for an upcharge.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-center">We also handle the smaller flag-lot custom homes on Long Prairie and the larger estate homes around Garden Ridge with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Flower Mound Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Flower Mound home within the week with samples, energy data, and a fixed written quote.</p>
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
