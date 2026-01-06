import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casement Windows Frisco TX | Installation & Replacement | Window Replacements of Frisco',
  description: 'Casement window installation in Frisco, TX. Crank-operated windows with unobstructed views and excellent ventilation. Energy-efficient, modern design.',
  keywords: 'casement windows Frisco TX, crank windows, casement window installation',
}

export default function CasementWindowsPage() {
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
            <li className="text-navy-700 font-medium">Casement Windows</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/windows/casement-windows-frisco-tx.webp)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Casement Windows</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Casement windows offer unobstructed views, maximum ventilation, and contemporary style. These hinged windows crank open outward, providing 100% ventilation area and exceptional energy efficiency for your Frisco home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Benefits of Casement Windows</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Maximum Ventilation</h3>
              <p className="text-gray-600">100% of the window opens for unparalleled airflow—no sliding sashes blocking half the opening.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">When closed, the sash presses against the frame for an extremely tight seal that prevents air leakage.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Unobstructed Views</h3>
              <p className="text-gray-600">No center rail or muntins required—enjoy clear, expansive views of your surroundings.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Install Casement Windows Today</h2>
          <p className="text-lg text-white/90 mb-10">Contact us for expert casement window installation in Frisco.</p>
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

