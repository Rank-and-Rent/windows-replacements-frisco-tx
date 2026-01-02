import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[70vh] flex items-center justify-center bg-cream-bg pt-32">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h1 className="text-8xl lg:text-9xl font-serif text-navy-600 mb-6">404</h1>
            <h2 className="text-2xl lg:text-3xl font-serif text-navy-600 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you are looking for does not exist or has been moved. 
              Please check the URL or use the links below to find what you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/" 
                className="bg-navy-600 text-white px-8 py-4 font-medium tracking-wide hover:bg-navy-700 transition-colors"
              >
                Go Home
              </Link>
              <Link 
                href="/contact" 
                className="border border-navy-600 text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-navy-600 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-serif text-navy-600 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/windows" className="text-slate-blue hover:text-navy-600 transition-colors">
                  Windows
                </Link>
                <Link href="/doors" className="text-slate-blue hover:text-navy-600 transition-colors">
                  Doors
                </Link>
                <Link href="/brands" className="text-slate-blue hover:text-navy-600 transition-colors">
                  Brands
                </Link>
                <Link href="/locations" className="text-slate-blue hover:text-navy-600 transition-colors">
                  Locations
                </Link>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 mb-3">Need immediate assistance?</p>
              <a 
                href="tel:469-908-2440" 
                className="text-xl font-medium text-navy-600 hover:text-slate-blue transition-colors"
              >
                Call (469) 908-2440
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
