import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awning Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Awning window installation in Frisco, TX. Top-hinged windows that open outward, perfect for ventilation even during rain. Energy-efficient design.',
  keywords: 'awning windows Frisco TX, top hinged windows, awning window installation',
}

export default function AwningWindowsPage() {
  return (
    <main>
      <Header />
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Awning Windows</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Awning windows are hinged at the top and open outward from the bottom, creating a protective awning that allows ventilation even during rain. Perfect for bathrooms, kitchens, and above doors in your Frisco home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Choose Awning Windows?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Weather Protection</h3>
              <p className="text-gray-600">Open during rain without water entering—the angled sash acts as an awning to deflect moisture.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient</h3>
              <p className="text-gray-600">Tight seal when closed prevents air leakage. Excellent energy performance for Texas climate.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Versatile Placement</h3>
              <p className="text-gray-600">Ideal for above doors, in bathrooms, basements, or anywhere you need weatherproof ventilation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Awning Windows</h2>
          <p className="text-lg text-white/90 mb-10">Contact us for expert awning window installation.</p>
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

