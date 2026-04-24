import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'Web Design', 'Branding', 'Digital Marketing', 'App Dev'];

const PROJECTS = [
  { 
    id: 1, 
    title: 'Luxe Real Estate', 
    category: 'Web Design', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 2, 
    title: 'Quantum Fintech', 
    category: 'App Dev', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 3, 
    title: 'Aura Perfumes', 
    category: 'Branding', 
    image: 'https://images.unsplash.com/photo-1549462980-6a03471c2525?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 4, 
    title: 'Skyline Logistics', 
    category: 'Digital Marketing', 
    image: 'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 5, 
    title: 'Nexus E-commerce', 
    category: 'Web Design', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 6, 
    title: 'Verve Fitness App', 
    category: 'App Dev', 
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800&h=600' 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="flex flex-col bg-studio-dark pb-16 min-h-screen">
      {/* Page Header */}
      <section className="container mx-auto px-6 pt-16 pb-12 text-center border-b border-white/5">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-studio-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Our Legacy</span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 text-white italic">Selected <span className="text-studio-gold">Works</span></h1>
          <p className="text-studio-white/80 max-w-2xl mx-auto font-medium leading-relaxed italic">
            "We don't just build websites; we craft digital legacies for brands that demand nothing but the absolute best."
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                filter === cat 
                  ? 'bg-studio-gold border-studio-gold text-studio-dark shadow-lg shadow-gold/20' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid - Bento Layout */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={cn(
                  "group relative rounded-[32px] overflow-hidden border border-white/5",
                  index === 0 && "md:col-span-2 md:row-span-2",
                  index === 3 && "md:row-span-2",
                  index === 4 && "md:col-span-2"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-dark/95 via-studio-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-all flex flex-col justify-end p-8">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-studio-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                    <h3 className={cn(
                      "font-serif font-bold text-white leading-tight",
                      index === 0 ? "text-4xl" : "text-xl"
                    )}>{project.title}</h3>
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">View Case Study</span>
                      <ArrowRight size={14} className="text-studio-gold" />
                    </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="container mx-auto px-6 mt-16">
         <div className="py-20 px-8 bg-studio-gold/5 rounded-[48px] border border-studio-gold/20 text-center flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-studio-gold/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-10 max-w-2xl text-white">Ready for <span className="text-studio-gold">Greatness?</span></h2>
            <Link to="/contact" className="px-12 py-5 bg-studio-gold text-studio-dark font-black rounded-xl uppercase tracking-widest hover:bg-studio-white transition-all transform hover:scale-105 shadow-2xl shadow-gold/20 flex items-center gap-2">
               Let's Discuss <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
}
