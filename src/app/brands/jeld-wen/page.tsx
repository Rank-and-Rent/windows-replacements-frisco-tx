import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeld-Wen Windows Frisco TX | Authorized Dealer | Window Replacements of Frisco',
  description: 'Jeld-Wen Windows authorized dealer in Frisco, TX. Quality vinyl and wood windows, excellent value, energy-efficient. Expert installation. Call (469) 908-2440.',
  keywords: 'Jeld-Wen windows Frisco TX, Jeld-Wen dealer, Jeld-Wen window installation',
}

export default function JeldWenPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Jeld-Wen Windows</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco offers Jeld-Wen Windows—trusted by builders and homeowners for exceptional value and reliable performance. Jeld-Wen delivers quality windows that enhance comfort and energy efficiency without breaking your budget.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Why Choose Jeld-Wen Windows?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Exceptional Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Jeld-Wen windows deliver quality construction and performance at prices that fit real-world budgets. Great value without compromising standards.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                ENERGY STAR certified options with Low-E glass and argon fills reduce cooling costs in North Texas summers while maintaining comfort.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Proven Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by builders nationwide for consistent quality and dependable performance. Jeld-Wen windows are built to last.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Wide Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Available in all popular window styles, sizes, and configurations. Vinyl and wood options suit any Frisco home&apos;s needs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Low Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Vinyl windows never need painting. Wood windows feature durable finishes that simplify upkeep and resist weathering.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Strong Warranties</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive warranties protect your investment. Jeld-Wen backs their windows with industry-standard coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Jeld-Wen Product Lines</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Vinyl Windows</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Jeld-Wen vinyl windows offer excellent performance and low maintenance at affordable prices. Multi-chambered frames provide strength and insulation, while fusion-welded corners ensure durability.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Energy-efficient glass packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Multiple color options including white, almond, and gray</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Easy-clean tilt sashes on double-hung models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Lifetime limited warranty on vinyl frames</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Wood Windows</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For homeowners preferring traditional wood windows, Jeld-Wen offers quality construction with beautiful aesthetics. Available in pine or premium wood species with clad exterior options.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Natural wood beauty for staining or painting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Aluminum-clad exterior options for low maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Superior insulation properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Traditional craftsmanship meets modern performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Perfect for Frisco Homeowners</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Jeld-Wen windows represent smart value for Frisco homeowners who want quality windows without premium pricing. Whether you&apos;re replacing original windows in an older home, upgrading builder-grade windows, or building new, Jeld-Wen delivers reliable performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The energy efficiency of Jeld-Wen windows helps reduce cooling costs during brutal Texas summers while maintaining comfortable indoor temperatures year-round. ENERGY STAR certification ensures you&apos;re getting windows proven to save energy in our climate zone.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Our Jeld-Wen Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Free in-home consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Product selection assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Professional installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Warranty registration and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Get Quality Jeld-Wen Windows</h2>
          <p className="text-lg text-white/90 mb-10">
            Discover how Jeld-Wen windows can improve your Frisco home&apos;s comfort and efficiency. Contact us for a free estimate.
          </p>
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

