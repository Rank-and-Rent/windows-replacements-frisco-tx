import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Grapevine TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Grapevine, TX. Energy-efficient windows for Historic Grapevine, Stonebridge, Glade Crossing, and every Grapevine neighborhood. Free estimates.',
  keywords: 'window replacement Grapevine TX, Grapevine window installation, historic Grapevine windows',
}

export default function GrapevinePage() {
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
            <li className="text-navy-700 font-medium">Grapevine</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-grapevine-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Grapevine, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Grapevine homeowners across Historic Grapevine, Stonebridge, Glade Crossing, Cross Timbers, and the Grapevine Lake corridor. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen for the older heritage stock, lake-influenced exposures, and airport-corridor sound concerns that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Heritage, Lake, and Flight Path</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Historic Grapevine</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Historic Grapevine has homes dating to the late 1800s and early 1900s — wood double-hung windows with putty glaze, weight-and-pulley balances, and thin lower-rail proportions that defined the era. Replacing windows in these homes is an architectural decision before it is an energy decision. We specify wood-clad replacements like Andersen 400 Series, A-Series, or Marvin Signature with simulated divided lite grids, deep sash profiles, and exterior finishes that pass HPC review where applicable.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Lake and Newer Master-Planned</h3>
              <p className="text-gray-600 leading-relaxed">
                Newer Grapevine — Stonebridge, Glade Crossing, Cross Timbers — has the more familiar 2000s and later production-builder template. Two-story brick traditionals, oversized rear elevations, and HOA architectural review boards. We coordinate with the boards, provide finish samples, and turn the project around quickly.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">DFW Flight Corridor</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Grapevine sits directly under the DFW arrival pattern. Homes east of 121 take the most consistent overhead noise, and master bedrooms and home offices are where customers feel it most. Laminated glass with asymmetric pane thicknesses can knock 4 to 8 STC points off perceived noise — a real, measurable upgrade. We add it as a glass-package option on the elevations where it matters.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Grapevine Lake influences humidity and wind on lakeside elevations. We reinforce frame fastening and use butyl flashing tape on those installs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">What Sets Us Apart in Grapevine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Historic-District Sensitivity</h3>
              <p className="text-gray-600 leading-relaxed">We work with HPC where required and choose products that meet preservation standards.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Sound Reduction</h3>
              <p className="text-gray-600 leading-relaxed">Laminated glass for bedrooms and offices in the flight corridor. STC ratings of 32 to 38 depending on configuration.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake-Influenced Exposures</h3>
              <p className="text-gray-600 leading-relaxed">Reinforced frame fastening and laminated glass on west-facing exposures near the lake.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Grapevine install — drop cloths down, old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">Stonebridge and other Grapevine communities run architectural review. We handle the application paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Grapevine Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Historic Grapevine</li>
              <li>• Stonebridge</li>
              <li>• Glade Crossing</li>
              <li>• Cross Timbers</li>
              <li>• Silvercrest</li>
              <li>• Grapevine Lake</li>
              <li>• Bandera Estates</li>
              <li>• Heritage Glen</li>
              <li>• Mariner Cove</li>
              <li>• Tara Plantation</li>
              <li>• Dove Loop</li>
              <li>• All GCISD ZIPs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Grapevine Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Grapevine homeowners typically ask about lead times, project disruption, and how we handle the historic district and airport corridor. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can take eight to ten weeks when custom dark finishes or simulated divided lite grids are involved — both common on Grapevine projects.</p>
            <p className="text-gray-600 leading-relaxed">A typical Grapevine whole-home project covers eighteen to twenty-six openings and wraps in two to three days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out. The home is never left exposed overnight.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item, every window detailed, installation and trim work rolled in. The total is the total. The quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">Historic Grapevine projects need wood-clad replacements that match original sash proportions — Andersen 400 Series, A-Series, or Marvin Signature with simulated divided lite grids and exterior finishes that pass HPC review. We have walked applications through the Grapevine HPC successfully and know what the commission looks for. For homes in the DFW arrival path, laminated glass on the airport-facing elevation is the most-asked-for upgrade. A standard dual-pane unit lands at roughly STC 28; laminated asymmetric units push that into the mid 30s, which is a meaningful drop in perceived jet noise. We add the upgrade where the math works rather than blanket-pricing the whole home.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Grapevine window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through the issues you want solved. We measure every opening, photograph conditions, and document HPC- or HOA-relevant details. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit the historic district or architectural review paperwork as part of the project. Install runs two to three days for most Grapevine homes. We text daily updates, photograph progress, and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. Service calls are usually scheduled within a week. The reason Grapevine homeowners refer us most is the consistency — the same crew on every day of install, the same exact price as the quote, and the same products we recommended at the estimate.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Grapevine HPC review for the historic district?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the HPC paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How much sound reduction can the airport corridor expect?</h3>
              <p className="text-gray-600 leading-relaxed">From a baseline STC 28 dual-pane unit to STC 34-38 with asymmetric laminated configurations — a clearly noticeable difference indoors.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are wood-clad replacements available for Historic Grapevine?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — Andersen 400 Series, A-Series, and Marvin Signature all have wood-clad lines suited to historic-district replacement.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-center">We also handle the older Stonebridge phases and the newer Cross Timbers expansion with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Grapevine Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or request an online estimate. A senior estimator will be at your Grapevine home within the week with samples, sound and energy data, and a fixed written quote.</p>
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
