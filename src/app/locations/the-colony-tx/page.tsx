import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement The Colony TX | Window Installation | Window Replacements of Frisco',
  description: 'Professional window services in The Colony, TX. Serving lakefront properties and all Colony neighborhoods with expert window installation and replacement.',
  keywords: 'window replacement The Colony TX, The Colony window installation, windows The Colony, lakefront windows',
}

export default function TheColonyPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-the-colony-tx.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Services in The Colony, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco provides expert window installation and replacement services throughout The Colony, including lakefront properties along Lewisville Lake. We understand the unique challenges of The Colony&apos;s lake climate and deliver windows built to last.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Lakefront Window Expertise</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Built for The Colony&apos;s Lake Environment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Homes near Lewisville Lake face unique environmental challenges—higher humidity, lake breezes carrying moisture, and potential storm damage. Windows in The Colony need superior weather sealing, corrosion-resistant hardware, and frames that won&apos;t warp from humidity exposure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specify windows with enhanced weatherstripping, stainless steel or marine-grade hardware, and vinyl or fiberglass frames that excel in The Colony&apos;s lakeside conditions. Our installation techniques include extra attention to water management, ensuring no moisture penetration around window openings.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Maximize Your Lake Views</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lakefront properties deserve windows that showcase spectacular views. We install large picture windows, multi-unit combinations, and minimal-frame designs that maximize glass area while maintaining structural integrity and energy performance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our windows protect interiors from intense sun reflection off the lake while preserving views with Low-E coatings optimized for glare reduction. You&apos;ll enjoy comfortable, naturally-lit interiors without sacrificing your panoramic lakefront vistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Window Services in The Colony</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/windows" className="bg-cream-100 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600">Replace old windows with weather-resistant models built for Colony conditions.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">High-performance windows that handle sun reflection and lake humidity.</p>
            </Link>
            <Link href="/windows/special-shape-windows" className="bg-cream-100 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lake View Windows</h3>
              <p className="text-gray-600">Large picture windows and specialty units that showcase lake views.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Expert Window Solutions for The Colony</h2>
          <p className="text-lg text-white/90 mb-10">
            Whether your home overlooks Lewisville Lake or sits in The Colony&apos;s inland neighborhoods, we deliver windows that perform beautifully in our local climate.
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

