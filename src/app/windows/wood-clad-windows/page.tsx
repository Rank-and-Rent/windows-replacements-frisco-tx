import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Frisco TX | Traditional Beauty, Modern Protection',
  description: 'Premium wood clad replacement windows in Frisco, TX. Real wood interior beauty with durable exterior protection. Everything priced including installation.',
  keywords: 'wood clad windows Frisco TX, wood clad replacement windows, traditional windows, Andersen wood clad windows, Pella wood clad windows',
}

export default function WoodCladWindowsPage() {
  const content = {
    title: 'Wood Clad Windows Replacement in Frisco, TX',
    subtitle: 'Authentic Wood Interior Beauty with Weather-Resistant Exterior Protection',
    heroImage: '/window-types/wood-clad-frisco-tx.jpg',

    intro: "Frisco homeowners seeking the ultimate combination of traditional wood beauty and modern durability discover that wood clad windows provide the perfect balance. With authentic wood interiors that bring natural warmth to your home and weather-resistant exteriors that withstand Frisco&apos;s challenging climate, wood clad windows represent the gold standard in window performance and aesthetics.",

    sections: [
      {
        heading: 'Best of Both Worlds: Wood Inside, Durability Outside',
        content: "Wood clad windows feature genuine wood interiors that provide authentic natural beauty, warmth, and character. The interior wood can be stained or painted to match any décor, from traditional stains to contemporary colors. The exterior cladding—typically aluminum or vinyl—protects the wood from Frisco\&apos;s weather extremes, eliminating the maintenance burdens of traditional wood windows while preserving interior beauty.",
      },
      {
        heading: 'Weather Protection for Frisco Climate',
        content: "The exterior cladding creates an impenetrable barrier against moisture, UV exposure, and temperature extremes that damage traditional wood windows in Frisco. Unlike bare wood that requires annual maintenance, clad exteriors need minimal care while providing decades of weather protection. The cladding prevents rot, warping, and insect damage that plague unprotected wood in Texas climate.",
      },
      {
        heading: 'Superior Energy Efficiency',
        content: "Wood\&apos;s natural insulating properties combined with modern cladding technology create exceptional thermal performance. Wood clad windows typically achieve U-factors of 0.25-0.30, significantly better than aluminum and comparable to premium vinyl. Frisco homeowners see 30-40% reductions in energy costs compared to older windows, with the added benefit of wood\&apos;s thermal mass that moderates temperature swings.",
      },
      {
        heading: 'Design Flexibility and Customization',
        content: "Wood clad windows offer unlimited design possibilities. The wood interior accepts any stain or paint color, matching Frisco homes from traditional to contemporary styles. Exterior cladding is available in dozens of factory-finished colors that never need repainting. The combination allows homeowners to achieve perfect aesthetic harmony inside and out.",
      },
      {
        heading: 'Premium Quality and Longevity',
        content: "Wood clad windows represent the premium tier of window construction. Quality manufacturers use rot-resistant wood species, advanced cladding systems, and superior hardware. The result is windows that provide 30-40 years of service with minimal maintenance. For Frisco homeowners who prioritize quality and longevity, wood clad windows offer unmatched value despite higher initial costs.",
      },
      {
        heading: 'Investment in Home Value',
        content: "Wood clad windows significantly enhance home value and appeal in Frisco\&apos;s luxury real estate market. The natural wood interior creates warmth and character that buyers value, while the low-maintenance exterior appeals to practical considerations. Wood clad windows are often cited as a key selling feature in premium Frisco properties.",
      },
    ],

    features: [
      'Genuine wood interior for authentic beauty',
      'Weather-resistant exterior cladding',
      'Superior energy efficiency',
      'Minimal exterior maintenance required',
      'Unlimited interior staining/painting options',
      'Factory-finished exterior colors',
      '20-30 year manufacturer warranties',
      'Enhanced home resale value',
      'Available in all window styles',
      'Premium hardware and operation',
    ],

    brands: [
      {
        name: 'Andersen Wood Clad Series',
        description: 'Andersen pioneered wood clad window technology and remains the industry leader. Their wood clad windows feature premium wood species, advanced aluminum cladding, and comprehensive warranties that reflect superior quality.',
      },
      {
        name: 'Pella Architect Series Wood Clad',
        description: 'Pella\&apos;s wood clad windows combine authentic wood beauty with their proprietary EnduraClad protection system. The result is windows that perform beautifully in Frisco\&apos;s challenging climate while maintaining traditional appeal.',
      },
      {
        name: 'JELD-WEN Siteline Wood Clad',
        description: 'JELD-WEN\&apos;s Siteline collection offers premium wood clad windows with exceptional customization options. Their AuraLast wood protection system ensures longevity even in demanding Texas climate conditions.',
      },
    ],

    faq: [
      {
        question: 'What is the difference between wood clad and all-wood windows?',
        answer: 'Wood clad windows have genuine wood interiors just like all-wood windows, but feature weather-resistant aluminum or vinyl cladding on the exterior. This eliminates exterior maintenance while preserving interior wood beauty.',
      },
      {
        question: 'Do wood clad windows require maintenance?',
        answer: 'Interior wood surfaces benefit from occasional refinishing to maintain their beauty, but exterior cladding requires no painting or sealing. Overall maintenance is far less than traditional wood windows.',
      },
      {
        question: 'Are wood clad windows energy efficient?',
        answer: 'Yes, wood clad windows are highly energy efficient. Wood\&apos;s natural insulating properties combined with modern glass technology can reduce energy costs by 30-40% in Frisco\&apos;s climate.',
      },
      {
        question: 'How long do wood clad windows last?',
        answer: 'Quality wood clad windows last 30-40 years with proper care. The exterior cladding protects the wood from weather damage, significantly extending service life compared to unprotected wood.',
      },
      {
        question: 'Can I paint the interior wood?',
        answer: 'Absolutely. Wood clad window interiors accept any stain or paint, allowing perfect color matching with your Frisco home\&apos;s interior design. Many homeowners change interior finishes over time.',
      },
      {
        question: 'How much do wood clad windows cost with installation?',
        answer: 'Wood clad window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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
              <li className="text-navy-700 font-medium">Wood Clad Windows</li>
            </ol>
          </div>
        </nav>
        
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}