import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Irving TX | Window Installation | Window Replacements of Frisco',
  description: 'Window services in Irving, TX. Professional installation and replacement for Irving homes. Energy-efficient windows, expert service.',
  keywords: 'window replacement Irving TX, Irving window installation',
}

export default function IrvingPage() {
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
            <li className="text-navy-700 font-medium">Irving</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-frisco-tx-4.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Irving, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Irving with professional window installation and replacement. Our expertise covers Irving&apos;s diverse neighborhoods including Las Colinas, Valley Ranch, and the Heritage District with quality window solutions.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Trusted in Irving</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Irving&apos;s diverse communities from Las Colinas to Valley Ranch deserve quality window services. We provide installations and replacements that enhance your home&apos;s comfort and value.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600">Upgrade your Irving home with energy-efficient windows.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Savings</h3>
              <p className="text-gray-600">Reduce cooling costs with high-performance windows.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Expert Installation</h3>
              <p className="text-gray-600">Professional service with lifetime warranties.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Quality Windows for Irving Homes</h2>
          <p className="text-lg text-white/90 mb-10">Contact us today for expert window services in Irving.</p>
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
