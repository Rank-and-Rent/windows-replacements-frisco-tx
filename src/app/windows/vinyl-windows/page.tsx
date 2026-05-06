import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement Frisco TX | Low Maintenance, Energy Efficient',
  description: 'Premium vinyl replacement windows in Frisco, TX. Low-maintenance, energy-efficient, and built for Texas heat and storm season. Andersen, Pella, JELD-WEN, and Marvin vinyl options.',
  keywords: 'vinyl windows Frisco TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows',
}

export default function VinylWindowsPage() {
  const content = {
    title: 'Vinyl Windows in Frisco, TX',
    subtitle: 'Low-Maintenance, Energy-Efficient Replacement Windows',
    heroImage: '/window-types/vinyl-frisco-tx.jpg',

    intro: "Vinyl is the most popular replacement-window material in Frisco, and for good reason. Multi-chambered fusion-welded frames deliver excellent thermal performance in our hot, humid summers and short cold snaps. The non-porous surface shrugs off North Texas heat, UV, and the occasional dust storm without needing paint or stain. And the price-to-performance ratio is hard to beat — particularly for the master-planned neighborhoods of Phillips Creek Ranch, Lone Star Ranch, The Trails, and Heritage Lakes where production-builder windows are now hitting the 15- to 25-year replacement window. As an authorized Andersen, Pella, JELD-WEN, and Marvin dealer in Frisco, we install vinyl windows from each brand based on what fits your home, your facade, and your budget.",

    sections: [
      {
        heading: 'How Vinyl Holds Up in Frisco Heat and Storm Season',
        content: "Frisco summers run hot, with afternoon highs above 100 degrees from June through early September. UV intensity is high, humidity is real, and the temperature swing between a 105 degree afternoon and a 78 degree air-conditioned interior puts thermal stress on every window in the home. Quality vinyl handles all of it. Modern formulations include UV inhibitors that prevent yellowing and chalking even after fifteen Texas summers. Multi-chambered frame design provides built-in thermal breaks that keep the interior frame cool even when the exterior frame sits in direct afternoon sun. Fusion-welded corners hold up to wind-driven rain better than mechanically joined frames, which matters during spring storm season when Frisco regularly sees pea-to-quarter-size hail and sustained winds above 40 mph.",
      },
      {
        heading: 'Energy Performance That Pays Off on Your Coserv or Oncor Bill',
        content: "Vinyl frames are inherent thermal insulators — the chambered hollow construction does not conduct heat the way aluminum does, and the wall thickness is enough to stop most conductive heat transfer. Pair that with a soft-coat triple-silver Low-E glass package, argon fill, and warm-edge spacers, and you have a window that delivers Energy Star ratings well below 0.30 U-factor and below 0.25 solar heat gain coefficient. For a Frisco two-story with 22 windows facing a mix of east, south, and west, that translates to a 25 to 30 percent reduction in summer cooling load — typically a few hundred dollars a year off your Coserv or Oncor bill, plus a noticeably more comfortable upstairs. Most Frisco vinyl projects pay back the energy delta within seven to ten years.",
      },
      {
        heading: 'Color, Finish, and HOA Coordination',
        content: "Vinyl is no longer just white. Premium lines from Andersen, Pella, JELD-WEN, and Marvin offer dark exterior options including bronze, black, and earth tones that complement the brick-and-stone facades found across Stonebriar, Newman Village, and Hollyhock. We bring physical finish samples to the in-home estimate so you can hold each option against your existing brick or stucco rather than guessing from product photography. For HOA-governed neighborhoods — Stonebriar, Phillips Creek Ranch, The Trails, Plantation Resort, and most others — we pull the architectural review board palette and submit the application paperwork as part of the project. The board approval process generally takes one to three weeks and we manage the timeline so it does not delay install.",
      },
      {
        heading: 'Quiet Interiors for Two-Story Homes Near Major Corridors',
        content: "Frisco homes near the Dallas North Tollway, Sam Rayburn Tollway, Preston Road, or Toyota Stadium events frequently ask about sound reduction. Standard dual-pane vinyl insulating glass sits at roughly STC 28. Add a laminated outer pane in asymmetric thickness and the rating climbs to STC 34 to 38 — a difference an average person can clearly hear in a master bedroom or home office. We add laminated glass selectively on the elevations that need it rather than blanket-pricing the whole home. For Frisco homes near schools, sports facilities, or rail lines, the upgrade is one of the highest-value glass package decisions homeowners make.",
      },
      {
        heading: 'Easy Cleaning and Long Service Life',
        content: "Tilt-in sashes are standard on every double-hung and most single-hung vinyl windows we install. From inside the home you unlock the latches, tilt the sash inward, and clean the exterior glass without ladders or window-cleaning services. For Frisco two-stories — most production-built homes in Lone Star Ranch and The Trails — that ease is a major quality-of-life upgrade over the original aluminum or builder-grade vinyl. Vinyl frames also do not need the periodic sanding, painting, and resealing that wood frames demand. The total time investment over the next 25 years is essentially zero. Manufacturer warranties on premium vinyl lines run 20 to 30 years on frames and 10 to 20 years on the insulating glass unit, with most claims handled directly by the manufacturer if you registered the warranty at install.",
      },
      {
        heading: 'Best Brands for Frisco Vinyl Replacement',
        content: "We are an authorized dealer for Andersen, Pella, JELD-WEN, and Marvin and install vinyl from each of them. Andersen 100 Series uses Fibrex composite (technically a vinyl-wood blend) with industry-leading thermal performance and a slim profile that suits modern Frisco facades. Pella 250 Series and Lifestyle vinyl deliver premium aesthetics with the EnduraClad exterior finish system and broad color selection. JELD-WEN Premium Vinyl is the strongest budget-to-quality value play, with fusion-welded multi-chambered construction and tilt-in sashes standard. Marvin Elements vinyl bridges the gap between vinyl pricing and Marvin's premium reputation. We pick the brand that matches your home and your priorities rather than pushing one line on every customer.",
      },
    ],

    features: [
      'Multi-chambered fusion-welded frames for superior insulation',
      'Tilt-in sashes for easy interior cleaning',
      'Soft-coat triple-silver Low-E glass with argon fill standard',
      'Dark exterior color options on premium lines',
      '20-30 year manufacturer warranties on frames',
      'Energy Star certified configurations available',
      'UV-stable formulations for Texas sun',
      'Laminated glass options for sound reduction',
      'Compatible with simulated divided lite grids',
      'Recyclable end of life',
    ],

    brands: [
      {
        name: 'Andersen 100 Series (Fibrex)',
        description: 'Andersen\'s composite-vinyl Fibrex line is twice as strong as standard vinyl and 38 percent stronger than fiberglass. Slim profiles with maximum glass area suit modern Frisco facades, and the dark exterior options carry a 20-year color warranty.',
      },
      {
        name: 'Pella 250 Series and Lifestyle Vinyl',
        description: 'Pella\'s premium vinyl lines pair fusion-welded chambered frames with the proprietary EnduraClad exterior finish. Broad palette of stock and custom colors, integrated blind options, and excellent thermal performance.',
      },
      {
        name: 'JELD-WEN Premium Vinyl',
        description: 'The best value-tier vinyl on the market. Fusion-welded multi-chambered frames, tilt-in sashes standard, and Low-E366 triple-silver glass available. The Hartford XT line is our most-installed JELD-WEN configuration in Frisco.',
      },
      {
        name: 'Marvin Elements Vinyl',
        description: 'Marvin\'s vinyl line brings the brand\'s reputation for tight tolerances and quality control to a competitive price point. Crisp profiles, durable hardware, and excellent factory finishing on dark exterior options.',
      },
    ],

    faq: [
      {
        question: 'How long do vinyl windows last in Frisco?',
        answer: 'Quality vinyl windows from Andersen, Pella, JELD-WEN, or Marvin last 25 to 30 years in our climate when properly installed and registered. The frame warranty on most premium lines is 20 to 30 years, and the insulating glass unit warranty is 10 to 20 years.',
      },
      {
        question: 'Will dark vinyl exterior frames warp in Texas sun?',
        answer: 'Premium dark vinyl frames use heat-resistant formulations specifically engineered for direct sun exposure. Andersen\'s 100 Series Fibrex, Pella\'s EnduraClad, and Marvin\'s factory-finish darks all carry the warranty in Frisco\'s climate. Budget vinyl from no-name manufacturers can warp — which is why we only install premium-brand product.',
      },
      {
        question: 'How much do vinyl windows cost installed in Frisco?',
        answer: 'Pricing varies by brand, size, and glass package. Standard double-hung vinyl windows installed start around $850 for smaller bedroom units and run to about $1,800 for larger living-room or kitchen units. Custom shapes, oversized openings, and premium glass packages move the price up. Every quote is line-item with installation included.',
      },
      {
        question: 'Can vinyl windows match the look of wood?',
        answer: 'Yes. Premium vinyl lines now offer wood-grain interior finishes and traditional sash proportions that read as wood from the street. For homes where the historic look matters more than ease of maintenance, we still recommend wood-clad — but vinyl has closed most of the aesthetic gap.',
      },
      {
        question: 'Do you handle HOA approval for Stonebriar, Phillips Creek Ranch, or other Frisco communities?',
        answer: 'Yes. We pull architectural review board palettes, fill out the spec sheet, and submit the application paperwork as part of the project. There is no extra fee for HOA coordination.',
      },
      {
        question: 'Are vinyl windows recyclable?',
        answer: 'Yes. Modern vinyl is 100 percent recyclable, and many manufacturers (including Andersen and Pella) include recycled content in current formulations. End-of-life recycling programs are available through the manufacturer and several DFW-area waste services.',
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
              <li><Link href="/windows" className="hover:text-navy-700">Windows</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Vinyl Windows</li>
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
