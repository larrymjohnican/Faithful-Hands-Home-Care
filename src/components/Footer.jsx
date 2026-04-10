import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-text text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Faithful Hands Home Care LLC"
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="items-center gap-3 hidden">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">♥</span>
                </div>
                <div className="leading-tight">
                  <div className="font-display font-bold text-white text-base leading-none">Faithful Hands</div>
                  <div className="text-xs text-gray-400 font-medium">Home Care LLC</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing compassionate, faith-driven care for seniors and adults in Kershaw County and Richland County, SC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Our Services' },
                { to: '/about', label: 'About Us' },
                { to: '/booking', label: 'Book a Consultation' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:8033696254"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  (803) 369-6254
                </a>
              </li>
              <li>
                <a
                  href="mailto:mariaprivatecare1@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  mariaprivatecare1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>Kershaw County &amp; Richland County, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Faithful Hands Home Care LLC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> for our community
          </p>
        </div>
      </div>
    </footer>
  )
}
