import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Window Replacement Allen TX | Window Installation Allen | Window Replacements of Frisco',
  description: 'Window replacement and installation in Allen, TX. Energy-efficient windows for Twin Creeks, Watters Creek, Star Creek, and every Allen neighborhood. Free estimates.',
  keywords: 'window replacement Allen TX, Allen window installation, residential windows Allen',
}

export default function AllenPage() {
  return (
    <main>
      <Header />

      <nav className="bg-stone-100 py-4 pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ol className="flex items-center space-x-2 text-sm text-navy-500">
            <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/locations" className="hover:text-navy-700">Locations</Link></li>
            <li>/</li>
            <li className="text-navy-700 font-medium">Allen</li>
          </ol>
        </div>
      </nav>

      <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-24 bg-navy-600">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/locations/window-replacement-allen-tx-1.jpg)' }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">Window Replacement in Allen, Texas</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
              Window Replacements of Frisco serves Allen homeowners across Twin Creeks, Star Creek, Watters Creek, Cottonwood Bend, and every neighborhood in between. We install energy-efficient windows from Andersen, Pella, Marvin, and JELD-WEN, backed by certified installers and a written workmanship warranty. Free in-home estimates and honest, line-item pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">Get Free Estimate</Link>
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">(469) 908-2440</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Why Allen Homeowners Replace Their Windows</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">A Master-Planned Community Coming of Age</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most of Allen was built between 1995 and 2010, which means thousands of homes are now hitting the 20- to 30-year mark — exactly when builder-grade windows fail. The single-pane and early dual-pane vinyl that came standard in Twin Creeks, Cumberland Crossing, and Cottonwood Bend has lost most of its argon fill and a chunk of its Low-E performance. Owners notice it as warm window glass on August afternoons, condensation on January mornings, and steadily climbing electric bills. Replacement windows are the single biggest comfort upgrade most of these homes will see.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have worked Allen long enough to know which builders used which window lines, where the rough openings are square, and where they need shimming and resealing. That experience translates into faster installs, fewer surprises, and warranties that actually stick. Our typical Allen project is a full-home replacement of 16 to 24 openings, completed across two to three working days.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Schools, Resale, and ROI</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Allen ISD is one of the strongest selling points in north Collin County, and homes that move quickly tend to be the ones that look move-in ready. New windows fix three resale problems at once: they brighten the facade, they tighten energy performance disclosures, and they eliminate the inspection-report flags that cost sellers thousands at closing. Allen real estate agents we work with regularly recommend a window upgrade before listing because the curb-appeal payoff outpaces almost any other line item.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For homeowners staying put, the math is simpler. A correctly specified Low-E and argon glass package, properly installed, knocks 20 to 30 percent off summer cooling load. In an Allen two-story with 22 windows, that is hundreds of dollars per year in utility savings plus a noticeably more comfortable upstairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Built for Allen Weather</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Hail and Storm Season</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Spring is hail season in Allen. The 2019 and 2021 storms cracked frames and shattered glass across Cottonwood Bend, Suncreek, and Twin Creeks, and most insurance carriers now ask about glass and frame ratings on policy renewals. We specify impact-rated laminated glass on west and southwest elevations for homes that have taken hits before, plus reinforced meeting rails and fusion-welded frames that hold up to wind-driven debris. Customers in Allen who add laminated glass also gain meaningful UV and acoustic benefits.
              </p>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Summer Heat and Big Glass</h3>
              <p className="text-gray-600 leading-relaxed">
                Many Allen homes were designed with two-story great rooms and oversized rear-elevation windows facing west toward the late-afternoon sun. Without modern Low-E coatings those rooms become unusable from June through September. We move customers to soft-coat triple-silver Low-E glass, and where appropriate to Andersen SmartSun or Pella NaturalSun, to push solar heat gain coefficients below 0.25 while keeping the visible light transmission high enough that the rooms still feel bright.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy-600 mb-4">Allen Neighborhoods We Serve</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-600 mb-6">
                <li>• Twin Creeks</li>
                <li>• Star Creek</li>
                <li>• Watters Creek</li>
                <li>• Cottonwood Bend</li>
                <li>• Suncreek</li>
                <li>• Cumberland Crossing</li>
                <li>• Bethany Lakes</li>
                <li>• Montgomery Farm</li>
                <li>• Greenville Heights</li>
                <li>• Forest Crossing</li>
                <li>• Glendover Park</li>
                <li>• All of Allen ISD</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                If you live in Allen, we serve you. Travel time from our Frisco home base is short, which means we respond fast on warranty calls and can usually be on-site for an estimate within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Window Services for Allen Homes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Full-Home Replacement</h3>
              <p className="text-gray-600">The most common Allen project — 16 to 24 windows replaced in 2 to 3 days with manufacturer-direct pricing.</p>
            </Link>
            <Link href="/windows" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Storm-Damage Replacement</h3>
              <p className="text-gray-600">We work directly with your carrier on hail and wind claims, providing photos, scope, and impact-rated glass options.</p>
            </Link>
            <Link href="/doors" className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl text-navy-600 mb-3">Patio and Entry Doors</h3>
              <p className="text-gray-600">Pair your window project with a new sliding patio door or fiberglass entry to refresh the entire facade.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">Common Questions from Allen Homeowners</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600 leading-relaxed">Allen homeowners ask the same handful of questions on almost every estimate, and they deserve direct answers. The first one is always about lead time. Right now Andersen and JELD-WEN orders are running four to six weeks from the day you sign. Pella runs five to seven weeks. Marvin Signature can stretch to eight or ten weeks for custom finishes. We schedule the install date the day your order ships from the factory so there is no waiting after delivery.</p>
            <p className="text-gray-600 leading-relaxed">The second question is about disruption. A whole-home replacement project in Allen runs two to three days for most homes, with crews working room by room rather than tearing the whole house open at once. Furniture gets pulled six feet off the wall, drop cloths go down, and the old window comes out only when the new one is staged and ready to drop in. Your home is never left exposed overnight.</p>
            <p className="text-gray-600 leading-relaxed">The third question is about price. We quote line-item — every window listed by location, brand, series, and glass package, with installation, flashing, sealing, exterior trim, and haul-away rolled in. The number on the bottom of the page is the number you pay. No mystery fees. No add-ons at the end. The quote holds for 30 days while you compare bids.</p>
            <p className="text-gray-600 leading-relaxed">A fourth question that comes up often in Allen is energy ratings. Every glass package we install carries a printed NFRC sticker showing U-factor, solar heat gain coefficient, and visible light transmission. We translate those numbers into plain English at the estimate. For most Allen homes, a U-factor under 0.30 and SHGC under 0.25 is the sweet spot — meaningful summer comfort gains without making interiors feel dim. Allen homeowners care about results, and we deliver them in writing.</p>
          </div>
        </div>
      </section>

            <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">How a Project Goes from First Call to Final Walk</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">When you are ready to start an Allen window project, we make the path simple. Step one is the phone consultation — we ask what is bothering you about the current windows and what success looks like for the project. Step two is the in-home estimate, a 60- to 90-minute appointment where the estimator measures every opening, photographs the conditions, and brings out samples of the products that fit your home. Step three is the written quote, delivered within 48 hours and broken out by line item so you can see exactly what you are paying for. Step four, if you decide to proceed, is the order — we collect a deposit and place the factory order the same day. Step five is install, scheduled the day the order ships. We text you a daily summary during install and walk every opening with you at completion. The Allen homeowners who refer us most are the ones who appreciated the lack of friction in the process. We are not selling a sales experience — we are selling windows, installed correctly, on schedule, at a fair price, with someone available to pick up the phone if anything goes sideways.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-12">More Questions Homeowners Ask</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Do you offer financing on Allen projects?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. We partner with national lenders offering 12- to 84-month terms. We do not earn commission on financing — the recommendations are independent of how you choose to pay.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">How do you handle hail-claim projects in Allen?</h3>
              <p className="text-gray-600 leading-relaxed">We coordinate directly with your insurance carrier — providing photos, scope, and impact-rated glass options that meet adjuster requirements. Most claim-based projects in Allen wrap within four to six weeks of approval.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">Can you match the original window finish on a 2003 Twin Creeks home?</h3>
              <p className="text-gray-600 leading-relaxed">Almost always. We bring physical finish samples and hold them against the existing trim at the estimate. Custom colors are available on most premium lines for an upcharge.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy-600 mb-2">What is the workmanship warranty?</h3>
              <p className="text-gray-600 leading-relaxed">Five years on installation labor, in addition to the manufacturer warranty on the product. Allen service calls are scheduled within a week.</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Schedule Your Free Allen Estimate</h2>
          <p className="text-lg text-white/90 mb-10">
            Call us or request an estimate online. We will measure every opening, walk you through brand and glass options, and give you a fixed written price that includes everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">Schedule Consultation</Link>
            <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">Call (469) 908-2440</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
