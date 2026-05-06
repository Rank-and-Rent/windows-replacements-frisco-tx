import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Marvin Windows & Doors Frisco TX',
  description: 'Marvin Signature and Elevate for Newman Village, Starwood, and Eldorado custom Frisco homes. Tight tolerances, big-glass elevations, dark factory finishes.',
  keywords: 'Marvin windows Frisco TX, Marvin doors, Marvin dealer, custom windows, Marvin installation',
  alternates: {
    canonical: 'https://windowreplacementfrisco.com/brands/marvin-windows-doors',
  },
}

export default function MarvinPage() {
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
              <li><Link href="/brands" className="hover:text-navy-700">Brands</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Marvin</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-navy-600 py-20 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/brands/marvin-windows-frisco-tx.jpg)' }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
                Marvin Window & Door Replacement in Frisco, TX
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Premium custom windows and doors since 1912. Marvin windows and doors in Frisco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                  Call (469) 908-2440
                </a>
                <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide text-center hover:bg-gray-100 transition-colors">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/marvin-windows-and-doors-frisco-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className="h-20 lg:h-24 w-auto mx-auto mb-4"
                />
                <h2 className="text-xl lg:text-2xl font-serif text-navy-600">Marvin Windows & Doors</h2>
              </div>
            </div>
          </div>
        </section>

        {/* About Marvin */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 mb-6">
                  About Marvin Windows & Doors
                </h2>
                <p className="text-gray-600 mb-6">
                  Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance.
                </p>
                <p className="text-gray-600 mb-6">
                  Their extensive product lines, including Marvin Signature, Marvin Elevate, and Marvin Essential collections, offer unparalleled customization options in materials, finishes, and hardware. For Frisco homeowners seeking luxury, durability, and architectural distinction, Marvin delivers exceptional value.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-navy-600 mb-6">Why Choose Marvin</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Made-to-Order</span>
                      <p className="text-sm text-gray-600">Every window and door built to your exact specifications</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Premium Materials</span>
                      <p className="text-sm text-gray-600">Ultrex fiberglass exteriors, warm wood interiors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Unlimited Options</span>
                      <p className="text-sm text-gray-600">Virtually unlimited sizes, shapes, and configurations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium text-navy-600">Architectural Excellence</span>
                      <p className="text-sm text-gray-600">Designed for distinctive homes and demanding projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Collections */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Marvin Collections We Install
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Signature</h3>
                <p className="text-gray-600 mb-4">The ultimate in custom craftsmanship with unlimited design possibilities.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Ultimate and Modern lines</li>
                  <li>Premium wood interiors</li>
                  <li>Exclusive hardware options</li>
                  <li>Largest customization range</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Elevate</h3>
                <p className="text-gray-600 mb-4">The perfect balance of beauty, strength, and performance.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Ultrex fiberglass exteriors</li>
                  <li>Warm wood interiors</li>
                  <li>Exceptional durability</li>
                  <li>Extensive style options</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-navy-600 mb-4">Marvin Essential</h3>
                <p className="text-gray-600 mb-4">Streamlined design with outstanding performance at accessible pricing.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>All-fiberglass construction</li>
                  <li>Modern aesthetics</li>
                  <li>Low maintenance</li>
                  <li>Energy efficient</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-stone-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What makes Marvin different from other brands?</h3>
                <p className="text-gray-600">Marvin specializes in made-to-order products with virtually unlimited customization options. Their focus on craftsmanship and architectural excellence sets them apart for discerning homeowners.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">What is Ultrex fiberglass?</h3>
                <p className="text-gray-600">Ultrex is Marvin&apos;s proprietary fiberglass material that is 8 times stronger than vinyl. It resists expansion and contraction, ensuring lasting performance and tight seals in Texas climate extremes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">How long does a Marvin custom order take?</h3>
                <p className="text-gray-600">Marvin custom orders typically take 8-12 weeks depending on the complexity and product line. We provide accurate timelines during your design consultation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif text-navy-600 mb-2">Is Marvin worth the premium price?</h3>
                <p className="text-gray-600">For homeowners who value custom craftsmanship, architectural distinction, and lasting quality, Marvin provides exceptional value. Their products often last decades longer than standard options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
                <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Marvin History and Manufacturing</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Marvin has been family-owned since 1912 and is widely regarded as the highest-quality window manufacturer in the United States. Their product range includes Marvin Essential (entry tier), Marvin Elevate (mid-tier fiberglass), Marvin Signature (premium custom), Marvin Modern (contemporary), and Marvin Replacement (retrofit). We are an authorized Marvin dealer in Frisco and install all five core lines. Most Frisco Marvin projects fall into the Elevate and Signature ranges.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Why Marvin for Premium Frisco Custom Homes</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Marvin Signature is the premium-custom benchmark that Newman Village, Edgestone at Legacy, Stonebriar, and the larger Hollyhock builds rely on. Full custom dimensioning, mahogany interior options, dark exterior finishes that hold their color for decades, and tight-tolerance hardware that sets it apart from any other production line. Marvin Elevate fiberglass is the strongest mid-tier option for Frisco homes — better thermal performance than vinyl, beautiful aesthetics, and an industry-leading warranty. Both lines fit the design vocabulary of premium Frisco builds.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Marvin Modern for Contemporary Frisco Facades</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">The Marvin Modern line is built for the contemporary architectural vocabulary that has emerged in newer Frisco custom builds. Slim sightlines, clean lines, dark exterior finishes, and integrated handle and lock hardware that disappears into the frame. Modern works particularly well on the Hollyhock contemporary builds and the smaller subset of Newman Village homes that lean modern rather than traditional. We have installed Marvin Modern across a range of Frisco custom builds and the line consistently delivers.</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl lg:text-4xl font-serif text-navy-600 text-center mb-8">Marvin Warranty and Service</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 leading-relaxed">Marvin warranties run 20 years on glass and 10 years on most components. Service calls in Frisco for Marvin warranty work typically scheduled within a week, with most parts available next-day from Marvin&apos;s regional fulfillment. We register every Marvin warranty in your name on completion day and back our installation labor with our own multi-year written warranty. The Marvin product is the kind of premium-tier window that homeowners keep for the life of the home, and the warranty support reflects that.</p>
            </div>
          </div>
        </section>

      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Marvin builds at higher tolerances than any other window manufacturer in the U.S. The hardware on a Marvin Signature is noticeably smoother than equivalent Andersen or Pella product, the corner joinery on the wood-clad lines is tighter, and the factory finishes hold up better through Texas UV. For Frisco custom builds where the homeowner is investing in premium product across the board, Marvin is the right answer. We have installed Marvin Signature, Modern, and Elevate across Newman Village, Edgestone at Legacy, Stonebriar, and the larger Hollyhock builds.</p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Marvin&apos;s family ownership shows up in product quality in ways that matter to long-term homeowners. The brand consistently invests in R&amp;D, manufacturing tolerances, and warranty support at higher levels than publicly traded competitors. For Frisco custom-home owners planning to stay in their home long-term, the Marvin premium tier returns its cost over the service life of the product. We provide line-item written quotes for Marvin projects that hold for 30 days.</p>
          </div>
        </div>
      </section>

<section className="py-16 lg:py-24 bg-navy-600">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-6">
              Ready for Marvin Windows & Doors?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free design consultation and estimate on Marvin products for your Frisco home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4">
                Call (469) 908-2440
              </a>
              <Link href="/contact" className="bg-white text-navy-600 px-8 py-4 font-medium tracking-wide hover:bg-gray-100 transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
