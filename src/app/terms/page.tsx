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

      </main>
      <Footer />
    </>
  )
}
