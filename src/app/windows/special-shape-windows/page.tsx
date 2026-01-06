import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Special Shape Windows Frisco TX | Custom Windows | Window Replacements of Frisco',
  description: 'Special shape window installation in Frisco, TX. Arched, circular, triangular, and geometric windows. Custom fabrication for unique architectural needs.',
  keywords: 'special shape windows Frisco TX, arched windows, circular windows, custom shaped windows',
}

export default function SpecialShapeWindowsPage() {
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
            <li className="text-navy-700 font-medium">Special Shape Windows</li>
          </ol>
        </div>
      </nav>
      
      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/windows/special-shape-windows-frisco-tx.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Special Shape Windows</h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Special shape windows transform architectural visions into reality. From arched and circular to triangular and geometric designs, these custom windows add distinctive character and dramatic impact to your Frisco home.
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
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Popular Special Shapes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Arched Windows</h3>
              <p className="text-gray-600">Radius and half-round designs that add elegance to entryways and great rooms.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Circular Windows</h3>
              <p className="text-gray-600">Full circles or ovals perfect for accent features and architectural drama.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Triangular Windows</h3>
              <p className="text-gray-600">Peaked, right-angle, or custom triangles for gables and unique spaces.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Geometric Shapes</h3>
              <p className="text-gray-600">Trapezoids, pentagons, and custom angles for contemporary designs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Create Your Custom Windows</h2>
          <p className="text-lg text-white/90 mb-10">Bring your architectural vision to life with custom special shape windows. Contact us to discuss your project.</p>
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

