import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specialty Shape Windows Frisco TX | Custom Architectural Shapes | Window Replacements of Frisco',
  description: 'Arched, half-round, and trapezoid shapes for Frisco two-story foyers in Stonebriar, Newman Village, and Edgestone at Legacy. Custom builds matched exactly.',
  keywords: 'specialty shape windows Frisco TX, arched windows, half round windows, custom shape windows',
}

export default function SpecialShapeWindowsPage() {
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
            <li className="text-navy-700 font-medium">Specialty Shape Windows</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/windows/special-shape-windows-frisco-tx.jpg)' }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Specialty Shape Windows in Frisco, TX</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Specialty shape windows — arched, half-round, octagon, trapezoid, full circle, and custom geometries — give Frisco homes their architectural character. They appear over front entries, in two-story foyer gables, above stair landings, and as accent windows in master bedroom corners. Replacing them is more involved than a standard rectangular window because each shape is custom-fabricated to the exact opening dimensions. We work with Andersen, Pella, Marvin, and JELD-WEN to specify, measure, and install every shape Frisco architecture demands.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Specialty Shapes in Frisco Homes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Arched (Eyebrow)</h3>
              <p className="text-gray-600 leading-relaxed">Half-circle or eyebrow arches over rectangular pictures or above front entries. The signature transom shape on Frisco production homes built between 1995 and 2010 in The Trails, Heritage Lakes, and Plantation Resort.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Half-Round</h3>
              <p className="text-gray-600 leading-relaxed">A perfect half-circle. Often used solo over a front door as a transom, or stacked over a pair of double-hungs in formal living rooms.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Trapezoid</h3>
              <p className="text-gray-600 leading-relaxed">Angled-top units that fill the gable end of a vaulted-ceiling room. Common in two-story Frisco great rooms and master bedrooms with cathedral ceilings.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Octagon</h3>
              <p className="text-gray-600 leading-relaxed">Eight-sided accent windows. Frequently appear in stair-landing positions on the front elevation of Frisco brick traditionals.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Full Circle</h3>
              <p className="text-gray-600 leading-relaxed">Perfect-circle accent windows. Used as architectural focal points on front gables, in dining rooms, or as transom elements.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Custom Shapes</h3>
              <p className="text-gray-600 leading-relaxed">Pentagons, hexagons, quarter-rounds, and one-off geometries for custom Frisco builds. Marvin Signature and Andersen A-Series accept full custom dimensioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Measurement and Fabrication Process</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specialty shape replacement starts with field measurement. Each shape requires more than the standard width-and-height dimensions of a rectangular window. Arched units need radius measurements, spring-line offsets, and chord lengths. Trapezoids need top and bottom widths plus angles. Custom shapes get traced onto a measurement template that ships with the order. We bring laser distance tools, digital protractors, and physical templates to every specialty-shape estimate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once measurements are confirmed, the unit is custom-fabricated at the factory. Lead times are longer than standard rectangular shapes — typically eight to twelve weeks for specialty geometry on premium product lines. We schedule the install date the day the order ships and coordinate with you on staging and access.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Installation requires more skill than a standard window. The custom-fabricated frame must seat correctly into the existing opening with proper flashing, sealing, and structural support. Half-round and full-round units need particular care on the curved sealant joint at the perimeter. Trapezoids require shimming on the angled sides to maintain square-true alignment. Our installers have set hundreds of specialty units across Frisco and bring the right tools and experience to each install.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For HOA-governed Frisco neighborhoods, we coordinate with architectural review boards on shape, finish, and grid pattern. Most Frisco master-planned communities require ARB approval on specialty replacements, and we handle the paperwork as part of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Glass and Grid Considerations</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              Specialty shapes use the same glass packages as rectangular windows — soft-coat triple-silver Low-E with argon fill is our default for Frisco. The thermal performance numbers are equivalent to a same-area picture window. The only difference is fabrication cost and lead time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Grids on specialty shapes are where things get interesting. A half-round can use radial grids that fan out from a center point at the spring line, sunburst grids that radiate from a single focal point, or no grids at all. Arched units typically use radial or fan grids that follow the curve. Trapezoids use angled grids that match the geometry. We bring grid samples and full-scale renderings to the estimate so you can see exactly how each pattern will read on your home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For Frisco homes in HOA-governed master-planned communities — Stonebriar, Phillips Creek Ranch, The Trails, Heritage Lakes, Newman Village — the original specialty shapes were specified by the builder and architectural review board. We replicate the original grid pattern unless the homeowner wants to change it, in which case we walk the alternative through ARB approval.
            </p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Pricing and Lead Times for Specialty Shapes</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Specialty shape windows cost two to four times the price of an equivalent rectangular unit because of the custom fabrication. A standard 4-by-4 picture window runs around $1,200 to $1,600 installed; the same square footage as a half-round or arched specialty runs $2,800 to $5,500 depending on brand and glass. Lead times are eight to twelve weeks. We provide line-item written quotes that hold for 30 days and include the templating, fabrication, install, and trim work.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Frisco architectural review boards almost always want to see specialty-shape replacements match the original shape and grid pattern unless the homeowner is doing a comprehensive facade refresh. We pull the original spec from builder records when possible, photograph existing units before removal, and reproduce the original sash proportions on the new install. This is one area where attention to detail separates a quality install from a band-aid replacement.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Frisco specialty-shape projects almost always need ARB approval and we handle the paperwork. The original specialty shapes on production homes were spec&apos;d by the architectural review board to maintain visual rhythm across the neighborhood. Replacement-in-kind is generally pre-approved; substantial style changes (going from arched to flat, for instance) require board review. We pull the original spec, photograph existing units, and submit the application paperwork as part of the project.</p>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Replace Specialty Shape Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">Schedule a free in-home estimate. We bring laser tools, templates, and physical samples for every shape your home demands.</p>
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
