import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Little Elm TX | Window Installation | Window Replacements of Frisco',
  description: 'Professional window replacement in Little Elm, TX. Serving all Little Elm neighborhoods with expert installation and energy-efficient windows. Free estimates.',
  keywords: 'window replacement Little Elm TX, Little Elm window installation, windows Little Elm',
}

export default function LittleElmPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Replacement in Little Elm, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Little Elm&apos;s rapidly growing residential communities with expert window installation and replacement. As your neighborhood expands, we&apos;re here to keep your home comfortable and energy-efficient.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Serving Little Elm&apos;s Growing Community</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Little Elm has experienced tremendous growth over the past decade, with new neighborhoods sprouting throughout the area. Whether you&apos;re in an established section or a brand-new development, Window Replacements of Frisco provides window solutions that match your home&apos;s style and enhance its performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Many Little Elm homes are reaching the age where builder-grade windows need upgrading. We help homeowners transition to premium windows that reduce energy bills, improve comfort, and add lasting value to their investment.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Why Little Elm Homeowners Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Local service with fast response times</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Premium windows at competitive prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lifetime workmanship warranty</span>
                </li>
              </ul>
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
              <p className="text-gray-600">Upgrade builder-grade windows with premium energy-efficient models.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce cooling costs with high-performance window technology.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Window Repair</h3>
              <p className="text-gray-600">Fast repairs for glass, hardware, and operational problems.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Trusted Window Experts in Little Elm</h2>
          <p className="text-lg text-white/90 mb-10">
            Ready to upgrade your Little Elm home with quality windows? Contact us today for a free consultation and estimate.
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

