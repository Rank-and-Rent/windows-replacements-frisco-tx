import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement Frisco TX | Authentic Natural Beauty',
  description: 'Solid wood windows for Newman Village, Starwood, and Eldorado Country Club Frisco custom homes. Authentic millwork, divided lites, factory-finish for HOA approval.',
  keywords: 'wood windows Frisco TX, solid wood windows, traditional wood windows, authentic wood windows, custom wood windows',
}

export default function WoodWindowsPage() {
  const content = {
    title: 'Wood Windows Replacement in Frisco, TX',
    subtitle: 'Timeless Beauty and Authentic Craftsmanship in Solid Wood',
    heroImage: '/window-types/wood-frisco-tx.jpg',

    intro: "Solid wood windows are the right pick for Frisco custom homes in Newman Village, Starwood, and around the Eldorado Country Club golf-course corridor — properties where the homeowner wants real wood frame profiles, true divided lites, and the kind of millwork detail that production wood-clad cannot match. Wood demands a maintenance commitment in our climate (refinish every six to eight years, inspect glazing seals annually) but delivers an authenticity nothing else does. We install solid wood from Marvin Signature Ultimate and Andersen A-Series with factory finishes that hold up in Texas sun for the longest possible interval before refinishing.",

    sections: [
      {
        heading: 'Unmatched Natural Beauty and Character',
        content: "Solid wood windows provide authenticity that synthetic materials cannot replicate. Each window features unique grain patterns, natural color variations, and organic warmth that change subtly with light and seasons. Wood accepts stains and finishes that enhance natural beauty while allowing the grain to show through. For Frisco's historic homes and traditional architecture, wood windows provide period-appropriate authenticity that preserves architectural integrity.",
      },
      {
        heading: 'Superior Thermal Performance',
        content: "Wood is naturally insulating, providing thermal performance that rivals modern synthetics without requiring complex engineering. The cellular structure creates air pockets that resist heat transfer, keeping Frisco homes comfortable year-round. Quality wood windows achieve U-factors of 0.25-0.30, comparable to premium alternatives, while providing the added benefit of thermal mass that moderates temperature swings throughout the day.",
      },
      {
        heading: 'Exceptional Craftsmanship and Quality',
        content: "Solid wood windows represent traditional craftsmanship at its finest. Quality manufacturers select premium wood species—mahogany, oak, cherry, or pine—and craft windows using time-honored joinery techniques. The result is windows that operate smoothly, align perfectly, and provide decades of service. For Frisco homeowners who appreciate quality construction, wood windows offer satisfaction that mass-produced alternatives cannot match.",
      },
      {
        heading: 'Maintenance Requirements and Considerations',
        content: "Solid wood windows require regular maintenance to preserve their beauty and performance in Frisco's climate. Exterior surfaces need repainting or refinishing every 3-5 years to protect against moisture and UV damage. Interior maintenance is minimal but benefits from occasional cleaning and refinishing. For homeowners willing to invest time in maintenance, wood windows reward with beauty and character that improve with age.",
      },
      {
        heading: 'Historic Preservation and Architectural Authenticity',
        content: "Wood windows are essential for authentic historic preservation in Frisco's older neighborhoods. Historic districts often require wood windows to maintain period character. Beyond regulatory requirements, wood windows provide architectural correctness that honors original design intent. For homeowners passionate about preserving Frisco's estate architectural heritage, wood windows are the only authentic choice.",
      },
      {
        heading: 'Investment Value and Longevity',
        content: "Quality wood windows represent significant initial investment but provide exceptional long-term value. With proper maintenance, wood windows last 50-100 years or more—far longer than synthetic alternatives. The windows can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. In Frisco's historic neighborhoods, authentic wood windows significantly enhance property value and marketability.",
      },
    ],

    features: [
      'Authentic natural wood beauty',
      'Unique grain patterns and character',
      'Superior thermal insulation',
      'Traditional craftsmanship and joinery',
      'Unlimited staining and finishing options',
      'Can be refinished repeatedly',
      '50-100+ year lifespan with care',
      'Essential for historic preservation',
      'Premium wood species available',
      'Enhances property value significantly',
    ],

    brands: [
      {
        name: 'Andersen Traditional Wood Windows',
        description: 'Andersen\'s traditional wood line offers authentic wood windows crafted from premium species with time-honored construction methods. Their windows combine historical accuracy with modern performance features for discerning Frisco homeowners.',
      },
      {
        name: 'Pella Wood Windows',
        description: 'Pella crafts solid wood windows using premium wood species and advanced preservation treatments. Their wood windows provide authentic beauty with enhanced longevity, perfect for Frisco\'s historic homes and traditional architecture.',
      },
      {
        name: 'JELD-WEN Premium Wood Collection',
        description: 'JELD-WEN\'s premium wood windows feature authentic construction using select wood species. Their AuraLast preservation system extends wood life while maintaining traditional appearance, ideal for Frisco\'s climate.',
      },
    ],

    faq: [
      {
        question: 'Do wood windows require a lot of maintenance?',
        answer: 'Yes, solid wood windows require regular maintenance. Exterior surfaces need repainting or refinishing every 3-5 years in Frisco\'s climate to prevent moisture damage and UV degradation. However, many homeowners find this maintenance rewarding.',
      },
      {
        question: 'How long do wood windows last?',
        answer: 'With proper maintenance, quality wood windows last 50-100 years or more. They can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. Many Frisco homes feature original wood windows from the 1920s-1940s.',
      },
      {
        question: 'Are wood windows energy efficient?',
        answer: 'Yes, wood windows are naturally energy efficient. Wood\'s cellular structure provides excellent insulation, achieving U-factors of 0.25-0.30. Combined with modern glass, wood windows reduce energy costs significantly.',
      },
      {
        question: 'Are wood windows required for historic homes?',
        answer: 'Many Frisco historic districts require wood windows to maintain period authenticity. Even when not mandated, wood windows are essential for authentic historic preservation and maintaining property value in historic neighborhoods.',
      },
      {
        question: 'Can wood windows be painted?',
        answer: 'Absolutely. Wood windows accept any exterior or interior paint or stain. Many homeowners change colors periodically to refresh appearance, taking advantage of wood\'s ability to be refinished repeatedly throughout its long service life.',
      },
      {
        question: 'How much do wood windows cost with installation?',
        answer: 'Wood window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
    ],
  }

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
              <li><Link href="/materials" className="hover:text-navy-700">Materials</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Wood Windows</li>
            </ol>
          </div>
        </nav>
        
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
              <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">When Pure Wood Is Right for Frisco Homes</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Pure wood windows (no exterior cladding) are right for two specific Frisco scenarios: historic preservation and certain very-high-end custom builds where the architectural intent demands wood inside and out. Historic preservation projects are rare in Frisco proper — the city is too new — but adjacent McKinney and Plano have neighborhoods where the homeowner association or HPC requires wood. For everyone else in Frisco, wood-clad delivers the same interior aesthetic with far less exterior maintenance. We will walk you through the trade-off at the estimate and recommend the path that fits your home and your tolerance for exterior repainting every 4 to 6 years.</p>
          </div>
        </div>
      </section>

<CtaBanner />
        <ContactSection />
      </main>
              <section className="py-12 lg:py-16 bg-cream-100">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Pure wood window installation in Frisco is rare but not unknown. We have done a handful of period-correct projects on adjacent McKinney historic district homes and a few high-end Frisco custom builds where the architectural intent demanded wood inside and out. Every wood project starts with a frank conversation about the maintenance reality, because the long-term success of a wood window install depends entirely on the homeowner sticking to the maintenance schedule.</p>
            </div>
          </div>
        </section>

<Footer />
    </>
  )
}