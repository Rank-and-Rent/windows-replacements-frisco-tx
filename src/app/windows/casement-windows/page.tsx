import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casement Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Casement window installation and replacement in Frisco, TX. Crank-out side-hinged windows with the tightest seal of any operable style. Andersen, Pella, Marvin, JELD-WEN.',
  keywords: 'casement windows Frisco TX, crank windows, casement window installation, side hinged windows',
}

export default function CasementWindowsPage() {
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
            <li className="text-navy-700 font-medium">Casement Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/casement-windows-frisco-tx.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Casement Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Casement windows are hinged on the side and crank outward like a door. They deliver the tightest weather seal of any operable window style, the cleanest unobstructed view, and the easiest operation for kids and aging hands. Casements are routine in Frisco master suites, kitchens that demand maximum daylight, modern facades in Edgestone at Legacy and Newman Village, and any opening where a tight seal matters more than a traditional sash look. We install Andersen, Pella, Marvin, and JELD-WEN casements as part of full-home replacements and targeted upgrades.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Casements Win on Performance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Tightest Seal Available</h3>
              <p className="text-gray-600 leading-relaxed">The cam-action lock pulls the sash hard against four-sided weatherstripping. Casements regularly test better than double-hungs and sliders for air infiltration — a real factor in Frisco summers and winter cold snaps.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Unobstructed Views</h3>
              <p className="text-gray-600 leading-relaxed">No meeting rail in the middle of the glass. The single sash gives you uninterrupted daylight and outdoor views — particularly meaningful for golf-course and greenbelt-facing Frisco homes in Stonebriar and Eldorado.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Catches Cross-Breezes</h3>
              <p className="text-gray-600 leading-relaxed">A fully open casement acts as a wind scoop, redirecting cross-breezes into the home. For Frisco shoulder seasons (March-April, October-November), that natural ventilation can offset air-conditioning load entirely.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Easy to Operate</h3>
              <p className="text-gray-600 leading-relaxed">A smooth crank handle requires far less force than lifting a 30-pound double-hung sash. Particularly valuable for above-counter kitchen openings and for older homeowners.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Modern Aesthetic</h3>
              <p className="text-gray-600 leading-relaxed">Casements read as contemporary on modern Frisco facades, but they also work on traditional brick homes when paired with simulated divided lite grids. Available in tall narrow proportions that suit modern transitional architecture.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Egress Ready</h3>
              <p className="text-gray-600 leading-relaxed">Most casements meet bedroom egress code (5.7 square feet of clear opening) — a functional advantage over awnings and most sliders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Where Casements Work Best in Frisco Homes</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Master Bedrooms and Egress Bedrooms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Code requires every bedroom to have a window large enough for emergency egress. Casements meet that requirement in a smaller footprint than double-hungs do, which makes them a strong fit for Frisco bedrooms that have limited wall space. The fully open sash also gives clear egress without partial blockage from a meeting rail.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Above Kitchen Counters and Sinks</h3>
              <p className="text-gray-600 leading-relaxed">Crank operators reach across deep counters easily. No more leaning over a sink to lift a stuck sash. Many Frisco kitchen remodels move from old sliders or double-hungs to casements specifically for this reason.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Modern and Transitional Facades</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Edgestone at Legacy, Newman Village, and the newer Hollyhock builds use a contemporary-traditional vocabulary that suits casements perfectly. Tall narrow proportions, dark exterior frames, and clean sightlines that read modern without looking austere. Pair them with simulated divided lite grids for transitional charm.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Two-Story Foyer and Stairwell Openings</h3>
              <p className="text-gray-600 leading-relaxed">For the high openings in two-story foyers and over staircases, casements are easier to operate from below than awnings or sliders. Hand cranks are accessible from a normal reach, and motorized openers are available for the highest positions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Best Casement Brands for Frisco</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Andersen 400 Series and A-Series</h3>
              <p className="text-gray-600 leading-relaxed">Andersen casements come standard with their dual cam-action lock, sealed bearing crank operator, and removable sash for easy cleaning. The A-Series adds Fibrex composite frames that resist Frisco UV without warping.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Pella Lifestyle and Reserve</h3>
              <p className="text-gray-600 leading-relaxed">Pella offers integrated retractable insect screens and motorized casement options for high-mounted units. Reserve adds wood-clad construction with simulated divided lite grids for traditional Frisco facades.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Marvin Elevate and Signature</h3>
              <p className="text-gray-600 leading-relaxed">Marvin casement hardware is best in class — sealed bearings, tight tolerances, smooth multi-point locking. The Signature line accepts full custom dimensioning for non-standard openings.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">JELD-WEN Siteline and Premium Vinyl</h3>
              <p className="text-gray-600 leading-relaxed">JELD-WEN delivers excellent value-tier casements with AuraLast wood treatment on Siteline and fusion-welded multi-chambered vinyl on the Premium Vinyl line. Standard sealed-bearing operators on both.</p>
            </div>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">HOA Approvals on Casement Replacements</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Switching from double-hung to casement on a Frisco home with an existing HOA usually requires architectural review board approval. Most HOAs prefer to maintain the original window style on the front elevation for visual consistency, while accepting style changes on the side and rear elevations. We pull the ARB palette and submit the application paperwork as part of the project — Stonebriar, Phillips Creek Ranch, The Trails, Plantation Resort, Newman Village, and most others. We have walked dozens of these submissions through and know what each board approves.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Casement Hardware and Long-Term Service</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">The crank operator on a casement is the part most likely to need service over the life of the window. Premium product lines from Andersen, Pella, Marvin, and JELD-WEN use sealed-bearing operators rated for thousands of cycles, but eventually they wear. We service casement hardware on-site — typically a 30-minute call to replace a worn operator gear — and most service calls in Frisco are scheduled within a week. The operators are user-serviceable too, with replacement parts available through our shop.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">For Frisco hot-summer cooling load, casements deliver real performance. The four-sided cam-action seal cuts air infiltration to less than 0.20 cfm/ft of frame perimeter — measurably better than double-hungs at the same price point. Pair that with triple-silver Low-E argon glass and you have a configuration that hits Energy Star ratings for North Texas with margin to spare. We recommend casements specifically for west-facing master bedrooms and home offices where the comfort delta is most noticeable.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Casement Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">Schedule a free in-home estimate. We will measure, photograph, and walk you through every brand and configuration.</p>
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
