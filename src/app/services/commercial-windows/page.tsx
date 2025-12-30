import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Windows Frisco TX | Office & Building Windows | Window Replacements of Frisco',
  description: 'Commercial window installation and replacement in Frisco, TX. Multi-family, office buildings, retail spaces. Large-scale projects, minimal disruption, professional coordination.',
  keywords: 'commercial windows Frisco TX, office windows, storefront windows, multi-family windows, commercial window installation',
}

export default function CommercialWindowsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
                Commercial Window Solutions for Frisco Businesses
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Window Replacements of Frisco delivers comprehensive commercial window services for offices, retail spaces, multi-family properties, and institutional buildings. We understand the unique demands of commercial projects and execute with minimal business disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Request Commercial Quote
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Commercial office building windows in Frisco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Commercial Properties We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From small professional offices to large multi-building complexes, we have the expertise and resources to handle commercial projects of any scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Office Buildings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern office environments demand windows that balance natural light, energy efficiency, and professional appearance. We install high-performance curtain walls, ribbon windows, and punched openings that meet commercial building codes and LEED requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our scheduling accommodates business operations—working during off-hours, weekends, or in phased sequences to minimize tenant disruption. Each installation maintains building security and weather protection throughout the project.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Retail & Storefront</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Retail windows showcase products, invite customers, and define brand identity. We specialize in large display windows, curtain wall systems, and entrance assemblies that combine visual impact with security and energy performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Understanding that retail never stops, we coordinate installations during closed hours or use temporary protections to keep businesses operating. Our team works efficiently to minimize impact on sales and customer experience.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Multi-Family Properties</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Apartment complexes, condominiums, and senior living facilities require coordinated window replacements across dozens or hundreds of units. We manage large-scale projects with systematic scheduling, clear resident communication, and consistent quality control.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our experience includes occupied renovations where residents remain in place. We work unit by unit, completing each space in a single day when possible, and maintaining stringent safety and cleanliness standards throughout properties.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Institutional Buildings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Schools, healthcare facilities, municipal buildings, and religious institutions have specialized requirements for security, accessibility, and durability. We provide solutions that meet institutional standards while staying within public sector budgets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team understands institutional procurement processes, prevailing wage requirements, and compliance documentation. We coordinate with facilities managers to schedule work during breaks, holidays, or maintenance windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Advantages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Why Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Project Management Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated project managers coordinate every aspect—from initial site surveys through final inspections. You&apos;ll have a single point of contact who understands your timeline, budget, and operational constraints.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Volume Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Large commercial projects benefit from economies of scale. We leverage manufacturer relationships to secure competitive pricing on bulk orders while maintaining premium quality standards.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                We work around your business operations—evenings, weekends, holidays, or phased installations. Our crews are experienced with occupied buildings and maintain professional conduct at all times.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Code Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Full knowledge of International Building Code, OSHA requirements, ADA accessibility standards, and local Frisco ordinances. We handle all permits, inspections, and compliance documentation.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive safety programs including OSHA training, fall protection, and job site safety plans. Our teams maintain spotless safety records and carry full commercial insurance coverage.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Warranty & Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Commercial warranties on all materials and workmanship. Responsive service for any post-installation issues. We stand behind our work long-term with maintenance programs available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Commercial Window Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Curtain Wall Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Non-structural exterior walls consisting of aluminum framing and glass infill. Curtain walls create striking modern aesthetics while providing superior energy performance and weather protection. We install stick-built and unitized systems.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maximum natural light and unobstructed views</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thermally broken frames for energy efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Engineered for wind loads and structural movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom colors and finishes available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Storefront Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aluminum-framed entrance systems and display windows at ground level. Storefront combines large glass areas with door assemblies, creating inviting entries while meeting security and accessibility requirements. Ideal for retail and office lobbies.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maximum visibility for retail display</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrated door systems with automatic operators</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Impact-resistant glass options for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ADA compliant threshold details</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Punched Openings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Individual window units installed in wall openings—the most common commercial window type. We install aluminum, vinyl, and fiberglass windows designed for commercial durability and performance. Suitable for offices, schools, and multi-family buildings.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost-effective for most applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple operating styles available</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy to specify and order</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individual unit replacement simplified</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Specialty Commercial Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Blast-resistant windows for sensitive facilities, fire-rated assemblies for code requirements, sound-control windows for noisy environments, and bullet-resistant glazing for high-security applications. We source and install specialty products meeting stringent performance criteria.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fire-rated assemblies up to 3-hour ratings</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hurricane-impact and blast-resistant glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sound control windows for STC ratings 40+</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified installation documentation provided</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Our Commercial Project Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                1
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Site Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We survey your property, document existing conditions, take measurements, and identify any structural or access challenges. This assessment informs accurate proposals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                2
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Detailed Proposal</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive quotes include specifications, timeline projections, phasing plans, and transparent pricing. We present options to meet performance goals and budgets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                3
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Coordination</h3>
              <p className="text-gray-600 leading-relaxed">
                Pre-construction meetings establish schedules, communication protocols, safety procedures, and site logistics. We coordinate with property managers and tenants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                4
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional crews execute the project on schedule with daily progress reports. Final inspections ensure quality and code compliance before project closeout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Whether you&apos;re planning new construction, renovation, or replacing failing windows, we&apos;re ready to provide expert guidance and competitive pricing. Contact us to schedule a site assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Request Commercial Quote
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

