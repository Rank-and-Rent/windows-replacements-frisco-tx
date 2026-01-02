import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Storm Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional storm door installation in Frisco, TX. Protective doors for added security and energy efficiency. Call (469) 908-2440 for free estimate.',
  keywords: 'storm door installation Frisco TX, storm doors, protective doors, Andersen storm doors, Larson storm doors',
}

export default function StormDoorPage() {
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
              <li className="text-navy-700 font-medium">Storm Door Installation</li>
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
                Storm Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Protect your entry door while improving energy efficiency. We install premium storm doors that complement your Frisco home.
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
                  Premium Storm Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Storm doors serve multiple important functions for Frisco homeowners. They protect your primary entry door from weather damage, add an extra layer of security, improve energy efficiency, and allow you to enjoy fresh air without letting in insects. A quality storm door pays for itself through reduced energy costs and extended entry door life.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Protection from Weather Extremes
                </h3>
                <p className="text-gray-600 mb-6">
                  Frisco experiences significant weather variations throughout the year, from intense summer heat to occasional winter storms. Storm doors create an insulating air pocket between themselves and your entry door, reducing temperature transfer and protecting your entry door from direct sun exposure, rain, and temperature extremes that cause premature aging.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Energy Efficiency Benefits
                </h3>
                <p className="text-gray-600 mb-6">
                  The air gap created by a storm door acts as additional insulation for your entry. Low-E glass options further reduce heat transfer. Many Frisco homeowners report noticeable improvements in entryway comfort and reduced HVAC costs after installing quality storm doors. The energy savings accumulate year after year.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Ventilation Options
                </h3>
                <p className="text-gray-600 mb-6">
                  Storm doors with retractable screens let you enjoy fresh air circulation while keeping insects outside. Full-view storm doors feature glass panels that retract to reveal screens. Some models offer interchangeable glass and screen inserts for seasonal changes. This ventilation capability makes storm doors especially valuable during Frisco&apos;s pleasant spring and fall seasons.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Enhanced Security
                </h3>
                <p className="text-gray-600 mb-6">
                  Storm doors add another barrier between your home and potential intruders. Heavy-duty storm doors feature reinforced frames, multi-point locks, and impact-resistant glass. Even standard storm doors provide a visual deterrent and make forced entry more difficult and time-consuming.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Storm Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Full-view and decorative styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Retractable screen options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Low-E glass available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Heavy-duty frames</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Multiple color finishes</span>
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
                    Ready for a storm door? Contact us for a free consultation and estimate.
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">Do I need a storm door if I have a new entry door?</h3>
                <p className="text-gray-600">Even new entry doors benefit from storm door protection. Storm doors extend your entry door&apos;s lifespan, improve energy efficiency, and provide ventilation options that entry doors alone cannot offer.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does storm door installation take?</h3>
                <p className="text-gray-600">Most storm door installations are completed in 1-2 hours. Our professional installers ensure proper fit and operation before completing the job.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What colors are available for storm doors?</h3>
                <p className="text-gray-600">Storm doors come in a wide range of colors including white, almond, bronze, sandstone, and various wood-grain finishes. We can help you select a color that complements your entry door and home exterior.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for a New Storm Door?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your storm door project.
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
