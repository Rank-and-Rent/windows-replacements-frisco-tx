import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Denton TX | Window Installation Denton | Window Replacements of Frisco',
  description: 'Professional window services in Denton, TX. Expert installation and replacement for Denton County homes. Energy-efficient windows, free estimates.',
  keywords: 'window replacement Denton TX, Denton window installation, windows Denton',
}

export default function DentonPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pt-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Services in Denton, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco extends expert window services to Denton and Denton County. We provide professional installation, replacement, and repair for residential properties throughout the area.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Serving Denton County</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Denton&apos;s mix of historic homes, university housing, and modern developments requires diverse window expertise. From preserving character in historic districts to upgrading energy efficiency in newer homes, we deliver appropriate solutions for every Denton property.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team brings years of experience to Denton homes, providing windows that withstand North Texas weather while enhancing comfort and reducing energy costs. We work with homeowners, landlords, and property managers throughout Denton County.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">Complete Window Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Window replacement for all home styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Energy-efficient window upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Historic window restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-blue mt-1">•</span>
                  <span>Window repair and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Professional Window Solutions for Denton</h2>
          <p className="text-lg text-white/90 mb-10">Contact us today for expert window services throughout Denton County.</p>
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

