import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Double-Hung Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Double-hung window installation in Frisco, TX. Both sashes operate, tilt-in for easy cleaning. Energy-efficient, classic design. Expert installation.',
  keywords: 'double-hung windows Frisco TX, double hung window installation, replacement windows',
}

export default function DoubleHungWindowsPage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center space-x-2 text-sm text-navy-500">
            <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows" className="hover:text-navy-700">Windows</Link></li>
            <li>/</li>
            <li className="text-navy-700 font-medium">Double-Hung Windows</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/windows/double-hung-windows-frisco-tx.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Double-Hung Windows
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Double-hung windows are America&apos;s most popular window style, featuring two independently operating sashes that slide vertically. Both the top and bottom sashes move, providing superior ventilation control and easy cleaning access. Perfect for any room in your Frisco home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Get Free Estimate</Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">Why Choose Double-Hung Windows?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Maximum Versatility</h3>
              <p className="text-gray-600 leading-relaxed">
                Both sashes operate independently, allowing you to open from the top, bottom, or both for customized ventilation. Create airflow patterns that suit your comfort needs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Easy Cleaning</h3>
              <p className="text-gray-600 leading-relaxed">
                Tilt-in sashes let you clean exterior glass from inside your home. No more dangerous ladder work or hiring window cleaners for upper floors.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Classic Style</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional vertical sliding design complements any architectural style from historic to contemporary. Timeless aesthetics that never go out of fashion.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern double-hung windows feature weatherstripping, Low-E glass, and argon fills that deliver excellent insulation and reduce energy costs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Safety Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure locking systems at the meeting rail, plus the ability to open from the top for ventilation while maintaining security at ground level.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Wide Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Available in numerous sizes, materials, colors, and grid patterns. Customize to match your home&apos;s aesthetic perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">How Double-Hung Windows Work</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Operating Mechanism</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern double-hung windows use spring-loaded balance systems that allow both sashes to glide smoothly up and down. Unlike old-fashioned weight-and-pulley systems, these balances are hidden in the frame, require no maintenance, and provide consistent operation for decades.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The sashes lock together at the meeting rail (where they overlap in the middle) with a secure latch. Many models also include additional locks for enhanced security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To clean, simply unlock the sashes and tilt them inward. The sashes pivot on hidden hinges, giving you full access to exterior glass surfaces from the comfort and safety of your home&apos;s interior.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Ventilation Options</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Bottom Sash Only:</strong> Open the bottom sash for standard ventilation. Cool air enters from below while warm air exits through any other openings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Top Sash Only:</strong> Open the top sash to let hot air escape while maintaining privacy and security. Particularly useful for bedrooms and bathrooms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Both Sashes:</strong> Open both for maximum airflow. Creates natural convection as cool air enters low and warm air exits high.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Partial Opening:</strong> Slide sashes to any position for precise ventilation control. Lock them in place when desired.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Double-Hung Windows in Your Frisco Home</h2>
          <p className="text-lg text-white/90 mb-10">
            Experience the convenience and versatility of double-hung windows. Contact us for expert installation and a free estimate.
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

