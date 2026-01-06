'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const materialTypes = [
  {
    name: 'Vinyl Windows',
    slug: '/materials/vinyl-windows',
    description: 'Low-maintenance vinyl windows with superior energy efficiency and durability. Perfect for Frisco homeowners seeking hassle-free performance.',
    features: ['Low maintenance', 'Energy efficient', 'Weather resistant'],
    image: '/window-types/vinyl-frisco-tx.jpg',
  },
  {
    name: 'Aluminum Windows',
    slug: '/materials/aluminum-windows',
    description: 'Durable aluminum windows with modern thermal efficiency and sleek contemporary styling. Exceptional strength for any Frisco home.',
    features: ['Durable & strong', 'Sleek design', 'Impact resistant'],
    image: '/window-types/aluminum-frisco-tx.jpg',
  },
  {
    name: 'Fibrex Windows',
    slug: '/materials/fibrex-windows',
    description: 'Andersen\'s premium composite material combining wood-like beauty with advanced durability. The ultimate in window frame technology.',
    features: ['Wood-like beauty', 'Composite strength', 'Premium performance'],
    image: '/window-types/fibrex-frisco-tx.jpg',
  },
  {
    name: 'Fiberglass Windows',
    slug: '/materials/fiberglass-windows',
    description: 'Ultimate strength and insulation with authentic wood-like appearance. Maximum durability and energy efficiency in one package.',
    features: ['Ultimate strength', 'Superior insulation', 'Wood-like aesthetics'],
    image: '/window-types/fiberglass-frisco-tx.jpg',
  },
  {
    name: 'Wood Clad Windows',
    slug: '/materials/wood-clad-windows',
    description: 'Authentic wood interiors with weather-resistant exterior protection. Traditional beauty meets modern durability and low maintenance.',
    features: ['Authentic wood', 'Weather protection', 'Traditional appeal'],
    image: '/window-types/wood-clad-frisco-tx.jpg',
  },
  {
    name: 'Wood Windows',
    slug: '/materials/wood-windows',
    description: 'Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship for discerning Frisco homeowners.',
    features: ['Natural beauty', 'Superior insulation', 'Timeless character'],
    image: '/window-types/wood-frisco-tx.jpg',
  },
]

export default function MaterialsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className="relative bg-white pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Large continuous accent block on the left - like WindowTypes but opposite side */}
        <div className="absolute top-[280px] left-0 w-[35%] h-[600px] bg-[#E8F1F5] hidden lg:block z-0" />
        
        {/* Row 1: Header + First Image side by side */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left - Header */}
          <div className="lg:pr-8 relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#4A6B7C] text-[11px] font-sans font-semibold uppercase tracking-[0.2em]"
            >
              Window Materials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[2.5rem] lg:text-[3.25rem] font-serif text-[#0F2A3D] leading-[1.08] font-medium"
            >
              Premium Materials Designed for Frisco&apos;s Climate.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              Choose from premium window materials designed for Frisco&apos;s climate. Each material offers unique benefits in terms of durability, energy efficiency, and aesthetic appeal.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Link 
                href="/materials" 
                className="inline-flex items-center justify-center px-8 py-4 border border-[#4A6B7C] text-[#4A6B7C] text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#4A6B7C] hover:text-white transition-all duration-300"
              >
                View All Materials
              </Link>
            </motion.div>
          </div>

          {/* Right - First Image (Vinyl) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10"
          >
            <Link href={materialTypes[0].slug} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${materialTypes[0].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                    {materialTypes[0].name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                    View Material
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Row 2: Two column grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-16 lg:mt-20">
          
          {/* Left Column */}
          <div className="space-y-16 lg:space-y-20">
            {/* Card 2 - Aluminum */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={materialTypes[1].slug} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${materialTypes[1].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {materialTypes[1].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Material
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Fibrex */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href={materialTypes[2].slug} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${materialTypes[2].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {materialTypes[2].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Material
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - overlaps the accent block */}
          <div className="space-y-16 lg:space-y-20 relative z-10">
            {/* Card 4 - Fiberglass */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link href={materialTypes[3].slug} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${materialTypes[3].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {materialTypes[3].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Material
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 5 - Wood Clad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link href={materialTypes[4].slug} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${materialTypes[4].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {materialTypes[4].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Material
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Row 3: Single centered card for Wood Windows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-20 max-w-4xl mx-auto"
        >
          <Link href={materialTypes[5].slug} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${materialTypes[5].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                  {materialTypes[5].name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                  View Material
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
