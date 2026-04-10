import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react'

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// To receive form submissions by email, create a free account at formspree.io,
// create a new form, and replace the URL below with your Formspree endpoint.
// Example: 'https://formspree.io/f/xpwzabcd'
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

// Replace this with your actual Calendly link once you create a free account
// at calendly.com. Example: 'https://calendly.com/faithfulhandshomecare'
const CALENDLY_URL = 'https://calendly.com/faithfulhandshomecare'
// ─────────────────────────────────────────────────────────────────────────────

const services = [
  'Companion Care',
  'Dementia & Alzheimer\'s Support',
  'Respite Care',
  'Light Household Tasks',
  'Grooming Assistance',
  'General Inquiry / Not Sure Yet',
]

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '(803) 369-6254',
    href: 'tel:8033696254',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'mariaprivatecare1@gmail.com',
    href: 'mailto:mariaprivatecare1@gmail.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Service Area',
    value: 'Kershaw County & Richland County, SC',
    href: null,
  },
  {
    icon: <Clock size={20} />,
    label: 'Response Time',
    value: 'We respond within 24 hours',
    href: null,
  },
]

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-light to-warm-bg pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">Book a Consultation</h1>
          <p className="section-subheading mx-auto">
            Your first consultation is completely free. Let's talk about your needs and how
            we can help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-warm-text mb-2">Get in Touch</h2>
              <p className="text-warm-muted text-sm mb-6">
                Prefer to talk first? Reach out directly — we'd love to hear from you.
              </p>
              <ul className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-warm-muted uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-warm-text font-medium hover:text-primary transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-warm-text font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Calendly Block */}
              <div className="bg-primary-light border border-primary/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={20} className="text-primary" />
                  <h3 className="font-semibold text-warm-text">Schedule Online</h3>
                </div>
                <p className="text-warm-muted text-sm mb-4">
                  Prefer to pick a time yourself? Use our online scheduler to book directly.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm py-2.5 justify-center"
                >
                  <Calendar size={16} />
                  Open Scheduler
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-warm-text mb-2">
                  Send Us a Message
                </h2>
                <p className="text-warm-muted text-sm mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-12 gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-warm-text">Message Received!</h3>
                    <p className="text-warm-muted max-w-sm">
                      Thank you for reaching out. We'll be in touch within 24 hours to discuss
                      your needs.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                        <AlertCircle size={18} className="shrink-0" />
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-warm-text mb-1.5" htmlFor="name">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-warm-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-warm-text mb-1.5" htmlFor="phone">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(803) 555-0123"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-warm-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-text mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-warm-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-text mb-1.5" htmlFor="service">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-warm-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-warm-text mb-1.5" htmlFor="message">
                        Tell Us About Your Needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share any details about the person who needs care, their situation, preferred schedule, or any questions you have..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-warm-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-warm-muted text-center">
                      Your information is kept private and never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Calendly (full width) */}
      <section className="py-16 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="section-heading mb-3">Schedule Your Free Consultation</h2>
            <p className="text-warm-muted">
              Pick a date and time that works for you — no pressure, just a friendly conversation.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" style={{ minHeight: '600px' }}>
            <iframe
              src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a consultation"
              className="w-full"
            />
          </div>
          <p className="text-center text-sm text-warm-muted mt-4">
            Prefer not to use the scheduler?{' '}
            <a href="tel:8033696254" className="text-primary font-medium hover:underline">
              Call us at (803) 369-6254
            </a>{' '}
            or{' '}
            <a href="mailto:mariaprivatecare1@gmail.com" className="text-primary font-medium hover:underline">
              send us an email.
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
