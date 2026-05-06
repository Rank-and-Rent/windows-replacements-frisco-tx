import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Prosper TX | Luxury Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Prosper, TX. Premium windows for Windsong Ranch, Star Trail, Lakes of Prosper, and every Prosper neighborhood. Free estimates.',
  keywords: 'window replacement Prosper TX, Windsong Ranch windows, Star Trail windows, luxury Prosper windows',
}

export default function ProsperPage() {
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
            <li className="text-navy-700 font-medium">Prosper</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-prosper-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Prosper, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Prosper homeowners across Windsong Ranch, Star Trail, Lakes of Prosper, La Cima, and the high-end estate neighborhoods spreading north of Highway 380. We install premium windows from Andersen, Pella, Marvin, and JELD-WEN — chosen for the oversized glass, custom millwork, and architectural review boards that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Premium Town with Premium Window Demands</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">High-End New Construction</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prosper is one of the most affluent zip codes in North Texas, and the housing reflects it. Custom estates with two-story foyers, oversized rear elevations, picture walls, and corner glass that demands structural framing detail. Even the production-builder homes in Windsong Ranch and Star Trail run at the upper end of the production-build spectrum. We work the full range with the products and finish carpentry these homes require — Andersen A-Series, Pella Reserve, and Marvin Signature appear regularly on our Prosper estimates.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Replacement is Coming</h3>
              <p className="text-gray-600 leading-relaxed">
                Most Prosper homes are still under fifteen years old, but the earliest Windsong Ranch and Star Trail phases are now hitting the seal-failure window. We have started seeing more replacement calls — usually triggered by foggy glass between the panes or HOA-driven facade refresh projects.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Open Prairie Wind</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prosper&apos;s open-prairie geography exposes homes to more raw wind than older suburbs. We flash with butyl tape at the sill, use low-expansion foam, and double-check fastener depth on every install. The wind also carries dust during dry spells and rain during storm events — both of which test the weather seal of any new install.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hail events are a regular spring feature. Laminated glass on west and southwest exposures adds real impact protection, and many Prosper customers carry policies with hail-rated glass discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Prosper Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Premium Brand Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Andersen A-Series, Pella Reserve, Marvin Signature — factory-trained installers know the proprietary clips and finish details these lines require.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Big Glass Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Stacked transoms, picture walls, and corner glass on two-story foyers. We use lifts where required and finish-carpenter every casing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">Windsong Ranch, Star Trail, and Lakes of Prosper all run architectural review. We handle the paperwork as part of the project.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Glass</h3>
              <p className="text-gray-600 leading-relaxed">Laminated and impact-rated options for exposed elevations. Insurance documentation included.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Prosper install — drop cloths down, old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Quoting</h3>
              <p className="text-gray-600 leading-relaxed">Line-item written quotes that hold for 30 days. No high-pressure financing pitches at the kitchen table.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Prosper Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Windsong Ranch</li>
              <li>• Star Trail</li>
              <li>• Lakes of Prosper</li>
              <li>• La Cima</li>
              <li>• Whispering Farms</li>
              <li>• Whitley Place</li>
              <li>• Lakewood</li>
              <li>• Estates of Tucker Hill</li>
              <li>• Glenbrook Estates</li>
              <li>• Saddle Creek</li>
              <li>• Westside</li>
              <li>• All Prosper ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Prosper Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Prosper homeowners commonly ask about lead times, disruption, and how we handle the premium product lines that fit Prosper homes. Andersen A-Series, Pella Reserve, and Marvin Signature factory lead times are running eight to twelve weeks for the custom configurations these homes typically demand. The standard Andersen 400 Series and JELD-WEN Premium runs are four to six weeks. We schedule the install the day the factory truck ships your order.</p>
            <p className="text-gray-600 leading-relaxed">A typical Prosper whole-home project covers twenty-two to thirty-five openings — homes here are larger than most North Texas suburbs — and wraps in three to five days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: every window detailed, premium millwork itemized, installation and trim work rolled in. The total at the bottom is the total. The quote holds for 30 days.</p>
            <p className="text-gray-600 leading-relaxed">Prosper homes frequently come with two-story foyers, stacked transoms, picture walls, and corner glass that demand structural framing detail. Our installers are factory-trained on the proprietary clip systems, jamb extensions, and finish details these premium product lines require — those details are where most installs fall apart, and where we focus our attention. Windsong Ranch, Star Trail, and Lakes of Prosper all run active architectural review boards that scrutinize window finish, grid pattern, and brand. We have walked applications through each board and know what they will and will not approve. For lakefront and golf-course homes, we reinforce frame fastening and recommend laminated glass on exposed elevations.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Prosper window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — premium frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document HOA architectural review details for Windsong Ranch, Star Trail, Lakes of Prosper, and Whitley Place. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit any architectural review paperwork as part of the project. Premium-tier products run eight to twelve weeks of factory lead time, and we lock in the install slot the day the order is placed. Install runs three to five days for most Prosper homes. We text daily updates, photograph progress, and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason Prosper homeowners refer us most is that the premium products we recommend at the estimate are the products that get installed.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Windsong Ranch and Star Trail architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long are premium-tier factory lead times?</h3>
              <p className="text-gray-600 leading-relaxed">Andersen A-Series, Pella Reserve, and Marvin Signature run eight to twelve weeks for the custom configurations these homes typically demand.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are dark exterior finishes available?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — every premium brand offers dark exterior options. Custom colors are available on most premium lines for an upcharge.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What warranty comes with the install?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, plus the manufacturer warranty on the product.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Prosper Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Prosper home within the week with brand samples, energy data, and a fixed written quote.</p>
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
