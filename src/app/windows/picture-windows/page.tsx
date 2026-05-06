import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picture Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Picture window installation and replacement in Frisco, TX. Fixed-pane windows for unobstructed views and maximum daylight. Andersen, Pella, Marvin, JELD-WEN.',
  keywords: 'picture windows Frisco TX, fixed windows, picture window installation, large fixed windows',
}

export default function PictureWindowsPage() {
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
            <li className="text-navy-700 font-medium">Picture Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/picture-windows-frisco-tx.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Picture Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Picture windows are fixed (non-operating) units designed to frame a view and pull in maximum daylight. Frisco homes use them across two-story foyers, kitchen sink walls, master bedroom corners, and the rear elevations of golf-course and greenbelt homes in Stonebriar, Eldorado, and Newman Village. We install Andersen, Pella, Marvin, and JELD-WEN picture windows up to oversized custom dimensions, with the structural framing and proper Low-E glass to handle Frisco heat.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Choose Picture Windows</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Maximum Glass Area</h3>
              <p className="text-gray-600 leading-relaxed">No operating hardware, no meeting rails, no jamb structure for movement — picture windows put more glass in the same opening than any operable style.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Best Energy Performance</h3>
              <p className="text-gray-600 leading-relaxed">Without operating seals, the only thermal weak link is the glass itself. Picture windows routinely deliver U-factors below 0.25 with quality Low-E argon glazing.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lowest Cost Per Square Foot</h3>
              <p className="text-gray-600 leading-relaxed">No hardware, no operating mechanism, simpler frame construction. Picture windows are the most affordable way to fill a large wall with glass.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Pair with Operables</h3>
              <p className="text-gray-600 leading-relaxed">Most Frisco picture windows are paired with operable casements or awnings on the sides or above for ventilation. The picture frames the view, the operables provide airflow.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Customizable Shapes</h3>
              <p className="text-gray-600 leading-relaxed">Picture units accept custom shapes — arched tops, half-rounds, octagons, trapezoids — that operable units cannot. They are the natural choice for architectural specialty openings.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Oversized Capability</h3>
              <p className="text-gray-600 leading-relaxed">Single picture units can run to 8 feet wide and 10 feet tall on premium product lines. Marvin Signature and Andersen A-Series both ship custom dimensions for the largest Frisco great-room openings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Picture Window Placements in Frisco</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Two-Story Foyers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stacked picture windows on the front elevation — typically a fixed lower unit with a transom or arched picture above — are signature elements in Frisco production homes built since 2000. We replace these as part of full-home projects, matching the original sash proportions and adding modern triple-silver Low-E to control the morning sun.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Great Room Rear Elevations</h3>
              <p className="text-gray-600 leading-relaxed">Big rear-facing picture walls on golf-course or greenbelt-facing Frisco homes are some of the most beautiful rooms we work in — and the most thermally challenging. We pair laminated triple-silver Low-E glass with proper structural framing to control solar gain without losing the view.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Kitchen Sink Walls</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A picture window over the kitchen sink, framed by side casements or awnings, is one of the most popular Frisco kitchen remodel choices. The picture pulls in daylight at the workstation while the operables provide ventilation for cooking moisture.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Master Suite Corners</h3>
              <p className="text-gray-600 leading-relaxed">Corner picture windows that wrap two walls of a master bedroom are an upscale design element in Newman Village, Edgestone at Legacy, and Hollyhock custom homes. We engineer them with structural mullions for proper load support without breaking the visual line.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Picture Window Best Practices for Frisco Heat</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              Big picture windows can become big heat sources in North Texas. The same square footage of glass that frames a beautiful view also carries summer solar gain into the room. Specifying the right glass package is critical. We default to soft-coat triple-silver Low-E with argon fill, which drops solar heat gain coefficients below 0.25 while keeping visible light transmission above 0.50. For west and southwest exposures, we layer in laminated glass — same SHGC, plus impact resistance and UV blocking that protects hardwood floors and area rugs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Thermal expansion is also a real consideration on oversized picture units. Quality manufacturers — Andersen A-Series, Pella Reserve, Marvin Signature — engineer the frame and glazing system to handle the differential expansion between the glass and frame in 110-degree afternoon heat. Cheap product lines crack seals or develop stress fractures over time. We only install premium-tier picture units in the oversized configurations these Frisco homes demand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Installation matters as much as product selection. A 6 by 8 foot picture window weighs 250 to 350 pounds and needs proper structural support, lifting equipment, and two or three installers to land safely. Our crews have set thousands of picture windows across Frisco. We use suction lifters, mechanical aids, and careful coordination to land every unit without damage.
            </p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Pairing Picture with Operable Frisco Configurations</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Pure picture windows are rare in Frisco production homes — almost every picture installation pairs with operable units for ventilation. The most common configuration is a large picture in the center with casement or awning flankers on the sides or above. For two-story foyers, picture-over-transom or stacked picture-over-picture is typical. For kitchen sink walls, picture-with-awning-above gives daylight at the work surface and ventilation for cooking moisture. We design the configuration that suits your room rather than ordering a stock pattern that does not fit.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Picture window replacement in Frisco custom homes — Newman Village, Edgestone at Legacy, Stonebriar, Hollyhock — frequently involves oversized custom dimensioning. We measure each opening with a laser, photograph the conditions, and order to exact size. Premium product lines from Andersen A-Series, Pella Reserve, and Marvin Signature accept full custom dimensioning so the unit drops in clean.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Picture windows make sense alone in a few specific Frisco scenarios — over a fireplace where the wall would otherwise be blank, in a windowless bath that gets a small accent for daylight, or as a feature window on a stair landing. Most of the time picture windows pair with operables for ventilation. We design the configuration that fits your specific room rather than ordering a stock pattern.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Picture Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">Schedule a free in-home estimate. We will measure every opening, walk you through brand and glass options, and leave you with a fixed written quote.</p>
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
