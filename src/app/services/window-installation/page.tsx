import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Window Installation Frisco TX | Expert Installers | Window Replacements of Frisco',
  description: 'Expert window installation in Frisco, TX. Precision craftsmanship for new construction and retrofit projects. Andersen, Pella, and Jeld-Wen certified installers. Free estimates.',
  keywords: 'window installation Frisco TX, new window installation, professional window installers, Andersen installation, Pella installation',
}

export default function WindowInstallationPage() {
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
                Professional Window Installation Services
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Transform your Frisco home with expertly installed windows that enhance beauty, comfort, and energy efficiency. Our certified installers bring precision craftsmanship to every project, whether you&apos;re building new or upgrading existing windows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Schedule Consultation
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Professional window installation in Frisco home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Our Meticulous Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every window installation follows our proven methodology developed over 15 years of serving North Texas homeowners. We combine technical precision with respect for your home and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                1
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Initial Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We visit your home to measure existing openings, assess structural conditions, and discuss your preferences for style, operation, and performance features.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                2
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Custom Ordering</h3>
              <p className="text-gray-600 leading-relaxed">
                Based on precise measurements, we order your windows from top manufacturers. Each unit is built to your exact specifications, ensuring perfect fit and performance.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                3
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified technicians carefully remove old windows, prepare openings, and install new units with meticulous attention to alignment, sealing, and weatherproofing.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                4
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Quality Inspection</h3>
              <p className="text-gray-600 leading-relaxed">
                Before we leave, we test every window for smooth operation, proper sealing, and secure locking. We clean up thoroughly and walk you through care instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Premium Window Brands We Install
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Andersen Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As certified Andersen installers, we specialize in their complete line including the 400 Series, A-Series, and E-Series. These windows combine timeless design with cutting-edge performance.
              </p>
              <Link href="/brands/andersen" className="text-slate-blue hover:text-navy-600 font-medium inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Pella Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pella&apos;s innovative features like Integrated Roller Shades and their exclusive Dual Action hardware make them a favorite for homeowners seeking both beauty and functionality.
              </p>
              <Link href="/brands/pella" className="text-slate-blue hover:text-navy-600 font-medium inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Jeld-Wen Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Offering exceptional value without compromising quality, Jeld-Wen windows deliver outstanding energy efficiency and durability backed by comprehensive warranties.
              </p>
              <Link href="/brands/jeld-wen" className="text-slate-blue hover:text-navy-600 font-medium inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Installation Types We Specialize In
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">New Construction</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Building a new home in Frisco? We work directly with builders and homeowners to select and install windows that match architectural vision while meeting energy codes. Our team coordinates seamlessly with construction schedules, delivering windows when your project needs them.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We handle everything from initial product selection through final installation and inspection, ensuring your new home features windows that will perform beautifully for decades.
              </p>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Retrofit Installation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Replacing windows in your existing Frisco home requires specialized techniques to ensure proper fit and weatherproofing. Our retrofit specialists carefully remove old windows while protecting interior finishes and exterior siding.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We adapt to challenging situations like non-standard sizes, settling foundations, or previous poor installations. Every retrofit project includes comprehensive sealing and insulation to eliminate drafts and moisture issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Installation Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Why Homeowners Choose Our Installation Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Certified Installers</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technicians hold manufacturer certifications from Andersen, Pella, and Jeld-Wen, ensuring installations meet factory specifications and warranty requirements.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Clean Worksite</h3>
              <p className="text-gray-600 leading-relaxed">
                We protect your floors and furnishings, contain dust and debris, and leave your home cleaner than we found it. Respect for your property is non-negotiable.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed written estimates with no hidden fees. You&apos;ll know exactly what to expect before work begins, with flexible payment options available.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lifetime Workmanship Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                Every installation is backed by our lifetime workmanship warranty. If issues arise from our installation, we make it right at no cost to you.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Energy Efficiency Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Proper installation is critical for window performance. We ensure airtight seals, proper insulation, and correct flashing to maximize energy savings.
              </p>
            </div>
            <div className="border border-gray-200 p-8">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Local Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">
                Years of experience with North Texas climate means we understand moisture management, thermal expansion, and storm resistance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Ready for Expert Window Installation?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Contact us today for a free consultation and detailed estimate. We&apos;ll help you select the perfect windows and schedule installation at your convenience.
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

