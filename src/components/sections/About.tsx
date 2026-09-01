import React from 'react';
import { Sparkles, Code2, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const founders = [
    {
      name: 'Renu Kumari Prajapati',
      role: 'Co-Founder & Developer',
      bio: 'Passionate about building modern, responsive and user-focused digital experiences. Renu works across web development, interface design and digital solutions, with a focus on turning ideas into clean, functional and engaging websites.',
      avatar: '/renu-avatar.jpg',
      icon: Code2,
      badgeText: 'Frontend & UI Specialist',
      accentColor: '#00D2FF',
      gradient: 'from-[#00D2FF] via-[#2B86C5] to-[#784BA0]',
      glowColor: 'rgba(0, 210, 255, 0.25)',
      skills: ['Web Development', 'Frontend Development', 'UI/UX', 'Responsive Design']
    },
    {
      name: 'Stuti Tiwari',
      role: 'Co-Founder & Developer',
      bio: 'Focused on creating thoughtful and user-friendly digital experiences through modern web technologies. Stuti combines development, creative problem-solving and attention to detail to build practical digital solutions that are both functional and visually refined.',
      avatar: '/stuti-avatar.jpg',
      icon: Terminal,
      badgeText: 'Web Solutions Specialist',
      accentColor: '#FF3CAC',
      gradient: 'from-[#FF3CAC] via-[#784BA0] to-[#00D2FF]',
      glowColor: 'rgba(255, 60, 172, 0.25)',
      skills: ['Web Development', 'Frontend Development', 'UI/UX', 'Digital Solutions']
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* AMBIENT RADIAL LIGHTS */}
      <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] bg-[#00D2FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FF3CAC]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER & MISSION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D2FF] mb-5 shadow-lg shadow-cyan-500/5 uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> MEET BUILD WITH US
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Two Developers.{' '}
            <span className="gradient-text">One Vision.</span>
          </h2>

          {/* QUOTE STATEMENT */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A0A12] border border-white/10 max-w-2xl mx-auto mb-8 shadow-2xl shadow-cyan-950/20">
            <div className="text-4xl text-[#00D2FF] font-serif leading-none mb-2">"</div>
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 border overflow-hidden bg-[#0A0A14]/90 border-white/[0.09] hover:border-white/20 hover:bg-[#0E0E1B] hover:-translate-y-1.5 shadow-2xl"
                style={{ boxShadow: `0 20px 40px -15px ${founder.glowColor}` }}
              >
                {/* HOVER GLOW */}
                <div 
                  className={`absolute -top-12 -right-12 w-56 h-56 rounded-full blur-3xl opacity-15 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${founder.gradient}`}
                />

                <div className="relative z-10 flex-1">
                  
                  {/* AVATAR + NAME HEADER */}
                  <div className="flex items-center gap-5 mb-6">
                    
                    {/* AVATAR - AI-GENERATED FEMALE DEVELOPER PORTRAIT */}
                    <div
                      className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 shadow-2xl group-hover:scale-105 transition-transform duration-500 shrink-0"
                      style={{ borderColor: `${founder.accentColor}60` }}
                    >
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* GLOWING RING OVERLAY ON HOVER */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 12px ${founder.accentColor}60` }}
                      />
                      {/* LIVE STATUS DOT */}
                      <span 
                        className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0A0A14] animate-pulse shadow-lg"
                        style={{ backgroundColor: founder.accentColor }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-1.5">
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border font-mono"
                          style={{ 
                            backgroundColor: `${founder.accentColor}15`, 
                            borderColor: `${founder.accentColor}40`,
                            color: founder.accentColor 
                          }}
                        >
                          {founder.badgeText}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight truncate">
                        {founder.name}
                      </h3>

                      <div className="text-xs font-semibold flex items-center gap-1.5 mt-1" style={{ color: founder.accentColor }}>
                        <Icon className="w-3.5 h-3.5 shrink-0" />
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
                <div className="relative z-10 pt-5 border-t border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: founder.accentColor }} />
                    Core Skills & Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/10 group-hover:border-white/20 transition-colors"
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

        {/* BANNER STRIP */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#00D2FF]/10 via-[#784BA0]/15 to-[#FF3CAC]/10 border border-white/15 relative overflow-hidden text-center shadow-2xl">
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
