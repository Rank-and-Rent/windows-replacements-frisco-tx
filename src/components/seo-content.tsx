'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function SeoContent() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* Why Choose Us Section - Like Adler's projects block */}
      <section ref={sectionRef} className="relative bg-cream-100 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-slate-blue text-xs font-sans font-medium uppercase tracking-[0.2em]"
              >
                Why Choose Us
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 text-display-sm lg:text-display-md font-serif text-navy-600 leading-tight"
              >
                Driven by unparalleled choice, innovative installation techniques, and five-star customer service that exceeds client expectations every single time.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10"
              >
                <Link href="/contact" className="btn-outline btn-outline-copper">
                  Get Your Free Estimate
                </Link>
              </motion.div>
            </div>

            {/* Right Image with accent */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-3/4 h-full accent-block-blue -z-10" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-navy-600/80" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-display-sm lg:text-display-md font-serif text-white leading-tight"
            >
              Ready to Transform Your Home with Premium Windows?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-white/80 leading-relaxed"
            >
              Contact us today for a free, no-obligation estimate. Our window experts will help you find the perfect solution for your Frisco home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-outline btn-outline-light">
                Get Free Estimate
              </Link>
              <a href="tel:469-908-2440" className="btn-outline btn-outline-light">
                Call (469) 908-2440
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
