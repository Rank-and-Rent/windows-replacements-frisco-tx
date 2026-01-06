import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Window Replacements of Frisco',
  description: 'Terms of Service for Window Replacements of Frisco. Read our terms and conditions for using our website and services.',
}

export default function TermsPage() {
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
              <li className="text-navy-700 font-medium">Terms of Service</li>
            </ol>
          </div>
        </nav>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <h1 className="text-3xl lg:text-4xl font-serif text-navy-600 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last Updated: January 1, 2026</p>

            <div className="prose-elegant space-y-8">
              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By accessing or using the Window Replacements of Frisco website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Services Description</h2>
                <p className="text-gray-600">
                  Window Replacements of Frisco provides window and door installation services in Frisco, Texas and surrounding areas. Our website provides information about our services and allows you to request quotes and contact us for consultations. This site routes inquiries to our chosen fulfillment partner for window and door contractor matching and project coordination support.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Use of Website</h2>
                <p className="text-gray-600 mb-4">When using our website, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate and complete information when submitting forms</li>
                  <li>Use the website for lawful purposes only</li>
                  <li>Not attempt to interfere with the proper functioning of the website</li>
                  <li>Not use automated systems to access the website without permission</li>
                  <li>Not impersonate any person or entity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Quotes and Estimates</h2>
                <p className="text-gray-600">
                  Quotes and estimates provided through our website or during consultations are based on the information provided at the time and are subject to change upon physical inspection of the project site. Final pricing will be provided in a written contract before work begins. All quotes are valid for 30 days unless otherwise specified.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Payment Terms</h2>
                <p className="text-gray-600">
                  Payment terms will be specified in your service contract. We accept various forms of payment including credit cards, checks, and financing options. A deposit may be required to schedule installation. Final payment is due upon satisfactory completion of work.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Warranties</h2>
                <p className="text-gray-600">
                  Products installed by Window Replacements of Frisco are covered by manufacturer warranties as specified by each brand (Andersen, Pella, JELD-WEN, Marvin). Additionally, we provide a workmanship warranty on our installation services. Warranty details will be provided in your service contract.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Intellectual Property</h2>
                <p className="text-gray-600">
                  All content on this website, including text, images, logos, and graphics, is the property of Window Replacements of Frisco or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the fullest extent permitted by law, Window Replacements of Frisco shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services. Our total liability shall not exceed the amount paid for the specific services giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless Window Replacements of Frisco, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your violation of these Terms of Service or your use of our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts located in Collin County, Texas.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after changes are posted constitutes your acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <address className="not-italic text-gray-600">
                  Window Replacements of Frisco<br />
                  1125 Legacy Dr #230<br />
                  Frisco, TX 75034<br />
                  Phone: <a href="tel:469-908-2440" className="text-slate-blue hover:text-navy-600">(469) 908-2440</a><br />
                  Email: <a href="mailto:hello@windowreplacementfrisco.com" className="text-slate-blue hover:text-navy-600">hello@windowreplacementfrisco.com</a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
