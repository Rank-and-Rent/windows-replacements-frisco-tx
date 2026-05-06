import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Grand Prairie TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Grand Prairie, TX. Energy-efficient windows for Mira Lagos, Lake Ridge, Westchester, and every Grand Prairie neighborhood. Free estimates.',
  keywords: 'window replacement Grand Prairie TX, Grand Prairie window installation, Mira Lagos windows',
}

export default function GrandPrairiePage() {
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
            <li className="text-navy-700 font-medium">Grand Prairie</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-grand-prairie-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Grand Prairie, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Grand Prairie homeowners from Mira Lagos and Lake Ridge in the south to Westchester and Westchester Square in the north. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen for the long-lot ranches, lake-influenced two-stories, and newer master-planned phases that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Long City with a Wide Window Range</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Grand Prairie stretches more than twenty miles north to south, which gives the city one of the broadest housing inventories in DFW. South Grand Prairie around Joe Pool Lake has newer master-planned neighborhoods like Mira Lagos and Lake Ridge with two-story brick traditionals built between 2005 and 2015. Central Grand Prairie has older 1960s and 1970s ranches with the original aluminum single-pane windows still in service. North Grand Prairie has a mix of post-war bungalows, mid-century ranches, and newer in-fill builds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work all of it, and our recommendations match the era. South Grand Prairie homes get fiberglass or Fibrex frames with triple-silver Low-E and argon. Older central Grand Prairie homes are usually best served by fusion-welded vinyl with tilt-in sashes. North Grand Prairie projects vary case-by-case based on architectural intent.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Joe Pool Lake influences south Grand Prairie homes — humidity is higher, wind off the water is real, and west-facing elevations take significant solar load. We default to laminated glass on those exposures and reinforce frame fastening. The result is a more comfortable interior and longer-lasting weather seal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hail is a regular event across the city. We document storm-resistant glass upgrades for insurance purposes and walk customers through carrier discount programs that may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Grand Prairie Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing, factory warranties, expert installation in one quote.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake-Country Specs</h3>
              <p className="text-gray-600 leading-relaxed">Higher-humidity exposures get reinforced frame fastening, butyl flashing, and laminated glass on west-facing elevations.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Glass</h3>
              <p className="text-gray-600 leading-relaxed">Laminated and impact-rated options for hail-prone exposures. Insurance discount documentation included.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Older-Home Skill</h3>
              <p className="text-gray-600 leading-relaxed">Central Grand Prairie ranches often need rough-opening repair before new windows go in. We do the carpentry.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Grand Prairie install — never a rotating crew. Old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Quoting</h3>
              <p className="text-gray-600 leading-relaxed">Line-item written quotes that hold for 30 days. No mystery fees added at install.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Grand Prairie Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Mira Lagos</li>
              <li>• Lake Ridge</li>
              <li>• Westchester</li>
              <li>• Westchester Square</li>
              <li>• Forum 303</li>
              <li>• Peninsula</li>
              <li>• Sheffield Village</li>
              <li>• Lake Parks</li>
              <li>• Glenwood Estates</li>
              <li>• Grand Peninsula</li>
              <li>• Acacia Park</li>
              <li>• All GP city limits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Grand Prairie Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Grand Prairie homeowners usually want to know about timing, disruption, and how we handle the range of housing eras the long city covers. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature stretches to eight or ten weeks for custom dark finishes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Grand Prairie whole-home project covers fifteen to twenty-eight openings depending on the home and wraps in two to four days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: every window detailed by location, brand, series, glass package, and trim work, with installation and haul-away rolled in. The total at the bottom is the total you pay. The quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">For south Grand Prairie homes near Joe Pool Lake, humidity and wind are real considerations. We reinforce frame fastening with butyl flashing tape at the sill and recommend laminated glass on west-facing exposures where solar heat gain and storm impact both peak. For older central Grand Prairie ranches, the rough openings are often out of square and the original sills may be rotted — we inspect, document, and price the carpentry transparently at the estimate stage rather than tacking it on at install. North Grand Prairie projects vary by home, and our recommendations follow the architectural intent rather than a one-size template.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Grand Prairie window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document any rough-opening repairs the older central Grand Prairie ranches will need. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and schedule the install for the day the factory ships. Most Grand Prairie projects run two to four days with two-person crews. We text daily updates and walk every opening with you at completion. For lakefront homes, we provide reinforced fastening and laminated glass recommendations as part of the standard scope. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason Grand Prairie homeowners refer us is that we deliver the quote we wrote, on the schedule we promised.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Grand Prairie projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. We do not earn commission on financing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How do you handle Joe Pool Lake-influenced exposures?</h3>
              <p className="text-gray-600 leading-relaxed">Reinforced frame fastening, butyl flashing tape at the sill, and laminated glass on west and southwest exposures.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are central Grand Prairie ranches a candidate for repair instead of replacement?</h3>
              <p className="text-gray-600 leading-relaxed">Sometimes. If the frames are sound and only the glass packs have failed, retrofit glass replacement can save money. Most older frames here are past that point.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-center">We also handle the older bungalows in north Grand Prairie and the newer in-fill builds across the city with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Grand Prairie Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Grand Prairie home within the week with samples, energy data, and a fixed written quote.</p>
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
