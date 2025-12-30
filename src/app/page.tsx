import Header from '@/components/header'
import Hero from '@/components/hero'
import WindowTypes from '@/components/window-types'
import Brands from '@/components/brands'
import SeoContent from '@/components/seo-content'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WindowTypes />
      <Brands />
      <SeoContent />
      <Footer />
    </main>
  )
}

