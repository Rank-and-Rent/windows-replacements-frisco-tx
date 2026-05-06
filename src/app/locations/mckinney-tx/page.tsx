import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement McKinney TX | Window Installation McKinney | Window Replacements of Frisco',
  description: 'Frisco-based installer serving McKinney — Stonebridge Ranch, Craig Ranch, Tucker Hill, downtown. Master-planned 15-25yr replacement cycle, HOA palette pulled.',
  keywords: 'window replacement McKinney TX, Stonebridge Ranch windows, Craig Ranch windows, McKinney window installation',
}

export default function McKinneyPage() {
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
            <li className="text-navy-700 font-medium">McKinney</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/locations/window-replacement-mckinney-tx-1.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in McKinney, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves McKinney homeowners across Stonebridge Ranch, Craig Ranch, Adriatica, Tucker Hill, the Historic Downtown district, and every neighborhood from US 75 to Lake Lavon. We install Andersen, Pella, Marvin, and JELD-WEN windows — chosen for the diverse housing eras and architectural styles that define the city. Free in-home estimates.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Three Distinct McKinneys</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Historic Downtown McKinney</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The blocks around the McKinney square have homes built between 1880 and 1940 — wood double-hung windows with putty glaze, weight-and-pulley balances, and sash proportions you cannot fake with off-the-shelf product. Replacing windows here is an architectural decision before it is an energy decision. We specify wood-clad replacements like Andersen 400 Series, A-Series, or Marvin Signature with simulated divided lite grids and exterior finishes that pass historic-district review.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Stonebridge Ranch and Craig Ranch</h3>
              <p className="text-gray-600 leading-relaxed">
                Stonebridge Ranch, Craig Ranch, and Tucker Hill represent the master-planned tier — homes built between 1995 and 2015 with two-story foyers, oversized rear elevations, and HOA architectural review boards. Many of these original windows are now hitting the 20-year mark and showing the wear. Replacement is the highest-impact upgrade these homes will see.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Adriatica and Newer Phases</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Adriatica brings a Mediterranean-village aesthetic with tighter window proportions, deeper sash reveals, and stucco-clad exteriors. We coordinate with the Adriatica HOA on every project to maintain the village character. Newer phases like Trinity Falls and Wilmeth Ridge follow the contemporary-traditional template and benefit from upgrade-tier glass on the larger rear elevations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whichever McKinney you live in, we have done your kind of project. We will measure every opening, walk you through brand and glass options, and leave you with a fixed written quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">What Sets Us Apart in McKinney</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Historic-District Sensitivity</h3>
              <p className="text-gray-600 leading-relaxed">We work with the McKinney HPC where required and choose products that meet preservation standards.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Master-Planned ARB Experience</h3>
              <p className="text-gray-600 leading-relaxed">Stonebridge Ranch, Craig Ranch, Adriatica, and Tucker Hill all run architectural review. We handle the paperwork.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Authorized Multi-Brand</h3>
              <p className="text-gray-600 leading-relaxed">Andersen, Pella, Marvin, JELD-WEN — factory pricing and warranty registration on every install.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Glass</h3>
              <p className="text-gray-600 leading-relaxed">Hail events are a regular feature of McKinney springs. Laminated and impact-rated options come with insurance documentation.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">Lead and apprentice on every McKinney install — drop cloths down, old units hauled away same day.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Honest Quoting</h3>
              <p className="text-gray-600 leading-relaxed">Line-item written quotes that hold for 30 days. No high-pressure financing pitches.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">McKinney Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
              <li>• Historic Downtown McKinney</li>
              <li>• Stonebridge Ranch</li>
              <li>• Craig Ranch</li>
              <li>• Adriatica</li>
              <li>• Tucker Hill</li>
              <li>• Eldorado Country Club</li>
              <li>• Wilmeth Ridge</li>
              <li>• Trinity Falls</li>
              <li>• Auburn Hills</li>
              <li>• Mallard Lakes</li>
              <li>• Westridge</li>
              <li>• All McKinney ISD</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from McKinney Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">McKinney homeowners ask about lead times, disruption, and how we handle the diverse housing eras the city covers. Andersen and JELD-WEN factory lead times are running four to six weeks. Pella is five to seven weeks. Marvin Signature can stretch to eight or ten weeks for custom finishes — common on historic district and Adriatica projects.</p>
            <p className="text-gray-600 leading-relaxed">A typical McKinney whole-home project covers eighteen to twenty-eight openings and wraps in two to four days with two-person crews. We work room by room — drop cloths down, furniture pulled off the wall, the new window staged before the old one comes out.</p>
            <p className="text-gray-600 leading-relaxed">Pricing is line-item: each window detailed by location, brand, series, glass package, and trim work, with installation and haul-away rolled in. The total at the bottom is the total you pay, and the quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">The historic district around the McKinney square needs wood-clad replacements that match original sash proportions — Andersen 400 Series, A-Series, or Marvin Signature with simulated divided lite grids and exterior finishes that pass HPC review. Adriatica enforces a Mediterranean-village aesthetic, and we coordinate with the Adriatica HOA on every project there to maintain the village character — stucco-clad surrounds, deeper sash reveals, and the right exterior finish color. Stonebridge Ranch, Craig Ranch, and Tucker Hill all run active architectural review boards with specific window requirements. We have walked applications through each of these boards successfully and know what they will and will not approve.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a McKinney window project is straightforward. Call or message us, and we will schedule the in-home estimate at a convenient time. Our estimators bring physical samples — frame finishes, glass packages, grid options — and walk through what is bothering you about the current windows. We measure every opening, photograph conditions, and document HPC, HOA, or architectural review details for the historic district, Stonebridge Ranch, Craig Ranch, Adriatica, and Tucker Hill. The written quote arrives within 48 hours, broken out line by line. If you proceed, we order the same day and submit any review paperwork as part of the project. Install runs two to four days for most McKinney homes. We text daily updates, photograph progress, and walk every opening with you at completion. We register your manufacturer warranty and back our install labor with our own multi-year written warranty. The reason McKinney homeowners refer us most is that we treat each district&apos;s review process — historic, master-planned, Mediterranean-village — as an integral part of the job rather than an excuse to charge an extra fee.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle McKinney HPC review for the historic district?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We pull samples and submit the HPC paperwork as part of the project — no extra fee.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you handle Adriatica Mediterranean-village specs?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We coordinate with the Adriatica HOA on every project there to maintain the village character — stucco-clad surrounds, deeper sash reveals, and the right exterior finish.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are storm-claim projects handled directly with insurance?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We provide adjuster-ready photos, scope, and pricing as part of the claim packet, and most McKinney claim projects wrap within four to six weeks of approval.</p>
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
            <p className="text-gray-600 leading-relaxed text-center">We also handle homes in Eldorado Country Club, Auburn Hills, Mallard Lakes, and the newer Trinity Falls expansion with the same line-item quoting and two-person crew approach. If you live anywhere in city limits and want a no-obligation quote, we will be at your home this week with samples, energy data, and a fixed written price that holds for thirty days.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Free McKinney Window Estimate</h2>
          <p className="text-lg text-white/90 mb-10">Call or message us today. A senior estimator will be at your McKinney home within the week with samples, energy data, and a fixed written quote.</p>
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
