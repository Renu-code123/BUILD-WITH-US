import React from 'react';
import { Sparkles, Code2, Palette, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const founders = [
    {
      name: 'Rohan Sharma',
      role: 'Co-Founder & Lead Developer',
      bio: 'Full-stack web engineer passionate about crafting lightning-fast, high-converting digital web applications and modern portfolios.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      icon: Code2,
      skills: ['React & Next.js', 'Web Architecture', 'SEO & Performance']
    },
    {
      name: 'Ananya Verma',
      role: 'Co-Founder & Creative Director',
      bio: 'UI/UX designer and motion graphic specialist obsessed with visual typography, clean formatting, and premium dark mode aesthetics.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      icon: Palette,
      skills: ['UI/UX Design', 'Visual Branding', 'ATS Formatting']
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL GLOW */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> OUR STORY & MISSION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Meet <span className="gradient-text">Build With Us.</span>
          </h2>

          {/* MAIN STATEMENT */}
          <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic max-w-2xl mx-auto border-l-2 border-[#FF3CAC] pl-4 mb-6">
            “We are two creators building a service platform around a simple idea: professional digital work should be accessible, transparent and personal.”
          </blockquote>

          {/* SUPPORTING COPY */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you're launching your first website, building your portfolio, preparing your resume, promoting an event or preparing professional documents, we're here to help you build it.
          </p>
        </div>

        {/* TWO FOUNDERS CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* AVATAR & BADGE */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#FF3CAC]/40 shrink-0">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{founder.name}</h3>
                      <div className="text-xs font-semibold text-[#FF3CAC] flex items-center gap-1.5 mt-0.5">
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

                {/* SKILLS */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {founder.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* PERSONAL STUDIO CREDIBILITY PROMISE */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0A0A12] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-300">
          <HeartHandshake className="w-5 h-5 text-[#FF3CAC] shrink-0" />
          <span>You work directly with us — no middleman agency fluff, no dynamic outsourcing. Just clear, personal digital craftsmanship.</span>
        </div>

      </div>
    </section>
  );
};
