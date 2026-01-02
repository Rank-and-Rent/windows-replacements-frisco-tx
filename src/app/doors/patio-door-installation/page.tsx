import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Patio Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional patio door installation in Frisco, TX. Sliding and hinged patio doors for seamless indoor-outdoor living. Call (469) 908-2440 for free estimate.',
  keywords: 'patio door installation Frisco TX, sliding patio doors, hinged patio doors, Andersen patio doors, Pella patio doors',
}

export default function PatioDoorPage() {
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
              <li className="text-navy-700 font-medium">Patio Door Installation</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/windows/double-hung-windows-frisco-tx.jpg' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Patio Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Create seamless indoor-outdoor living with premium patio doors. We install sliding and hinged patio doors from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium Patio Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Patio doors serve as the gateway between your indoor living spaces and outdoor areas, making them one of the most important design elements in any Frisco home. Whether you are looking to enhance your backyard views, improve access to your deck or patio, or simply bring more natural light into your home, the right patio door makes all the difference.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Sliding vs. Hinged Patio Doors
                </h3>
                <p className="text-gray-600 mb-6">
                  Sliding patio doors remain the most popular choice for Frisco homeowners due to their space-saving design and smooth operation. They do not require swing clearance, making them ideal for rooms with limited floor space or furniture near the door. Modern sliding doors feature improved rollers and tracks for effortless operation. Hinged patio doors, including French-style configurations, offer a more traditional aesthetic and wider opening when both panels swing open.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Energy Efficiency Matters
                </h3>
                <p className="text-gray-600 mb-6">
                  Large glass panels in patio doors can significantly impact your home&apos;s energy consumption if not properly insulated. Our patio doors feature Low-E glass coatings that reflect heat while allowing natural light to enter. Double and triple-pane glass units provide additional insulation. Quality weatherstripping around the entire frame prevents air infiltration.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Security Features
                </h3>
                <p className="text-gray-600 mb-6">
                  Modern patio doors incorporate multiple security features to protect your Frisco home. Multi-point locking systems engage at several points along the frame for enhanced break-in resistance. Anti-lift blocks prevent sliding panels from being removed from their tracks. Impact-resistant glass options provide additional protection against forced entry and severe weather.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Customization Options
                </h3>
                <p className="text-gray-600 mb-6">
                  We offer extensive customization options to ensure your new patio door perfectly complements your Frisco home. Choose from various frame materials including vinyl, fiberglass, wood, and aluminum-clad wood. Select from dozens of exterior and interior finish colors. Add grilles between the glass for a traditional look or keep panels clear for unobstructed views.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Patio Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Sliding and hinged configurations</span>
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
                      <span className="text-sm text-gray-600">Multi-point locking systems</span>
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
                      <span className="text-sm text-gray-600">Built-in blinds available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Pet door compatible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade your patio door? Contact us for a free consultation and estimate.
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">What size patio doors are available?</h3>
                <p className="text-gray-600">Standard patio doors come in widths from 5 to 12 feet. We also offer custom sizes to fit non-standard openings in your Frisco home.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does patio door installation take?</h3>
                <p className="text-gray-600">Most patio door installations are completed in one day, typically 4-8 hours depending on the complexity of the project.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Can you add a pet door to my patio door?</h3>
                <p className="text-gray-600">Yes, many of our patio door models can accommodate built-in pet doors. We can also retrofit existing doors with pet door panels.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for a New Patio Door?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your patio door project.
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
