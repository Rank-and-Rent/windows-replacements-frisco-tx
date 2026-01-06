import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Service Areas Near Frisco TX | Window Replacements of Frisco',
  description: 'Professional window replacement services throughout North Texas. Serving Plano, McKinney, Allen, The Colony, and 11 more cities near Frisco. Free estimates, expert installation.',
  keywords: 'window replacement near Frisco, North Texas window services, DFW window installation, Collin County windows',
}

const locations = [
  {
    city: 'Plano',
    distance: '5 miles',
    description: 'Comprehensive window services for Plano homes and businesses, from Legacy to West Plano.',
    href: '/locations/plano-tx'
  },
  {
    city: 'McKinney',
    distance: '9 miles',
    description: 'Expert window installation and replacement throughout McKinney, including historic downtown.',
    href: '/locations/mckinney-tx'
  },
  {
    city: 'Allen',
    distance: '8 miles',
    description: 'Professional window solutions for Allen neighborhoods, from Watters Creek to Twin Creeks.',
    href: '/locations/allen-tx'
  },
  {
    city: 'The Colony',
    distance: '7 miles',
    description: 'Quality window services for The Colony properties near Lewisville Lake.',
    href: '/locations/the-colony-tx'
  },
  {
    city: 'Little Elm',
    distance: '6 miles',
    description: 'Trusted window replacement for Little Elm\'s growing residential communities.',
    href: '/locations/little-elm-tx'
  },
  {
    city: 'Prosper',
    distance: '6 miles',
    description: 'Premium window installation for Prosper\'s luxury homes and new construction.',
    href: '/locations/prosper-tx'
  },
  {
    city: 'Celina',
    distance: '12 miles',
    description: 'Reliable window services for Celina\'s expanding neighborhoods.',
    href: '/locations/celina-tx'
  },
  {
    city: 'Lewisville',
    distance: '11 miles',
    description: 'Expert window replacement for Lewisville homes.',
    href: '/locations/lewisville-tx'
  },
  {
    city: 'Carrollton',
    distance: '13 miles',
    description: 'Professional window solutions throughout Carrollton and Hebron.',
    href: '/locations/carrollton-tx'
  },
  {
    city: 'Denton',
    distance: '19 miles',
    description: 'Quality window installation for Denton County homes and businesses.',
    href: '/locations/denton-tx'
  },
  {
    city: 'Richardson',
    distance: '15 miles',
    description: 'Trusted window replacement for Richardson neighborhoods.',
    href: '/locations/richardson-tx'
  },
  {
    city: 'Addison',
    distance: '12 miles',
    description: 'Residential window services in Addison.',
    href: '/locations/addison-tx'
  },
  {
    city: 'Dallas',
    distance: '25 miles',
    description: 'Comprehensive window services for North Dallas and surrounding areas.',
    href: '/locations/dallas-tx'
  },
  {
    city: 'Coppell',
    distance: '16 miles',
    description: 'Expert window replacement for Coppell\'s established communities.',
    href: '/locations/coppell-tx'
  },
  {
    city: 'Flower Mound',
    distance: '14 miles',
    description: 'Premium window solutions for Flower Mound homes.',
    href: '/locations/flower-mound-tx'
  }
]

export default function LocationsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Window Services Throughout North Texas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Based in Frisco, Window Replacements of Frisco serves homeowners and businesses across Collin and Denton Counties. Our experienced team brings premium window solutions to your neighborhood with the same quality and professionalism that has made us Frisco&apos;s trusted choice.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Cities We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any city below to learn more about our services in your area, see local projects, and read reviews from your neighbors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => {
              // Map city names to image paths
              const imageMap: Record<string, string> = {
                'Plano': '/locations/window-replacement-plano-tx-5.jpg',
                'McKinney': '/locations/window-replacement-mckinney-tx-4.webp',
                'Allen': '/locations/window-replacement-allen-tx-3.jpg',
                'The Colony': '/locations/window-replacement-the-colony-tx.jpg',
                'Little Elm': '/locations/window-replacement-little-elm-tx.webp',
                'Prosper': '/locations/window-replacement-prosper-tx-2.jpg',
                'Celina': '/locations/window-replacement-celina-tx.jpg',
                'Lewisville': '/locations/window-replacement-lewisville-tx-3.jpg',
                'Carrollton': '/locations/window-replacement-carrollton-tx-4.jpg',
                'Denton': '/locations/window-replacement-denton-tx.jpg',
                'Richardson': '/locations/window-replacement-richardson-tx-3.jpg',
                'Addison': '/locations/window-replacement-addison-tx-3.jpg',
                'Dallas': '/locations/window-replacement-dallas-tx-4.jpg',
                'Coppell': '/locations/window-replacement-coppell-tx-2.webp',
                'Flower Mound': '/locations/window-replacement-flower-mound-tx-2.jpg',
              }
              const image = imageMap[location.city] || '/locations/window-replacement-frisco-tx-4.jpg'
              
              return (
                <Link
                  key={location.city}
                  href={location.href}
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
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl text-navy-600 group-hover:text-slate-blue transition-colors">
                        {location.city}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{location.distance}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {location.description}
                    </p>
                    <span className="text-sm font-medium text-slate-blue group-hover:text-navy-600 transition-colors">
                      View Services
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Local Expertise, Regional Service
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Deep Local Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 15 years serving North Texas means we understand regional architecture, climate challenges, and building codes intimately.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Fast Response Times</h3>
              <p className="text-gray-600 leading-relaxed">
                Being locally based means we can respond quickly to consultations, measurements, and installations throughout our service area.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                <svg className="w-8 h-8 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Community Reputation</h3>
              <p className="text-gray-600 leading-relaxed">
                Your neighbors trust us. Our reputation is built on thousands of satisfied customers throughout Collin and Denton Counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Complete Window Services in Every Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 text-center">
              <h3 className="font-serif text-lg text-navy-600 mb-2">Installation</h3>
              <p className="text-sm text-gray-600">New construction and retrofit installations</p>
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="font-serif text-lg text-navy-600 mb-2">Replacement</h3>
              <p className="text-sm text-gray-600">Full window replacement for aging units</p>
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="font-serif text-lg text-navy-600 mb-2">Repair</h3>
              <p className="text-sm text-gray-600">Glass, hardware, and seal repairs</p>
            </div>
            <div className="bg-white p-6 text-center">
              <h3 className="font-serif text-lg text-navy-600 mb-2">Custom</h3>
              <p className="text-sm text-gray-600">Special shapes and architectural windows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Serving Your Community
          </h2>
          <p className="text-lg text-white/90 mb-10">
            No matter where you are in the North Texas area, Window Replacements of Frisco is ready to provide expert window services. Contact us today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Schedule Free Consultation
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

