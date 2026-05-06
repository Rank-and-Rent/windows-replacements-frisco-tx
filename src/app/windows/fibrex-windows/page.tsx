import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Frisco TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite for Stonebriar, Newman Village, and Hollyhock luxury elevations. 2x stronger than vinyl, dark exteriors, 20-year color warranty in Frisco sun.',
  keywords: 'Fibrex windows Frisco TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
}

export default function FibrexWindowsPage() {
  const content = {
    title: 'Fibrex Windows Replacement in Frisco, TX',
    subtitle: 'Andersen\'s Premium Composite Technology for Ultimate Performance',
    heroImage: '/window-types/fibrex-frisco-tx.jpg',

    intro: "Fibrex is Andersen's proprietary wood-fiber-and-thermoplastic composite — twice as strong as vinyl, 38 percent stronger than fiberglass, and engineered with a coefficient of thermal expansion close enough to glass that the seals stay tight through Frisco's full annual temperature swing. For luxury master-planned neighborhoods like Stonebriar, Newman Village, and Edgestone at Legacy where the HOA architectural review board cares about authentic-looking frames and dark factory finishes, Fibrex sits in a sweet spot the standard vinyl lines simply do not reach. Andersen 100 Series and Renewal both use Fibrex; we install the standard Andersen line, which generally delivers better price-to-performance value for full-home Frisco replacements.",

    sections: [
      {
        heading: 'Advanced Composite Construction for Frisco Durability',
        content: "Fibrex represents Andersen's revolutionary approach to window frame technology, blending wood fibers with advanced polymers to create a material that outperforms both traditional wood and modern synthetics. The wood fibers provide natural insulation and aesthetic appeal, while the polymer matrix delivers exceptional strength and moisture resistance. Unlike traditional wood that warps in Frisco's humidity or vinyl that lacks structural integrity, Fibrex maintains perfect dimensional stability year-round. The material's advanced formulation resists UV degradation from intense Texas sun, ensuring Fibrex windows maintain their performance and appearance indefinitely in Frisco's challenging climate.",
      },
      {
        heading: 'Authentic Wood Aesthetics Without Maintenance Burdens',
        content: "Fibrex windows capture the natural warmth and character of real wood while eliminating the maintenance headaches that plague traditional wood windows in Frisco. The material accepts stains and finishes that replicate authentic wood tones, from golden oak to deep walnut, creating seamless continuity with Frisco's historic architecture. Unlike wood windows that require annual painting and sealing in Frisco's climate, Fibrex maintains its finish indefinitely without fading or weathering. Homeowners can enjoy the traditional appeal of wood windows—the natural grain patterns, the tactile warmth—without the time, expense, and environmental impact of maintaining authentic wood in Frisco's demanding environment.",
      },
      {
        heading: 'Structural Superiority for Frisco Homes',
        content: "Fibrex's composite construction delivers strength that surpasses both wood and vinyl alternatives, making it ideal for Frisco's diverse housing stock. The material resists impact damage from severe weather, hail, or accidental impacts far better than traditional wood. Fibrex frames maintain perfect alignment and smooth operation even in Frisco's temperature extremes, where wood might warp and vinyl might become brittle. The material's dimensional stability ensures weatherstripping maintains perfect contact year-round, preventing air infiltration that compromises energy efficiency. For Frisco homeowners who demand quality and longevity, Fibrex provides the structural integrity required for windows that perform flawlessly in Texas weather.",
      },
      {
        heading: 'Energy Performance That Saves in Frisco Climate',
        content: "Fibrex's unique material properties create exceptional thermal performance that delivers measurable savings in Frisco's hot climate. The wood fiber content provides natural insulation, while the polymer matrix prevents heat conduction, resulting in U-factors that rival premium fiberglass. When combined with Andersen's advanced multi-pane insulated glass, Fibrex windows can reduce heating and cooling costs by 30-40% compared to older windows. The material's stability ensures optimal weatherstripping performance year-round, maintaining energy efficiency even during Frisco's dramatic temperature swings. Many Fibrex window configurations qualify for energy rebates, making them an economical choice despite their premium positioning.",
      },
      {
        heading: 'Design Flexibility for Frisco Architecture',
        content: "Fibrex's workability allows it to be formed into virtually any window style and configuration, making it ideal for Frisco's architectural diversity. The material can be stained to match traditional wood tones for historic Frisco homes or finished in contemporary colors for modern developments. Fibrex accommodates complex custom designs that would be difficult with other materials, from arched windows in historic restorations to large fixed panels in contemporary architecture. The material's strength enables innovative applications while maintaining the wood-like aesthetics that Frisco homeowners value. Whether preserving architectural heritage or embracing modern design, Fibrex provides the versatility required in Frisco's diverse real estate market.",
      },
      {
        heading: 'Environmental Responsibility and Longevity',
        content: "Fibrex represents a sustainable approach to window manufacturing that resonates with Frisco's growing environmental consciousness. The wood fiber content comes from responsibly harvested sources, and the advanced polymer technology reduces the environmental impact compared to traditional wood treated with chemical preservatives. Fibrex windows require no toxic sealants or paints, maintaining their appearance naturally. The exceptional longevity means fewer replacements over time, reducing material consumption and landfill impact. For environmentally aware Frisco homeowners, Fibrex windows provide premium performance with a significantly lower ecological footprint than traditional wood windows, supporting the city's commitment to sustainable development.",
      },
    ],

    features: [
      'Proprietary composite material technology',
      'Wood-like beauty without maintenance',
      'Superior strength and impact resistance',
      'Exceptional dimensional stability',
      'Advanced energy efficiency',
      'Resists rot, mold, and moisture',
      '25+ year manufacturer warranties',
      'Fusion-welded corner construction',
      'Available in unlimited wood tones',
      'Environmentally responsible manufacturing',
    ],

    brands: [
      {
        name: 'Andersen 100 Series Fibrex',
        description: 'Andersen\'s premium Fibrex line offers the ultimate in window performance with their signature composite technology. These windows feature multi-pane insulated glass, advanced weatherstripping, and comprehensive warranties.',
      },
      {
        name: 'Andersen 200 Series Fibrex',
        description: 'Andersen\'s mid-range Fibrex windows provide exceptional value with the same composite construction and performance features as higher-end lines. Perfect for homeowners seeking premium quality at accessible pricing.',
      },
      {
        name: 'Andersen 300 Series Fibrex',
        description: 'Andersen\'s luxury Fibrex collection offers the most advanced features available, including impact-resistant glass options, premium hardware, and unlimited customization for discerning Frisco homeowners.',
      },
    ],

    faq: [
      {
        question: 'What makes Fibrex different from regular wood windows?',
        answer: 'Fibrex is a composite material that combines wood fibers with polymers, offering wood-like beauty without warping, rotting, or requiring maintenance. It maintains perfect dimensions year-round and resists moisture damage that destroys traditional wood.',
      },
      {
        question: 'Do Fibrex windows look like real wood?',
        answer: 'Yes, Fibrex windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. The wood-grain textures are virtually indistinguishable from authentic wood.',
      },
      {
        question: 'How long do Fibrex windows last in Frisco?',
        answer: 'Fibrex windows are engineered to last 25-30 years or more with proper care. The composite material resists degradation and maintains its performance indefinitely, unlike wood that eventually rots or vinyl that may crack.',
      },
      {
        question: 'Are Fibrex windows energy efficient?',
        answer: 'Absolutely. Fibrex\'s composite construction provides excellent insulation, and when combined with Andersen\'s advanced glass packages, Fibrex windows can reduce energy costs by 35-45% in Frisco\'s climate.',
      },
      {
        question: 'Do Fibrex windows require maintenance?',
        answer: 'Fibrex windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.',
      },
      {
        question: 'How much do Fibrex windows cost with installation?',
        answer: 'Fibrex window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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
              <li className="text-navy-700 font-medium">Fibrex Windows</li>
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