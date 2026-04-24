import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase } from 'lucide-react';

const FlashingMarquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden whitespace-nowrap bg-red-600/20 py-2 border-y border-red-600/50">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(20)].map((_, i) => (
        <span key={i} className="text-red-500 text-sm font-bold mx-4 uppercase tracking-widest animate-pulse">
          {text} •
        </span>
      ))}
    </motion.div>
  </div>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className="flex flex-col bg-studio-navy-blue min-h-screen">
      <FlashingMarquee text="FAST SERVICE • PREMIUM SUPPORT • EXPERT CONSULTATION • REAL RESULTS" />
      
      {/* Header */}
      <section className="container mx-auto px-6 py-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 italic text-white line-clamp-1">Let's <span className="text-studio-gold">Connect</span></h1>
          <p className="text-studio-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Whether you have a groundbreaking idea or a complex business challenge, we are here to help you scale.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold italic">Contact Details</h2>
            <p className="text-studio-white/50 leading-relaxed max-w-md">Reach out directly to our leadership team or visit our headquarters in the heart of the capital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-studio-gray rounded-3xl border border-white/5 flex flex-col gap-4">
              <span className="text-studio-gold font-bold text-xs uppercase tracking-widest">Founder</span>
              <h3 className="text-xl font-bold">Priyanshu Kumar</h3>
              <a href="tel:+919717018044" className="text-sm hover:text-studio-gold">+91 9717018044</a>
            </div>
            <div className="p-8 bg-studio-gray rounded-3xl border border-white/5 flex flex-col gap-4">
              <span className="text-studio-gold font-bold text-xs uppercase tracking-widest">Business Manager</span>
              <h3 className="text-xl font-bold">Sahil Kuumar</h3>
              <a href="tel:+917303942175" className="text-sm hover:text-studio-gold">+91 7303942175</a>
            </div>
            <div className="p-8 bg-studio-gray rounded-3xl border border-white/5 flex flex-col gap-4">
              <span className="text-studio-gold font-bold text-xs uppercase tracking-widest">Collaborations</span>
              <h3 className="text-xl font-bold">Partnerships</h3>
              <a href="tel:+919818900077" className="text-sm hover:text-studio-gold">+91 9818900077</a>
            </div>
            <div className="p-8 bg-studio-gray rounded-3xl border border-white/5 flex flex-col gap-4">
              <span className="text-studio-gold font-bold text-xs uppercase tracking-widest">Email</span>
              <h3 className="text-xl font-bold">General Inbox</h3>
              <a href="mailto:waltdesignsstudio@gmail.com" className="text-sm hover:text-studio-gold truncate">waltdesignsstudio@gmail.com</a>
            </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-4 p-6 bg-studio-gold/5 rounded-2xl border border-studio-gold/10">
                <MapPin className="text-studio-gold" size={24} />
                <span className="text-sm font-medium tracking-wide">Head Office: Delhi, India</span>
             </div>
             <div className="flex items-center gap-4 p-6 bg-studio-gold/5 rounded-2xl border border-studio-gold/10">
                <Briefcase className="text-studio-gold" size={24} />
                <span className="text-sm font-medium tracking-wide">Career Hiring: Sales Marketing Manager (Open)</span>
             </div>
          </div>
        </div>

        {/* Form */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-studio-gray p-8 md:p-12 rounded-[50px] border border-white/5 shadow-2xl relative"
        >
           <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-studio-white/40 ml-2">Your Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-studio-dark border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-studio-gold outline-none transition-all" />
                 </div>
                 <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-studio-white/40 ml-2">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-studio-dark border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-studio-gold outline-none transition-all" />
                 </div>
              </div>
              
              <div className="flex flex-col gap-3">
                 <label className="text-[10px] uppercase font-bold tracking-widest text-studio-white/40 ml-2">Subject</label>
                 <select className="w-full bg-studio-dark border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-studio-gold outline-none transition-all appearance-none">
                    <option>Business Inquiry</option>
                    <option>Web Designing</option>
                    <option>Software Development</option>
                    <option>Digital Marketing</option>
                    <option>Hiring / Career</option>
                    <option>Other</option>
                 </select>
              </div>

              <div className="flex flex-col gap-3">
                 <label className="text-[10px] uppercase font-bold tracking-widest text-studio-white/40 ml-2">Your Message</label>
                 <textarea rows={5} required placeholder="Tell us about your project..." className="w-full bg-studio-dark border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-studio-gold outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-studio-gold text-studio-dark font-black rounded-2xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02]">
                 Send Message <Send size={16} />
              </button>
           </form>
           
           <div className="mt-12 pt-12 border-t border-white/5 flex justify-center gap-12">
              <div className="flex items-center gap-2 text-studio-white/40 text-xs font-bold uppercase tracking-widest">
                 <MessageSquare size={16} className="text-studio-gold" /> Quick Response
              </div>
              <div className="flex items-center gap-2 text-studio-white/40 text-xs font-bold uppercase tracking-widest">
                 <ShieldCheck size={16} className="text-studio-gold" /> Secure Data
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

function ShieldCheck({ size, className }: { size: number, className: string }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
         <path d="m9 12 2 2 4-4" />
      </svg>
   )
}
