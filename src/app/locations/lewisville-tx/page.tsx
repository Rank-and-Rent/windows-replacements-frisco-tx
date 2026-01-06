import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Lewisville TX | Window Installation | Window Replacements of Frisco',
  description: 'Professional window replacement in Lewisville, TX. Serving Castle Hills, Valley Ridge, and all Lewisville neighborhoods. Expert installation, energy-efficient windows.',
  keywords: 'window replacement Lewisville TX, Lewisville window installation, Castle Hills windows',
}

export default function LewisvillePage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center space-x-2 text-sm text-navy-500">
            <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/locations" className="hover:text-navy-700">Locations</Link></li>
            <li>/</li>
            <li className="text-navy-700 font-medium">Lewisville</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-lewisville-tx-3.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Lewisville, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco provides comprehensive window services throughout Lewisville, from Castle Hills&apos; established neighborhoods to Valley Ridge and beyond. We understand Lewisville&apos;s diverse housing stock and deliver appropriate window solutions for every home style.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Window Solutions for Lewisville&apos;s Diverse Housing</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Lewisville&apos;s housing ranges from vintage 1960s ranch homes to contemporary new construction, with everything in between. This diversity requires window expertise spanning historic restoration, mid-century updates, and modern installations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experience with Lewisville properties includes upgrading original single-pane windows in older sections, replacing failed builder-grade windows in 1990s developments, and installing custom windows in newer luxury homes. Whatever your Lewisville property&apos;s vintage, we recommend windows that enhance value and performance.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Lewisville Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-600">
                <ul className="space-y-1 text-sm">
                  <li>• Castle Hills</li>
                  <li>• Valley Ridge</li>
                  <li>• Lakewood</li>
                  <li>• Garden Valley</li>
                </ul>
                <ul className="space-y-1 text-sm">
                  <li>• Old Town</li>
                  <li>• Fox Ridge</li>
                  <li>• Highland Village</li>
                  <li>• All Lewisville</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Complete Window Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600">Replace aging windows throughout your Lewisville home.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce Lewisville cooling costs with modern windows.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600">Expert repairs for all window types and ages.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Trusted Window Experts in Lewisville</h2>
          <p className="text-lg text-white/90 mb-10">
            From vintage homes to new construction, we deliver window solutions that work for your Lewisville property.
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

