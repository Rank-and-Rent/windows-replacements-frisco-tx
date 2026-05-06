import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Little Elm TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Little Elm — Paloma Creek, Sunset Pointe, Lakeview, Frisco Lakes-adjacent. Lakefront UV exposures, hail-rated frames, ARB-submission ready.',
  keywords: 'window replacement Little Elm TX, Paloma Creek windows, Sunset Pointe windows, Little Elm window installation',
}

export default function LittleElmPage() {
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
            <li className="text-navy-700 font-medium">Little Elm</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-little-elm-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Little Elm, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Little Elm homeowners across Paloma Creek, Sunset Pointe, Lakeview, Hillstone Pointe, and the lakefront neighborhoods along Lake Lewisville. We install Andersen, Pella, Marvin, and JELD-WEN windows tuned for lake-influenced humidity, big-glass elevations, and the master-planned aesthetics that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Lake-Influenced Window Decisions</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Newer Master-Planned Stock</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most of Little Elm was built between 2002 and 2016. Paloma Creek, Sunset Pointe, and Hillstone Pointe defined the architectural template — two-story brick traditionals on small lots, oversized rear elevations facing the prevailing wind off Lake Lewisville, and HOA architectural review boards that enforce a consistent finish palette. The original builder-grade windows in many of these homes are now 15 to 20 years old and showing the wear: failed insulating glass seals, foggy panes, and warped vinyl that no longer locks.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Lake Lewisville Exposure</h3>
              <p className="text-gray-600 leading-relaxed">
                Homes facing the lake take measurably more wind, humidity, and UV than homes a few streets back. We reinforce frame fastening, use butyl flashing at the sill, and recommend laminated glass on west and southwest elevations. The result is a longer-lasting weather seal and more stable interior comfort.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">HOA Approvals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Paloma Creek, Sunset Pointe, and most Little Elm communities run architectural review. Color, finish, grid pattern, and brand often require board sign-off. We pull samples, fill out the spec sheet, and walk the application through approval as part of the project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hail is a regular event across Denton County. Laminated glass options for exposed elevations add real impact protection, and many insurance carriers offer policy discounts for it. We document the upgrade with carrier paperwork at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Little Elm Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake-Country Specs</h3>
              <p className="text-gray-600 leading-relaxed">Reinforced frame fastening and laminated glass on lake-facing exposures. Real protection, not marketing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">Paloma Creek, Sunset Pointe, and other Little Elm communities run architectural review. We handle the paperwork.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Story Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Tall foyers, stacked transoms, and oversized rear elevations are routine. We use lifts where required.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Little Elm install — drop cloths down, old units hauled away same day.</p>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Little Elm Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Paloma Creek</li>
              <li>• Sunset Pointe</li>
              <li>• Lakeview</li>
              <li>• Hillstone Pointe</li>
              <li>• Frisco Lakes (Del Webb)</li>
              <li>• Stardust Ranch</li>
              <li>• Wynfield Farms</li>
              <li>• Estates at Pecan Creek</li>
              <li>• Lakeshore Village</li>
              <li>• The Reserve</li>
              <li>• Old Town Little Elm</li>
              <li>• All Frisco ISD/Little Elm ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Little Elm Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Little Elm homeowners commonly ask about lead times, disruption, and HOA coordination. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can take eight to ten weeks for custom dark finishes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Little Elm whole-home project covers eighteen to twenty-eight openings — Paloma Creek, Sunset Pointe, and Hillstone Pointe homes run larger than the older suburbs — and wraps in three to four days with two-person crews. We work room by room with drop cloths down and the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window detailed by location, brand, series, glass package, and trim, with installation and haul-away rolled in. The total at the bottom is the total you pay. The quote holds for 30 days.</p>
            <p className="text-gray-600 leading-relaxed">Paloma Creek, Sunset Pointe, Hillstone Pointe, and Frisco Lakes all run active architectural review boards with specific requirements about window finish, grid pattern, and brand. We pull samples from each approved palette and walk the paperwork through the board on every project. For homes facing Lake Lewisville, lake exposure adds wind, humidity, and UV beyond what homes a few streets back experience. We reinforce frame fastening with butyl flashing tape and recommend laminated glass on west and southwest elevations. The result is a longer-lasting weather seal and more stable interior comfort. For Frisco Lakes homeowners specifically — the active-adult Del Webb community — we focus on operating ease, low force-to-open casements, and large clear pulls that fit aging hands.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Little Elm window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document HOA-relevant details for Paloma Creek, Sunset Pointe, Hillstone Pointe, and Frisco Lakes. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit the architectural review paperwork as part of the project. Install runs three to four days for most Little Elm projects. We text daily updates and walk every opening with you at completion. For lake-facing homes, we provide reinforced fastening and laminated glass on west exposures as part of the standard scope. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. Service calls are usually scheduled within a week.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Paloma Creek and Sunset Pointe architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are lake-front exposures handled differently?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — reinforced frame fastening, butyl flashing tape at the sill, and laminated glass on west and southwest exposures.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you handle Frisco Lakes Del Webb projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We have done many active-adult Frisco Lakes projects and pay extra attention to operating ease — easy-tilt sashes, low-force casements, and large pulls.</p>
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
            <p className="text-gray-600 leading-relaxed text-center">We also handle Stardust Ranch, Wynfield Farms, and the older interior subdivisions with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Little Elm Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Little Elm home within the week with samples, energy data, and a fixed written quote.</p>
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
