import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Booking from './pages/Booking'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <a
          href="tel:8033696254"
          className="fixed bottom-6 right-6 z-40 md:hidden bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          aria-label="Call Faithful Hands Home Care at (803) 369-6254"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </div>
    </Router>
  )
}
