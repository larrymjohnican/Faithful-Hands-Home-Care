import { Link } from 'react-router-dom'
import { Heart, MapPin, ShieldCheck, Users, ArrowRight, Phone } from 'lucide-react'

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Compassion',
    desc: 'We treat every client like family, showing up with warmth, patience, and genuine care in every interaction.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Integrity',
    desc: 'We operate with honesty and transparency — your trust is the foundation of everything we do.',
  },
  {
    icon: <Users size={24} />,
    title: 'Connection',
    desc: 'We believe human connection is as vital as physical care. We\'re here to fight loneliness and lift spirits.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Community',
    desc: 'We are proud neighbors in Kershaw and Richland County, committed to strengthening the communities we serve.',
  },
]

const serviceAreas = [
  { county: 'Kershaw County', cities: ['Camden', 'Elgin', 'Lugoff', 'Bethune', 'Jefferson', 'Kershaw'] },
  { county: 'Richland County', cities: ['Columbia', 'Blythewood', 'Eastover', 'Hopkins', 'Irmo', 'Forest Acres'] },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-light to-warm-bg pt-28 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="section-subheading mx-auto">
            Learn who we are, what drives us, and why families across Kershaw and Richland
            County trust us with their most precious people.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent-light text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="section-heading mb-6">
                Born From a Heart for{' '}
                <span className="text-primary">Service</span>
              </h2>
              <p className="text-warm-muted leading-relaxed mb-4">
                Faithful Hands Home Care LLC was founded on a simple but powerful belief:
                every senior and adult deserves to feel seen, valued, and cared for —
                not just physically, but emotionally and socially.
              </p>
              <p className="text-warm-muted leading-relaxed mb-4">
                We drew inspiration from the profound impact emotional support companions
                have on people's mental health and quality of life. We wanted to bring that
                same consistent, uplifting presence into the homes of seniors and adults who
                need it most.
              </p>
              <p className="text-warm-muted leading-relaxed">
                Whether it's sharing a laugh over a morning cup of coffee, helping with a
                household task, or sitting quietly with someone who just needs company —
                we show up faithfully, every time.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-6 text-white">
                <div className="text-4xl font-display font-bold mb-2">2</div>
                <div className="text-sm font-medium text-white/80">Counties Served</div>
                <div className="text-xs text-white/60 mt-1">Kershaw &amp; Richland</div>
              </div>
              <div className="bg-accent-light border border-accent/20 rounded-2xl p-6">
                <Heart size={28} className="text-accent mb-2" />
                <div className="font-semibold text-warm-text mb-1">Faith-Driven</div>
                <div className="text-sm text-warm-muted">Care rooted in compassion and integrity</div>
              </div>
              <div className="bg-primary-light border border-primary/20 rounded-2xl p-6 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <Users size={28} className="text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-warm-text mb-1">Personalized Plans</div>
                    <div className="text-sm text-warm-muted">
                      Every care plan is crafted specifically for your loved one's needs,
                      personality, and lifestyle — never a cookie-cutter approach.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-warm-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading mx-auto">
              The principles that guide every decision we make and every person we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-warm-text text-lg mb-1">{v.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Areas We Serve</h2>
            <p className="section-subheading mx-auto">
              We proudly serve families across Kershaw County and Richland County, South Carolina.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.county} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-warm-text">{area.county}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city) => (
                    <span
                      key={city}
                      className="bg-warm-bg text-warm-muted text-sm px-3 py-1 rounded-full border border-gray-100"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-warm-muted text-sm mt-6">
            Not sure if we serve your area?{' '}
            <a href="tel:8033696254" className="text-primary font-medium hover:underline">
              Give us a call
            </a>{' '}
            and we'll let you know.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Let's Talk About Your Loved One's Needs
          </h2>
          <p className="text-primary-light/90 text-lg mb-8">
            Reach out today to schedule a free, no-obligation consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-primary hover:bg-primary-light font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:8033696254"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all"
            >
              <Phone size={18} />
              (803) 369-6254
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
