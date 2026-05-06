import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Dallas TX | North Dallas Windows | Window Replacements of Frisco',
  description: 'Window replacement and installation in North Dallas, TX. Energy-efficient windows for Preston Hollow, Lake Highlands, Far North Dallas, and surrounding neighborhoods. Free estimates.',
  keywords: 'window replacement Dallas TX, North Dallas windows, Preston Hollow windows',
}

export default function DallasPage() {
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
            <li className="text-navy-700 font-medium">Dallas</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-dallas-tx-4.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in North Dallas, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco extends expert window service to North Dallas — Preston Hollow, Lake Highlands, Far North Dallas, the Park Cities corridor, and surrounding neighborhoods. We install Andersen, Pella, Marvin, and JELD-WEN windows in homes ranging from 1950s ranches to modern custom builds, backed by certified installers and a written workmanship warranty.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">North Dallas Has the Widest Window Range We See</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Mid-Century to Modern Custom</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                North Dallas housing stock covers more eras than almost any neighborhood we work. Original 1950s and 1960s ranches in Lake Highlands and lower Preston Hollow still wear single-pane steel and aluminum windows. Tract builds from the 1980s and 1990s in Far North Dallas have aging dual-pane vinyl with seal failures and chalking. Newer custom homes built since 2010 along Walnut Hill, Royal Lane, and Hillcrest push the premium tier with oversized casements, picture walls, and corner glass that demand structural framing detail. We work all of it.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Replacement, Not Just Repair</h3>
              <p className="text-gray-600 leading-relaxed">
                Most North Dallas calls we get are for whole-home replacement rather than spot repair. The economics rarely justify rebuilding a 1970s sash for a customer who wants the comfort and bills of modern glass. We will tell you honestly when a repair is the right call, and when an upgrade pays for itself.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Premium Brand Specifications</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Preston Hollow and Park Cities customers tend toward the higher-end product lines — Andersen A-Series, Pella Reserve, Marvin Signature. We have factory-trained installers who know the proprietary clip systems, jamb extensions, and finish details these lines require. Far North Dallas tract homes generally do well with Andersen 400 Series, Pella Lifestyle, or Marvin Elevate fiberglass — premium where it matters, value where it does not.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We pull permits where required, coordinate with HOA architectural committees, and document every step. North Dallas is a place where the details matter, and we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Climate Considerations for North Dallas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Tree Canopy and Heat Load</h3>
              <p className="text-gray-600 leading-relaxed">
                Mature trees in Lake Highlands and Preston Hollow shade the south sides of many homes, but west elevations stay exposed. We tune Low-E specs to the actual orientation rather than blanket-applying one glass package.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Hail Country</h3>
              <p className="text-gray-600 leading-relaxed">
                Spring storms regularly drop hail across North Dallas. Laminated glass options for west and southwest exposures add real impact resistance and pay off the next time a storm rolls through.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Older Frame Conditions</h3>
              <p className="text-gray-600 leading-relaxed">
                Pre-1980 homes often have settled rough openings and rotted wood subframes. We inspect, repair, and properly flash before the new windows go in.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Tollway Noise</h3>
              <p className="text-gray-600 leading-relaxed">
                Homes near the Dallas North Tollway, LBJ, or 75 benefit from laminated glass for STC reduction. Bedrooms and offices feel noticeably quieter.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">UV Damage</h3>
              <p className="text-gray-600 leading-relaxed">
                Texas sun fades hardwood floors, area rugs, and artwork fast. Modern Low-E glass blocks 95+ percent of UV without darkening interiors.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Cold Snaps</h3>
              <p className="text-gray-600 leading-relaxed">
                February freezes have become a regular event. Argon-filled triple-silver Low-E units hold heat through the worst nights and help avoid frozen-pipe scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">North Dallas Areas We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Preston Hollow</li>
              <li>• Lake Highlands</li>
              <li>• Far North Dallas</li>
              <li>• Walnut Hill</li>
              <li>• Royal Lane Corridor</li>
              <li>• Hillcrest</li>
              <li>• Forest Hills</li>
              <li>• Bent Tree</li>
              <li>• Prestonwood</li>
              <li>• North Park</li>
              <li>• Greenway Parks</li>
              <li>• Devonshire</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from North Dallas Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">North Dallas homeowners usually ask about lead times, the disruption of the project, and how we handle the older housing stock that defines the area. Andersen and JELD-WEN factory lead times are four to six weeks. Pella runs five to seven weeks. Marvin Signature can stretch to eight or ten weeks for custom finishes and oversized units, which are common on the higher end of the North Dallas market.</p>
            <p className="text-gray-600 leading-relaxed">A typical North Dallas project covers sixteen to thirty openings depending on the home and wraps in two to four days. We work room by room with two-person crews — furniture moved off the wall, drop cloths down, new window staged and ready before the old one comes out. The home is never left exposed at night.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window detailed by location, brand, series, glass package, and trim, with installation and haul-away rolled in. The total at the bottom is the total you pay, and the quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">The older homes in Lake Highlands, Preston Hollow, and the Park Cities corridor often need rough-opening repair before new windows go in. Sills can be rotted, headers undersized, and original frames cobbled together with nails and decades-old caulk. We inspect every opening at the estimate stage, document the carpentry work needed, and price it transparently. A 1965 ranch is more carpentry than a 2015 production-build install, and we plan accordingly. The result is a properly flashed, properly sealed, properly trimmed install that holds up for decades.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a North Dallas window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. The estimator measures every opening, photographs the conditions, and brings physical samples — frame finishes, glass packages, grid options — for the brand and series that fit your home. We listen to what is bothering you about the current windows: hot rooms in summer, fading hardwoods, foggy panes, road noise from 75 or LBJ. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and schedule the install. Most North Dallas projects run two to four days with two-person crews. We text daily updates, photograph progress, and walk every opening with you at completion. We register your manufacturer warranty in your name and back our install labor with our own multi-year workmanship warranty. North Dallas homeowners who refer us most are the ones who appreciated that the price stayed honest from quote to invoice and the crew finished the project the way they said they would.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing on North Dallas projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. Recommendations are independent of how you choose to pay.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you match the original steel-window proportions in 1950s Lake Highlands ranches?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. Marvin Signature and Andersen A-Series have profiles tight enough to read like the original steel windows while delivering modern thermal performance.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is install for a Preston Hollow custom home?</h3>
              <p className="text-gray-600 leading-relaxed">Three to five days depending on the count and configuration of openings. Custom shapes and oversized units add time.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Schedule Your Free North Dallas Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your home within the week with brand samples, energy data, and a fixed written quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Schedule Consultation</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
