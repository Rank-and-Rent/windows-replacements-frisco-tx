import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Repair Frisco TX | Expert Window Repairs | Window Replacements of Frisco',
  description: 'Professional window repair services in Frisco, TX. Fix broken glass, damaged frames, faulty hardware, seal failures. Fast response, quality repairs, fair pricing.',
  keywords: 'window repair Frisco TX, broken window repair, window glass replacement, window seal repair, window hardware repair',
}

export default function WindowRepairPage() {
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
                Expert Window Repair Services
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Don&apos;t replace when you can repair. Window Replacements of Frisco specializes in restoring windows to perfect working condition. From broken glass to sticky operations, our experienced technicians diagnose problems accurately and implement lasting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Request Repair Service
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Professional window repair in Frisco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Common Window Repairs We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our skilled technicians have seen and solved every window problem imaginable. Here are the most frequent repairs we perform for Frisco homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Broken or Cracked Glass</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether from storm damage, accidental impact, or attempted break-ins, broken glass compromises security and energy efficiency. We replace individual panes while preserving your existing frames and sashes, matching glass type and thickness precisely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For insulated glass units with seal failures, we fabricate custom replacements with Low-E coatings and argon fills. Most glass replacements are completed within days of ordering.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Seal Failure & Fogging</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Moisture between panes indicates seal failure in double or triple-pane windows. This condensation won&apos;t evaporate and ruins your view. The insulating gas has escaped, reducing energy efficiency significantly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We replace the entire insulated glass unit with factory-fresh glass featuring new seals and gas fills. Your windows look clear again and regain their insulating properties.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Balance & Spring Repairs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Windows that won&apos;t stay open, slam shut, or require excessive force to operate have failed balances or springs. These components wear out over time but are completely repairable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We stock replacement balances for all major window brands. After installation, your windows will open smoothly and hold any position securely, just like they did when new.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Hardware Replacement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Broken locks, worn operators, damaged hinges, and stripped cranks compromise both function and security. We carry extensive hardware inventories for Andersen, Pella, Jeld-Wen, and other manufacturers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most hardware can be replaced individually without disturbing the window itself. We match finishes to your existing hardware or update entire sets for a fresh, cohesive appearance.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Frame & Sash Repair</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rotted wood, damaged vinyl, or corroded aluminum frames often can be repaired rather than replaced. We remove deteriorated sections, treat underlying causes like moisture infiltration, and rebuild with matching materials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For wood windows, we use epoxy consolidants and fillers that restore structural integrity. Vinyl components can be replaced individually. The result looks original and performs perfectly.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Weather-stripping & Sealing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Drafts around window edges indicate worn weather-stripping or failed caulking. These inexpensive components make enormous differences in comfort and energy costs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We remove old, compressed weather-stripping and install fresh, resilient replacements. Exterior and interior joints are resealed with premium sealants that remain flexible through temperature extremes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Should You Repair or Replace?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-accent-light p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">When Repair Makes Sense</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Windows are relatively new (less than 15 years old) with quality construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Problem is isolated to specific components like hardware or glass</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Windows have historic or architectural value worth preserving</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Repair costs are significantly lower than replacement (generally under 50%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Frames and operating mechanisms are sound with only minor issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Budget constraints make full replacement impractical currently</span>
                </li>
              </ul>
            </div>
            <div className="bg-cream-100 p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6">When Replacement Is Better</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Windows are over 20 years old with single-pane or outdated construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple windows show similar problems indicating systemic failure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Frames show extensive rot, warping, or structural compromise</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Energy bills are high and you want modern efficiency features</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You&apos;re updating your home&apos;s appearance or preparing to sell</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Repair costs approach 50% or more of replacement costs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure which option is right for your situation? We provide honest assessments and present both repair and replacement options with transparent pricing. Our goal is helping you make the best decision for your home and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Repair Process */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            How Our Repair Service Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                1
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Contact Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Call or submit an online request describing your window problem. We&apos;ll schedule a convenient time for evaluation, often within 24-48 hours.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                2
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Diagnosis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technician examines the window, identifies the root cause, and explains what&apos;s needed. We provide an upfront quote before any work begins.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                3
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Repair</h3>
              <p className="text-gray-600 leading-relaxed">
                For repairs we can complete immediately, we fix the problem on the spot. For glass or special parts, we return promptly after ordering components.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-12 h-12 bg-slate-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                4
              </div>
              <h3 className="font-serif text-xl text-navy-600 mb-4">Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                All repairs are backed by our workmanship warranty. We guarantee our work and stand behind the quality of parts we install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
                Emergency Window Repair
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Broken windows create immediate security and weather protection concerns. Window Replacements of Frisco offers emergency repair services for urgent situations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-navy-600 mb-1">Fast Response</h3>
                    <p className="text-gray-600">We prioritize emergency calls and can often respond same-day for critical situations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-navy-600 mb-1">Immediate Securing</h3>
                    <p className="text-gray-600">We board up and secure broken windows immediately to protect your home and belongings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-navy-600 mb-1">Permanent Repair</h3>
                    <p className="text-gray-600">We return with replacement glass or components to complete permanent repairs quickly.</p>
                  </div>
                </div>
              </div>
              <a href="tel:469-908-2440" className="btn-outline-copper px-8 py-4 inline-block">
                Call for Emergency Service: (469) 908-2440
              </a>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Emergency window repair service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Need Expert Window Repair?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Contact Window Replacements of Frisco today for reliable repair services. We&apos;ll diagnose your problem accurately, provide honest recommendations, and deliver quality repairs that last.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Request Repair Service
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

