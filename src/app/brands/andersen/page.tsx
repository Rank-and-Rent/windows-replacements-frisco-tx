import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Andersen Windows Frisco TX | Authorized Dealer | Window Replacements of Frisco',
  description: 'Andersen Windows authorized dealer in Frisco, TX. 400 Series, A-Series, E-Series windows. Expert installation, full warranties. Call (469) 908-2440.',
  keywords: 'Andersen windows Frisco TX, Andersen 400 series, Andersen dealer, Andersen window installation',
}

export default function AndersenPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Andersen Windows
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco is an authorized Andersen Windows dealer, bringing you America&apos;s most trusted window brand. For over 120 years, Andersen has set the standard for quality, innovation, and performance in window manufacturing.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Why Choose Andersen Windows?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Proven Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Over a century of window manufacturing excellence. Andersen windows are built to last with premium materials and rigorous quality control.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                SmartSun™ glass and Low-E4® coatings deliver exceptional energy performance. ENERGY STAR certified for North Texas climate.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Comprehensive Warranties</h3>
              <p className="text-gray-600 leading-relaxed">
                Industry-leading warranties protect your investment. Most Andersen windows include lifetime limited warranties on glass and materials.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Beautiful Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Timeless aesthetics that complement any architectural style. Numerous colors, finishes, and hardware options for perfect customization.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Innovative Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Patented Fibrex® composite material, advanced weather sealing, and easy-clean designs make Andersen windows the smart choice.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Strong Resale Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Andersen name recognition adds value to your home. Buyers appreciate the quality and reliability of Andersen windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Andersen Window Series</h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">400 Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  The 400 Series combines Andersen&apos;s innovative Fibrex® material with timeless wood interiors. These windows deliver exceptional strength, energy efficiency, and low maintenance. Perfect for Frisco homeowners seeking premium performance with classic beauty.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Fibrex® exterior—twice the strength of vinyl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Natural pine interior for staining or painting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>SmartSun™ glass blocks 95% of UV rays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Available in all window styles</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-200 h-80"></div>
              <div className="order-1 lg:order-2">
                <h3 className="font-serif text-3xl text-navy-600 mb-4">A-Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  The A-Series represents Andersen&apos;s most customizable line, offering endless design possibilities. From contemporary to traditional, these windows adapt to any architectural vision while maintaining superior performance standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>20+ exterior color options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>5 interior wood species available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Multiple hardware finishes and styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Architectural-grade performance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">E-Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  The E-Series represents Andersen&apos;s ultimate custom window line. Built to your exact specifications with premium wood throughout, these windows serve architects and designers creating exceptional homes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Fully custom sizes and configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Premium wood species options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Aluminum-clad exteriors in any color</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-blue mt-1">•</span>
                    <span>Unlimited design flexibility</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Choose Us as Your Andersen Dealer?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As an authorized Andersen dealer, Window Replacements of Frisco maintains the highest standards of product knowledge, installation expertise, and customer service. Our team receives regular factory training to stay current with Andersen&apos;s latest innovations and best practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We handle everything from helping you select the perfect Andersen windows for your Frisco home through professional installation that meets manufacturer specifications. Your Andersen warranty coverage requires proper installation—trust our certified team to get it right.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Our Andersen Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Product selection consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom ordering and specification</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Certified installation by trained technicians</span>
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
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready for Andersen Windows?</h2>
          <p className="text-lg text-white/90 mb-10">
            Experience the quality and performance of Andersen windows in your Frisco home. Contact us for a free consultation and estimate.
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

