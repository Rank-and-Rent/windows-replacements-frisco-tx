import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Window Installation Plano | Window Replacements of Frisco',
  description: 'Professional window replacement and installation in Plano, TX. Serving West Plano, Legacy, Willow Bend, and all Plano neighborhoods. Free estimates. Call (469) 908-2440.',
  keywords: 'window replacement Plano TX, Plano window installation, windows Plano, Plano TX windows, West Plano windows',
}

export default function PlanoPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Replacement & Installation in Plano, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco has served Plano homeowners for over 15 years with expert window installation, replacement, and repair services. From West Plano&apos;s established neighborhoods to Legacy&apos;s newer developments, we understand the unique window needs of Plano homes.
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

      {/* Why Plano Chooses Us */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Why Plano Homeowners Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Plano&apos;s diverse housing stock—from 1970s ranch homes in West Plano to modern luxury estates near Legacy—requires specialized knowledge and experience. We&apos;ve completed thousands of window projects throughout Plano, working with every architectural style and window configuration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you&apos;re upgrading original single-pane windows in an older home or replacing builder-grade windows in a newer property, we provide solutions that enhance energy efficiency, curb appeal, and comfort while respecting your home&apos;s architectural character.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Authorized dealer for Andersen, Pella, and Jeld-Wen windows</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Licensed and insured with comprehensive warranty coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Fast response times throughout all Plano neighborhoods</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Plano Neighborhoods We Serve</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• West Plano</li>
                  <li>• Willow Bend</li>
                  <li>• Legacy</li>
                  <li>• Parker Road</li>
                  <li>• East Plano</li>
                  <li>• Preston Park</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Parkwood</li>
                  <li>• Los Rios</li>
                  <li>• Haggard Park</li>
                  <li>• Collin Creek</li>
                  <li>• Spring Creek</li>
                  <li>• All of Plano</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plano Climate Considerations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Window Solutions for Plano&apos;s Climate
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Combat Texas Heat</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Plano summers are brutal—temperatures regularly exceed 100°F from June through August. Your windows are critical for managing indoor comfort and energy costs. Older single-pane or inefficient windows force your air conditioning to work overtime, driving up utility bills while leaving rooms uncomfortably warm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in energy-efficient windows with Low-E coatings optimized for our climate. These advanced glass packages block solar heat gain while allowing natural light, keeping your Plano home comfortable year-round. Many homeowners see 25-30% reductions in cooling costs after upgrading.
              </p>
              <Link href="/services/energy-efficient-windows" className="text-slate-blue hover:text-navy-600 font-medium inline-flex items-center gap-2">
                Learn About Energy-Efficient Windows
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Severe Weather Protection</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Plano experiences intense thunderstorms, occasional hail, and rare but severe tornado activity. Quality windows with impact-resistant glass and reinforced frames provide crucial protection for your family and property. Modern windows also seal tightly against wind-driven rain that can penetrate older units.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer windows rated for high wind loads and impact resistance, plus proper installation techniques that ensure weathertight performance during North Texas storms. Your windows should be a barrier against the elements, not a vulnerability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Plano */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Our Plano Window Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/window-replacement" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600 mb-4">Replace aging, inefficient windows throughout your Plano home with modern energy-efficient models.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/window-installation" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">New Installation</h3>
              <p className="text-gray-600 mb-4">Professional installation for new construction and home additions in Plano neighborhoods.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/window-repair" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600 mb-4">Expert repairs for broken glass, faulty hardware, seal failures, and operational issues.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/energy-efficient-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">High-performance windows that dramatically reduce Plano summer cooling costs.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/custom-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Custom Windows</h3>
              <p className="text-gray-600 mb-4">Special shapes, oversized units, and architectural windows for unique Plano homes.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
            <Link href="/services/commercial-windows" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Commercial Projects</h3>
              <p className="text-gray-600 mb-4">Large-scale window solutions for Plano offices and commercial properties.</p>
              <span className="text-slate-blue text-sm font-medium">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plano-Specific Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Benefits of New Windows in Plano
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lower Energy Bills</h3>
              <p className="text-gray-600 leading-relaxed">
                With Plano&apos;s scorching summers, energy-efficient windows can reduce cooling costs by $600-$1,200 annually. The investment pays for itself through utility savings.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Increased Home Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Plano&apos;s competitive real estate market rewards updated homes. New windows provide 70-80% return on investment when selling, plus enhanced curb appeal.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Enhanced Comfort</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate hot spots, cold drafts, and inconsistent temperatures. Modern windows maintain comfortable environments room-to-room throughout your Plano home.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Noise Reduction</h3>
              <p className="text-gray-600 leading-relaxed">
                Living near Dallas North Tollway or other busy Plano roads? Quality windows significantly reduce exterior noise for peaceful interiors.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">UV Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Low-E glass blocks 99% of UV rays, preventing fading of hardwood floors, furniture, and artwork—important in sun-drenched Plano homes.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Easy Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern vinyl and fiberglass windows never need painting. Tilt-in sashes make cleaning effortless—no more dangerous ladder work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Ready to Upgrade Your Plano Home&apos;s Windows?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Schedule a free consultation with Window Replacements of Frisco. We&apos;ll assess your current windows, discuss your goals, and provide a detailed estimate with no obligation. Serving all Plano neighborhoods with expert window solutions.
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

