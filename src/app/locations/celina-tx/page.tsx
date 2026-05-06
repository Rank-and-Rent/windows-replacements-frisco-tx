import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Celina TX | New Construction Windows | Window Replacements of Frisco',
  description: 'Frisco-based installer serving Celina — Light Farms, Mustang Lakes, Cambridge Crossing. New-build big-glass elevations, ARB submission handled, written warranty.',
  keywords: 'window replacement Celina TX, Celina window installation, Light Farms windows, Mustang Lakes windows',
}

export default function CelinaPage() {
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
            <li className="text-navy-700 font-medium">Celina</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-celina-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Celina, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Celina homeowners across Light Farms, Mustang Lakes, Cambridge Crossing, Celina Hills, and every neighborhood out beyond Preston Road. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen and sized for the open-elevation, big-glass homes that define Celina&apos;s newest construction. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Celina&apos;s Window Replacement Story</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">A New City, Already Replacing Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Celina is one of the fastest-growing cities in the country, but it has been growing fast for fifteen years now. The early phases of Light Farms broke ground in 2012, Mustang Lakes followed in 2015, and Cambridge Crossing started welcoming homeowners not long after. Many of those original homes are at or near the point where builder-grade windows fail — failed seals, foggy glass between the panes, weatherstripping that no longer compresses. We are seeing that wave hit Celina now and the demand for replacement windows has grown to match.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The other big driver is upgrade. Celina homeowners who bought a base spec house often want to push it toward the custom-tier finish: dark exterior frames, triple-silver Low-E glass, simulated divided lite grids on the front elevation. Replacement windows are the cleanest way to get there without a full remodel.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Big Glass, Hot Sun</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Celina homes love big windows. Two-story great rooms with stacked transoms, full-height kitchen sliders, primary bedrooms with picture windows that wrap a corner — all of it beautiful and all of it a thermal challenge in North Texas. We default to soft-coat triple-silver Low-E (Andersen SmartSun, Pella NaturalSun, Marvin Low-E2 with argon) and add laminated glass on west and southwest exposures where solar load is highest.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also pay attention to wind. The open-prairie geography means Celina catches more raw wind than most older suburbs — frames need to be square, sealed, and properly fastened. Our installs are flashed with butyl tape at the sill and low-expansion foam around the perimeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Built for Celina Homes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Story Foyers</h3>
              <p className="text-gray-600 leading-relaxed">
                Tall narrow units, transom stacks, and arched specialty shapes are routine in Celina. We measure with a laser, document every opening, and order factory-made shapes that drop in clean.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Open Concept Rear Walls</h3>
              <p className="text-gray-600 leading-relaxed">
                Stacked sliders, multi-slide door systems, and corner picture windows on the back elevation. We can replace a 16-foot patio door system in a single day with the right factory partner.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA-Ready Specs</h3>
              <p className="text-gray-600 leading-relaxed">
                Light Farms, Mustang Lakes, and Cambridge Crossing all run architectural review. We provide finish samples and product sheets that match the original spec or get pre-approved alternatives signed off.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm-Resistant Glass</h3>
              <p className="text-gray-600 leading-relaxed">
                Open prairie means Celina is exposed to spring storms. Laminated and tempered glass options add real impact resistance on west-facing elevations.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">
                Andersen, Pella, Marvin, and JELD-WEN — we sell and install all four. We recommend the brand that matches your home, not the one with the highest commission.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Local, Fast Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our shop is fifteen minutes south of most Celina addresses. Service calls happen quickly, and the same crew that installed your windows is the one that comes back if anything is off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Celina Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Light Farms</li>
              <li>• Mustang Lakes</li>
              <li>• Cambridge Crossing</li>
              <li>• Celina Hills</li>
              <li>• Sutton Fields</li>
              <li>• Old Celina</li>
              <li>• Lilyana</li>
              <li>• Creeks of Legacy</li>
              <li>• Wells Brothers</li>
              <li>• Devonshire</li>
              <li>• Glen Crossing</li>
              <li>• All of Celina ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Celina Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">On Celina estimates we field a consistent set of questions about timing, pricing, and HOA coordination. Right now Andersen and JELD-WEN factory lead times are four to six weeks, Pella five to seven weeks, and Marvin Signature with custom dark exterior finishes eight to ten weeks. We schedule the install the day the factory truck ships your order.</p>
            <p className="text-gray-600 leading-relaxed">A typical Celina project covers twenty to twenty-eight openings — Light Farms, Mustang Lakes, and Cambridge Crossing homes tend to be larger than older suburbs — and wraps in three to four working days with two-person crews. Crews work room by room, never opening the whole house at once. Drop cloths down, furniture moved off the wall, new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item, every window detailed, installation and trim work rolled in, no mystery add-ons. The quote holds for 30 days while you collect competing bids.</p>
            <p className="text-gray-600 leading-relaxed">Celina HOAs deserve their own paragraph. Light Farms, Mustang Lakes, and Cambridge Crossing each run an active architectural review board with specific requirements about window finish, grid pattern, and brand. We pull samples from each approved palette and walk the application paperwork through the board on every project. We have done enough of these submissions that we know exactly what each board will and will not approve, which saves homeowners weeks of revision rounds. The replacement comes back looking like an upgrade that fits the community rather than a sore-thumb deviation.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Celina window project is straightforward. Call us or use the contact form, and we will schedule the in-home estimate at a convenient time. The estimator measures every opening, photographs conditions, and brings physical samples of finish, glass, and grid options that fit the architectural template of your home. We walk through what is bothering you about the current windows and what success looks like. The written quote arrives within 48 hours, broken out line by line. If you proceed, we place the factory order the same day and lock in the install date for the day the truck ships. Most Celina projects run three to four days with two-person crews. We text daily updates, photograph progress, and walk every opening with you at completion. The HOA application paperwork — Light Farms, Mustang Lakes, Cambridge Crossing — is included in the project rather than tacked on as an extra. The reason Celina homeowners come back is that we honor the quote, deliver on the schedule, and stand behind the install with our own multi-year workmanship warranty in addition to the manufacturer coverage.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Light Farms architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long are factory lead times for new construction?</h3>
              <p className="text-gray-600 leading-relaxed">Andersen and JELD-WEN are four to six weeks, Pella five to seven, Marvin Signature eight to ten for custom dark finishes.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are wide multi-slide patio doors available in Celina?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — Marvin Ultimate Multi-Slide and Andersen E-Series multi-slide systems are routine on Celina rear elevations.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product. Celina service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Celina Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or request an online estimate. A senior estimator will be at your Celina home within the week with samples, energy data, and a written quote.</p>
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
