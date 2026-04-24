import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { WhatsAppButton, BackToTop, AIChatbot } from './FloatingActions';

const LOGO_URL = "https://i.ibb.co/CKHnGqHv/Whats-App-Image-2026-04-23-at-09-30-48.jpg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Walt Growth Agency', path: '/growth-agency' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4",
        isScrolled ? "bg-studio-wine/95 backdrop-blur-md shadow-xl py-3" : "bg-studio-wine border-b border-white/5"
      )}
      id="header"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Walt Designs & Studio" className="w-10 h-10 object-cover rounded-md" />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Walt Designs <span className="text-studio-gold">& Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-studio-gold uppercase tracking-widest",
                location.pathname === link.path ? "text-studio-gold border-b border-studio-gold pb-1" : "text-studio-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/contact" 
            className="px-6 py-2 bg-studio-gold text-studio-dark font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-studio-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-studio-gray border-b border-white/10 py-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium tracking-wide uppercase",
                    location.pathname === link.path ? "text-studio-gold" : "text-studio-white/80"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-studio-gold text-studio-dark font-bold text-center rounded-xl uppercase tracking-widest"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-studio-brown pt-20 pb-10 border-t border-white/5" id="footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Walt Designs & Studio" className="w-12 h-12 object-cover rounded-md" />
              <span className="font-serif text-2xl font-bold">Walt Designs <span className="text-studio-gold">& Studio</span></span>
            </Link>
            <p className="text-studio-white/60 leading-relaxed text-sm">
              Elevating brands through premium design and digital excellence. Based in Delhi, India. 
              Your partner for end-to-end creative solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-studio-gold hover:text-studio-dark transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-studio-gold hover:text-studio-dark transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-studio-gold hover:text-studio-dark transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-studio-gold">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-studio-white/60">
              <li><Link to="/services" className="hover:text-studio-white transition-colors">Web Designing</Link></li>
              <li><Link to="/services" className="hover:text-studio-white transition-colors">Graphic Designing</Link></li>
              <li><Link to="/services" className="hover:text-studio-white transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-studio-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/growth-agency" className="hover:text-studio-white transition-colors">Walt Growth Agency</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-studio-gold">Get in Touch</h4>
            <ul className="flex flex-col gap-4 text-sm text-studio-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="text-studio-gold shrink-0" size={18} />
                <span>Head Office: Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-studio-gold shrink-0" size={18} />
                <a href="mailto:waltdesignsstudio@gmail.com" className="hover:text-studio-white">waltdesignsstudio@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-studio-gold shrink-0" size={18} />
                <span>+91 9717018044</span>
              </li>
              <li className="flex items-center gap-3 pl-7">
                <span>+91 7303942175</span>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden h-48 border border-white/10 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.06889754725782!3d28.52728034371426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71body496b!2sDelhi!5e0!3m2!1sen!2sin!4v1714210000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-studio-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Walt Designs & Studio. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-studio-white/40 uppercase tracking-wider">
            <a href="#" className="hover:text-studio-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-studio-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <AIChatbot />
    </div>
  );
}
