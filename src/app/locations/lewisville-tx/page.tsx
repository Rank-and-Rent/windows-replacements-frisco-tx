import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Lewisville TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Lewisville — Castle Hills, Valley Ridge, Highland Village edge. Lake-corridor UV exposures, line-item pricing, HOA palette submission.',
  keywords: 'window replacement Lewisville TX, Castle Hills windows, Valley Ridge windows, Lewisville window installation',
}

export default function LewisvillePage() {
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
            <li className="text-navy-700 font-medium">Lewisville</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-lewisville-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Lewisville, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Lewisville homeowners across Castle Hills, Valley Ridge, Lakepointe, Garden Ridge, and the established neighborhoods between FM 3040 and Lake Lewisville. We install Andersen, Pella, Marvin, and JELD-WEN windows backed by certified installers and a written workmanship warranty. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A City Anchored by the Lake</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lewisville housing stock spans almost every era of DFW growth — 1960s ranches near old downtown, 1980s and 1990s tract homes through central Lewisville, and 2000s and later master-planned phases like Castle Hills on the south side. Each era has its own window replacement profile, and we tailor recommendations accordingly. Older homes usually need rough-opening repair before new units go in. Newer homes often need upgrade-tier glass to manage the oversized rear elevations that came standard.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lake Lewisville influences exposures across the eastern part of the city — humidity is higher, wind off the water is real, and west-facing elevations take significant solar load. We default to laminated glass on those exposures and reinforce frame fastening with butyl flashing tape.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Castle Hills deserves its own paragraph. The community runs an active architectural review board with specific requirements for window finish, grid pattern, and brand. We provide finish samples and product sheets for ARB approval as part of every Castle Hills project — no extra-cost add-on.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hail and wind events are a regular feature of Lewisville springs. We document storm-resistant glass upgrades for insurance purposes and walk customers through carrier discount programs that may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">What Sets Us Apart in Lewisville</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Castle Hills ARB Experience</h3>
              <p className="text-gray-600 leading-relaxed">We coordinate with the Castle Hills architectural review board on every project. Application paperwork included.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake-Country Specs</h3>
              <p className="text-gray-600 leading-relaxed">Reinforced frame fastening and laminated glass on lake-facing exposures.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Older-Home Skill</h3>
              <p className="text-gray-600 leading-relaxed">Central Lewisville ranches often need rough-opening repair before new windows go in. We do the carpentry.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Lewisville job — never a rotating crew. Old units hauled away same day.</p>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Lewisville Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Castle Hills</li>
              <li>• Valley Ridge</li>
              <li>• Lakepointe</li>
              <li>• Garden Ridge</li>
              <li>• Highland Oaks</li>
              <li>• Old Lewisville</li>
              <li>• Heritage Heights</li>
              <li>• Lakeway</li>
              <li>• Cypress Cove</li>
              <li>• Estates of Highland Oaks</li>
              <li>• Bridges of Las Colinas</li>
              <li>• All Lewisville ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Lewisville Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Lewisville homeowners ask about lead times, disruption, and how we coordinate with HOAs and adjusters. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can take eight to ten weeks for custom dark finishes — common on Castle Hills projects.</p>
            <p className="text-gray-600 leading-relaxed">A typical Lewisville whole-home project covers seventeen to twenty-six openings and wraps in two to three days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: every window detailed by location, brand, series, glass package, and trim work, with installation and haul-away rolled in. The total is the total. The quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">Castle Hills runs an active architectural review board with specific requirements for window finish, grid pattern, and brand. We have walked dozens of Castle Hills applications through the board and know exactly what they will and will not approve. Older central Lewisville homes often need rough-opening repair before new windows go in — sills can be rotted, headers undersized, and original frames built for non-standard sizes. We inspect at the estimate stage, document the carpentry, and price it transparently. For homes near Lake Lewisville, we reinforce frame fastening with butyl flashing tape and recommend laminated glass on lake-facing exposures where wind, humidity, and UV all peak.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Lewisville window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document Castle Hills ARB-relevant details and any rough-opening repairs older central Lewisville homes will need. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit any architectural review paperwork as part of the project. Install runs two to three days for most Lewisville homes. We text daily updates, photograph progress, and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason Lewisville homeowners refer us most is the predictability — the price on the quote is the price on the invoice, and the crew that starts the job is the crew that finishes it.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Castle Hills ARB review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the architectural review paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are lake-influenced exposures handled differently?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — reinforced frame fastening, butyl flashing tape at the sill, and laminated glass on west and southwest exposures.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you replace warped or rotted sills as part of the install?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We inspect and price rough-opening repair at the estimate stage transparently rather than tacking it on at install.</p>
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
            <p className="text-gray-600 leading-relaxed text-center">We also handle the smaller patio homes off Garden Ridge Boulevard and the larger lake estates on the east side of the city with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Lewisville Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Lewisville home within the week with samples, energy data, and a fixed written quote.</p>
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
