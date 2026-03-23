import { Link } from 'react-router-dom'
import {
  Heart,
  Users,
  ShieldCheck,
  Sparkles,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Star,
} from 'lucide-react'

const services = [
  {
    icon: <Users size={28} />,
    title: 'Companion Care',
    description:
      'Meaningful social interaction and emotional support — like having a trusted friend by your side every day.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Dementia Support',
    description:
      'Specialized, patient-centered care for individuals living with Alzheimer\'s and dementia.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Respite Care',
    description:
      'Giving family caregivers the rest they need, knowing their loved one is in caring, capable hands.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Light Household Tasks',
    description:
      'Help with light cleaning, laundry, meal prep, and errands to keep the home comfortable and safe.',
  },
]

const whyUs = [
  {
    icon: <Heart size={22} />,
    title: 'Compassionate First',
    desc: 'Every interaction is guided by genuine care and respect for your dignity.',
  },
  {
    icon: <Star size={22} />,
    title: 'Social Connection',
    desc: 'We go beyond basic tasks — we provide the human connection that truly enriches lives.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Flexible Scheduling',
    desc: 'Services tailored to your schedule and needs, not a one-size-fits-all plan.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Locally Rooted',
    desc: 'Proudly serving Kershaw County and Richland County communities.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-warm-bg to-accent-light pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
              <MapPin size={14} />
              Kershaw &amp; Richland County, SC
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-text leading-tight mb-6">
              Caring Hands,{' '}
              <span className="text-primary">Faithful Hearts</span>
            </h1>
            <p className="text-lg md:text-xl text-warm-muted leading-relaxed mb-8 max-w-xl">
              Compassionate home care for seniors and adults — focused on genuine
              social connection, dignity, and peace of mind for your whole family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary text-base px-7 py-3.5">
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>
              <a href="tel:8033696254" className="btn-secondary text-base px-7 py-3.5">
                <Phone size={18} />
                (803) 369-6254
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading mx-auto">
              We offer a range of personalized in-home care services designed to help
              seniors and adults live comfortably and confidently.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-warm-text text-lg mb-2">{s.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              See All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-warm-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent-light text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="section-heading mb-5">
                More Than Care — It's{' '}
                <span className="text-primary">Companionship</span>
              </h2>
              <p className="text-warm-muted leading-relaxed mb-4">
                At Faithful Hands Home Care, we believe that every senior deserves
                more than just assistance — they deserve genuine connection. Like
                the comfort an emotional support animal brings, our caregivers
                provide a consistent, warm presence that lifts spirits and reduces
                loneliness.
              </p>
              <p className="text-warm-muted leading-relaxed mb-6">
                We also offer respite care, giving family caregivers the rest and
                recharge they need, confident their loved one is safe and happy.
              </p>
              <Link to="/about" className="btn-primary">
                Our Story
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Visual card block */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-6 text-white col-span-2">
                <Heart size={32} className="mb-3 opacity-80" />
                <p className="font-display text-xl font-bold mb-1">Faith-Driven Care</p>
                <p className="text-primary-light/80 text-sm">
                  Rooted in compassion, guided by integrity, and committed to serving
                  your loved ones as we would our own family.
                </p>
              </div>
              <div className="bg-accent-light rounded-2xl p-5 border border-accent/20">
                <MapPin size={24} className="text-accent mb-2" />
                <p className="font-semibold text-warm-text text-sm">Kershaw County</p>
                <p className="text-warm-muted text-xs mt-1">Local &amp; trusted</p>
              </div>
              <div className="bg-primary-light rounded-2xl p-5 border border-primary/20">
                <Users size={24} className="text-primary mb-2" />
                <p className="font-semibold text-warm-text text-sm">Richland County</p>
                <p className="text-warm-muted text-xs mt-1">Community first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Families Choose Us</h2>
            <p className="section-subheading mx-auto">
              We put people first — always.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-warm-text mb-2">{item.title}</h3>
                <p className="text-warm-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-light/90 text-lg mb-8 max-w-xl mx-auto">
            Schedule a free consultation today and let us create a personalized care plan for your loved one.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="bg-white text-primary hover:bg-primary-light font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md inline-flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:8033696254"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 inline-flex items-center gap-2"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
