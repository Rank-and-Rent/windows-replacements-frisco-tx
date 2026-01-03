import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Flower Mound TX | Window Installation | Window Replacements of Frisco',
  description: 'Window services in Flower Mound, TX. Professional installation and replacement for Flower Mound homes and businesses. Free estimates.',
  keywords: 'window replacement Flower Mound TX, Flower Mound window installation',
}

export default function FlowerMoundPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-flower-mound-tx-2.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Flower Mound, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Flower Mound with expert window installation and replacement services. Quality windows for residential properties throughout Flower Mound.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Serving Flower Mound</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Flower Mound&apos;s beautiful neighborhoods deserve quality window services. We provide professional installation and replacement that enhances your home&apos;s comfort, efficiency, and value.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Replacement</h3>
              <p className="text-gray-600">Replace old windows with modern energy-efficient models.</p>
            </Link>
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce cooling costs with high-performance windows.</p>
            </Link>
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">New Installation</h3>
              <p className="text-gray-600">Professional installation for new construction.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Premium Windows for Flower Mound</h2>
          <p className="text-lg text-white/90 mb-10">Contact us for expert window services throughout Flower Mound.</p>
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

