import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Bedford TX | Window Installation | Window Replacements of Frisco',
  description: 'Window replacement and installation in Bedford, TX. Energy-efficient vinyl, fiberglass, and Fibrex windows for HEB-area homes. Free estimates.',
  keywords: 'window replacement Bedford TX, Bedford window installation, HEB windows',
}

export default function BedfordPage() {
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
            <li className="text-navy-700 font-medium">Bedford</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-bedford-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Bedford, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Bedford homeowners across the HEB corridor with expert window replacement and installation. From the brick traditionals of Stonegate to the established neighborhoods around Meadow Park and Bedford Heights, we deliver Andersen, Pella, Marvin, and JELD-WEN windows that hold up to North Texas heat and storm season. Free in-home estimates and clear, written pricing.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">A Mid-Cities Town with Older Glass</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bedford developed largely between the late 1970s and the late 1990s, which means most homes in the city are now between 25 and 50 years old. The original aluminum-frame and early dual-pane vinyl windows that came with those homes have outlived their useful service life. Seal failures, cloudy glass, and chalky frames are the standard complaints we hear from homeowners off Cummings Drive, Bedford Road, and Murphy Drive. Replacement windows are the single most impactful upgrade for these mid-cities neighborhoods.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team has worked Bedford for years and knows the rough-opening quirks of each era of construction. We work fast without skipping flashing, sealing, or finish-carpentry steps that lesser crews cut to save time. Most Bedford whole-home projects are wrapped in two to three days.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Energy savings are a major motivator. Bedford summers run hot and humid, with afternoon highs above 100 degrees from June through September. Aging windows leak conditioned air around the frame and let solar heat pour through inefficient single-pane glass. Replacing those openings with modern Low-E and argon insulated glass typically cuts cooling load by 25 to 30 percent — a real, measurable line item on your Oncor or TXU bill.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bedford also has a strong refinance and resale market thanks to its location between DFW Airport and the Mid-Cities employment centers. Homes with new windows show better, appraise higher, and clear inspection without the typical glazing and sash flags.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Built for Bedford Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Heat-Optimized Glass</h3>
              <p className="text-gray-600 leading-relaxed">
                We default to soft-coat triple-silver Low-E coatings tuned for the North Texas sun, paired with argon-filled insulating glass. Solar heat gain coefficients drop below 0.25 while keeping interiors bright.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Hail-Ready Frames</h3>
              <p className="text-gray-600 leading-relaxed">
                Fusion-welded vinyl, fiberglass, and Fibrex frames hold up to wind-driven debris better than the snap-together aluminum and old vinyl found in many Bedford homes. Laminated glass options are available for west-facing elevations.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Airport Noise Reduction</h3>
              <p className="text-gray-600 leading-relaxed">
                Bedford sits in the flight path of DFW Airport. Laminated glass and asymmetric pane thickness can knock 4 to 8 STC points off perceived noise — a real difference in master bedrooms and home offices.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Direct Manufacturer Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                We are an authorized Andersen, Pella, Marvin, and JELD-WEN dealer. There is no big-box markup. Bedford homeowners get factory pricing plus expert installation in a single line item.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Two-Person Crews</h3>
              <p className="text-gray-600 leading-relaxed">
                Each Bedford install runs with a lead and apprentice, never a rotating crew. They protect floors, replace one opening at a time, and walk every window with you before signing off.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Workmanship Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                Our written installation warranty is in addition to the manufacturer warranty. If something is off, we come back. Bedford service calls typically scheduled within a week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Bedford Neighborhoods We Serve</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600 mb-6">
              <li>• Stonegate</li>
              <li>• Bedford Heights</li>
              <li>• Meadow Park</li>
              <li>• Brookside</li>
              <li>• Forest Ridge</li>
              <li>• Bedford Oaks</li>
              <li>• Stonegate East</li>
              <li>• Central Bedford</li>
              <li>• HEB Corridor</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-center">
              If you live anywhere in 76021 or 76022, we will be at your home within the week. Call us or request an online estimate to get started.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Bedford Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">A handful of practical questions come up on most Bedford estimates. Lead time is the first. Andersen and JELD-WEN orders are running four to six weeks at the moment, Pella five to seven, Marvin Signature eight to ten weeks if dark exterior finishes are involved. We schedule the install on the day your order ships from the factory.</p>
            <p className="text-gray-600 leading-relaxed">Disruption is the second concern. A typical Bedford whole-home replacement is sixteen to twenty-two openings completed in two to three days with crews working room by room. Furniture gets pulled off the wall, drop cloths go down, and the new window is staged and ready before the old one comes out. The home is never left exposed at night.</p>
            <p className="text-gray-600 leading-relaxed">Price comes up on every visit. Our quotes are line-item — each window listed by location, brand, series, glass package, and trim work, with installation and haul-away rolled into the unit price. The total at the bottom of the page is the total you pay. The quote holds for 30 days while you collect bids.</p>
            <p className="text-gray-600 leading-relaxed">A few Bedford-specific items also come up. Older homes here often have settling cracks in the brick or stucco, and we plan for proper resealing of the exterior trim — using compatible sealants that bond to the existing substrate rather than peeling off in eighteen months. Several Bedford neighborhoods have HOAs with finish-color requirements, and we provide samples from each manufacturer&apos;s palette to match. And for homes near 121 or 183, we recommend a laminated glass upgrade on the road-facing elevation for sound — the difference is meaningful in master bedrooms and home offices.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Starting a Bedford window project is straightforward. Call or use the contact form and we will schedule the in-home estimate within the week. Our estimators bring physical samples — frame finishes, glass packages, grid options — so you can compare in your own light rather than guessing from product photography. We measure every opening, photograph conditions, and walk through the issues you want solved. The written quote arrives within 48 hours, broken out by line item. If you proceed, we order the same day. Install runs two to three days for a typical Bedford whole-home project, with crews working room by room and a daily progress text so you always know where things stand. We register the manufacturer warranty in your name on completion day and back the install labor with our own multi-year warranty. Service calls in Bedford are usually scheduled within a week. The reason Bedford homeowners come back to us — and refer us — is that the experience matches the marketing. The price on the quote matches the price on the invoice, the crew that shows up is the crew that finishes, and the windows we install actually solve the problem you called us about in the first place.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing for Bedford projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — 12- to 84-month plans through national lenders. We do not earn commission on financing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How does insurance handle hail damage on older Bedford windows?</h3>
              <p className="text-gray-600 leading-relaxed">Most carriers cover replacement when frames or seals are damaged. We provide adjuster-ready photos, scope, and pricing as part of the claim packet.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you replace just the foggy panes rather than the whole window?</h3>
              <p className="text-gray-600 leading-relaxed">Sometimes. If the frame is in good shape, glass-pack replacement can work. For older Bedford homes the frames are usually past saving and full replacement is the better long-term value.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How long is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, in addition to the manufacturer warranty on the product.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Schedule Your Free Bedford Estimate</h2>
          <p className="text-lg text-white/90 mb-10">A senior estimator will walk every opening, recommend the right brand and glass package, and leave you with a fixed written quote that includes everything.</p>
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
