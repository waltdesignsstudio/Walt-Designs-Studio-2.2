import { motion } from 'motion/react';
import { ShieldCheck, Target, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: "Priyanshu Kumar",
    role: "Founder",
    bio: "Visionary designer and strategist behind Walt Designs & Studio's unique creative direction.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Sahil Kuumar",
    role: "Co-manager & Business Manager",
    bio: "Strategic leader managing operations and business growth across international markets.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export default function About() {
  return (
    <div className="flex flex-col bg-studio-magenta min-h-screen">
      {/* Narrative Section */}
      <section className="py-16 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-studio-gold text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Our Story</span>
              <h1 className="font-serif text-5xl md:text-8xl font-bold mb-12 italic leading-tight text-white">
                Crafting Excellence <br /> in the Heart of <span className="text-studio-gold">Delhi.</span>
              </h1>
              <p className="text-2xl text-studio-white/80 font-bold leading-relaxed mb-16 italic">
                "Walt Designs & Studio was born from a simple belief: that premium design should be the standard, not the exception. We bridge the gap between creative artistry and commercial success."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-16 bg-black/10 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Vision', icon: <Sparkles size={28} />, desc: 'To become the global benchmark for creative digital solutions and brand transformation.' },
              { title: 'Mission', icon: <Target size={28} />, desc: 'Empowering businesses with high-end designs that drive engagement and tangible growth.' },
              { title: 'Quality', icon: <ShieldCheck size={28} />, desc: 'Unyielding commitment to precision, premium aesthetics, and technical robustness.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 border-l border-studio-gold/20">
                <div className="w-12 h-12 rounded-xl bg-studio-gold text-studio-dark flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                <p className="text-studio-white/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-24">
             <span className="text-studio-gold text-sm font-bold uppercase tracking-widest mb-4">Leadership</span>
             <h2 className="font-serif text-4xl md:text-6xl font-bold">The Minds Behind the Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-studio-gray rounded-[40px] border border-white/5 hover:border-studio-gold/20 transition-all"
              >
                <div className="flex flex-col gap-8 items-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-studio-gold/10 p-2 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-2">{member.name}</h3>
                    <span className="text-studio-gold text-sm font-bold uppercase tracking-widest block mb-6">{member.role}</span>
                    <p className="text-studio-white/60 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Teaser (Repeating in About) */}
      <section className="py-32 bg-studio-gray">
        <div className="container mx-auto px-6">
          <div className="p-12 md:p-20 border border-white/10 rounded-[60px] text-center max-w-5xl mx-auto relative overflow-hidden flex flex-col items-center">
             <Users className="text-studio-gold mb-8 italic" size={48} />
             <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Want to build the future with us?</h2>
             <p className="text-studio-white/60 mb-12 max-w-xl mx-auto">We're always looking for talented designers, developers, and strategists. Currently hiring for Sales Marketing Manager.</p>
             <Link to="/services" className="px-10 py-4 bg-studio-white text-studio-dark font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-studio-gold hover:text-studio-dark transition-all">
                Check Career Openings
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
