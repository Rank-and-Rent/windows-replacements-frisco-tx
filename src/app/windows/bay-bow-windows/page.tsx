import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bay & Bow Windows Frisco TX | Installation | Window Replacements of Frisco',
  description: 'Bay and bow window installation in Frisco, TX. Projecting windows that add space, light, and architectural interest. Custom fabrication available.',
  keywords: 'bay windows Frisco TX, bow windows, bay window installation, bow window installation',
}

export default function BayBowWindowsPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Bay & Bow Windows</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Bay and bow windows project outward from your home, creating additional interior space while flooding rooms with natural light. These architectural features add elegance, value, and charm to any Frisco home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Bay vs. Bow Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Bay Windows</h3>
              <p className="text-gray-600 mb-4">Typically feature three windows at angles: a large center picture window flanked by two operating casements or double-hungs at 30-45 degree angles.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Creates distinct window seat area</li>
                <li>• More angular, dramatic appearance</li>
                <li>• Usually projects 12-24 inches</li>
                <li>• Perfect for living rooms and dining areas</li>
              </ul>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Bow Windows</h3>
              <p className="text-gray-600 mb-4">Feature four to six windows arranged in a gentle curve, creating a rounded projection that offers panoramic views and elegant styling.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Smooth, curved appearance</li>
                <li>• More windows for wider views</li>
                <li>• Usually projects 10-18 inches</li>
                <li>• Ideal for master bedrooms and sitting rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Bay or Bow Windows</h2>
          <p className="text-lg text-white/90 mb-10">Transform your home with elegant bay or bow windows. Contact us for expert installation.</p>
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

