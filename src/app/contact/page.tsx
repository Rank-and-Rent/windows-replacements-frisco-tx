'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

const windowServices = [
  'Double-Hung Windows',
  'Single-Hung Windows',
  'Casement Windows',
  'Awning Windows',
  'Sliding Windows',
  'Picture Windows',
  'Bay & Bow Windows',
  'Special Shape Windows',
]

const doorServices = [
  'Entry Doors',
  'Patio Doors',
  'French Doors',
  'Sliding Glass Doors',
  'Storm Doors',
  'Custom Doors',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    timeline: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      address: '',
      timeline: '',
      description: '',
    })
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="bg-stone-100 py-4 pt-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <ol className="flex items-center space-x-2 text-sm text-navy-500">
              <li><Link href="/" className="hover:text-navy-700">Home</Link></li>
              <li>/</li>
              <li className="text-navy-700 font-medium">Contact</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-navy-600 py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-3xl lg:text-5xl font-serif text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Ready to start your window or door project? Fill out the form below or give us a call for a free consultation and estimate.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-24 bg-cream-bg">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-navy-600 p-8 lg:p-10 rounded-lg">
                  <h2 className="text-2xl font-serif text-white mb-6">Request a Free Estimate</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded text-center">
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p>We have received your request and will contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                        />
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(469) 908-2440"
                            className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                          />
                        </div>
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                        >
                          <option value="">Select a service...</option>
                          <optgroup label="Windows">
                            {windowServices.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Doors">
                            {doorServices.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </optgroup>
                          <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                        </select>
                      </div>

                      {/* Property Address */}
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-white/80 mb-2">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main St, Frisco, TX 75034"
                          className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                        />
                      </div>

                      {/* Project Timeline */}
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                          Project Timeline *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue"
                        >
                          <option value="">Select timeline...</option>
                          <option value="ASAP">ASAP</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="Within 3 months">Within 3 months</option>
                          <option value="Within 6 months">Within 6 months</option>
                          <option value="6+ months">6+ months</option>
                          <option value="Just researching">Just researching</option>
                        </select>
                      </div>

                      {/* Project Description */}
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={4}
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Tell us about your project... How many windows/doors? Any specific concerns or requirements?"
                          className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-slate-blue resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-navy-600 py-4 font-medium tracking-wide rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-serif text-navy-600 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-navy-600 mb-2">Phone</h4>
                      <a href="tel:469-908-2440" className="text-slate-blue hover:text-navy-600 transition-colors">
                        (469) 908-2440
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-navy-600 mb-2">Email</h4>
                      <a href="mailto:hello@windowreplacementfrisco.com" className="text-slate-blue hover:text-navy-600 transition-colors break-all">
                        hello@windowreplacementfrisco.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-navy-600 mb-2">Address</h4>
                      <address className="not-italic text-gray-600">
                        1125 Legacy Dr #230<br />
                        Frisco, TX 75034
                      </address>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-navy-600 mb-2">Hours</h4>
                      <p className="text-gray-600">Open 24/7 - Available for Emergency Service</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-8 rounded-lg">
                  <h3 className="text-lg font-serif text-navy-600 mb-4">Service Areas</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    We proudly serve Frisco and surrounding areas including:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Plano</li>
                    <li>McKinney</li>
                    <li>Allen</li>
                    <li>The Colony</li>
                    <li>Prosper</li>
                    <li>Little Elm</li>
                    <li>Celina</li>
                    <li>And more...</li>
                  </ul>
                  <Link href="/locations" className="inline-block mt-4 text-sm font-medium text-slate-blue hover:text-navy-600 transition-colors">
                    View All Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <h2 className="text-2xl font-serif text-navy-600 text-center mb-8">Find Us</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8!2d-96.8236!3d33.0978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3cbb14c37a9b%3A0x8f6e8e8e8e8e8e8e!2s1125%20Legacy%20Dr%20%23230%2C%20Frisco%2C%20TX%2075034!5e0!3m2!1sen!2sus!4v1709847600000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Frisco Window Replacements Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
