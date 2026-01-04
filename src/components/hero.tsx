'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const slides = [
  {
    image: '/windows/double-hung-windows-frisco-tx.jpg',
    title: "Frisco's Premier Window\nReplacement Company.",
    cta: { text: "View Our Windows", href: "/windows" }
  },
  {
    image: '/windows/casement-windows-frisco-tx.webp',
    title: "Energy Efficient Windows\nfor Texas Homes.",
    cta: { text: "Explore Casement Windows", href: "/windows/casement-windows" }
  },
  {
    image: '/locations/window-replacement-downtown-frisco-tx.webp',
    title: "Serving Downtown Frisco\nwith Premium Windows.",
    cta: { text: "View Our Services", href: "/locations/dallas-tx" }
  },
  {
    image: '/doors/entry-doors-frisco-tx.webp',
    title: "Complete Door Solutions\nfor Your Home.",
    cta: { text: "View Our Doors", href: "/doors" }
  },
  {
    image: '/locations/window-replacement-stonebriar-tx.webp',
    title: "Stonebriar Excellence.\nPremium Quality Windows.",
    cta: { text: "View Our Services", href: "/locations/plano-tx" }
  },
  {
    image: '/windows/special-shape-windows-frisco-tx.jpg',
    title: "Custom Window Designs\nfor Unique Homes.",
    cta: { text: "Special Shape Windows", href: "/windows/special-shape-windows" }
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1200)
  }, [isAnimating, currentSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 7000)
    return () => clearInterval(timer)
  }, [isAnimating, nextSlide])

  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Brand Logos Banner - positioned below fixed header */}
      <div className="absolute top-[5rem] lg:top-[6rem] left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-3 lg:py-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-8">
            <span className="hidden sm:inline text-sm font-medium text-gray-700 mr-2 lg:mr-4">Trusted Brands:</span>
            <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/andersen-windows-and-doors-frisco-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/pella-windows-and-doors-frisco-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/jeld-wen-windows-and-doors-frisco-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/marvin-windows-and-doors-frisco-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Images with Ken Burns effect */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'linear' }}
          />
          {/* Gradient overlay - darker on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-600/70 via-navy-600/40 to-navy-600/20" />
        </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-48 lg:pt-52">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="max-w-3xl"
          >
              <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-serif text-white leading-[1.05] whitespace-pre-line font-medium">
                {slides[currentSlide].title}
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12"
              >
                <Link href={slides[currentSlide].cta.href} className="btn-outline btn-outline-light">
                  {slides[currentSlide].cta.text}
                </Link>
              </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Slide Navigation - Bottom center like Adler */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
        <button 
          onClick={prevSlide}
          disabled={isAnimating}
          className="text-white/60 hover:text-white transition-colors duration-300 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        
        <div className="flex items-center gap-2 text-white font-sans text-sm tracking-wider">
          <span className="font-medium">{currentSlide + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/40">{slides.length}</span>
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={isAnimating}
          className="text-white/60 hover:text-white transition-colors duration-300 disabled:opacity-50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
