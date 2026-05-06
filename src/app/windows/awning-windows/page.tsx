import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awning Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Awning windows for Frisco bathrooms, basements, and above-counter kitchen ventilation. Top-hinged so spring storms cannot drive rain in. Hail-rated frames.',
  keywords: 'awning windows Frisco TX, top hinged windows, awning window installation, kitchen awning windows',
}

export default function AwningWindowsPage() {
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
            <li className="text-navy-700 font-medium">Awning Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/awning-windows-frisco-tx.webp)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Awning Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Awning windows are hinged at the top and crank outward from the bottom, creating a built-in rain shield over the opening. They are the most weather-tolerant operable window style available, which makes them a regular pick for Frisco kitchens, master bathrooms, mudrooms, garage hallways, and the high transom positions above larger picture windows. We install them as part of full-home replacements and as targeted upgrades from Andersen, Pella, Marvin, and JELD-WEN.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Frisco Homeowners Choose Awning Windows</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Ventilation in the Rain</h3>
              <p className="text-gray-600 leading-relaxed">Frisco gets aggressive spring storms with horizontal rain. Awning sashes deflect water away from the opening, so you can leave them cracked overnight without worrying about a wet sill or floor.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Tightest Weather Seal</h3>
              <p className="text-gray-600 leading-relaxed">When closed, awning windows compress against four-sided weatherstripping under positive pressure from the cam-action lock. The seal beats every other operable style, including casement.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">High-Wall Daylighting</h3>
              <p className="text-gray-600 leading-relaxed">Place awnings high on a wall and you get natural light and ventilation without losing privacy. Common in Frisco master baths, laundry rooms, and the upper transom positions in two-story foyers.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Stack Above Picture Windows</h3>
              <p className="text-gray-600 leading-relaxed">Most Frisco homes pair fixed picture windows over kitchen sinks or in great rooms with awnings stacked above them. The picture frames the view, the awning provides operability without breaking the sightline.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient by Design</h3>
              <p className="text-gray-600 leading-relaxed">The compression seal and the typical small-to-medium opening size make awnings one of the most thermally efficient styles. U-factor below 0.28 is routine on premium lines with triple-silver Low-E and argon.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Hardware That Lasts</h3>
              <p className="text-gray-600 leading-relaxed">Modern awning hardware uses sealed-bearing crank operators and dual cam locks that last the life of the window. We service them on-site if maintenance is needed years down the road.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Where Awning Windows Work Best in Frisco Homes</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Kitchens and Wet Rooms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">An awning over the kitchen sink is one of the most common Frisco awning placements. The window vents cooking moisture and steam without admitting rain, and the crank-out operation is easy to manage even with wet hands. Master bathrooms get the same benefit — humidity escapes, privacy stays intact because the unit sits high on the wall, and the storm-proof design means you can leave it cracked while running.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Garage Hallways and Mudrooms</h3>
              <p className="text-gray-600 leading-relaxed">The transition zones between garage and house in Frisco production homes — Phillips Creek Ranch, Lone Star Ranch, The Trails — are perfect awning spots. Vent the room without compromising security, since the small opening dimension and high mounting position are unattractive to break-in attempts.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Two-Story Foyers and Great Rooms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Many Frisco homes built since 2005 have stacked picture windows on the front and rear elevations of two-story rooms. We install awning operables at the top of those stacks to vent rising hot air during summer afternoons. It is one of the best passive cooling strategies available for the high-ceiling rooms common in Newman Village, Stonebriar, and Edgestone at Legacy.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Frisco Lakes and Active-Adult Homes</h3>
              <p className="text-gray-600 leading-relaxed">For Frisco Lakes Del Webb residents, awning windows are a comfort upgrade. The crank operator requires far less force than a double-hung sash, which matters for aging hands. We install with low-force operators and large pulls so operation stays easy long-term.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Best Awning Window Brands for Frisco</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Andersen 400 Series and A-Series</h3>
              <p className="text-gray-600 leading-relaxed">Andersen awnings come standard with their proprietary cam-action lock, dual-action operator, and low-conductivity weatherstripping. The A-Series adds a Fibrex composite frame option that holds up exceptionally well in Frisco UV.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Pella Lifestyle and Reserve</h3>
              <p className="text-gray-600 leading-relaxed">Pella awning windows feature their proprietary EnduraClad protection and integrated insect screens that retract into the head jamb when not in use. Reserve adds simulated divided lite grids for traditional facades.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Marvin Elevate and Signature</h3>
              <p className="text-gray-600 leading-relaxed">Marvin awning hardware is the smoothest in the industry — sealed bearings, multi-point locking on larger units, and beautifully fitted hinges. The Signature line offers full custom dimensioning for non-standard Frisco openings.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">JELD-WEN Siteline and Premium Vinyl</h3>
              <p className="text-gray-600 leading-relaxed">JELD-WEN awnings deliver excellent value with their AuraLast wood treatment on the Siteline line and fusion-welded multi-chambered vinyl on the Premium Vinyl line. Both ship with sealed-bearing crank operators standard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions About Awning Windows</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How wide can an awning window be?</h3>
              <p className="text-gray-600 leading-relaxed">Most awning windows max out at 36 inches wide for proper operator support. Beyond that the sash sag and weatherstripping wear become issues. For wider runs we install awnings as a multi-unit gang — two or three sashes side by side in a single mulled frame.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can awning windows have grids?</h3>
              <p className="text-gray-600 leading-relaxed">Yes — internal grilles between the glass, surface-applied grids, and simulated divided lite grids are all available on premium product lines from Andersen, Pella, Marvin, and JELD-WEN. SDL grids deliver the most authentic look for traditional Frisco facades.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do awning windows have screens?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. The screen mounts on the interior side of the window since the sash opens outward. Pella offers a retractable screen option that disappears into the head jamb when not in use.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Are awning windows good for egress?</h3>
              <p className="text-gray-600 leading-relaxed">Generally no — awnings cannot meet bedroom egress code (clear opening of 5.7 square feet) at typical sizes. For bedrooms we recommend casement or double-hung styles. Awnings work well in non-egress positions like bathrooms, kitchens, and above other operating windows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Awning Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">A senior estimator will measure every opening, walk you through brand and glass options, and leave you with a fixed written quote.</p>
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
