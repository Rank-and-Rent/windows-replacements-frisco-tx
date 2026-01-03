'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const windowTypes = [
  {
    name: 'Double-Hung',
    slug: 'double-hung',
    image: '/windows/double-hung-windows-frisco-tx.jpg',
  },
  {
    name: 'Casement',
    slug: 'casement',
    image: '/windows/casement-windows-frisco-tx.webp',
  },
  {
    name: 'Sliding',
    slug: 'sliding',
    image: '/windows/sliding-windows-frisco-tx.jpg',
  },
  {
    name: 'Bay & Bow',
    slug: 'bay-bow',
    image: '/windows/bay-bow-windows-frisco-tx.jpg',
  },
  {
    name: 'Picture',
    slug: 'picture',
    image: '/windows/picture-windows-frisco-tx.webp',
  },
]

export default function WindowTypes() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section ref={sectionRef} className="relative bg-[#FAFAFA] pt-24 lg:pt-32 pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Large continuous accent block on the right - like Adler */}
        <div className="absolute top-[280px] right-0 w-[35%] h-[600px] bg-[#E8F1F5] hidden lg:block" />
        
        {/* Row 1: Header + First Image side by side */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left - Header */}
          <div className="lg:pr-8">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#4A6B7C] text-[11px] font-sans font-semibold uppercase tracking-[0.2em]"
            >
              Window Types
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-[2.5rem] lg:text-[3.25rem] font-serif text-[#0F2A3D] leading-[1.08] font-medium"
            >
              Frisco&apos;s Premier Window Replacement Company.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <Link 
                href="/windows" 
                className="inline-flex items-center justify-center px-8 py-4 border border-[#4A6B7C] text-[#4A6B7C] text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-[#4A6B7C] hover:text-white transition-all duration-300"
              >
                View All Windows
              </Link>
            </motion.div>
          </div>

          {/* Right - First Image (Double-Hung) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10"
          >
            <Link href={`/windows/${windowTypes[0].slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${windowTypes[0].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                    {windowTypes[0].name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                    View Category
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
            {/* Card 2 - Casement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href={`/windows/${windowTypes[1].slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${windowTypes[1].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {windowTypes[1].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Category
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Sliding */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href={`/windows/${windowTypes[2].slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${windowTypes[2].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {windowTypes[2].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Category
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - overlaps the accent block */}
          <div className="space-y-16 lg:space-y-20 relative z-10">
            {/* Card 4 - Bay & Bow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link href={`/windows/${windowTypes[3].slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${windowTypes[3].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {windowTypes[3].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Category
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 5 - Picture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link href={`/windows/${windowTypes[4].slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${windowTypes[4].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/70 via-[#0F2A3D]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <h3 className="text-[1.875rem] font-serif text-white italic font-normal">
                      {windowTypes[4].name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 group-hover:text-white transition-colors">
                      View Category
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
