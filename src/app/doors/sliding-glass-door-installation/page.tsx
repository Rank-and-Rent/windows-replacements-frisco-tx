import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional sliding glass door installation in Frisco, TX. Space-saving doors with expansive glass panels. Call (469) 908-2440 for free estimate.',
  keywords: 'sliding glass door installation Frisco TX, glass doors, sliding doors, Andersen sliding doors, Pella sliding doors',
}

export default function SlidingGlassDoorPage() {
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
              <li className="text-navy-700 font-medium">Sliding Glass Door Installation</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Sliding Glass Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Maximize space and views with smooth-operating sliding glass doors. We install premium sliding doors from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium Sliding Glass Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Sliding glass doors represent the perfect marriage of form and function. These space-saving doors glide horizontally on tracks, requiring no swing clearance while providing expansive views and abundant natural light. For Frisco homeowners looking to connect interior living spaces with patios, decks, or backyards, sliding glass doors offer an elegant and practical solution.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Space-Efficient Design
                </h3>
                <p className="text-gray-600 mb-6">
                  Unlike hinged doors that require clearance to swing open, sliding glass doors operate within their own footprint. This makes them ideal for rooms where furniture placement near the door would otherwise be impossible. The space you save can be used for seating areas, planters, or simply kept clear for unobstructed traffic flow.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Advanced Track Systems
                </h3>
                <p className="text-gray-600 mb-6">
                  Modern sliding glass doors feature significantly improved track and roller systems compared to older models. Premium doors glide effortlessly on precision-engineered tracks with high-quality rollers that resist wear. Many models offer height adjustment to maintain smooth operation over time. Low-threshold options provide easier accessibility while maintaining weather resistance.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Energy Efficiency
                </h3>
                <p className="text-gray-600 mb-6">
                  Large glass panels can significantly impact your home&apos;s energy consumption, but modern sliding glass doors address this with advanced glass technologies. Low-E coatings reflect heat while allowing visible light to pass through. Argon or krypton gas fills between panes provide additional insulation. Insulated frames prevent thermal bridging. The result is a door that looks open and airy but performs like a well-insulated wall.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Multi-Panel Configurations
                </h3>
                <p className="text-gray-600 mb-6">
                  Beyond standard two-panel configurations, we offer multi-panel sliding door systems that can span larger openings. Three and four-panel doors provide wider openings while maintaining the space-saving benefits of sliding operation. Some configurations allow multiple panels to stack at one end, creating nearly wall-sized openings for the ultimate indoor-outdoor connection.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Sliding Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Space-saving horizontal operation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Smooth-glide track systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Multi-point locking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Low-E energy-efficient glass</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Multi-panel configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Built-in blinds available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready for new sliding glass doors? Contact us for a free consultation and estimate.
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">How wide can sliding glass doors be?</h3>
                <p className="text-gray-600">Standard sliding glass doors range from 5 to 12 feet wide. Multi-panel configurations can span even larger openings, up to 20 feet or more with some manufacturers.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are sliding glass doors secure?</h3>
                <p className="text-gray-600">Modern sliding glass doors include multiple security features including multi-point locks, anti-lift blocks, and impact-resistant glass options that make them very secure.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How do I maintain my sliding glass door?</h3>
                <p className="text-gray-600">Regular maintenance includes keeping tracks clean of debris, lubricating rollers annually, and inspecting weatherstripping. Modern doors require minimal maintenance for decades of smooth operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for New Sliding Glass Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your sliding glass door project.
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
