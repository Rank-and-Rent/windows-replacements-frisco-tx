import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Euless TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Euless, TX. Energy-efficient windows for HEB-area homes. Free estimates and authorized Andersen, Pella, Marvin, and JELD-WEN dealer.',
  keywords: 'window replacement Euless TX, Euless window installation, HEB windows',
}

export default function EulessPage() {
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
            <li className="text-navy-700 font-medium">Euless</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-euless-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Euless, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Euless homeowners across the HEB corridor — Glade Parks, Bear Creek, Euless North, and the established neighborhoods between Highway 121 and Highway 183. We install Andersen, Pella, Marvin, and JELD-WEN windows with airport-corridor sound packages, hail-rated frames, and a written workmanship warranty. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Mid-Cities Town in the Flight Path</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Euless is one of the closest cities to DFW Airport, which shapes nearly every Euless window project. The flight corridor crosses central and east Euless multiple times a day, and homeowners in Bear Creek and the older neighborhoods south of Glade Road consistently raise sound as a primary concern. We address it with laminated glass and asymmetric pane thicknesses — a practical, measurable acoustic upgrade that knocks 4 to 8 STC points off perceived noise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The other defining factor is age. Most Euless housing was built between 1965 and 1995. Original aluminum and early dual-pane vinyl windows are at end-of-life. Seal failures, foggy glass between panes, and chalking on the exterior side of frames are the standard complaints. Replacement is straightforward and high-impact.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spring and early summer are storm season in Euless. Hail events have hit the city repeatedly — laminated glass on west and southwest exposures adds real impact protection, and many insurance carriers offer policy discounts for it. We document the upgrade with carrier paperwork at no extra cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Euless ISD and HEB ISD both have strong reputations, and the resale market rewards updated homes. New windows show better at listing, brighten the facade, and eliminate the inspection-report flags that cost sellers thousands at closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Built for Euless Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Sound Reduction</h3>
              <p className="text-gray-600 leading-relaxed">Laminated glass for bedrooms and offices in the flight corridor. STC ratings of 32 to 38 depending on configuration.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Hail-Rated Frames</h3>
              <p className="text-gray-600 leading-relaxed">Fusion-welded vinyl, fiberglass, and Fibrex frames hold up to wind-driven debris. Reinforced meeting rails on tall double-hungs.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Texas-Tuned Glass</h3>
              <p className="text-gray-600 leading-relaxed">Soft-coat triple-silver Low-E with argon. Drops solar heat gain coefficients below 0.25 while keeping interiors bright.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Manufacturer-Direct</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — authorized dealer status means factory pricing and warranty registration.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Local Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Euless install — no rotating subs. Drop cloths down, old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Workmanship Warranty</h3>
              <p className="text-gray-600 leading-relaxed">Multi-year written labor warranty on top of the manufacturer coverage. Service calls in Euless are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Euless Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Glade Parks</li>
              <li>• Bear Creek</li>
              <li>• Euless North</li>
              <li>• North Park</li>
              <li>• Westpark</li>
              <li>• Euless Cliffs</li>
              <li>• Westwood Park</li>
              <li>• Stonecreek Estates</li>
              <li>• South Euless</li>
              <li>• Calloway Cove</li>
              <li>• Cliffs at Glade Parks</li>
              <li>• All HEB ISD ZIPs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Euless Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">On Euless estimates we hear the same handful of questions every visit. Lead time is first — Andersen and JELD-WEN orders are running four to six weeks, Pella five to seven, Marvin Signature eight to ten for dark exterior finishes. We hold the install slot until the order ships and lock the start date the day the truck leaves the factory.</p>
            <p className="text-gray-600 leading-relaxed">A typical Euless whole-home project covers fourteen to twenty-two openings and wraps in two to three days. Two-person crews work room by room — drop cloths down, furniture moved off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item, every window detailed, installation and trim work rolled in, no add-ons at the end. The quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">Sound is the most-asked Euless question because of the airport flight path. A standard dual-pane insulated glass unit hits roughly STC 28. Pairing it with a laminated outer pane in asymmetric thicknesses pushes the rating into the mid 30s, and a person can hear the difference as a real drop in perceived jet noise. We add laminated upgrades on the elevations that need them — usually the side that faces approach or departure — rather than blanket-pricing the whole house. Master bedrooms and home offices are the priorities. The result is a measurably quieter house at a price that respects the math. We will walk every Euless homeowner through the actual STC numbers at the estimate so the decision is informed rather than aspirational.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Euless window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through the issues you want solved. We measure every opening, photograph conditions, and write up the recommendations. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and schedule the install for the day the factory ships. Most Euless projects run two to three days with two-person crews and daily text updates. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. For airport-corridor homes, we provide an STC analysis at the estimate so you know exactly what kind of sound improvement to expect from each glass package option. The reason Euless homeowners refer us most is that the experience matches the proposal — same crew, same price, same products, same schedule.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Euless projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. We do not earn commission on financing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How much can laminated glass reduce flight-path noise?</h3>
              <p className="text-gray-600 leading-relaxed">From a baseline STC 28 dual-pane unit to STC 34-38 with asymmetric laminated configurations — a clearly noticeable difference indoors.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are hail-rated frames covered by insurance discounts?</h3>
              <p className="text-gray-600 leading-relaxed">Many carriers offer discounts for impact-rated glass and reinforced frames. We document the upgrade for the carrier as part of the install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Euless service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-center">Beyond the standard Euless project, we also handle insurance-driven replacements after spring storms. Our adjuster-ready scope and photo packets get most claims approved within two weeks. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Euless Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or request an online estimate. A senior estimator will be at your Euless home within the week with samples, sound and energy data, and a fixed written quote.</p>
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
