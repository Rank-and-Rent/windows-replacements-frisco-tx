import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energy Efficient Windows Frisco TX | Low-E Windows | Window Replacements of Frisco',
  description: 'Energy-efficient window installation in Frisco, TX. Low-E glass, argon fill, triple-pane options. Reduce energy bills, improve comfort. ENERGY STAR certified products.',
  keywords: 'energy efficient windows Frisco TX, Low-E windows, argon filled windows, triple pane windows, ENERGY STAR windows, energy saving windows',
}

export default function EnergyEfficientWindowsPage() {
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
                Energy-Efficient Windows That Pay for Themselves
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Transform your Frisco home with high-performance windows engineered to combat Texas heat. Our energy-efficient windows dramatically reduce cooling costs, enhance comfort, and protect your interiors from harmful UV rays while qualifying for utility rebates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-outline-light px-8 py-4 text-center">
                  Calculate Savings
                </Link>
                <a href="tel:469-908-2440" className="btn-outline-light px-8 py-4 text-center">
                  (469) 908-2440
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Energy-efficient windows in modern Frisco home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Energy Efficiency Matters */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
              Why Energy-Efficient Windows Matter in North Texas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Frisco&apos;s climate presents unique challenges: scorching summers with temperatures exceeding 100°F, intense solar radiation, and air conditioning costs that dominate utility bills. The right windows make a dramatic difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 text-center">
              <div className="text-4xl font-serif text-slate-blue mb-4">30%</div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Lower Cooling Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Homeowners typically see 25-35% reductions in summer cooling expenses after upgrading to energy-efficient windows. That&apos;s $500-$1,200 saved annually in North Texas.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="text-4xl font-serif text-slate-blue mb-4">99%</div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">UV Ray Blocking</h3>
              <p className="text-gray-600 leading-relaxed">
                Low-E coatings block up to 99% of harmful ultraviolet radiation, preventing fading of furniture, flooring, and artwork while allowing natural light to fill your rooms.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="text-4xl font-serif text-slate-blue mb-4">70°F</div>
              <h3 className="font-serif text-xl text-navy-600 mb-3">Surface Temperature</h3>
              <p className="text-gray-600 leading-relaxed">
                Energy-efficient glass stays near room temperature even on 100°F days, eliminating hot spots and radiant heat that make rooms uncomfortable despite air conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-16">
            Advanced Energy-Saving Technologies
          </h2>
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">Low-E Glass Coatings</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Low-emissivity coatings are microscopically thin metallic layers applied to glass surfaces. These invisible coatings reflect infrared heat while transmitting visible light, keeping interiors cool in summer and warm in winter.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For North Texas, we recommend Low-E coatings optimized for solar heat gain control. These specialized formulations reflect solar heat before it enters your home, dramatically reducing air conditioning loads.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Performance advantage:</strong> Low-E glass can reduce heat transfer by up to 50% compared to clear glass, while blocking 99% of UV rays and maintaining excellent visibility.
                </p>
              </div>
              <div className="bg-accent-light p-10">
                <h4 className="font-serif text-xl text-navy-600 mb-4">Low-E Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Reflects infrared heat while transmitting natural light</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Blocks 99% of UV radiation protecting interiors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Reduces fading of carpets, furniture, and artwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Maintains comfortable window surface temperatures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Works year-round for heating and cooling efficiency</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-accent-light p-10">
                <h4 className="font-serif text-xl text-navy-600 mb-4">Gas Fill Advantages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Denser than air for superior insulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Reduces convective heat transfer between panes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Non-toxic, colorless, and odorless inert gases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Long-lasting performance when properly sealed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-slate-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Reduces exterior noise transmission significantly</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-serif text-3xl text-navy-600 mb-4">Argon & Krypton Gas Fills</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The space between panes in insulated glass isn&apos;t simply air. High-performance windows are filled with argon or krypton gas—inert gases denser than air that significantly reduce heat transfer.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Argon is the most common fill, offering excellent performance at reasonable cost. Krypton, being denser, provides even better insulation in thinner cavities, making it ideal for triple-pane windows or space-constrained applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Performance advantage:</strong> Gas fills improve insulating value by 15-30% compared to air-filled panes, and also reduce condensation and noise transmission.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl text-navy-600 mb-4">Multi-Pane Construction</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While double-pane windows are standard, triple-pane windows deliver ultimate performance for energy-conscious homeowners. An additional pane creates two insulating cavities instead of one, dramatically improving thermal resistance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For Frisco&apos;s climate, triple-pane windows excel on western and southern exposures where afternoon sun creates the most significant cooling loads. The investment pays back through lower utility bills and superior comfort.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Performance advantage:</strong> Triple-pane windows can achieve U-factors as low as 0.15, compared to 0.30 for standard double-pane. That translates to 50% less heat transfer.
                </p>
              </div>
              <div className="bg-accent-light p-10">
                <h4 className="font-serif text-xl text-navy-600 mb-4">Double vs. Triple Pane</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-navy-600 mb-2">Double-Pane Windows</h5>
                    <p className="text-gray-600 text-sm mb-2">Excellent for most applications</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                      <li>Cost-effective performance</li>
                      <li>Lighter weight, easier operation</li>
                      <li>Ideal for moderate climates</li>
                      <li>U-factors: 0.25-0.35</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-navy-600 mb-2">Triple-Pane Windows</h5>
                    <p className="text-gray-600 text-sm mb-2">Maximum performance and comfort</p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-5 list-disc">
                      <li>Ultimate energy efficiency</li>
                      <li>Superior noise reduction</li>
                      <li>Best for extreme temperatures</li>
                      <li>U-factors: 0.15-0.25</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENERGY STAR */}
      <section className="py-20 lg:py-28 bg-accent-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 mb-6">
                ENERGY STAR Certified Windows
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                All our energy-efficient windows meet or exceed ENERGY STAR requirements for the South-Central climate zone. This certification ensures they&apos;ve been independently tested and verified to deliver promised energy savings.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                ENERGY STAR windows for our region must meet specific U-factor (heat transfer) and Solar Heat Gain Coefficient (SHGC) requirements. We help you select the optimal combination for your home&apos;s orientation and your priorities.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-blue pl-6">
                  <h3 className="font-medium text-navy-600 mb-1">Utility Rebates Available</h3>
                  <p className="text-gray-600">Many utility companies offer rebates for ENERGY STAR certified window installations. We provide documentation to simplify your rebate applications.</p>
                </div>
                <div className="border-l-4 border-slate-blue pl-6">
                  <h3 className="font-medium text-navy-600 mb-1">Tax Credits</h3>
                  <p className="text-gray-600">Qualified energy-efficient windows may be eligible for federal tax credits. Ask us about current incentive programs during your consultation.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-serif text-2xl text-navy-600 mb-6 text-center">Understanding Performance Ratings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-navy-600 mb-2">U-Factor (0.15-0.35)</h4>
                  <p className="text-sm text-gray-600 mb-2">Measures heat transfer rate. Lower is better for insulation.</p>
                  <div className="bg-slate-blue/10 h-2 rounded-full">
                    <div className="bg-slate-blue h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Our windows: 0.20-0.30 (excellent for Texas)</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy-600 mb-2">SHGC (0.20-0.35)</h4>
                  <p className="text-sm text-gray-600 mb-2">Solar Heat Gain Coefficient. Lower blocks more heat in summer.</p>
                  <div className="bg-slate-blue/10 h-2 rounded-full">
                    <div className="bg-slate-blue h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Our windows: 0.22-0.27 (optimized for cooling)</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy-600 mb-2">Visible Transmittance (0.40-0.70)</h4>
                  <p className="text-sm text-gray-600 mb-2">Light passage. Higher means more natural light indoors.</p>
                  <div className="bg-slate-blue/10 h-2 rounded-full">
                    <div className="bg-slate-blue h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Our windows: 0.50-0.65 (bright, naturally lit rooms)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-3xl lg:text-5xl text-navy-600 text-center mb-6">
            Calculate Your Energy Savings
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Based on typical Frisco homes, here&apos;s what you can expect from energy-efficient window replacement:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream-100 p-8 text-center">
              <div className="text-3xl font-serif text-slate-blue mb-2">$75-$150</div>
              <h3 className="font-medium text-navy-600 mb-3">Monthly Savings</h3>
              <p className="text-sm text-gray-600">Average reduction in cooling and heating costs for 2,000 sq ft home</p>
            </div>
            <div className="bg-cream-100 p-8 text-center">
              <div className="text-3xl font-serif text-slate-blue mb-2">7-12 Years</div>
              <h3 className="font-medium text-navy-600 mb-3">Payback Period</h3>
              <p className="text-sm text-gray-600">Time to recoup investment through energy savings alone, not including comfort and value gains</p>
            </div>
            <div className="bg-cream-100 p-8 text-center">
              <div className="text-3xl font-serif text-slate-blue mb-2">$20,000+</div>
              <h3 className="font-medium text-navy-600 mb-3">Lifetime Savings</h3>
              <p className="text-sm text-gray-600">Total energy cost savings over 25-year window lifespan</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Want a personalized savings estimate for your home? Contact us for a free energy consultation.
            </p>
            <Link href="/contact" className="btn-outline-copper px-8 py-4 inline-block">
              Get Custom Savings Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-navy-600">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
            Start Saving on Energy Bills Today
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Schedule a free consultation to learn how energy-efficient windows can transform your Frisco home&apos;s comfort and reduce utility costs. We&apos;ll analyze your current windows and calculate your potential savings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-outline-light px-8 py-4">
              Schedule Energy Audit
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

