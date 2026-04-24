import { motion } from 'motion/react';
import { Rocket, BarChart3, Zap, Globe2, Target, MoveUpRight, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrowthAgency() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-studio-dark">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-studio-gold/5 rounded-full blur-[150px] -mr-80 -mt-80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-studio-gold/10 text-studio-gold border border-studio-gold/20 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Rocket size={14} /> Performance Division
              </div>
              <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight">
                Walt <span className="text-studio-gold">Growth</span> Agency
              </h1>
              <p className="text-2xl text-studio-white/60 font-light leading-relaxed mb-12">
                Accelerating business trajectories through data-driven performance marketing and aggressive scaling strategies. We don't just design; we dominate.
              </p>
              <div className="flex gap-6">
                 <Link to="/contact" className="px-10 py-5 bg-studio-gold text-studio-dark font-black rounded-xl uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-gold/20">
                    Get Free Audit
                 </Link>
                 <a href="tel:+919818900077" className="px-10 py-5 border border-white/20 text-studio-white font-bold rounded-xl uppercase tracking-widest hover:bg-white/5 transition-all">
                    Collab Line
                 </a>
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative"
            >
               <div className="w-full aspect-square bg-studio-gray rounded-[60px] border border-white/5 p-12 flex flex-col justify-center items-center gap-12 overflow-hidden group">
                  <div className="text-8xl font-serif font-black text-studio-gold group-hover:scale-110 transition-transform duration-700 select-none">GROWTH</div>
                  <div className="grid grid-cols-2 gap-8 w-full">
                     {[
                       { label: 'Conversion', val: '+45%' },
                       { label: 'Revenue', val: '+120%' },
                       { label: 'Traffic', val: '+80%' },
                       { label: 'ROI', val: '5.2x' },
                     ].map((s, i) => (
                       <div key={i} className="p-6 bg-studio-dark/50 border border-white/5 rounded-3xl text-center">
                          <div className="text-2xl font-bold text-studio-gold">{s.val}</div>
                          <div className="text-[10px] uppercase tracking-widest text-studio-white/40">{s.label}</div>
                       </div>
                     ))}
                  </div>
               </div>
               {/* Floating elements */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-studio-gold rounded-3xl rotate-12 flex items-center justify-center text-studio-dark shadow-2xl">
                  <Zap size={40} />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-studio-gray/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-studio-gold text-xs font-bold uppercase tracking-widest mb-4 block underline underline-offset-8">Our Methods</span>
             <h2 className="font-serif text-4xl md:text-6xl font-bold italic">The Growth System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Scaling Strategy', icon: <BarChart3 />, desc: 'Custom roadmaps for aggressive market expansion and revenue optimization.' },
              { title: 'Global Reach', icon: <Globe2 />, desc: 'Breaking borders with international digital marketing and localized scaling.' },
              { title: 'Targeted Acquisition', icon: <Target />, desc: 'Precision audience targeting using high-frequency data and AI analytics.' },
              { title: 'Performance Creative', icon: <Zap />, desc: 'High-converting ad creatives designed to stop the scroll and drive action.' },
              { title: 'Market Dominance', icon: <MoveUpRight />, desc: 'Long-term positioning strategies to outperform competitors in any niche.' },
              { title: 'Collab Management', icon: <Users />, desc: 'Professional handling of high-value collaborations and partnerships.' },
            ].map((method, i) => (
              <div key={i} className="p-10 bg-studio-dark rounded-3xl border border-white/5 group hover:border-studio-gold/20 transition-all flex flex-col gap-6">
                <div className="w-14 h-14 bg-studio-gray text-studio-gold rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold italic">{method.title}</h3>
                <p className="text-studio-white/50 leading-relaxed font-light text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Call */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center gap-16 bg-studio-gold p-16 md:p-24 rounded-[60px] text-studio-dark relative overflow-hidden">
              <div className="flex-1 text-center md:text-left relative z-10">
                 <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 italic">Let's scale <br /> your brand.</h2>
                 <p className="text-xl font-bold uppercase tracking-widest mb-12">Collab Hotline: +91 9818900077</p>
                 <Link to="/contact" className="px-12 py-5 bg-studio-dark text-studio-gold font-black rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-3 w-fit mx-auto md:mx-0 shadow-2xl">
                    Executive Dialogue <ArrowRight size={20} />
                 </Link>
              </div>
              <div className="flex-1 relative z-10 flex justify-center">
                 <div className="w-64 h-64 border-8 border-studio-dark/20 rounded-full flex items-center justify-center p-8 animate-spin-slow">
                    <Rocket size={100} className="text-studio-dark" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

// Add animation to tailwind config
// Note: Normally I would edit tailwind.config.js but here we use css-in-js/vite setup
// I'll add the spin-slow to index.css if needed, but standard spin works too.
