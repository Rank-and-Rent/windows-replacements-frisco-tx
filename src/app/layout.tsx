import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Window Replacements of Frisco | Premium Window Installation | Andersen, Pella, Jeld-Wen',
  description: 'Frisco\'s trusted window replacement experts. We specialize in Andersen, Pella, and Jeld-Wen windows. Professional installation of double-hung, casement, bay & bow, and specialty windows. Free estimates. Call 469-908-2440.',
  keywords: 'window replacement Frisco TX, Andersen windows Frisco, Pella windows Frisco, Jeld-Wen windows, double-hung windows, casement windows, bay windows, bow windows, window installation Frisco, replacement windows Texas',
  openGraph: {
    title: 'Window Replacements of Frisco | Premium Window Installation',
    description: 'Frisco\'s premier window replacement company. Authorized dealer for Andersen, Pella, and Jeld-Wen. Expert installation, lifetime warranties.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Window Replacements of Frisco',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://windowreplacementfrisco.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

