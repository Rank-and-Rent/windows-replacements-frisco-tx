'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const brands = [
  {
    name: 'Andersen',
    slug: 'andersen',
    tagline: 'America\'s Most Trusted Window Brand',
    description: 'For over 120 years, Andersen has set the standard for quality windows. Their innovative Fibrex composite material combines the strength and insulating value of wood with the low maintenance of vinyl.',
    features: ['Fibrex composite material', 'ENERGY STAR certified', 'Extensive warranty coverage'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Pella',
    slug: 'pella',
    tagline: 'Expertly Designed. Exceptionally Built.',
    description: 'Pella windows combine innovative design with meticulous craftsmanship. Known for their exclusive features like integrated blinds and security sensors, Pella offers premium solutions for discerning homeowners.',
    features: ['Between-the-glass blinds', 'Triple-pane glass options', 'Smart home ready'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
  },
  {
    name: 'Jeld-Wen',
    slug: 'jeld-wen',
    tagline: 'Reliable Performance. Exceptional Value.',
    description: 'Jeld-Wen delivers outstanding quality at competitive prices. Their AuraLast wood protection and advanced weather stripping make them ideal for the demanding Texas climate.',
    features: ['AuraLast pine protection', 'Custom size options', 'Low-E glass technology'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  }
]

export default function Brands() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-slate-blue text-xs font-sans font-medium uppercase tracking-[0.2em]"
          >
            Our Partners
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-display-sm lg:text-display-md font-serif text-navy-600"
          >
            Premium Window Brands You Can Trust.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            As an authorized dealer for Andersen, Pella, and Jeld-Wen, we bring Frisco homeowners exclusive access to America&apos;s finest window manufacturers.
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="space-y-24 lg:space-y-32">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? '' : ''}`}
            >
              {/* Image - alternating sides */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Accent block behind image */}
                  <div className={`absolute ${index % 2 === 0 ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-3/4 h-3/4 accent-block-blue -z-10`} />
                  
                  <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${brand.image})` }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-slate-blue text-xs font-sans font-medium uppercase tracking-[0.15em]"
                >
                  {brand.tagline}
                </motion.span>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-display-sm font-serif text-navy-600"
                >
                  {brand.name}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-gray-600 leading-relaxed"
                >
                  {brand.description}
                </motion.p>
                
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 space-y-3"
                >
                  {brand.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-slate-blue rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-10"
                >
                  <Link 
                    href={`/brands/${brand.slug}`}
                    className="inline-flex items-center gap-3 text-navy-600 font-medium text-sm uppercase tracking-[0.1em] group"
                  >
                    Explore {brand.name} Windows
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
