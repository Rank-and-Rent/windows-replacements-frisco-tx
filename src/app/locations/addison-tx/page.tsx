import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Addison TX | Residential Windows | Window Replacements of Frisco',
  description: 'Window replacement and installation in Addison, TX. Energy-efficient vinyl, fiberglass, wood, and Fibrex windows for Addison homes. Free in-home estimates.',
  keywords: 'window replacement Addison TX, Addison window installation, residential windows Addison',
}

export default function AddisonPage() {
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
            <li className="text-navy-700 font-medium">Addison</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-addison-tx-3.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Addison, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Addison homeowners with full-service window replacement, installation, and repair. From the patio homes off Belt Line Road to the executive properties tucked along Vitruvian Park and Addison Circle, we deliver Andersen, Pella, Marvin, and JELD-WEN windows that handle North Texas heat, hail, and wind without compromise. Free in-home estimates and no-obligation pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Request Quote</Link>
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Addison Homeowners Replace Their Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">A Compact Town with Diverse Housing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Addison may only span 4.4 square miles, but inside its borders sits one of the most varied housing inventories in North Texas. Mid-rise condos and lock-and-leave townhomes around Addison Circle attract young professionals who travel often. The traditional ranches off Inwood and Marsh date to the 1960s and 1970s and frequently still wear their original aluminum single-pane windows. Newer luxury builds in Vitruvian Park and Beverly Hills South push the price ceiling and demand premium hardware. Each of those segments comes to us with different goals, and we tailor every Addison project accordingly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most calls we get from Addison fall into three buckets: failed insulated glass that has fogged between the panes, builder-grade vinyl that has chalked and warped after fifteen Texas summers, or a homeowner preparing to list and wanting a clean, modern facade. We walk every opening, measure rough openings, and recommend the configuration that fits the home and the budget rather than upselling features the property does not need.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Climate-Specific Glass Packages</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Addison sits in the same heat island as the rest of the Dallas-Fort Worth metroplex, with summer afternoons that drive west-facing rooms past 90 degrees indoors when the glass is wrong. We specify Low-E coatings tuned for North Texas — typically a soft-coat triple-silver Low-E paired with argon fill — that cuts solar heat gain by 60 to 70 percent while still letting in plenty of visible light. Spring storm season also matters in Addison, where stout downpours and pea-to-quarter-size hail are an annual event. Laminated glass options for west-facing elevations add real impact resistance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For Addison condo and townhome owners, we also handle association approvals. We pull color and finish samples that match HOA palettes, write up the spec sheet for the architectural review board, and schedule installs around shared-wall noise rules. The goal is a replacement that improves comfort and resale value without creating friction with neighbors or the management company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Our Process from Estimate to Final Walkthrough</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">In-Home Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                A senior estimator visits your Addison home, takes precise measurements, photographs each opening, and listens to the issues you are trying to solve — drafts, condensation, fading hardwoods, road noise from the Tollway. We then build a written quote you can take to other contractors for comparison.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Manufacturer-Direct Ordering</h3>
              <p className="text-gray-600 leading-relaxed">
                As an authorized dealer for Andersen, Pella, Marvin, and JELD-WEN, we order directly from the factory with no middleman markup. Lead times in the current cycle run four to eight weeks depending on series and configuration, and we keep you updated at every milestone.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Install Crews</h3>
              <p className="text-gray-600 leading-relaxed">
                Every Addison job runs with a lead installer and one apprentice, never a rotating crew. They arrive in branded vehicles, lay drop cloths, and replace windows one opening at a time so your home is never left exposed overnight. Most whole-home projects wrap in two to four days.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Proper Flashing and Sealing</h3>
              <p className="text-gray-600 leading-relaxed">
                Texas wind-driven rain finds every shortcut. Our installs use butyl flashing tape at the sill pan, low-expansion foam around the frame, and silicone sealants rated for our UV exposure. We test every window for smooth operation and weathertight closure before moving on.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Cleanup and Haul-Away</h3>
              <p className="text-gray-600 leading-relaxed">
                Old sashes, frames, and packaging leave with us the same day. We vacuum interior work zones, wipe down sills and tracks, and walk you through every opening so you can verify locks, tilt operation, and screen fit before signing off.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Warranty Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                We register manufacturer warranties in your name on the day of completion and back our installation labor with our own multi-year guarantee. Service calls in Addison are typically scheduled within a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Popular Window Styles in Addison</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/windows/double-hung-windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Double-Hung Windows</h3>
              <p className="text-gray-600">The classic choice for the brick traditionals along Marsh Lane and Inwood, with tilt-in sashes that make second-story cleaning safe.</p>
            </Link>
            <Link href="/windows/casement-windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Casement Windows</h3>
              <p className="text-gray-600">Crank-out casements pair beautifully with the modern facades around Vitruvian Park and seal tighter than any other operating style.</p>
            </Link>
            <Link href="/windows/sliding-windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Sliding Windows</h3>
              <p className="text-gray-600">Horizontal sliders fit wide bedroom and breakfast-nook openings in Addison ranches without visual clutter.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Addison Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long does a typical Addison window project take?</h3>
              <p className="text-gray-600 leading-relaxed">Most full-home replacements in Addison take two to three working days for 16 to 24 openings. Townhome and condo projects are usually one to two days. Custom shape, oversized, and architectural windows may add a half-day per unit for proper installation and trim work.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What about HOA approvals in Addison Circle and Vitruvian Park?</h3>
              <p className="text-gray-600 leading-relaxed">Most multifamily and master-planned communities in Addison require architectural review board sign-off on exterior changes. We provide finish samples, manufacturer cut sheets, and the spec narrative the board needs. We have walked applications through the Addison Circle, Vitruvian Park, and several smaller HOAs successfully and know the typical turnaround.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are insurance claims handled directly?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. After hail or wind events we coordinate with your carrier — providing photos, scope, and impact-rated glass options that meet adjuster requirements. Our written estimates use the same line-item format adjusters expect, which speeds approvals.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What brands do you recommend for Addison homes?</h3>
              <p className="text-gray-600 leading-relaxed">It depends on the home. Older brick traditionals usually do well with Andersen 400 Series or JELD-WEN Siteline at the value-to-quality balance. Modern Vitruvian Park and Beverly Hills South builds frequently move to Pella Reserve, Marvin Signature, or Andersen A-Series for the larger glass and dark exterior finishes those facades require. We bring samples from all four during the estimate.</p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Planning a window project in Addison usually starts with a phone call. We will walk through what you are trying to solve — fading hardwoods, hot rooms in summer, road noise from the Tollway, condensation on January mornings — and schedule the in-home estimate at a time that fits your week. The estimator brings physical samples of frame finishes, glass packages, and grid options so you can hold the choices in your hand rather than guessing from a catalog. Most Addison homeowners walk away from the visit with a clear understanding of which window fits and why. We follow up with a written line-item quote within 48 hours that you can compare to other contractors. There is no high-pressure sales pitch, no kitchen-table financing close, no scarcity tactics. The same crew that we send to a $12,000 patio-home project shows up at a $40,000 Vitruvian Park project. We treat every Addison home like the homeowner is going to recommend us, because in this business referrals are the only marketing that consistently pays.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you handle financing for Addison projects?</h3>
              <p className="text-gray-600 leading-relaxed">We partner with national lenders that offer 12-, 36-, 60-, and 84-month plans. We do not earn commissions on financing, so the recommendations are unbiased. Most Addison homeowners pay through standard channels — check, ACH, or credit card on completion.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you match the existing brick or trim color exterior on Addison facades?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We bring physical finish samples from each manufacturer&apos;s palette and hold them against the brick or stucco at the estimate. Custom colors are available on most premium lines for an upcharge if no stock finish matches.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are there permits required in Addison?</h3>
              <p className="text-gray-600 leading-relaxed">The town generally requires permits for full-frame replacement and structural work, not for like-for-like insert replacement. We pull permits where required and include the fee in the line-item quote.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on labor, in addition to the manufacturer warranty on the product. Service calls in Addison are typically scheduled within a week of the report.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready for a Free Addison Window Estimate?</h2>
          <p className="text-lg text-white/90 mb-10">
            Call or message us today. A senior estimator will be at your Addison home within the week with samples, energy data, and a written quote that holds for 30 days.
          </p>
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
