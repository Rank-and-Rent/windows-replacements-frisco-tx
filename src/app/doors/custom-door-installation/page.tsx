import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Custom Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Custom doors for Newman Village, Eldorado Country Club, and Edgestone at Legacy estates. Mahogany, knotty alder, bronze-clad; oversized; ARB-submission ready.',
  keywords: 'custom door installation Frisco TX, custom doors, bespoke doors, Marvin custom doors, custom entry doors',
}

export default function CustomDoorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="bg-stone-100 py-4 pt-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ol className="flex items-center space-x-2 text-sm text-navy-500">
              <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
              <li>/</li>
              <li><Link href="/doors" className="hover:text-navy-700">Doors</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Custom Door Installation</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/doors/custom-doors-frisco-tx.webp)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Custom Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Design the perfect door for your unique style. We create fully customized doors with unlimited options in materials, finishes, and hardware.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                  Call (469) 908-2440
                </a>
                <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide text-center hover:bg-gray-100 transition-colors">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 prose-elegant">
                <h2 className="text-2xl lg:text-3xl font-serif text-navy-600 mb-6">
                  Bespoke Custom Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  When standard door options do not meet your vision, custom doors provide the answer. Whether you are looking to match historic architectural details, create a dramatic statement piece, or simply need a door that fits a non-standard opening, our custom door program delivers exactly what you envision. Working with premium manufacturers like Marvin, we can create doors that are truly one-of-a-kind.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Unlimited Design Possibilities
                </h3>
                <p className="text-gray-600 mb-6">
                  Custom doors offer virtually unlimited design options. Choose from dozens of wood species including mahogany, walnut, oak, and exotic hardwoods. Select from hundreds of stain colors and paint finishes. Design unique glass configurations with decorative patterns, bevels, or custom art glass. Every element can be tailored to your exact specifications.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Non-Standard Sizes and Shapes
                </h3>
                <p className="text-gray-600 mb-6">
                  Many Frisco homes, particularly older or architecturally distinctive properties, have door openings that do not match standard sizes. Custom doors solve this problem perfectly. We can create doors for arched openings, extra-tall entries, oversized grand entrances, or any other non-standard configuration your home requires.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Premium Materials and Craftsmanship
                </h3>
                <p className="text-gray-600 mb-6">
                  Custom doors represent the pinnacle of door craftsmanship. Solid wood construction provides unmatched beauty and durability. Hand-selected lumber ensures consistent grain patterns and color. Expert joinery techniques create doors that maintain their integrity for generations. Premium hardware complements the exceptional quality of custom door construction.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Historic Restoration and Matching
                </h3>
                <p className="text-gray-600 mb-6">
                  For Frisco homeowners restoring historic properties or adding to existing architectural styles, custom doors can be designed to perfectly match original details. We can replicate historic hardware, glass patterns, and construction techniques while incorporating modern performance features like improved insulation and security hardware.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Custom Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Unlimited design options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Premium wood species</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Custom sizes and shapes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Decorative glass options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Premium hardware selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Historic replication available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready for a custom door? Contact us for a free design consultation.
                  </p>
                  <a 
                    href="tel:469-908-2440" 
                    className="block w-full bg-white text-navy-600 text-center py-3 font-medium rounded hover:bg-gray-100 transition-colors mb-3"
                  >
                    (469) 908-2440
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-white text-white text-center py-3 font-medium rounded hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does it take to get a custom door?</h3>
                <p className="text-gray-600">Custom door lead times vary by manufacturer and complexity, typically ranging from 6-12 weeks. We provide accurate timelines during your design consultation.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How much do custom doors cost?</h3>
                <p className="text-gray-600">Custom door pricing with installation depends on size, materials, and design complexity. Everything is priced including installation. Entry-level custom doors start around $2,500-$4,000 with installation, while premium designs can range from $5,000-$15,000 or more with installation. We do not sell doors without installation.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Can you match my existing architectural style?</h3>
                <p className="text-gray-600">Yes, we specialize in creating custom doors that complement any architectural style. Our design team works with you to capture the details that make your home unique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
                <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Custom Door Projects in Frisco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Custom doors come up most often when a Frisco homeowner wants something that does not exist in any catalog. Custom widths beyond the standard 36 or 42 inches, custom heights for 9-foot or 10-foot ceilings, custom species like mahogany or knotty alder, custom glass configurations, custom hardware, custom finishing — all of it can be done. Andersen A-Series, Pella Reserve, and Marvin Signature all accept full custom orders, and we work with each manufacturer to translate your vision into shop drawings, factory specifications, and installation. Lead times for custom doors run ten to sixteen weeks because every component is built to order.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Where Custom Doors Make Sense</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Custom doors are a fit for high-end Frisco custom homes — Newman Village, Edgestone at Legacy, Stonebriar, and the larger Hollyhock builds. They also come up on remodel projects where the homeowner is upgrading the front entry to match a new architectural style. We have done speakeasy-style entries, double-arched front doors with iron and glass, and 10-foot wide pivot doors. The custom path is more expensive than catalog product — typically 60 to 150 percent more — but the result is a door that exists nowhere else and reads as authentically architectural rather than as a stock pull from a builder catalog.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Why Custom Doors Need Specialist Installation</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Custom doors weigh significantly more than catalog product, often 200 to 400 pounds for a single panel and double that for a pair. The hinges, jamb structure, and operating hardware all have to be specified for the actual weight rather than installed with stock hardware. The rough opening must be built or modified to exact dimensions, with proper headers and flashing details. Our installers have hung custom Frisco doors weighing more than 600 pounds with proper lift equipment and structural support. Smaller crews and general contractors regularly damage custom doors during install — we do not.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Frisco custom door projects start with shop drawings rather than catalogs. We meet on-site, walk through the architectural intent, photograph the existing opening and surrounding facade, and translate the homeowner&apos;s vision into Andersen A-Series, Pella Reserve, or Marvin Signature factory specifications. The shop drawings come back from the factory for sign-off before fabrication begins. Lead times run ten to sixteen weeks for true custom orders. Most Frisco custom door projects are part of a broader facade refresh that includes new windows on the front elevation as well.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for a Custom Door?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free design consultation and estimate on your custom door project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                Call (469) 908-2440
              </a>
              <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
