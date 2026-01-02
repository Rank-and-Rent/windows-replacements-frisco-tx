import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Addison TX | Residential Windows | Window Replacements of Frisco',
  description: 'Window services in Addison, TX. Residential window installation and replacement. Expert service for Addison properties.',
  keywords: 'window replacement Addison TX, Addison window installation, residential windows Addison',
}

export default function AddisonPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Addison, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Addison with residential window solutions. We deliver quality window services throughout Addison homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Request Quote</Link>
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Residential Window Expertise</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-navy-600 mb-4">Residential Window Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              For Addison homeowners, we provide high-quality window replacement and installation services. Energy-efficient windows that reduce noise and enhance comfort in urban living environments.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Professional Window Services in Addison</h2>
          <p className="text-lg text-white/90 mb-10">Contact us for residential window solutions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Request Quote</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

