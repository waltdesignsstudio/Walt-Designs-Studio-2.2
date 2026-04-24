import { motion } from 'motion/react';
import { 
  Palette, 
  FileText, 
  FileBadge2, 
  TrendingUp, 
  LayoutDashboard, 
  Video, 
  Code2, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'design',
    title: 'Web & Graphic Designing',
    desc: 'Creating visually stunning, high-performance websites and graphics that capture your brand essence.',
    icon: <Palette size={40} className="text-studio-gold" />,
    features: ['UI/UX Design', 'Branding Solutions', 'Logo Design', 'Web Maintenance']
  },
  {
    id: 'resume',
    title: 'Resume & CV Making',
    desc: 'Professional resume crafting to help you land your dream job with ATS-friendly layouts.',
    icon: <FileText size={40} className="text-studio-gold" />,
    features: ['Professional CVs', 'Cover Letters', 'LinkedIn Optimization', 'Job Profiles']
  },
  {
    id: 'business',
    title: 'Business & Licence Registration',
    desc: 'Streamlined documentation and registration services for new startup and established businesses.',
    icon: <FileBadge2 size={40} className="text-studio-gold" />,
    features: ['MSME Registration', 'GST Registration', 'Trademark Filing', 'Legal Docs']
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies to amplify your online reach and conversion rates.',
    icon: <TrendingUp size={40} className="text-studio-gold" />,
    features: ['SEO/SEM', 'Social Media Ads', 'Content Strategy', 'Email Marketing']
  },
  {
    id: 'posture',
    title: 'Posture Making',
    desc: 'Creative posture and layout design for social media, events, and commercial campaigns.',
    icon: <LayoutDashboard size={40} className="text-studio-gold" />,
    features: ['Social Media Banners', 'Event Posters', 'Ad Layouts', 'Print Design']
  },
  {
    id: 'video',
    title: 'Video Editing',
    desc: 'Cinematic video editing and motion graphics to tell your story in the most engaging way.',
    icon: <Video size={40} className="text-studio-gold" />,
    features: ['Commercial Editing', 'Short-form Content', 'Color Grading', 'Subtitles']
  },
  {
    id: 'dev',
    title: 'Software & App Development',
    desc: 'Building robust, scalable applications and custom software solutions for modern challenges.',
    icon: <Code2 size={40} className="text-studio-gold" />,
    features: ['Mobile Apps', 'SaaS Solutions', 'Custom CRM', 'Cloud Systems']
  }
];

const HiringMarquee = () => (
  <div className="overflow-hidden whitespace-nowrap bg-studio-gold py-2">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(15)].map((_, i) => (
        <span key={i} className="text-studio-dark text-xs font-black mx-4 uppercase tracking-[0.2em]">
          HIRING OPEN • JOIN OUR TEAM • CREATIVE OPPORTUNITIES • SALES MANAGER WANTED
        </span>
      ))}
    </motion.div>
  </div>
);

export default function Services() {
  return (
    <div className="flex flex-col pb-20 bg-studio-navy-yellow min-h-screen">
      <HiringMarquee />
      
      {/* Header */}
      <section className="pt-16 pb-16 bg-studio-gray/5 border-b border-white/5 mb-0">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white italic">Our <span className="text-studio-gold">Expertise</span></h1>
            <p className="text-studio-white/80 max-w-2xl mx-auto font-medium leading-relaxed italic">
              We provide a comprehensive suite of creative and technical services designed to help you succeed in the digital-first economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 mb-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-10 bg-black/20 rounded-3xl border border-white/5 hover:border-studio-gold/40 transition-all flex flex-col items-start gap-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 font-serif text-8xl font-bold italic select-none text-white">
                  0{index + 1}
                </div>
                <div className="bg-studio-dark p-4 rounded-2xl border border-white/5 shadow-xl">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white uppercase tracking-tight">{service.title}</h3>
                  <p className="text-studio-white/60 text-sm leading-relaxed mb-8 font-light italic">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-3 font-bold text-[10px] uppercase tracking-widest text-studio-gold">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-studio-gold"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="container mx-auto px-6 mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-studio-gold p-12 md:p-20 rounded-[40px] overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-studio-dark/5 rounded-full blur-[80px] -mr-40 -mt-40 group-hover:bg-studio-dark/10 transition-all duration-700"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-studio-dark text-studio-gold rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Briefcase size={14} /> Career Opportunities
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-studio-dark font-bold mb-8 leading-tight">
                Join our elite squad at Walt Studio
              </h2>
              <p className="text-studio-dark/80 text-xl font-medium mb-12">
                We are currently hiring for: <span className="underline decoration-studio-dark/30 underline-offset-4">Sales Marketing Manager</span>
              </p>
              <div className="p-6 bg-studio-dark/5 border border-studio-dark/10 rounded-2xl mb-8">
                <h4 className="font-bold text-studio-dark uppercase tracking-widest text-sm mb-2">Qualifications:</h4>
                <p className="text-studio-dark/70 text-sm italic">Strong communication, marketing strategy knowledge, and a passion for creative studio environments.</p>
              </div>
            </div>
            
            <motion.a 
              href="mailto:waltdesignsstudio@gmail.com?subject=Application for Sales Marketing Manager"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-studio-dark text-studio-gold font-black rounded-2xl uppercase tracking-widest text-sm shadow-2xl flex items-center gap-3 transition-colors"
            >
              Click to Apply Now <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
