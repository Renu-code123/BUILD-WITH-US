import React from 'react';
import { Sparkles, Code2, Terminal, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const founders = [
    {
      name: 'Renu Kumari Prajapati',
      role: 'Co-Founder & Developer',
      bio: 'Passionate about building modern, responsive and user-focused digital experiences. Renu works across web development, interface design and digital solutions, with a focus on turning ideas into clean, functional and engaging websites.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      icon: Code2,
      skills: ['Web Development', 'Frontend Development', 'UI/UX', 'Responsive Design']
    },
    {
      name: 'Stuti Tiwari',
      role: 'Co-Founder & Developer',
      bio: 'Focused on creating thoughtful and user-friendly digital experiences through modern web technologies. Stuti combines development, creative problem-solving and attention to detail to build practical digital solutions that are both functional and visually refined.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      icon: Terminal,
      skills: ['Web Development', 'Frontend Development', 'UI/UX', 'Digital Solutions']
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* AMBIENT RADIAL LIGHTS */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER & MISSION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D2FF] mb-5 shadow-lg shadow-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> MEET BUILD WITH US
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Two Developers.{' '}
            <span className="gradient-text">One Vision.</span>
          </h2>

          {/* QUOTE STATEMENT */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A0A12] border border-white/10 max-w-2xl mx-auto mb-8 shadow-2xl shadow-cyan-950/20">
            <div className="text-4xl text-[#00D2FF] font-serif leading-none mb-2">“</div>
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed italic -mt-2">
              We are two developers building a service platform around a simple idea: professional digital work should be accessible, transparent and personal.
            </p>
          </div>

          {/* SUPPORTING NARRATIVE */}
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            <p>
              At <strong className="text-white font-semibold">Build With Us</strong>, we turn ideas into practical digital experiences — from modern websites and portfolios to resumes, presentations, creative designs, and professional academic & research formatting.
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              We believe good digital work should be <span className="text-cyan-300 font-medium">clear, functional, visually polished and built around the person behind the idea.</span>
            </p>
          </div>
        </div>

        {/* TWO FOUNDERS CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;
            const isFirst = idx === 0;

            return (
              <div
                key={idx}
                className="group relative glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#00D2FF]/40 bg-[#0A0A12]/90 hover:bg-[#0E0E1A] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
              >
                <div>
                  {/* AVATAR & HEADER */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shrink-0 group-hover:border-cyan-400 transition-colors shadow-lg">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#00D2FF] transition-colors">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#00D2FF] flex items-center gap-1.5 mt-1">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{founder.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* BIO */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* SKILLS STRIP */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Core Focus & Expertise
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TWO DEVELOPERS. ONE VISION. BANNER STRIP */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#00D2FF]/10 via-[#784BA0]/15 to-[#FF3CAC]/10 border border-white/15 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none" />
          
          <div className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2">
            TWO DEVELOPERS • ONE VISION
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            We design. We build. We deliver.
          </h3>
          
          <p className="text-sm font-semibold text-slate-300">
            BUILD WITH US — <span className="text-white font-extrabold">Your Idea. Our Craft.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
