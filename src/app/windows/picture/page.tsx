import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picture Windows Frisco TX | Large Fixed Windows | Window Replacements of Frisco',
  description: 'Picture window installation in Frisco, TX. Large fixed windows for maximum views and natural light. Energy-efficient, no moving parts.',
  keywords: 'picture windows Frisco TX, fixed windows, large windows, picture window installation',
}

export default function PictureWindowsPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Picture Windows</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Picture windows are large, fixed windows designed to frame views like a picture. With no moving parts, they offer unobstructed sightlines, maximum natural light, and superior energy efficiency for your Frisco home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Choose Picture Windows?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Maximum Views</h3>
              <p className="text-gray-600">No sashes, frames, or muntins interrupting your view. Pure glass for panoramic sightlines.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Superior Efficiency</h3>
              <p className="text-gray-600">No moving parts means no air leakage. The most energy-efficient window type available.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Flood Light</h3>
              <p className="text-gray-600">Large glass areas maximize natural daylight, reducing need for artificial lighting during the day.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Picture Windows</h2>
          <p className="text-lg text-white/90 mb-10">Contact us for picture window installation in Frisco.</p>
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

