import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star, Globe, PencilRuler, AppWindow, Users, CheckCircle2, Trophy, Calendar, StarHalf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const DigitalBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] gap-1">
      {[...Array(400)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="bg-studio-gold/20 rounded-sm"
        />
      ))}
    </div>
  </div>
);

const Marquee = ({ text, speed = 20, className = "" }: { text: string; speed?: number; className?: string }) => (
  <div className={cn("overflow-hidden whitespace-nowrap bg-studio-wine py-4 border-y border-white/5", className)}>
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-studio-gold text-2xl font-serif italic mx-8 uppercase tracking-[0.2em]">
          {text} •
        </span>
      ))}
    </motion.div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col bg-studio-navy-green min-h-screen">
      <Marquee text="CREATIVE STUDIO • WEB DESIGN • BRANDING • GROWTH • PREMIUM SOLUTIONS • BESPOKE DEVELOPMENT" speed={30} className="bg-studio-gold text-studio-dark border-none py-1 font-bold italic" />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-studio-navy-green">
        <div className="absolute inset-0 z-0">
          <DigitalBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-studio-navy-green/40 via-studio-navy-green/80 to-studio-navy-green z-10"></div>
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-studio-gold/10 rounded-full blur-[120px] animate-pulse"></div>
          <img 
            src="https://i.ibb.co/GfZr2Th7/Whats-App-Image-2026-04-24-at-09-04-38.jpg" 
            alt="Studio Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-2 mb-8">
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-[0.3em]">
                Pioneering Creative Excellence Since 2026
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
                <span className="text-white/80 text-[10px] font-medium tracking-[0.2em] uppercase">Live Innovation</span>
              </div>
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-[1.1] max-w-5xl text-white">
              Elevating Brands Through <span className="text-studio-gold">Intelligent Design</span>
            </h1>
            <p className="text-xl text-studio-white/60 max-w-2xl mb-12 font-light leading-relaxed">
              We merge art and technology to build premium digital experiences. From bespoke web design to strategic digital marketing, we transform your vision into market-leading reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-6 py-3 bg-studio-gold text-studio-dark font-bold rounded-full uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-gold/20 flex items-center gap-2 text-sm">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="px-6 py-3 border border-white/20 text-studio-white font-bold rounded-full uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2 text-sm">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats - Updated to Navy Orange */}
      <section className="py-20 bg-studio-navy-orange border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            {[
              { label: 'Clients Served', value: '150+', icon: <Users size={24} /> },
              { label: 'Projects Completed', value: '450+', icon: <CheckCircle2 size={24} /> },
              { label: 'Creative Awards', value: '120', icon: <Trophy size={24} /> },
              { label: 'Excellence', value: '5+', icon: <Calendar size={24} /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 font-bold"
              >
                <div className="w-12 h-12 rounded-full bg-studio-dark/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-4xl md:text-5xl font-sans font-bold">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="py-32 bg-studio-brown/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl text-white">
              <span className="text-studio-gold text-sm font-bold uppercase tracking-widest mb-4 block">What We Do</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">Crafting the Future of <br className="hidden md:block"/> Digital Identity</h2>
            </div>
            <Link to="/services" className="px-8 py-4 border border-studio-gold text-studio-gold rounded-xl hover:bg-studio-gold hover:text-studio-dark transition-all flex items-center gap-2 uppercase tracking-widest text-xs font-bold translate-y-[-10px]">
              See All Services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { 
                title: 'Design Philosophy', 
                desc: 'Minimalist aesthetics combined with powerful functional design for modern businesses.',
                icon: <PencilRuler className="text-studio-gold" size={32} />,
                image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600'
              },
              { 
                title: 'Full-Stack Studio', 
                desc: 'From initial brand concept to high-performance app and web development.',
                icon: <AppWindow className="text-studio-gold" size={32} />,
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
              },
              { 
                title: 'Strategic Growth', 
                desc: 'Leveraging data-driven digital marketing to scale your presence globally.',
                icon: <Globe className="text-studio-gold" size={32} />,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group p-0 bg-studio-dark/50 rounded-3xl border border-white/5 hover:border-studio-gold/30 transition-all flex flex-col overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-dark to-transparent opacity-60"></div>
                  <div className="absolute top-6 left-6 p-2 bg-studio-dark/80 rounded-xl border border-white/10 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-serif font-bold">{feature.title}</h3>
                  <p className="text-studio-white/60 leading-relaxed font-light text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote - Updated for Navy Orange theme */}
      <section className="py-32 bg-studio-navy-orange text-white relative overflow-hidden font-bold">
         <div className="absolute top-[-50px] right-[-50px] text-[300px] opacity-5 font-serif leading-none italic pointer-events-none">"</div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="flex gap-1 text-studio-gold">
                {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                <StarHalf fill="currentColor" size={24} />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase opacity-80">4.2 / 5 Platform Rating</span>
            </div>
            
            <p className="font-serif text-3xl md:text-5xl italic font-bold leading-relaxed mb-12">
              "Walt Designs transformed our commercial presence. Their attention to detail and premium studio approach is unmatched in the industry."
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-[2px] bg-studio-gold/40"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Industrial Partner</span>
            </div>
         </div>
      </section>
    </div>
  );
}
