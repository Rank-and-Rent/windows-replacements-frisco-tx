import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Frisco TX | Replace Old Windows | Window Replacements of Frisco',
  description: 'Full-service window replacement in Frisco, TX. Upgrade drafty, inefficient windows with modern energy-efficient models. Free estimates, professional installation, lifetime warranty.',
  keywords: 'window replacement Frisco TX, replace old windows, energy efficient replacement windows, vinyl window replacement, wood window replacement',
}

export default function WindowReplacementPage() {
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
                Complete Window Replacement Solutions
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Is your Frisco home suffering from drafty windows, condensation between panes, or skyrocketing energy bills? Window Replacements of Frisco specializes in transforming outdated, underperforming windows into modern, energy-efficient systems that enhance comfort and value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Get Free Assessment
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
                alt="Modern window replacement in Frisco home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Signs Your Windows Need Replacement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing these warning signs early can prevent energy waste, water damage, and security vulnerabilities. If you notice any of these issues, it&apos;s time to consider replacement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Drafts and Air Leaks</h3>
              <p className="text-gray-600 leading-relaxed">
                Feel air movement around window edges even when closed? Drafts indicate failing seals or warped frames that can&apos;t be repaired effectively. Modern windows eliminate this problem completely.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Condensation Between Panes</h3>
              <p className="text-gray-600 leading-relaxed">
                Moisture trapped between double or triple panes signals seal failure. This fog won&apos;t clear and indicates your windows have lost their insulating gas fill and energy efficiency.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Difficult Operation</h3>
              <p className="text-gray-600 leading-relaxed">
                Windows that stick, won&apos;t stay open, or require excessive force are safety hazards. Warped frames and failed balances can&apos;t provide emergency egress or proper ventilation.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Rising Energy Bills</h3>
              <p className="text-gray-600 leading-relaxed">
                Older single-pane or inefficient windows force your HVAC system to work overtime. The monthly savings from new energy-efficient windows often cover their cost within years.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Visible Damage</h3>
              <p className="text-gray-600 leading-relaxed">
                Rotting wood, peeling paint, cracked frames, or corroded hardware compromise both appearance and function. These problems worsen rapidly and can lead to structural issues.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-slate-blue">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Outside Noise</h3>
              <p className="text-gray-600 leading-relaxed">
                Excessive traffic or neighborhood noise indicates poor sound insulation. Modern multi-pane windows with Low-E coatings dramatically reduce noise transmission for peaceful interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Replacement */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Benefits of Modern Replacement Windows
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Dramatic Energy Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today&apos;s windows feature Low-E glass coatings, argon or krypton gas fills, and advanced frame materials that reduce heat transfer by up to 70%. Many Frisco homeowners see 20-30% reductions in heating and cooling costs after replacement. The energy savings continue month after month, year after year.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Enhanced Comfort</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eliminate hot spots in summer and cold zones in winter. Modern windows maintain consistent indoor temperatures, reduce UV fade damage to furnishings, and minimize outside noise. Your home becomes a more pleasant, peaceful environment regardless of weather conditions.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Increased Home Value</h3>
                <p className="text-gray-600 leading-relaxed">
                  Window replacement ranks among the highest ROI home improvements. Buyers recognize the value of new windows and their warranties. Expect to recoup 70-80% of replacement costs when selling, plus enjoy improved curb appeal and marketability.
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Energy-efficient replacement window"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Replacement Process */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Our Proven Replacement Process
          </h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  1
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Free Home Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start with an in-home assessment where we examine your current windows, discuss your concerns about drafts or energy costs, and understand your style preferences. We take precise measurements and photograph existing conditions. This consultation is completely free with no obligation.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  2
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Customized Recommendations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based on your home&apos;s architecture, your budget, and performance priorities, we present options from our premium manufacturers. We explain differences in glass packages, frame materials, and hardware finishes. You&apos;ll receive a detailed written proposal with transparent pricing.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  3
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Professional Removal & Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  On installation day, our certified technicians arrive on time with all necessary materials. We carefully remove old windows, inspect and repair any structural issues, then install new windows with meticulous attention to level, square, and proper sealing. Interior and exterior finishes are completed to perfection.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="w-16 h-16 bg-slate-blue text-white rounded-full flex items-center justify-center font-serif text-2xl">
                  4
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-navy-600 mb-3">Final Walkthrough & Warranty Registration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Before we leave, we conduct a thorough walkthrough with you, testing every window and explaining operation and maintenance. We register your warranties and provide all documentation. Your satisfaction is our measure of success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Replacement Window Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Vinyl Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most popular choice for Frisco homeowners, vinyl windows offer exceptional value and performance. Modern vinyl formulations resist warping, never need painting, and provide excellent insulation. Multiple color options match any architectural style.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Low maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Energy efficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cost effective</span>
                </li>
              </ul>
            </div>
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Wood Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For traditional homes or historic properties, wood windows provide authentic beauty and superior insulation. Modern treatments protect against moisture and insects. Can be stained or painted to match any décor, with limitless customization options.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Classic elegance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Natural insulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fully customizable</span>
                </li>
              </ul>
            </div>
            <div className="bg-cream-100 p-8">
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Fiberglass Windows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The strongest and most durable option, fiberglass windows withstand extreme temperatures without warping or expanding. Ultra-slim sightlines maximize glass area. Ideal for contemporary designs and commercial applications requiring ultimate performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maximum durability</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dimensional stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sleek modern look</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Transform Your Home with New Windows
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Stop tolerating drafty, inefficient windows. Schedule your free consultation today and discover how window replacement can enhance comfort, reduce energy bills, and increase your home&apos;s value.
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

