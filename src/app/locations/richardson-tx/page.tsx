import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Richardson TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Richardson — Canyon Creek, Cottonwood Heights, Heights Park. 1960s-80s brick ranches with rough-opening repairs priced upfront.',
  keywords: 'window replacement Richardson TX, Canyon Creek windows, Heights Park windows, Richardson window installation',
}

export default function RichardsonPage() {
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
            <li className="text-navy-700 font-medium">Richardson</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-richardson-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Richardson, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Richardson homeowners across Canyon Creek, Cottonwood Heights, Heights Park, Owens Farm, the Telecom Corridor, and the established neighborhoods west of US 75. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen for the older mid-century housing stock and mature tree canopy that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">An Older City with Aging Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Richardson is one of the older established suburbs in DFW, with most of its housing stock built between 1955 and 1985. Heights Park, Owens Farm, and Cottonwood Heights have ranches and mid-century split-levels that still wear their original aluminum or early dual-pane vinyl windows. Canyon Creek and Prairie Creek pushed the housing stock into the late 1970s and early 1980s, with steel-framed casements and aluminum sliders that have aged out of useful service. We see a steady stream of Richardson seal failures, fogged glass, and chalky frames every week.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Older homes also tend to have settled rough openings, rotted wood subframes around the sill, and undersized headers above. We inspect, repair, and properly flash before any new windows go in. A professional install in a 1965 ranch is more carpentry than a 2015 production-build install, and we plan accordingly.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mature tree canopy is a Richardson signature. Heights Park, Bethany Heights, and parts of the Telecom Corridor have full-grown live oaks and pecans that shade the south sides of many homes. We tune Low-E specs to the actual sun exposure rather than blanket-applying one glass package. Some elevations need maximum solar control. Others can take a higher visible light transmission to keep the rooms bright.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tollway and 75 noise reaches into many Richardson neighborhoods. Laminated glass for bedrooms and offices in the eastern half of the city makes a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">What Sets Us Apart in Richardson</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Older-Home Skill</h3>
              <p className="text-gray-600 leading-relaxed">1960s and 1970s ranches need rough-opening repair before new windows go in. We do the carpentry as part of the install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Mature-Canopy Glass Specs</h3>
              <p className="text-gray-600 leading-relaxed">Shaded elevations get higher visible light transmission. Exposed elevations get maximum solar control.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Highway Sound Reduction</h3>
              <p className="text-gray-600 leading-relaxed">Laminated glass for homes near 75 and the Tollway. STC ratings of 32 to 38 depending on configuration.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Richardson install — drop cloths down, old units hauled away same day.</p>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Richardson Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Canyon Creek</li>
              <li>• Cottonwood Heights</li>
              <li>• Heights Park</li>
              <li>• Owens Farm</li>
              <li>• Bethany Heights</li>
              <li>• Prairie Creek</li>
              <li>• Brick Row</li>
              <li>• Highland Terrace</li>
              <li>• Sherrill Park</li>
              <li>• University Estates</li>
              <li>• Telecom Corridor</li>
              <li>• All RISD ZIPs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Richardson Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Richardson homeowners commonly ask about lead times, disruption, and how we handle the older mid-century housing stock. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can take eight to ten weeks for custom finishes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Richardson whole-home project covers fourteen to twenty-two openings and wraps in two to three days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window detailed by location, brand, series, glass package, and trim work, with installation and haul-away rolled in. The total at the bottom is the total you pay. The quote holds for 30 days.</p>
            <p className="text-gray-600 leading-relaxed">Richardson is older than most of the suburbs we serve, and the older housing stock asks more of an installer. 1960s and early 1970s ranches often have steel-framed casement openings that need conversion to standard rough openings before vinyl or fiberglass replacements will fit. Sills can be rotted, headers undersized, and original aluminum frames bedded in caulk that has hardened into something closer to concrete. We inspect at the estimate, document the carpentry needed, and price it transparently. Mature tree canopy on the south sides of many Richardson homes lets us tune Low-E specs by elevation — shaded sides can take a higher visible light transmission to keep rooms bright, while exposed sides need maximum solar control. The result is a properly tuned, properly installed package that respects the home as much as the homeowner.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Richardson window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document any rough-opening repairs older Richardson ranches will need. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and schedule the install for the day the factory ships. Install runs two to three days for most Richardson homes. We text daily updates and walk every opening with you at completion. For homes near 75 or the Tollway, we provide an STC analysis at the estimate so you know what sound improvement to expect from each glass package. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason Richardson homeowners refer us most is that we deliver what the quote promised — same products, same crew, same schedule, same price.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Richardson projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. We do not earn commission on financing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you replace warped or rotted sills in older Richardson ranches?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We inspect and price rough-opening repair at the estimate stage transparently rather than tacking it on at install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How much sound reduction can homes near 75 expect?</h3>
              <p className="text-gray-600 leading-relaxed">From a baseline STC 28 dual-pane unit to STC 34-38 with asymmetric laminated configurations — a clearly noticeable difference indoors.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Richardson Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Richardson home within the week with samples, energy data, and a fixed written quote.</p>
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
