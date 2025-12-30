import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Allen TX | Window Installation Allen | Window Replacements of Frisco',
  description: 'Professional window services in Allen, TX. Serving Watters Creek, Twin Creeks, Bethany, and all Allen neighborhoods. Expert installation, energy-efficient windows.',
  keywords: 'window replacement Allen TX, Allen window installation, windows Allen, Watters Creek windows, Twin Creeks windows',
}

export default function AllenPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Replacement & Installation in Allen, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco proudly serves Allen homeowners with expert window installation, replacement, and repair services. From Watters Creek to Twin Creeks and Bethany neighborhoods, we deliver quality windows that enhance your home&apos;s comfort and energy efficiency.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Window Experts in Allen</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Allen&apos;s well-established neighborhoods feature homes built primarily from the 1980s through today, with a mix of traditional and contemporary styles. Many homes are reaching the age where original windows need replacement due to seal failures, operational problems, or simply outdated efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We&apos;ve completed hundreds of window projects throughout Allen, from Bethany&apos;s mature tree-lined streets to the newer developments near Watters Creek. Our experience with Allen&apos;s most common housing styles ensures we recommend appropriate window solutions for your specific home.
              </p>
              <div className="bg-white p-8">
                <h3 className="font-serif text-xl text-navy-600 mb-4">Allen Neighborhoods We Serve</h3>
                <div className="grid grid-cols-2 gap-3 text-gray-600">
                  <ul className="space-y-1 text-sm">
                    <li>• Watters Creek</li>
                    <li>• Twin Creeks</li>
                    <li>• Bethany</li>
                    <li>• Raintree Village</li>
                  </ul>
                  <ul className="space-y-1 text-sm">
                    <li>• The Villages</li>
                    <li>• Twin Creek Estates</li>
                    <li>• South Ridge</li>
                    <li>• All of Allen</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8">
                <h3 className="font-serif text-xl text-navy-600 mb-3">Common Allen Window Issues</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Failed seals causing fog between panes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Single-pane windows in older homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Warped vinyl frames from sun exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Builder-grade windows lacking performance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-serif text-xl text-navy-600 mb-3">Why Allen Homeowners Choose Us</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Local expertise with Allen building codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fast response throughout Allen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium brands at fair prices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Our Allen Window Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/window-replacement" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600 mb-4">Replace outdated windows with modern energy-efficient models throughout your Allen home.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/energy-efficient-windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">High-performance windows that reduce Allen summer cooling costs significantly.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/window-repair" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600 mb-4">Fast, reliable repairs for broken glass, hardware, and seal failures.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Serving Allen with Expert Window Solutions</h2>
          <p className="text-lg text-white/90 mb-10">
            Ready to upgrade your Allen home with energy-efficient windows? Contact Window Replacements of Frisco for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Schedule Consultation</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

