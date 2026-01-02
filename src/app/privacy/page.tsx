import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Frisco Window Replacements',
  description: 'Privacy Policy for Frisco Window Replacements. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
              <li className="text-navy-700 font-medium">Privacy Policy</li>
            </ol>
          </div>
        </nav>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <h1 className="text-3xl lg:text-4xl font-serif text-navy-600 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last Updated: January 1, 2026</p>

            <div className="prose-elegant space-y-8">
              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Introduction</h2>
                <p className="text-gray-600">
                  Frisco Window Replacements (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address that you provide when requesting a quote or contacting us.</li>
                  <li><strong>Project Information:</strong> Details about your window or door project, property address, and project timeline.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device that help us improve your experience on our website.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Respond to your inquiries and provide quotes for our services</li>
                  <li>Schedule consultations and installations</li>
                  <li>Communicate with you about your project</li>
                  <li>Improve our website and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> Third parties who assist us in operating our business, such as scheduling software, CRM systems, and marketing platforms.</li>
                  <li><strong>Fulfillment Partners:</strong> This site routes inquiries to our chosen fulfillment partner for window and door contractor matching and project coordination support.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and the safety of others.</li>
                </ul>
                <p className="text-gray-600 mt-4">We do not sell your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p className="text-gray-600 mt-4">To exercise these rights, please contact us using the information below.</p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Cookies</h2>
                <p className="text-gray-600">
                  Our website uses cookies to enhance your browsing experience. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of our website may not function properly without cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Third-Party Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif text-navy-600 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <address className="not-italic text-gray-600">
                  Frisco Window Replacements<br />
                  1125 Legacy Dr #230<br />
                  Frisco, TX 75034<br />
                  Phone: <a href="tel:469-908-2440" className="text-slate-blue hover:text-navy-600">(469) 908-2440</a><br />
                  Email: <a href="mailto:info@friscowindowreplacements.com" className="text-slate-blue hover:text-navy-600">info@friscowindowreplacements.com</a>
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
