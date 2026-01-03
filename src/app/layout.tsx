import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://windowreplacementfrisco.com'),
  title: {
    default: 'Window Replacements of Frisco | Premium Window Installation | Andersen, Pella, Jeld-Wen',
    template: '%s | Window Replacements of Frisco',
  },
  description: 'Frisco\'s trusted window replacement experts. Andersen, Pella, and Jeld-Wen windows. Professional installation of double-hung, casement, bay & bow, and specialty windows. Free estimates. Call 469-908-2440.',
  keywords: [
    'window replacement Frisco TX',
    'Andersen windows Frisco',
    'Pella windows Frisco',
    'Jeld-Wen windows Frisco',
    'double-hung windows Frisco',
    'casement windows Frisco TX',
    'bay windows installation',
    'bow windows Frisco',
    'window installation Frisco',
    'energy efficient windows Frisco',
    'replacement windows Collin County',
  ],
  authors: [{ name: 'Window Replacements of Frisco' }],
  creator: 'Window Replacements of Frisco',
  publisher: 'Window Replacements of Frisco',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Best Window Replacement in Frisco, TX',
    description: 'Frisco\'s premier window replacement company. Andersen, Pella, and Jeld-Wen. Expert installation, lifetime warranties.',
    url: 'https://windowreplacementfrisco.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Window Replacements of Frisco',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Window Replacements of Frisco - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Replacements of Frisco',
    description: 'Premium window replacement in Frisco, TX. Andersen, Pella & Jeld-Wen windows.',
    images: ['/og-image.jpg'],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Frisco" />
        <meta name="geo.position" content="33.1507;-96.8236" />
        <meta name="ICBM" content="33.1507, -96.8236" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://windowreplacementfrisco.com/#organization',
              name: 'Window Replacements of Frisco',
              alternateName: 'Frisco Window Replacement',
              description: 'Frisco\'s trusted window replacement experts. Andersen, Pella, and Jeld-Wen windows.',
              url: 'https://windowreplacementfrisco.com',
              telephone: '+1-469-908-2440',
              email: 'hello@windowreplacementfrisco.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6959 Lebanon Rd #210',
                addressLocality: 'Frisco',
                addressRegion: 'TX',
                postalCode: '75034',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.1507,
                longitude: -96.8236,
              },
              areaServed: [
                { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
                { '@type': 'City', name: 'Plano' },
                { '@type': 'City', name: 'McKinney' },
                { '@type': 'City', name: 'Little Elm' },
                { '@type': 'City', name: 'Prosper' },
                { '@type': 'City', name: 'The Colony' },
                { '@type': 'City', name: 'Celina' },
                { '@type': 'City', name: 'Allen' },
              ],
              knowsAbout: [
                'Window Replacement',
                'Window Installation',
                'Energy Efficient Windows',
                'Double-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
              ],
              brand: [
                { '@type': 'Brand', name: 'Andersen' },
                { '@type': 'Brand', name: 'Pella' },
                { '@type': 'Brand', name: 'Jeld-Wen' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Financing',
              image: 'https://windowreplacementfrisco.com/og-image.jpg',
              logo: 'https://windowreplacementfrisco.com/logo.png',
              slogan: 'Premium Window Replacement for Frisco Homes',
              foundingDate: '2010',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '121',
                bestRating: '5',
                worstRating: '1',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Window Replacement Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Double-Hung Window Installation',
                      description: 'Professional installation of double-hung windows with energy-efficient Low-E glass.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Casement Window Installation',
                      description: 'Side-hinged casement windows for maximum ventilation and energy efficiency.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bay Window Installation',
                      description: 'Stunning bay window installations that add space and natural light.',
                    },
                  },
                ],
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://windowreplacementfrisco.com/#website',
              name: 'Window Replacements of Frisco',
              url: 'https://windowreplacementfrisco.com',
              publisher: { '@id': 'https://windowreplacementfrisco.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://windowreplacementfrisco.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://windowreplacementfrisco.com/#org',
              name: 'Window Replacements of Frisco',
              url: 'https://windowreplacementfrisco.com',
              logo: 'https://windowreplacementfrisco.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-469-908-2440',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

