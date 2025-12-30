import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Services Frisco TX | Installation, Replacement & Repair | Window Replacements of Frisco',
  description: 'Comprehensive window services in Frisco, TX. Expert installation, replacement, repair, energy-efficient upgrades, and custom solutions. Licensed, insured, and trusted by homeowners since 2010.',
  keywords: 'window services Frisco, window installation, window replacement, window repair, energy efficient windows, custom windows, commercial windows',
}

const services = [
  {
    title: 'Window Installation',
    href: '/services/window-installation',
    description: 'Professional installation of new windows with precision craftsmanship and attention to detail. We ensure perfect fit, optimal performance, and lasting durability.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
  },
  {
    title: 'Window Replacement',
    href: '/services/window-replacement',
    description: 'Full-service window replacement for aging or damaged windows. Upgrade to modern, energy-efficient models that enhance comfort and reduce utility costs.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
  },
  {
    title: 'Window Repair',
    href: '/services/window-repair',
    description: 'Expert repairs for broken glass, damaged frames, faulty hardware, and seal failures. Fast, reliable service that extends the life of your windows.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
  },
  {
    title: 'Energy-Efficient Windows',
    href: '/services/energy-efficient-windows',
    description: 'Specialized installation of high-performance windows featuring Low-E glass, argon fill, and advanced framing for maximum energy savings.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
  },
  {
    title: 'Custom Windows',
    href: '/services/custom-windows',
    description: 'Tailored window solutions for unique architectural requirements. From special shapes to historic replications, we bring your vision to life.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    title: 'Commercial Windows',
    href: '/services/commercial-windows',
    description: 'Large-scale window projects for commercial properties, offices, and multi-family buildings. Coordinated scheduling and minimal business disruption.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  }
]

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-gradient-to-br from-navy-600 to-navy-500">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Comprehensive Window Services in Frisco, Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              From new construction installations to precision repairs, Window Replacements of Frisco delivers exceptional craftsmanship and lasting results. With over 15 years of experience serving North Texas, we combine technical expertise with personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-600/40 to-transparent" />
                </div>
                <div className="p-8 lg:p-10">
                  <h2 className="font-serif text-2xl lg:text-3xl text-navy-600 mb-4 group-hover:text-slate-blue transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-blue uppercase tracking-wider group-hover:gap-4 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Why Frisco Homeowners Trust Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully licensed, bonded, and insured for your peace of mind. Every project is backed by comprehensive coverage and industry certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">15+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Over a decade serving North Texas with thousands of successful installations. Our expertise ensures flawless execution every time.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                Manufacturer warranties on all products plus our own workmanship guarantee. We stand behind every window we install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Schedule a free consultation with our window experts. We&apos;ll assess your needs, discuss options, and provide a detailed estimate with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Get Free Estimate
            </Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
              Call (469) 908-2440
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

