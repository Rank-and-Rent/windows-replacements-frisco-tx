import Header from '@/components/header'
import MaterialsSection from '@/components/materials-section'
import Hero from '@/components/hero'
import WindowTypes from '@/components/window-types'
import Brands from '@/components/brands'
import SeoContent from '@/components/seo-content'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <WindowTypes />
        <Brands />
        <SeoContent />
        <Footer />
      </main>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://windowreplacementfrisco.com',
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Window Replacement',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Window Replacements of Frisco',
              '@id': 'https://windowreplacementfrisco.com/#organization',
            },
            areaServed: {
              '@type': 'State',
              name: 'Texas',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Premium Window Brands',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Andersen Window Installation' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Pella Window Installation' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Jeld-Wen Window Installation' },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

