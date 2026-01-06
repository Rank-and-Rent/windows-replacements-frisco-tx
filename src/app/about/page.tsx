import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Us | Window Replacements of Frisco',
  description: 'Learn about Window Replacements of Frisco - your trusted window and door installation experts serving Frisco, TX and surrounding areas. Call (469) 908-2440.',
  keywords: 'about Window Replacements of Frisco, window company Frisco, door company Frisco, local window installer',
}

export default function AboutPage() {
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
              <li className="text-navy-700 font-medium">About</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              About Window Replacements of Frisco
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your trusted partner for premium window and door installation in Frisco, Texas and the surrounding communities.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Window Replacements of Frisco was founded with a simple mission: to provide homeowners in the Frisco area with exceptional window and door installation services backed by premium products and expert craftsmanship.
                </p>
                <p className="text-gray-600 mb-6">
                  We understand that your windows and doors are more than just openings in your walls. They are essential components that affect your home&apos;s comfort, energy efficiency, security, and curb appeal. That is why we partner exclusively with America&apos;s most trusted manufacturers including Andersen, Pella, JELD-WEN, and Marvin.
                </p>
                <p className="text-gray-600">
                  Our team of factory-trained installers brings years of experience to every project, ensuring that your new windows and doors not only look beautiful but perform flawlessly for decades to come.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-stone-50 rounded">
                    <span className="block text-3xl font-serif text-slate-blue mb-2">1000+</span>
                    <span className="text-sm text-gray-600">Projects Completed</span>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded">
                    <span className="block text-3xl font-serif text-slate-blue mb-2">4</span>
                    <span className="text-sm text-gray-600">Premium Brands</span>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded">
                    <span className="block text-3xl font-serif text-slate-blue mb-2">24/7</span>
                    <span className="text-sm text-gray-600">Emergency Service</span>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded">
                    <span className="block text-3xl font-serif text-slate-blue mb-2">100%</span>
                    <span className="text-sm text-gray-600">Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Premium Products Only</h3>
                <p className="text-gray-600 text-sm">We exclusively install windows and doors from Andersen, Pella, JELD-WEN, and Marvin. No off-brands or inferior products.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Expert Installation</h3>
                <p className="text-gray-600 text-sm">Our factory-trained installers ensure every window and door is installed to manufacturer specifications for optimal performance.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Timely Service</h3>
                <p className="text-gray-600 text-sm">We respect your time with prompt arrivals, efficient work, and clear communication throughout your project.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">Free estimates with detailed quotes. No hidden fees or surprise charges. We stand behind our prices.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Warranty Protection</h3>
                <p className="text-gray-600 text-sm">Comprehensive manufacturer warranties plus our own workmanship guarantee for complete peace of mind.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-navy-600 mb-3">Local Expertise</h3>
                <p className="text-gray-600 text-sm">We know Frisco and understand the local climate, building codes, and architectural styles of our community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="py-16 lg:py-24 bg-stone-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We exclusively install windows and doors from America&apos;s most respected manufacturers, ensuring premium quality and lasting performance for your Frisco home.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <Link href="/brands/andersen-windows-doors" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <img
                  src="/andersen-windows-and-doors-frisco-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className="h-12 lg:h-16 w-auto mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-serif text-navy-600 mb-2">Andersen</h3>
                <p className="text-sm text-gray-600">America&apos;s Most Trusted Window Brand</p>
              </Link>
              <Link href="/brands/pella-windows-doors" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <img
                  src="/pella-windows-and-doors-frisco-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className="h-12 lg:h-16 w-auto mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-serif text-navy-600 mb-2">Pella</h3>
                <p className="text-sm text-gray-600">Expertly Designed. Exceptionally Built.</p>
              </Link>
              <Link href="/brands/jeld-wen-windows-doors" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <img
                  src="/jeld-wen-windows-and-doors-frisco-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className="h-12 lg:h-16 w-auto mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-serif text-navy-600 mb-2">JELD-WEN</h3>
                <p className="text-sm text-gray-600">Reliable Performance. Exceptional Value.</p>
              </Link>
              <Link href="/brands/marvin-windows-doors" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <img
                  src="/marvin-windows-and-doors-frisco-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className="h-12 lg:h-16 w-auto mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-serif text-navy-600 mb-2">Marvin</h3>
                <p className="text-sm text-gray-600">Premium Custom Craftsmanship</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate. We look forward to helping you transform your Frisco home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                Call (469) 908-2440
              </a>
              <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors">
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
