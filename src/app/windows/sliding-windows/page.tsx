import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sliding Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Horizontal sliders for Frisco Lakes Del Webb patios and Phillips Creek Ranch breakfast nooks. Wide low-profile openings, easy operation, certified install.',
  keywords: 'sliding windows Frisco TX, gliding windows, horizontal sliders, sliding window installation',
}

export default function SlidingWindowsPage() {
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
            <li className="text-navy-700 font-medium">Sliding Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/sliding-windows-frisco-tx.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Sliding Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Sliding windows (also called gliding windows or horizontal sliders) move side-to-side within the frame instead of up-and-down. They are a natural fit for wide low-profile openings — the breakfast nooks, bonus rooms, and bedroom-side openings of Frisco production homes in The Trails, Phillips Creek Ranch, and Heritage Lakes. We install Andersen, Pella, Marvin, and JELD-WEN sliders with smooth glide hardware and modern weatherstripping that solves the air-leakage issues old aluminum sliders are known for.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">When Sliding Windows Make the Most Sense</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Wide Low-Profile Openings</h3>
              <p className="text-gray-600 leading-relaxed">Sliders fit horizontal openings that are wider than they are tall — common in Frisco bedrooms, breakfast nooks, and bonus rooms. No other operable style handles 6 to 8 feet wide as cleanly.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Easy Operation</h3>
              <p className="text-gray-600 leading-relaxed">Modern sliders glide smoothly on roller bearings. Far less force than lifting a tall double-hung sash, and the horizontal motion is easier for kids and aging hands.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Patio Door Pairing</h3>
              <p className="text-gray-600 leading-relaxed">Sliders next to sliding patio doors share visual rhythm and operating logic. The combination is common on Frisco rear elevations and creates a cohesive design.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">No Outward Projection</h3>
              <p className="text-gray-600 leading-relaxed">Casements and awnings open outward into the yard or walking path. Sliders move within the frame — perfect when there is a path, garden bed, or patio cover near the window.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Cost-Effective Wide Spans</h3>
              <p className="text-gray-600 leading-relaxed">A single 8-foot slider with one fixed and one operating sash is cheaper than two casements or two double-hungs covering the same span — and reads cleaner visually.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Modern Sliders Seal Tight</h3>
              <p className="text-gray-600 leading-relaxed">The old aluminum sliders in 1970s and 1980s Frisco homes leaked air constantly. Modern fusion-welded vinyl and fiberglass sliders use updated weatherstripping that delivers performance comparable to double-hungs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Replacing Old Aluminum Sliders</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The 1970s and 1980s Frisco production homes — particularly in older Plano-adjacent neighborhoods that have been annexed into Frisco ISD over the years — frequently came with aluminum-frame sliders that have aged terribly. Single-pane glass, snap-together corners that have separated, and weatherstripping that long ago turned into hard plastic. These windows leak air, conduct summer heat directly into the room, and often will not lock anymore. Replacement is one of the highest-impact upgrades these homes can receive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We replace aluminum sliders with fusion-welded vinyl, Fibrex composite, or fiberglass sliders depending on the homeowner&apos;s budget and aesthetic priorities. The thermal upgrade alone — moving from single-pane aluminum (U-factor around 1.10) to triple-silver Low-E argon vinyl (U-factor around 0.28) — typically cuts cooling load by 30 to 40 percent in the affected rooms.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A common question on slider replacement: should we keep the slider style or change to double-hung or casement? Our default answer is keep what fits the architectural intent. If the original opening was sized for a slider, switching to a different style usually requires structural modification of the rough opening — which costs more than the window. The exception is bedrooms, where bedroom egress code may require a different style if the slider does not have enough clear opening area to meet code (5.7 square feet).
              </p>
              <p className="text-gray-600 leading-relaxed">
                We measure every opening, document any code issues at the estimate, and recommend the right style for the room. No upselling for the sake of margin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Best Slider Brands for Frisco</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Andersen 100 Series and 400 Series</h3>
              <p className="text-gray-600 leading-relaxed">Andersen sliders feature their proprietary smooth-glide track system and four-point compression locking. The 100 Series uses Fibrex composite for excellent thermal performance and durability.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Pella Lifestyle and Reserve</h3>
              <p className="text-gray-600 leading-relaxed">Pella sliders ship with stainless steel rollers and integrated insect screens. Reserve adds wood-clad construction for traditional Frisco facades that need horizontal slider sizes.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Marvin Elevate and Signature</h3>
              <p className="text-gray-600 leading-relaxed">Marvin sliders are precision-engineered with tight tolerances, dual-sealed weatherstripping, and excellent factory finishing on dark exterior options.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">JELD-WEN Premium Vinyl</h3>
              <p className="text-gray-600 leading-relaxed">The strongest value-tier option for Frisco slider replacement. Fusion-welded multi-chambered vinyl, smooth-glide hardware, and Low-E366 triple-silver glass available.</p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Sliding Versus Double-Hung for Frisco Bedrooms</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Bedroom egress code (5.7 square feet of clear opening) is the most common reason we recommend changing from slider to double-hung in Frisco bedroom replacements. A 6-foot-wide single-slider has a clear opening of about 2.7 square feet — well below code. A 6-foot wide double-slider gets to about 4 square feet — still under. A 4-by-4 double-hung clears 5.5 square feet, marginal. The cleanest fix is a casement or a tall double-hung. We measure every bedroom opening at the estimate and flag any code issues so the homeowner can decide on the path forward.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">For Frisco production homes built between 1990 and 2010, slider replacement is a frequent ask. Many of those homes used wide sliders on bedroom side walls and bonus rooms. Modern fusion-welded vinyl or fiberglass sliders solve the air-leakage and operating issues while preserving the original facade rhythm. Lead times run four to six weeks for standard configurations.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">For Frisco bedroom replacements, slider versus double-hung is one of the most common decisions homeowners face. Sliders fit horizontal openings and are easier to operate; double-hungs deliver tilt-in cleaning and meet egress code more easily. We will measure each opening, walk you through the trade-offs, and recommend the configuration that fits your specific room. For most master bedrooms in Frisco production homes, double-hung is the answer; for secondary bedrooms with horizontal openings, slider is fine.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Replace Sliding Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">Schedule a free in-home estimate. We will measure, photograph, and walk you through brand and glass options.</p>
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
