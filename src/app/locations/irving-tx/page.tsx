import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Irving TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Irving, TX. Energy-efficient windows for Las Colinas, Valley Ranch, Hackberry Creek, and every Irving neighborhood. Free estimates.',
  keywords: 'window replacement Irving TX, Las Colinas windows, Valley Ranch windows, Irving window installation',
}

export default function IrvingPage() {
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
            <li className="text-navy-700 font-medium">Irving</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-irving-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Irving, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Irving homeowners across Las Colinas, Valley Ranch, Hackberry Creek, Song, and the established neighborhoods around MacArthur Boulevard. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen for the airport-corridor noise concerns, lake-influenced exposures, and mixed housing eras that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Irving&apos;s Three Distinct Window Markets</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Las Colinas and Valley Ranch</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Las Colinas master-planned community pulls a consistent demographic — corporate professionals in 1980s and 1990s townhomes and patio homes, plus newer Hackberry Creek and Cottonwood Valley estates with oversized glass and architectural review boards. Many of those original windows are showing seal failures, foggy glass between panes, and warped vinyl. Replacement is a comfort-and-resale issue more than a financial necessity.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Original Irving</h3>
              <p className="text-gray-600 leading-relaxed">
                Older Irving — the neighborhoods around MacArthur and Beltline that predate Las Colinas — has 1960s and 1970s ranches with original aluminum single-pane windows still in many homes. Replacement here delivers the biggest comfort-per-dollar return we see anywhere in DFW.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">DFW Airport Flight Path</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Irving is one of the closest cities to DFW Airport, and large parts of the city sit directly under arrival and departure patterns. Sound is a regular conversation in master bedrooms and home offices. Laminated glass with asymmetric pane thicknesses knocks 4 to 8 STC points off perceived noise — a real, measurable upgrade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hail and wind events are also routine. We document storm-resistant glass upgrades for insurance purposes and walk customers through carrier discount programs that may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Irving Homeowners Call Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Sound Reduction</h3>
              <p className="text-gray-600 leading-relaxed">Laminated glass for bedrooms and offices in the flight corridor. Real STC gains, not marketing language.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">Las Colinas, Hackberry Creek, and other Irving communities run architectural review. We handle the paperwork.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Glass</h3>
              <p className="text-gray-600 leading-relaxed">Laminated and impact-rated options for hail-prone exposures. Insurance documentation included.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Irving install — never a rotating sub. Drop cloths down, old units hauled away same day.</p>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Irving Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Las Colinas</li>
              <li>• Valley Ranch</li>
              <li>• Hackberry Creek</li>
              <li>• Cottonwood Valley</li>
              <li>• Song</li>
              <li>• MacArthur Park</li>
              <li>• University Hills</li>
              <li>• Plymouth Park</li>
              <li>• Cimarron Park</li>
              <li>• Northgate</li>
              <li>• Heritage District</li>
              <li>• All Irving ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Irving Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Irving homeowners commonly ask about timing, disruption, and how we coordinate with HOAs and adjusters. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature stretches to eight or ten for custom finishes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Irving whole-home project covers eighteen to twenty-six openings and wraps in two to three days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out. The home is never left exposed overnight.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: every window detailed by location, brand, series, glass package, and trim, with installation and haul-away rolled in. The total at the bottom is the total you pay, and the quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">Las Colinas, Hackberry Creek, and several other Irving HOAs run active architectural review boards. We pull samples from each approved palette and walk the application paperwork through the board on every project. For airport-corridor homes — and that&apos;s most of east Irving — laminated glass on the flight-path elevation is the most-asked-for upgrade. The math is straightforward: a standard dual-pane unit sits at roughly STC 28, and a laminated asymmetric unit pushes it into the mid 30s, which a person can hear as a real reduction in perceived jet noise. We add the upgrade on the rooms that need it — bedrooms and home offices — rather than blanket-pricing the whole house. The result is a measurably quieter house and a homeowner who got value for the dollar.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting an Irving window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through the issues you want solved: airport noise, hot rooms, foggy panes, drafts. We measure every opening, photograph conditions, and document HOA-relevant details for Las Colinas and Hackberry Creek architectural review boards. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit the architectural review paperwork as part of the project. Install runs two to three days for most Irving homes. We text daily updates and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason Irving homeowners refer us most is that we deliver what the quote promised — same products, same crew, same schedule, same price.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Las Colinas architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How much sound reduction can the airport corridor expect?</h3>
              <p className="text-gray-600 leading-relaxed">From a baseline STC 28 dual-pane unit to STC 34-38 with asymmetric laminated configurations — a clearly noticeable difference indoors.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are central Irving ranches a candidate for full-frame replacement?</h3>
              <p className="text-gray-600 leading-relaxed">Often, yes. Older 1960s and 1970s rough openings frequently need cleanup before new windows fit, and we price that work transparently at the estimate.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Irving service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-center">We also handle older Irving Heritage District homes and newer Song townhomes with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Irving Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or request an online estimate. A senior estimator will be at your Irving home within the week with samples, sound and energy data, and a fixed written quote.</p>
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
