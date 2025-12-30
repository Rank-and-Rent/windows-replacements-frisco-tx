'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    title: "Frisco's Premier Window\nReplacement Company.",
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    title: "Energy Efficient Windows\nfor Texas Homes.",
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    title: "Expert Installation.\nLifetime Warranty.",
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
      {/* Background Images with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
                <Link href="/windows" className="btn-outline btn-outline-light">
                  View Our Services
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
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
