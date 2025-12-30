import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement McKinney TX | Window Installation McKinney | Window Replacements of Frisco',
  description: 'Professional window replacement and installation in McKinney, TX. Serving historic downtown, Stonebridge Ranch, Craig Ranch, and all McKinney areas. Free estimates.',
  keywords: 'window replacement McKinney TX, McKinney window installation, windows McKinney, Craig Ranch windows, Stonebridge Ranch windows',
}

export default function McKinneyPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Replacement & Installation in McKinney, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco brings expert window services to McKinney homeowners, from preserving historic downtown properties to upgrading modern homes in Craig Ranch and Stonebridge Ranch. Our team understands McKinney&apos;s unique architectural heritage and contemporary building styles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                Get Free Estimate
              </Link>
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                (469) 908-2440
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why McKinney Chooses Us */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Trusted Window Experts in McKinney
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                McKinney represents a fascinating blend of historic preservation and rapid growth. The charming Victorian homes around downtown square require careful historic window restoration or authentic replication, while master-planned communities like Craig Ranch and Adriatica demand contemporary window solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our experience spans this entire spectrum. We&apos;ve helped preserve McKinney&apos;s architectural heritage with period-appropriate window restorations while also installing thousands of energy-efficient windows in newer construction. Whatever your McKinney home&apos;s style or age, we deliver appropriate solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Experience with historic preservation requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Deep knowledge of McKinney building codes and regulations</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Authorized Andersen, Pella, and Jeld-Wen dealer</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">McKinney Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Historic Downtown</li>
                  <li>• Craig Ranch</li>
                  <li>• Stonebridge Ranch</li>
                  <li>• Adriatica</li>
                  <li>• Tucker Hill</li>
                  <li>• Eldorado</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Wilmeth Ridge</li>
                  <li>• Gabe Nesbitt</li>
                  <li>• Dowell</li>
                  <li>• Wilson Creek</li>
                  <li>• Finch Park</li>
                  <li>• All McKinney</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Homes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Historic Window Restoration in McKinney
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Preserving McKinney&apos;s Heritage</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                McKinney&apos;s historic district features some of North Texas&apos;s finest Victorian, Craftsman, and early 20th-century architecture. Many of these homes have historic designation, requiring window work that respects original design while meeting modern performance standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in creating custom windows that replicate historic profiles, muntin patterns, and hardware while incorporating modern energy-efficient glass. Whether you need true divided lites for authenticity or simulated muntins for easier maintenance, we deliver windows that honor your home&apos;s heritage.
              </p>
              <Link href="/services/custom-windows" className="text-slate-blue hover:text-navy-600 font-medium inline-flex items-center gap-2">
                Learn About Custom Historic Windows
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Modern Efficiency, Classic Beauty</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Historic windows don&apos;t have to be energy nightmares. Today&apos;s custom windows can perfectly match original aesthetics while incorporating Low-E glass, argon fills, and weatherstripping that reduce energy consumption by 40-50% compared to vintage single-pane units.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We navigate McKinney&apos;s historic preservation guidelines, securing approvals and ensuring compliance. Our team has completed numerous projects in the downtown historic district, earning trust from preservation-conscious homeowners and the city&apos;s historic review board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Complete Window Services in McKinney
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/window-replacement" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600 mb-4">Replace failing windows in your McKinney home with energy-efficient modern units.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/window-installation" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">New Installation</h3>
              <p className="text-gray-600 mb-4">Professional installation for new McKinney construction and home additions.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/custom-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Historic Restoration</h3>
              <p className="text-gray-600 mb-4">Custom windows that preserve McKinney&apos;s historic architecture authentically.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/energy-efficient-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">High-performance windows that dramatically reduce McKinney energy costs.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/window-repair" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600 mb-4">Expert repairs for glass, hardware, seals, and operational problems.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/commercial-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Commercial Projects</h3>
              <p className="text-gray-600 mb-4">Window solutions for McKinney businesses and commercial properties.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Why McKinney Homes Need Quality Windows
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Savings</h3>
              <p className="text-gray-600 leading-relaxed">
                McKinney&apos;s hot summers strain air conditioning systems. Energy-efficient windows reduce cooling costs by 25-35%, saving hundreds annually.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality windows protect against McKinney&apos;s severe thunderstorms, high winds, and occasional hail damage with impact-resistant options.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Home Value</h3>
              <p className="text-gray-600 leading-relaxed">
                In McKinney&apos;s competitive housing market, new windows enhance curb appeal and provide excellent return on investment when selling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Serving McKinney with Excellence
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Whether your McKinney home is a cherished historic property or a contemporary masterpiece, Window Replacements of Frisco delivers window solutions that enhance beauty, comfort, and efficiency. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Schedule Free Consultation
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

