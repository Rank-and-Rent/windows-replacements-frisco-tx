import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Carrollton TX | Window Installation | Window Replacements of Frisco',
  description: 'Professional window services in Carrollton, TX. Serving all Carrollton and Hebron neighborhoods with expert window installation and replacement.',
  keywords: 'window replacement Carrollton TX, Carrollton window installation, windows Carrollton, Hebron windows',
}

export default function CarrolltonPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-carrollton-tx-4.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Carrollton, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Carrollton and Hebron with professional window installation, replacement, and repair services. Our expertise covers Carrollton&apos;s full range of residential properties from established neighborhoods to newer developments.
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-navy-600 mb-6">Expert Window Solutions for Carrollton</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Carrollton&apos;s established communities feature homes spanning several decades of construction. We provide window solutions appropriate for every era—from energy upgrades in 1970s-80s homes to replacements in 1990s-2000s developments and installations in new construction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our experience throughout Carrollton and Hebron ensures we understand local building styles, common window challenges, and the best solutions for your specific property. We deliver quality windows that enhance comfort, reduce energy costs, and increase home value.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8">
                <h3 className="font-serif text-xl text-navy-600 mb-4">Services We Provide</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Complete window replacement</li>
                  <li>• Energy-efficient upgrades</li>
                  <li>• Window repair services</li>
                  <li>• Custom window installation</li>
                  <li>• Commercial windows</li>
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-serif text-xl text-navy-600 mb-4">Why Choose Us</h3>
                <p className="text-gray-600">Trusted by Carrollton homeowners. Fast response, quality work, lifetime warranties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Quality Windows for Carrollton Homes</h2>
          <p className="text-lg text-white/90 mb-10">Ready to upgrade your Carrollton home? Contact us for a free estimate.</p>
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

