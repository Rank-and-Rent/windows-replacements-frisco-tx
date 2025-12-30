import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pella Windows Frisco TX | Authorized Dealer | Window Replacements of Frisco',
  description: 'Pella Windows authorized dealer in Frisco, TX. 250, 350, and Architect Series windows. Innovative designs, expert installation. Call (469) 908-2440.',
  keywords: 'Pella windows Frisco TX, Pella dealer, Pella window installation, Pella 350 series',
}

export default function PellaPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Pella Windows</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco is an authorized Pella Windows dealer, offering Pella&apos;s innovative window designs and exclusive features. With nearly a century of window manufacturing excellence, Pella delivers style, performance, and innovation.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Why Choose Pella Windows?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Innovative Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Pella pioneered integrated roller shades, between-the-glass blinds, and easy-clean designs. Their innovations make windows more functional and beautiful.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Superior Energy Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced Low-E coatings, argon gas fills, and triple-pane options deliver exceptional insulation. Perfect for Texas summers.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Beautiful Designs</h3>
              <p className="text-gray-600 leading-relaxed">
                Contemporary and traditional styles with extensive customization options. Pella windows complement any architectural aesthetic.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Durable Construction</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium materials and rigorous testing ensure Pella windows perform beautifully for decades in North Texas conditions.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Comprehensive Warranties</h3>
              <p className="text-gray-600 leading-relaxed">
                Strong warranty coverage protects your investment. Pella stands behind their products with industry-leading guarantees.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Easy Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Many Pella windows feature removable sashes for effortless cleaning and EnduraClad® exterior finishes that never need painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Pella Window Series</h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">250 Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Pella&apos;s 250 Series offers exceptional value with quality construction and energy efficiency. Perfect for budget-conscious Frisco homeowners seeking reliable vinyl windows with Pella performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vinyl construction for low maintenance</li>
                  <li>• Energy-efficient glass packages</li>
                  <li>• Multiple color and grid options</li>
                  <li>• Limited lifetime warranty</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1 bg-gray-200 h-80"></div>
              <div className="order-1 lg:order-2">
                <h3 className="font-serif text-3xl text-navy-600 mb-4">350 Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  The 350 Series combines wood interiors with durable exteriors, offering beautiful natural wood inside with low-maintenance protection outside.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wood interior for staining or painting</li>
                  <li>• EnduraClad® or vinyl exterior</li>
                  <li>• Advanced energy efficiency options</li>
                  <li>• Optional between-the-glass blinds</li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">Architect Series</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Pella&apos;s premium line featuring all-wood construction with aluminum-clad exteriors. Maximum customization and performance for luxury Frisco homes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium wood throughout</li>
                  <li>• Aluminum cladding in any color</li>
                  <li>• Integrated roller shade options</li>
                  <li>• Ultimate design flexibility</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Experience Pella Innovation</h2>
          <p className="text-lg text-white/90 mb-10">
            Discover how Pella windows can enhance your Frisco home with style and performance. Contact us for expert consultation.
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

