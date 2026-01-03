import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Single-Hung Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Single-hung window installation and replacement in Frisco, TX. Classic design, energy efficiency, affordable pricing. Expert installation by certified professionals.',
  keywords: 'single-hung windows Frisco TX, single hung window installation, single pane windows replacement',
}

export default function SingleHungWindowsPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/windows/single-hung-windows-frisco-tx.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Single-Hung Windows
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Single-hung windows offer timeless design and practical functionality at an excellent value. With only the bottom sash operating, these windows provide straightforward operation, energy efficiency, and the classic appearance that complements any Frisco home&apos;s architectural style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Get Free Estimate</Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] bg-gray-300"></div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">What Are Single-Hung Windows?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Single-hung windows feature two sashes stacked vertically, with only the bottom sash designed to move up and down. The top sash remains stationary, creating a simpler mechanism that reduces maintenance needs and costs while maintaining excellent performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                This traditional window style has been popular for generations because it delivers reliable ventilation, classic aesthetics, and straightforward operation. Single-hung windows work particularly well in bedrooms, living areas, and any space where you want traditional charm combined with modern energy efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                While similar in appearance to double-hung windows, single-hung units typically cost 10-20% less due to their simpler construction. This makes them an excellent choice for budget-conscious homeowners who don&apos;t need the flexibility of two operating sashes.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Bottom sash slides up for ventilation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Top sash fixed for simplified operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Balanced spring system for smooth operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Traditional aesthetic fits any home style</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lower cost than double-hung windows</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Energy-efficient with proper weather sealing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Benefits of Single-Hung Windows</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">
                Single-hung windows typically cost 10-20% less than comparable double-hung models due to simpler construction. This makes them an excellent choice for whole-house replacements or new construction on a budget.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Low Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                With fewer moving parts than double-hung windows, single-hung units require less maintenance over their lifespan. The stationary top sash eliminates half the potential hardware issues.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern single-hung windows feature weatherstripping, Low-E glass, and argon fills that deliver excellent energy performance. The fixed top sash can actually improve air-tightness compared to double-hung designs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Classic Appearance</h3>
              <p className="text-gray-600 leading-relaxed">
                Single-hung windows provide the traditional vertical sliding window look that complements both historic and contemporary architecture. They maintain clean lines and timeless proportions.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Reliable Operation</h3>
              <p className="text-gray-600 leading-relaxed">
                Simpler mechanisms mean fewer things can go wrong. Balance systems in single-hung windows are proven, durable, and easy to repair if issues ever arise.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Good Ventilation</h3>
              <p className="text-gray-600 leading-relaxed">
                While only the bottom sash opens, you still get 50% ventilation area—plenty for most residential applications. The lower opening is also more convenient to operate from inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Single-Hung vs. Double-Hung Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Single-Hung Windows</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">10-20% lower cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Fewer moving parts to maintain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Potentially better air-tightness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Simpler, more reliable operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">−</span>
                  <span className="text-gray-600">Top sash doesn&apos;t open</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">−</span>
                  <span className="text-gray-600">Can&apos;t clean exterior from inside</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Double-Hung Windows</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Both sashes operate for flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Tilt-in sashes for easy cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Better ventilation control options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-blue font-bold">+</span>
                  <span className="text-gray-600">Can create cross-ventilation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">−</span>
                  <span className="text-gray-600">Higher initial cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">−</span>
                  <span className="text-gray-600">More hardware to maintain</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The choice between single-hung and double-hung windows often comes down to budget and cleaning convenience. For ground-floor windows or when cleaning from outside is easy, single-hung windows offer excellent value. For upper floors or when interior cleaning access is important, double-hung may be worth the extra investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Material Options for Single-Hung Windows</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Vinyl</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most popular choice for single-hung windows. Vinyl frames never need painting, resist moisture and insects, and provide excellent insulation. Multiple color options available to match your home.
              </p>
              <p className="text-sm text-gray-500">Best for: Budget-conscious homeowners, low-maintenance preferences</p>
            </div>
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Wood</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traditional wood single-hung windows offer authentic beauty and superior insulation. Can be stained or painted to match any décor. Modern treatments protect against moisture and require less maintenance than historic wood windows.
              </p>
              <p className="text-sm text-gray-500">Best for: Traditional homes, customization needs</p>
            </div>
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Aluminum Clad</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Combines wood interiors with aluminum-clad exteriors. Enjoy wood&apos;s beauty inside with durable, weather-resistant aluminum outside. Factory-finished exterior colors eliminate painting needs.
              </p>
              <p className="text-sm text-gray-500">Best for: Durability plus aesthetics, coastal or harsh climates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready for Single-Hung Windows?</h2>
          <p className="text-lg text-white/90 mb-10">
            Contact Window Replacements of Frisco for expert single-hung window installation. We&apos;ll help you select the perfect windows for your home and budget, then install them with precision craftsmanship.
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

