import { Link } from 'react-router-dom'
import {
  Users,
  ShieldCheck,
  Heart,
  Sparkles,
  Scissors,
  ArrowRight,
  CheckCircle,
  Phone,
} from 'lucide-react'

const services = [
  {
    icon: <Users size={36} />,
    title: 'Companion Care',
    tagline: 'Social connection that makes life richer',
    description:
      'Loneliness and isolation are among the biggest challenges seniors face. Our companion caregivers provide regular, meaningful visits full of conversation, activities, and genuine friendship — similar to the comfort and consistency of an emotional support companion.',
    includes: [
      'Friendly conversation and active listening',
      'Accompaniment to appointments or outings',
      'Shared hobbies, games, and activities',
      'Reading aloud or watching favorite programs together',
      'Mental and emotional encouragement',
    ],
    color: 'bg-primary-light border-primary/20',
    iconColor: 'text-primary',
    badge: 'Most Popular',
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Dementia & Alzheimer\'s Support',
    tagline: 'Patient, specialized care for memory challenges',
    description:
      'Caring for someone with dementia or Alzheimer\'s requires patience, knowledge, and a calm, reassuring presence. Our caregivers are experienced in creating safe, structured routines that reduce confusion and anxiety while preserving dignity and quality of life.',
    includes: [
      'Safe supervision and monitoring',
      'Structured daily routines for stability',
      'Gentle redirection and de-escalation',
      'Meaningful engagement through familiar activities',
      'Communication and updates to family members',
    ],
    color: 'bg-accent-light border-accent/20',
    iconColor: 'text-accent',
  },
  {
    icon: <Heart size={36} />,
    title: 'Respite Care',
    tagline: 'Rest for caregivers. Peace of mind for families.',
    description:
      'Family caregivers give so much of themselves — and they deserve a break too. Our respite care services step in so you can rest, recharge, or handle life\'s other demands, knowing your loved one is in warm, capable hands.',
    includes: [
      'Temporary relief for primary family caregivers',
      'Consistent care during your time away',
      'Scheduled or emergency coverage',
      'Seamless transition and handoff',
      'Regular updates so you stay informed',
    ],
    color: 'bg-primary-light border-primary/10',
    iconColor: 'text-primary-dark',
  },
  {
    icon: <Sparkles size={36} />,
    title: 'Light Household Tasks',
    tagline: 'A clean, comfortable home for safe living',
    description:
      'A tidy, organized home is essential for safety and well-being. We help with light household responsibilities so seniors can focus on living, not chores.',
    includes: [
      'Light cleaning and tidying',
      'Laundry and linen changes',
      'Meal preparation and planning',
      'Grocery shopping and errands',
      'Organization and clutter reduction',
    ],
    color: 'bg-accent-light border-accent/20',
    iconColor: 'text-accent-dark',
  },
  {
    icon: <Scissors size={36} />,
    title: 'Grooming Assistance',
    tagline: 'Look and feel your best, every day',
    description:
      'Personal hygiene and grooming are fundamental to dignity and self-confidence. Our caregivers provide respectful, discreet assistance with daily grooming needs.',
    includes: [
      'Help with bathing and showering',
      'Hair grooming and styling assistance',
      'Dressing and personal appearance',
      'Oral hygiene support',
      'Nail care and skin care assistance',
    ],
    color: 'bg-primary-light border-primary/10',
    iconColor: 'text-primary',
  },
]

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-light to-warm-bg pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="section-subheading mx-auto">
            Personalized in-home care designed around your loved one's unique needs —
            delivered with compassion and professionalism.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-2xl border p-8 md:p-10 ${service.color}`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${service.iconColor} mt-1`}>{service.icon}</div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="text-2xl font-display font-bold text-warm-text">
                          {service.title}
                        </h2>
                        {service.badge && (
                          <span className="bg-primary text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className={`font-medium text-sm ${service.iconColor}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-warm-muted leading-relaxed">{service.description}</p>
                </div>
                <div className="md:w-1/3">
                  <p className="text-sm font-semibold text-warm-text mb-3 uppercase tracking-wide">
                    What's Included
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-warm-muted">
                        <CheckCircle size={16} className={`${service.iconColor} shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-heading mb-4">Not Sure Which Service You Need?</h2>
          <p className="section-subheading mx-auto mb-8">
            Schedule a free consultation and we'll help you build a care plan that's right for your loved one.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="btn-primary">
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a href="tel:8033696254" className="btn-secondary">
              <Phone size={18} />
              (803) 369-6254
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
