import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement The Colony TX | Window Installation | Window Replacements of Frisco',
  description: 'Frisco-based window installer serving The Colony — Tribute, Stewart Peninsula, Castle Hills North. Lakeview elevations, hail-rated frames, HOA palette submission.',
  keywords: 'window replacement The Colony TX, Tribute windows, Stewart Peninsula windows, Colony window installation',
}

export default function TheColonyPage() {
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
            <li className="text-navy-700 font-medium">The Colony</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-the-colony-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in The Colony, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves The Colony homeowners across Tribute, Stewart Peninsula, Castle Hills North, Austin Ranch, and the lakefront neighborhoods along Lake Lewisville. We install Andersen, Pella, Marvin, and JELD-WEN windows tuned for lake-influenced exposures, golf-course communities, and the master-planned aesthetics that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Lake-Front City with Lake-Front Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Tribute and Stewart Peninsula</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tribute is the golf-course flagship of The Colony, with custom and semi-custom homes overlooking the lakeside Old American course. Stewart Peninsula reaches deeper into the lake itself, with waterfront properties on every cove. Both communities push the upper end of window specs — Andersen A-Series, Pella Reserve, and Marvin Signature appear regularly on our Tribute and Stewart Peninsula estimates. Big glass, custom shapes, and HOA architectural review boards that enforce a consistent aesthetic.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Production-Builder Stock</h3>
              <p className="text-gray-600 leading-relaxed">
                Castle Hills North, Austin Ranch, and the older interior neighborhoods of The Colony bring more typical 1990s and 2000s production-builder homes. The original windows in these homes are now 20 to 30 years old and showing seal failures, foggy glass, and warped vinyl. Replacement is a comfort and bills issue more than aesthetics.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Lake Lewisville Exposure</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Colony has more lakefront homes than almost any DFW city. Lake-facing windows take measurably more wind, humidity, salt-free spray, and UV than homes a few streets back. We reinforce frame fastening, use butyl flashing tape, and recommend laminated glass on west-facing exposures. The result is a longer-lasting weather seal and more stable interior comfort.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Grandscape entertainment district has changed traffic patterns near the southern part of the city. Laminated glass on highway-facing elevations cuts noise meaningfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why The Colony Calls Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake-Country Specs</h3>
              <p className="text-gray-600 leading-relaxed">Reinforced fastening and laminated glass on lakefront exposures. Real protection, not marketing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Premium Brand Specialists</h3>
              <p className="text-gray-600 leading-relaxed">Andersen A-Series, Pella Reserve, Marvin Signature for the higher-end Tribute and Stewart Peninsula market.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">HOA Coordination</h3>
              <p className="text-gray-600 leading-relaxed">Tribute, Stewart Peninsula, and Castle Hills North all run architectural review. We handle the paperwork.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Glass</h3>
              <p className="text-gray-600 leading-relaxed">Laminated and impact-rated options for exposed elevations. Insurance documentation included.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every Colony install — drop cloths down, old units hauled away same day.</p>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">The Colony Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Tribute</li>
              <li>• Stewart Peninsula</li>
              <li>• Castle Hills North</li>
              <li>• Austin Ranch</li>
              <li>• Eastvale</li>
              <li>• Stewart Creek</li>
              <li>• Western Oaks</li>
              <li>• Heritage</li>
              <li>• Hawaiian Village</li>
              <li>• Pebble Brook</li>
              <li>• Saddleridge</li>
              <li>• All Lewisville ISD/Frisco ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from The Colony Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">The Colony homeowners ask about lead times, disruption, and how we coordinate with HOAs and lake-facing exposures. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature stretches to eight or ten weeks for custom dark finishes — common on Tribute and Stewart Peninsula custom homes.</p>
            <p className="text-gray-600 leading-relaxed">A typical Colony whole-home project covers eighteen to thirty openings — Tribute homes are larger than the older interior subdivisions — and wraps in three to four days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window detailed, premium millwork itemized, installation and trim work rolled in. The total is the total. The quote holds for 30 days.</p>
            <p className="text-gray-600 leading-relaxed">Tribute and Stewart Peninsula both run active architectural review boards with specific requirements for window finish, grid pattern, and brand. We have walked dozens of applications through these boards and know exactly what they will and will not approve. Lake-facing homes get reinforced frame fastening with butyl flashing tape and laminated glass on west exposures where wind, humidity, and UV all peak. Castle Hills North and Austin Ranch take a more standard production-builder template, and we focus those projects on upgrading from builder-grade clear glass to triple-silver Low-E with argon. For homes near Grandscape, we recommend laminated glass on the road-facing elevation for sound reduction — entertainment district traffic has changed the noise picture in the southern part of the city.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Colony window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document HOA architectural review details for Tribute, Stewart Peninsula, Castle Hills North, and Austin Ranch. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit any architectural review paperwork as part of the project. Install runs three to four days for most Colony homes, longer for the larger Tribute and Stewart Peninsula custom homes. We text daily updates, photograph progress, and walk every opening with you at completion. For lake-facing homes, we provide reinforced fastening and laminated glass on west exposures as part of the standard scope. We register your manufacturer warranty and back our install labor with our own multi-year written warranty.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle Tribute and Stewart Peninsula architectural review?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the ARB paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are lake-front exposures handled differently?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — reinforced frame fastening, butyl flashing tape at the sill, and laminated glass on west and southwest exposures.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long are premium-tier factory lead times?</h3>
              <p className="text-gray-600 leading-relaxed">Andersen A-Series, Pella Reserve, and Marvin Signature run eight to twelve weeks for the custom configurations Tribute and Stewart Peninsula homes typically demand.</p>
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
            <p className="text-gray-600 leading-relaxed text-center">We also handle Hawaiian Village patio homes and the older Stewart Creek interior subdivisions with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free Colony Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your Colony home within the week with samples, energy data, and a fixed written quote.</p>
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
