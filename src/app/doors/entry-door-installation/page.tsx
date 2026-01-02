import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Entry Door Installation Frisco TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional entry door installation in Frisco, TX. Fiberglass, steel, and wood entry doors from top manufacturers. Enhanced security, energy efficiency, and curb appeal. Call (469) 908-2440.',
  keywords: 'entry door installation Frisco TX, front door replacement, Andersen doors, Pella doors, JELD-WEN doors, Marvin doors',
}

export default function EntryDoorPage() {
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
              <li className="text-navy-700 font-medium">Entry Door Installation</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Entry Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Transform your home&apos;s entrance with a beautiful, secure entry door. We install premium doors from Andersen, Pella, JELD-WEN, and Marvin.
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
                  Premium Entry Doors for Frisco Homes
                </h2>
                <p className="text-gray-600 mb-6">
                  Your entry door is more than just a functional barrier between your home and the outside world. It is the first impression visitors have of your Frisco home, a critical security feature protecting your family and belongings, and a significant factor in your home&apos;s energy efficiency. A premium entry door from Andersen, Pella, JELD-WEN, or Marvin combines all three elements stunning aesthetics, robust security, and superior insulation while requiring minimal maintenance for decades.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Materials That Match Your Frisco Home
                </h3>
                <p className="text-gray-600 mb-6">
                  The choice of entry door material profoundly impacts both performance and maintenance requirements. Fiberglass doors have surged in popularity across Frisco for excellent reason they resist warping, rotting, and rust while offering exceptional energy efficiency and realistic wood-grain textures. Steel doors provide maximum security and excellent insulation at a competitive price point. Solid wood doors deliver unmatched natural beauty and traditional charm, perfect for luxury Frisco properties where authentic materials matter most.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Security Features for Peace of Mind
                </h3>
                <p className="text-gray-600 mb-6">
                  Modern entry doors incorporate advanced security technologies that protect your family and belongings. Today&apos;s premium doors feature reinforced steel frames, multi-point locking systems that engage at three or more points along the jamb, and impact-resistant glass that meets strict safety standards. For Frisco homes, these features provide tangible protection and peace of mind.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Energy Efficiency That Reduces Your Bills
                </h3>
                <p className="text-gray-600 mb-6">
                  Your entry door represents one of the largest penetrations in your home&apos;s thermal envelope, making it a critical factor in energy consumption. Premium entry doors feature polyurethane foam cores that provide superior insulation compared to traditional hollow-core doors. Quality weatherstripping creates an airtight seal when closed. Our Frisco customers consistently report noticeable reductions in drafts and energy costs after replacing old doors with modern high-performance units.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Design Options for Every Style
                </h3>
                <p className="text-gray-600 mb-6">
                  Frisco homes span an incredible range of architectural styles, from traditional designs to sleek contemporary builds. Entry doors must complement these diverse aesthetics. Traditional six-panel doors suit Colonial and ranch-style homes. Mission-style doors with clean lines match Craftsman architecture. Glass-rich modern doors with sidelights create stunning contemporary statements. We help Frisco homeowners navigate these choices to find doors that enhance their specific home&apos;s character.
                </p>

                <h3 className="text-xl font-serif text-navy-600 mt-10 mb-4">
                  Expert Installation Process
                </h3>
                <p className="text-gray-600 mb-6">
                  A premium door performs only as well as its installation. The process begins with precise measurement of your existing opening, accounting for any settling or structural changes since the home was built. We remove the old door and inspect the rough opening for any issues. The sill must slope correctly to shed water. Every door is adjusted for smooth operation and tested to verify proper weatherstripping contact around the entire perimeter.
                </p>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Entry Door Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Fiberglass, steel, and wood options</span>
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
                      <span className="text-sm text-gray-600">Energy-efficient foam core</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Impact-resistant glass available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Smart lock compatibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Sidelights and transom options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Weather-resistant finishes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-serif mb-4">Get a Free Estimate</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Ready to upgrade your entry door? Contact us for a free consultation and estimate.
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
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does entry door installation take?</h3>
                <p className="text-gray-600">Most entry door installations in Frisco, TX are completed in 4 to 8 hours. Complex installations with sidelights, transoms, or structural modifications may require a full day or more.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is the best entry door material for Texas weather?</h3>
                <p className="text-gray-600">Fiberglass and steel doors perform exceptionally well in Frisco&apos;s climate. Fiberglass resists warping and cracking in temperature extremes while requiring minimal maintenance.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How much do entry doors cost in Frisco?</h3>
                <p className="text-gray-600">Entry door costs vary based on material, size, brand, and features. Basic steel doors start around $800-$1,200 installed, while premium fiberglass or wood doors range from $1,500-$5,000+. We provide detailed quotes based on your specific needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for a New Entry Door?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your entry door project.
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
