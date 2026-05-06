import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bay & Bow Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Bay and bow window installation and replacement in Frisco, TX. Add square footage, daylight, and curb appeal with Andersen, Pella, Marvin, and JELD-WEN configurations.',
  keywords: 'bay windows Frisco TX, bow windows, bay window installation, projection windows',
}

export default function BayBowWindowsPage() {
  return (
    <main>
      <Header />

      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center space-x-2 text-sm text-navy-500">
            <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows" className="hover:text-navy-700">Windows</Link></li>
            <li>/</li>
            <li className="text-navy-700 font-medium">Bay &amp; Bow Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/bay-bow-windows-frisco-tx.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Bay &amp; Bow Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Bay and bow windows project outward from the house wall, adding measurable square footage, daylight, and architectural drama. Both styles are popular replacement choices for Frisco homes — particularly the dining-room and breakfast-nook elevations of two-story brick traditionals in Phillips Creek Ranch, The Trails, and Stonebriar. We design, fabricate, and install bay and bow assemblies from Andersen, Pella, Marvin, and JELD-WEN with proper structural support and weather flashing.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Bay vs Bow: Which Fits Your Frisco Home?</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Bay Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A bay window typically uses three units — a large fixed picture window in the center flanked by two operable windows (usually casement or double-hung) at 30 or 45 degree angles. The geometry creates a strong angular projection that suits brick and stone Frisco facades. Bays project further from the house than bows, which makes them better for adding interior square footage — most Frisco bay installations gain 18 to 24 inches of usable depth that becomes a window seat, a reading nook, or extra dining-room footprint.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bays are a strong fit for the breakfast nooks and formal dining rooms of homes built between 1995 and 2010 across The Trails, Plantation Resort, and Heritage Lakes. The angular look reads more traditional and pairs naturally with brick.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Bow Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A bow window uses four to six units arranged in a gentle curve. The geometry is softer than a bay, which suits homes with a more contemporary aesthetic. Bows project less but cover a wider span — they work well for filling a 10 to 14 foot wall with continuous glass and panoramic views. The curve also means more glass area and more daylight than an equivalent bay.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bows are common in the great rooms and master suites of newer Frisco custom homes — Newman Village, Edgestone at Legacy, and the higher-end Hollyhock builds. The wide span pairs beautifully with golf-course or greenbelt views.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Frisco Homeowners Add or Replace Bay and Bow Windows</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Square Footage</h3>
              <p className="text-gray-600 leading-relaxed">A bay adds 18 to 24 inches of usable interior depth — a real benefit for breakfast nooks, dining rooms, and master bedrooms.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Daylight and Views</h3>
              <p className="text-gray-600 leading-relaxed">More glass area than any other operable style. The wraparound geometry pulls in light from three directions.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Curb Appeal</h3>
              <p className="text-gray-600 leading-relaxed">Bay and bow projections break up flat brick facades and add architectural depth — a meaningful resale-value enhancement in Frisco&apos;s competitive market.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Ventilation</h3>
              <p className="text-gray-600 leading-relaxed">Bay flankers are usually operable casements or double-hungs that crank or slide for cross-ventilation. Bows can have multiple operable units distributed across the curve.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Built-In Seating</h3>
              <p className="text-gray-600 leading-relaxed">The interior projection creates a built-in window seat platform. Custom cushions, storage drawers below, and bookshelves alongside are popular finishing touches.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient</h3>
              <p className="text-gray-600 leading-relaxed">Modern bay and bow assemblies use Low-E argon-filled glass and insulated head and seat boards. The result is a thermally efficient projection that does not penalize energy bills.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Installation Considerations for Frisco</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Installing a bay or bow is more involved than a flat-frame replacement. We engineer the assembly with proper cable support from above (anchored into a structural header), insulated head and seat boards, and full flashing around the projection. The roof or knee-cap above the window must shed water cleanly to avoid leaks, and the exterior trim has to match your existing brick or siding precisely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For Frisco production homes that already have a bay or bow opening, replacement is straightforward — we measure the existing rough opening, photograph the structural support, and order the new assembly to match. For new bay or bow installations where there was previously a flat window, we coordinate with a structural contractor on the header and support work.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                HOA approvals are routine on bay and bow projects. Most Frisco master-planned communities scrutinize anything that changes the facade silhouette, including the addition of a bay where there was none before. We pull the architectural review board palette and submit the application paperwork as part of the project — Phillips Creek Ranch, The Trails, Stonebriar, Newman Village, and Plantation Resort all run active boards we have worked with.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lead times for bay and bow assemblies run six to ten weeks from order. We schedule the install date the day the factory ships your order, and a typical bay or bow install wraps in one to two days — longer if structural work is involved.
              </p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Architectural Considerations for Frisco Bay Replacements</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Replacing a bay or bow on a 1990s Frisco production home is more than ordering a new unit. Most original installations used insulated head and seat boards that are now sagging or showing moisture damage. We replace those structural components as part of the project rather than reinstalling on a compromised platform. The exterior trim — typically composite or wood-clad — also gets replaced to match the new unit perfectly. The result is a refresh of the entire bay assembly, not just the glass.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Pricing for Bay and Bow Projects</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Bay and bow projects are priced as complete assemblies because of the structural and trim work involved. A typical 8-foot bay replacement in a Frisco production home runs from $4,500 to $8,500 depending on the brand, glass package, and trim spec. Bow assemblies covering 10 to 14 feet typically run $7,000 to $14,000. Custom shapes and oversized assemblies cost more. We provide line-item written quotes that hold for 30 days and include all materials, labor, flashing, sealing, trim, and haul-away.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Frisco bay and bow projects almost always involve HOA approval — the silhouette change is visible from the street and review boards scrutinize it. We bring shop drawings, finish samples, and structural details to the architectural review board on every project. The board approval timeline runs one to three weeks, and we manage the schedule so it does not delay install. Most bay and bow projects in Frisco wrap two to three weeks after the unit ships from the factory.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Add a Bay or Bow Window to Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">Schedule a free in-home estimate. We will measure, photograph, and design the assembly that fits your home and budget.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Get Free Estimate</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
