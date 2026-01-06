import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import MaterialsSection from '@/components/materials-section'
import { servicesData } from '@/data'

export const metadata: Metadata = {
  title: 'Window Replacement Services | Frisco, TX | All Styles & Materials',
  description: 'Complete window replacement services in Frisco, TX. All window styles and materials from Andersen, Pella, JELD-WEN, Marvin. Luxury solutions for exclusive estates. Call (469) 908-2440.',
  keywords: 'window replacement Frisco TX, window styles, window materials, luxury windows, vinyl windows, aluminum windows',
}

export default function WindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

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
              <li className="text-navy-700 font-medium">Windows</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              Window Replacement in Frisco, Texas
            </h1>
            <p className="text-lg text-stone-200 max-w-3xl mx-auto mb-8">
              Luxury window materials crafted for Frisco&apos;s exclusive estates and affluent developments.
              Ultra-premium options designed for North Texas&apos;s most prestigious addresses.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold-500 text-navy-900 px-8 py-4 rounded-md font-medium hover:bg-gold-600 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </section>

        {/* Window Styles Section */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-4 text-center">Window Styles</h2>
            <p className="text-lg text-navy-600 text-center max-w-2xl mx-auto mb-12">
              Choose from our comprehensive selection of premium window styles
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {windowServices.map((service) => {
                // Map service slugs to image paths
                const imageMap: Record<string, string> = {
                  'double-hung-windows': '/windows/double-hung-windows-frisco-tx.jpg',
                  'single-hung-windows': '/windows/single-hung-windows-frisco-tx.jpg',
                  'casement-windows': '/windows/casement-windows-frisco-tx.webp',
                  'awning-windows': '/windows/awning-windows-frisco-tx.webp',
                  'sliding-windows': '/windows/sliding-windows-frisco-tx.jpg',
                  'picture-windows': '/windows/picture-windows-frisco-tx.webp',
                  'bay-bow-windows': '/windows/bay-bow-windows-frisco-tx.jpg',
                  'special-shape-windows': '/windows/special-shape-windows-frisco-tx.jpg',
                }
                const image = imageMap[service.slug] || '/windows/double-hung-windows-frisco-tx.jpg'
                
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

        <MaterialsSection />

        {/* Why Choose Section */}
        <section className="bg-stone-100 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-900 mb-12 text-center">
              Why Frisco Homeowners Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-navy-900 mb-3">Luxury Grade Materials</h3>
                <p className="text-navy-600">Ultra-premium windows that meet affluent expectations for perfection.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-navy-900 mb-3">Estate Quality</h3>
                <p className="text-navy-600">Bespoke craftsmanship for Frisco&apos;s custom estates and luxury properties.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-navy-900 mb-3">Exclusive Service</h3>
                <p className="text-navy-600">White-glove installation that respects your property and schedule.</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-navy-900 mb-3">Investment Value</h3>
                <p className="text-navy-600">Windows that enhance property value in Frisco&apos;s premium market.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-900 mb-6">
              Ready for Premium Window Replacement?
            </h2>
            <p className="text-lg text-navy-600 mb-8">
              Frisco&apos;s luxury window specialists help you select ultra-premium materials with exclusive aesthetics and investment-grade quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4699082440"
                className="inline-block bg-navy-600 text-white px-8 py-4 rounded-md font-medium hover:bg-navy-700 transition-colors"
              >
                Call (469) 908-2440
              </a>
              <Link
                href="/contact"
                className="inline-block bg-gold-500 text-navy-900 px-8 py-4 rounded-md font-medium hover:bg-gold-600 transition-colors"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
