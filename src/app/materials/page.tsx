import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { servicesData } from '@/data'

export const metadata: Metadata = {
  title: 'Window Materials | Vinyl, Aluminum, Fiberglass, Wood | Frisco, TX',
  description: 'Premium window materials in Frisco, TX. Vinyl, aluminum, fiberglass, Fibrex, wood-clad, and wood windows. Expert guidance on choosing the right material. Call (469) 908-2440.',
  keywords: 'window materials Frisco TX, vinyl windows, aluminum windows, fiberglass windows, wood windows, window frame materials',
}

export default function MaterialsPage() {
  const materialServices = servicesData.filter(s => s.category === 'Materials')

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="bg-stone-100 py-4 pt-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ol className="flex items-center space-x-2 text-sm text-navy-500">
              <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Materials</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              Window Materials in Frisco, TX
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Choose from premium window materials designed for Frisco's climate.
              Each material offers unique benefits in durability, energy efficiency, and aesthetic appeal.
            </p>
          </div>
        </section>

        {/* Materials Grid */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materialServices.map((service) => {
                // Map service slugs to image paths
                const imageMap: Record<string, string> = {
                  'vinyl-windows': '/window-types/vinyl-frisco-tx.jpg',
                  'aluminum-windows': '/window-types/aluminum-frisco-tx.jpg',
                  'fibrex-windows': '/window-types/fibrex-frisco-tx.jpg',
                  'fiberglass-windows': '/window-types/fiberglass-frisco-tx.jpg',
                  'wood-clad-windows': '/window-types/wood-clad-frisco-tx.jpg',
                  'wood-windows': '/window-types/wood-frisco-tx.jpg',
                }
                const image = imageMap[service.slug] || '/window-types/vinyl-frisco-tx.jpg'
                
                return (
                  <Link
                    key={service.slug}
                    href={service.route}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${image})` }}
                      />
                      <div className="absolute inset-0 bg-navy-600/20 group-hover:bg-navy-600/10 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-navy-600 mb-2 group-hover:text-slate-blue transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{service.short}</p>
                      <span className="text-sm font-medium text-slate-blue group-hover:text-navy-600 transition-colors">
                        Learn More
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Why Material Choice Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Energy Efficiency</h3>
                <p className="text-sm text-gray-600">Right material reduces heating and cooling costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Durability</h3>
                <p className="text-sm text-gray-600">Premium materials withstand Frisco's climate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Aesthetic Appeal</h3>
                <p className="text-sm text-gray-600">Materials complement your home's architecture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-2">Value</h3>
                <p className="text-sm text-gray-600">Quality materials enhance home value</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready to Choose Your Window Material?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for expert guidance on selecting the perfect window material for your Frisco home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:469-908-2440" 
                className="btn-outline-light px-8 py-4"
              >
                Call (469) 908-2440
              </a>
              <Link 
                href="/contact" 
                className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
