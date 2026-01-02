import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'French Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional French door installation in Frisco, TX. Classic double doors with glass panels for elegant transitions. Call (469) 908-2440 for free estimate.',
  keywords: 'French door installation Frisco TX, double doors, glass panel doors, Andersen French doors, Pella French doors',
}

export default function FrenchDoorPage() {
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
              <li className="text-navy-700 font-medium">French Door Installation</li>
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
                French Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Add timeless elegance to your home with beautiful French doors. We install premium French doors from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium French Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  French doors have graced homes for centuries, and their timeless appeal shows no signs of fading. These elegant double doors with glass panels create a stunning transition between rooms or between interior spaces and outdoor areas. In Frisco homes, French doors add architectural interest, maximize natural light, and create a sense of openness that transforms living spaces.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Classic Design, Modern Performance
                </h3>
                <p className="text-gray-600 mb-6">
                  While French doors maintain their classic aesthetic, today&apos;s models incorporate significant performance improvements. Energy-efficient glass packages reduce heat transfer while maintaining crystal-clear views. Advanced weatherstripping creates airtight seals when doors are closed. Modern hardware systems provide smooth operation and enhanced security. The result is a door that looks traditional but performs like a thoroughly modern product.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Interior and Exterior Applications
                </h3>
                <p className="text-gray-600 mb-6">
                  French doors work beautifully in multiple applications throughout your Frisco home. Use them as exterior doors leading to patios, decks, or gardens. Install them as interior doors between living areas, home offices, or dining rooms. They work equally well as closet doors in master bedrooms or as room dividers in open floor plans. Each application benefits from the elegant aesthetics and natural light French doors provide.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Glass Options and Privacy
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose from a wide range of glass options to suit your specific needs. Clear glass maximizes light and views. Frosted or obscure glass provides privacy while still allowing light to pass through. Decorative glass adds artistic flair. Grilles between the glass create a traditional divided-light appearance without the maintenance challenges of true divided lites.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Inswing vs. Outswing Configurations
                </h3>
                <p className="text-gray-600 mb-6">
                  French doors can be configured to swing inward or outward depending on your space constraints and preferences. Inswing doors are the traditional choice for interior applications and exterior doors in moderate climates. Outswing doors maximize interior floor space and provide better weather resistance for exterior applications.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">French Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Double door configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Full-length glass panels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Inswing and outswing options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Premium hardware options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Multiple glass styles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Grille patterns available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready for elegant French doors? Contact us for a free consultation and estimate.
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">Are French doors energy efficient?</h3>
                <p className="text-gray-600">Modern French doors from premium manufacturers feature Low-E glass, insulated frames, and quality weatherstripping that provide excellent energy efficiency comparable to other door styles.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Can French doors be used as exterior doors?</h3>
                <p className="text-gray-600">Yes, French doors are popular choices for exterior applications leading to patios, decks, and backyards. Exterior-rated French doors include enhanced weatherproofing and security features.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What materials are available for French doors?</h3>
                <p className="text-gray-600">We offer French doors in wood, fiberglass, and composite materials. Each material offers different benefits in terms of aesthetics, durability, and maintenance requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Beautiful French Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your French door project.
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
