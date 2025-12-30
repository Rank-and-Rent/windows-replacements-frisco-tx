import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Windows Frisco TX | Special Shapes & Sizes | Window Replacements of Frisco',
  description: 'Custom window design and installation in Frisco, TX. Special shapes, oversized units, historic replications, architectural windows. Bring your vision to life.',
  keywords: 'custom windows Frisco TX, special shape windows, arched windows, circular windows, custom sized windows, architectural windows',
}

export default function CustomWindowsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Custom Windows Tailored to Your Vision
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Your home deserves windows as unique as its architecture. Window Replacements of Frisco specializes in custom window solutions—from dramatic geometric shapes to oversized units and historic replications. We transform architectural visions into functional reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Discuss Your Project
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Custom architectural windows in Frisco home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Window Types */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Custom Window Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From subtle modifications to bold architectural statements, we bring decades of custom fabrication experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Special Shapes</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Express your home&apos;s personality with distinctive window shapes. We fabricate arched, circular, elliptical, triangular, trapezoidal, and octagonal windows in virtually any size. These specialty units serve as stunning focal points in entryways, stairwells, and great rooms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Arched and radius-top windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full circle and half-round designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Triangular and peaked units</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Elliptical and oval configurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trapezoidal and pentagon shapes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Non-Standard Sizes</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Standard window sizes don&apos;t fit every opening. We create custom-sized windows for unusual wall dimensions, replacement of vintage windows, or when architectural plans call for specific proportions. Every unit is built to your exact measurements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Oversized picture windows up to 8' x 10'</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extra-narrow units for tight spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom height modifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-unit combinations and transoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Floor-to-ceiling glass walls</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Historic Replications</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Preserving Frisco&apos;s historic homes requires authentic window replications that match original designs while incorporating modern performance. We recreate period-appropriate windows with true divided lites, traditional hardware, and proper proportions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>True divided lite construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Period-appropriate muntin profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom wood species matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Antique hardware reproductions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wavey glass and restoration glass options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Architectural Statements</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Make bold design statements with contemporary custom windows. We collaborate with architects and designers to realize creative visions—multi-angle configurations, floor-to-ceiling installations, and innovative combinations that maximize views and natural light.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Corner window systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-unit combinations with custom angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Frameless glass connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Skylight and roof window integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom color matching and finishes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Our Custom Design Process
          </h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  1
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Vision Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin by understanding your goals, reviewing architectural plans if available, and discussing aesthetic preferences. Bring inspiration photos, sketches, or simply describe what you envision. We&apos;ll visit your home to assess the space, take detailed measurements, and photograph existing conditions. This collaborative session ensures we fully understand your project before design begins.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  2
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Design Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our design team creates detailed drawings showing window configurations, dimensions, and specifications. For complex projects, we provide 3D renderings so you can visualize exactly how windows will look in your space. We present material options, glass packages, hardware styles, and finish selections. This is an iterative process—we refine designs until they perfectly match your vision and budget.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  3
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Custom Fabrication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once designs are approved, we submit orders to our manufacturing partners who specialize in custom work. Each window is built individually to your specifications using premium materials and advanced fabrication techniques. Production timelines vary based on complexity—typically 6-10 weeks for most custom projects. We keep you informed throughout the manufacturing process.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  4
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Expert Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom windows demand exceptional installation expertise. Our master installers have extensive experience with specialty units and unusual configurations. We coordinate delivery timing, prepare openings meticulously, and install with precision. For large or complex projects, we schedule installations during optimal weather conditions. Post-installation, we conduct thorough quality checks and provide complete care instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Premium Custom Window Materials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center">
              <h3 className="font-serif text-xl text-navy-600 mb-4">Wood</h3>
              <p className="text-gray-600 leading-relaxed">
                Mahogany, cherry, oak, pine, and Douglas fir. Unlimited stain and paint options. Traditional beauty with natural insulation properties.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <h3 className="font-serif text-xl text-navy-600 mb-4">Vinyl</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-chambered profiles for strength. Wide color selection including custom color matching. Maintenance-free performance.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <h3 className="font-serif text-xl text-navy-600 mb-4">Fiberglass</h3>
              <p className="text-gray-600 leading-relaxed">
                Ultimate durability and dimensional stability. Can be painted any color. Ideal for large units and contemporary designs.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <h3 className="font-serif text-xl text-navy-600 mb-4">Aluminum Clad</h3>
              <p className="text-gray-600 leading-relaxed">
                Wood interiors with aluminum exteriors. Best of both worlds—beauty inside, weather protection outside. Factory-finished colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-6">
            Recent Custom Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Every custom window we create is unique, designed specifically for one home. Here are examples of recent projects that showcase our custom capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream-100 p-6">
              <div className="aspect-[4/3] bg-gray-300 mb-4"></div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Two-Story Arched Entry</h3>
              <p className="text-gray-600">18-foot mahogany arched window with custom radius and divided lites for historic Frisco home.</p>
            </div>
            <div className="bg-cream-100 p-6">
              <div className="aspect-[4/3] bg-gray-300 mb-4"></div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Contemporary Corner System</h3>
              <p className="text-gray-600">90-degree corner windows meeting without mullion, creating seamless panoramic views in modern home.</p>
            </div>
            <div className="bg-cream-100 p-6">
              <div className="aspect-[4/3] bg-gray-300 mb-4"></div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Custom Triangle Windows</h3>
              <p className="text-gray-600">Matching triangular windows for cathedral ceiling, with operable bottom sashes for ventilation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Let&apos;s Bring Your Vision to Life
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Whether you have detailed plans or just a concept, we&apos;re ready to collaborate. Schedule a consultation to discuss your custom window project and discover how we can make your architectural dreams reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Schedule Design Consultation
            </Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
              Call (469) 908-2440
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

