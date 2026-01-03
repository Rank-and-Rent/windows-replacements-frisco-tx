import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Prosper TX | Luxury Window Installation | Window Replacements of Frisco',
  description: 'Professional window services in Prosper, TX. Expert installation for luxury homes and new construction. Premium Andersen, Pella, and Jeld-Wen windows.',
  keywords: 'window replacement Prosper TX, Prosper window installation, luxury windows Prosper',
}

export default function ProsperPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-prosper-tx-2.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Luxury Window Services in Prosper, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Prosper&apos;s luxury home market with premium window installation and replacement services. From custom estates to new construction developments, we deliver windows that match the quality of Prosper&apos;s finest homes.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Premium Windows for Prosper Luxury Homes</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Prosper&apos;s rapid transformation into a luxury residential destination demands window solutions that match the area&apos;s architectural ambitions. Large custom homes with dramatic window walls, specialty shapes, and high-end finishes require expert specification and installation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work with Prosper&apos;s leading builders and homeowners to deliver Andersen Architectural Collection, Pella Designer Series, and other premium window lines. Our custom fabrication capabilities handle oversized units, complex configurations, and distinctive architectural details.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Premium Window Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom sizes and specialty shapes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Designer hardware and finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Maximum energy efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Prosper Window Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/windows/special-shape-windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Custom Windows</h3>
              <p className="text-gray-600">Architectural windows for Prosper's distinctive luxury homes.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">Premium performance windows that reduce energy costs.</p>
            </Link>
            <Link href="/windows" className="bg-cream-100 p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">New Construction</h3>
              <p className="text-gray-600">Expert installation for new Prosper home builds.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Luxury Window Solutions for Prosper</h2>
          <p className="text-lg text-white/90 mb-10">
            Elevate your Prosper home with premium windows that match its architectural excellence. Contact us for expert consultation.
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
