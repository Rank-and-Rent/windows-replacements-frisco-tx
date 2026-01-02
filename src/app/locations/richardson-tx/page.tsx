import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Richardson TX | Window Installation | Window Replacements of Frisco',
  description: 'Professional window services in Richardson, TX. Expert installation and replacement for all Richardson neighborhoods. Energy-efficient windows, free estimates.',
  keywords: 'window replacement Richardson TX, Richardson window installation',
}

export default function RichardsonPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Richardson, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco provides expert window installation and replacement services throughout Richardson. From established neighborhoods to newer developments, we deliver quality windows that enhance your home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Trusted Window Experts in Richardson</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Richardson&apos;s diverse housing stock requires experienced window professionals. We provide solutions for every home style and era, from vintage properties to modern construction.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600">Replace aging windows with energy-efficient models.</p>
            </Link>
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce Richardson cooling costs significantly.</p>
            </Link>
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600">Expert repairs for all window types.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Serving Richardson with Excellence</h2>
          <p className="text-lg text-white/90 mb-10">Contact us today for professional window services in Richardson.</p>
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

