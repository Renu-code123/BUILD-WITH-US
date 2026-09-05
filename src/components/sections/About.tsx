import React from 'react';
import { Sparkles, Code2, Terminal, CheckCircle2, Shield, Laptop, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const founders = [
    {
      name: 'Renu Kumari Prajapati',
      role: 'Co-Founder & Lead Frontend Engineer',
      title: 'Frontend Architecture & UI/UX Specialist',
      bio: 'Renu is a software developer and frontend specialist dedicated to engineering modern, responsive, and performance-driven web applications. With a strong foundation in modern JavaScript frameworks, component architecture, and intuitive UI design, she transforms complex client requirements into pixel-perfect digital experiences. At Build With Us, Renu leads web application engineering, responsive layout systems, and interactive portfolio builds, ensuring every deliverable meets the highest standards of speed, accessibility, and visual polish.',
      avatar: '/renu-avatar.jpg',
      icon: Code2,
      badgeText: 'Frontend & UI Specialist',
      accentColor: '#00D2FF',
      gradient: 'from-[#00D2FF] via-[#2B86C5] to-[#784BA0]',
      glowColor: 'rgba(0, 210, 255, 0.25)',
      expertise: [
        'Custom Web Architecture & Responsive UI',
        'Interactive Developer & Executive Portfolios',
        'Performance Optimization & Core Web Vitals',
        'Mobile-First Layouts & Fluid Micro-interactions'
      ],
      skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Engineering', 'Responsive Design', 'Vite & Webpack']
    },
    {
      name: 'Stuti Tiwari',
      role: 'Co-Founder & Technical Solutions Architect',
      title: 'Systems, Academic Formatting & Brand Solutions',
      bio: 'Stuti is a developer and digital solutions architect driven by precision engineering, technical documentation rigor, and seamless user experience. Combining analytical problem-solving with an eye for refined visual aesthetics, she specializes in bespoke web platforms, ATS-compliant career assets, and publication-ready academic and research formatting. At Build With Us, Stuti directs technical strategy, publishing guideline compliance (IEEE/Springer/LaTeX), and quality assurance, delivering dependable, client-centric results across every project.',
      avatar: '/stuti-avatar.jpg',
      icon: Terminal,
      badgeText: 'Technical Solutions Specialist',
      accentColor: '#FF3CAC',
      gradient: 'from-[#FF3CAC] via-[#784BA0] to-[#00D2FF]',
      glowColor: 'rgba(255, 60, 172, 0.25)',
      expertise: [
        'Full-Stack Solutions & Database Architecture',
        'IEEE, Springer & LaTeX Scientific Formatting',
        'ATS-Compliant Resume & CV Systems',
        'Creative Branding & Promotional Design'
      ],
      skills: ['Full-Stack Web', 'LaTeX & Overleaf', 'ATS Compliance', 'Brand Identity', 'SEO Foundations', 'Technical Documentation']
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
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> MEET THE CO-FOUNDERS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Two Developers.{' '}
            <span className="gradient-text">One Unified Vision.</span>
          </h2>

          {/* QUOTE STATEMENT */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#0A0A12] border border-white/10 max-w-2xl mx-auto mb-8 shadow-2xl shadow-cyan-950/20">
            <div className="text-4xl text-[#00D2FF] font-serif leading-none mb-2">"</div>
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed italic -mt-2">
              We founded Build With Us on a simple, uncompromising promise: every client works directly with the engineers building their product — with full transparency, honest pricing, and genuine dedication.
            </p>
          </div>

          {/* SUPPORTING NARRATIVE */}
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            <p>
              Whether you are a startup founder looking for a launch-ready web presence, a professional upgrading your career collateral, or a student preparing your scholarly manuscript, we handle your project with unmatched care.
            </p>
          </div>
        </div>

        {/* TWO FOUNDERS CARDS */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
          {founders.map((founder, idx) => {
            const Icon = founder.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 border overflow-hidden bg-[#0A0A14]/90 border-white/[0.09] hover:border-white/20 hover:bg-[#0E0E1B] hover:-translate-y-1 shadow-2xl"
                style={{ boxShadow: `0 20px 40px -15px ${founder.glowColor}` }}
              >
                {/* HOVER GLOW BACKGROUND */}
                <div 
                  className={`absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${founder.gradient}`}
                />

                <div className="relative z-10 flex-1">
                  
                  {/* AVATAR + HEADER ROW */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                    
                    {/* PROFESSIONAL PORTRAIT */}
                    <div
                      className="relative w-32 h-40 rounded-2xl overflow-hidden border-2 shadow-2xl group-hover:scale-[1.03] transition-transform duration-500 shrink-0 bg-[#05050A]"
                      style={{ borderColor: `${founder.accentColor}70` }}
                    >
                      <img
                        src={founder.avatar}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      {/* SUBTLE GLOWING INSET BORDER */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 16px ${founder.accentColor}60` }}
                      />
                      {/* LIVE ACTIVE BADGE */}
                      <span 
                        className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-[#0A0A14] animate-pulse shadow-lg"
                        style={{ backgroundColor: founder.accentColor }}
                        title="Active Founder & Lead"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <span 
                          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border font-mono inline-block"
                          style={{ 
                            backgroundColor: `${founder.accentColor}15`, 
                            borderColor: `${founder.accentColor}40`,
                            color: founder.accentColor 
                          }}
                        >
                          {founder.badgeText}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {founder.name}
                      </h3>

                      <div className="text-xs font-bold flex items-center justify-center sm:justify-start gap-1.5 mt-1" style={{ color: founder.accentColor }}>
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{founder.role}</span>
                      </div>

                      <p className="text-[11px] text-slate-400 font-medium mt-1">
                        {founder.title}
                      </p>
                    </div>
                  </div>

                  {/* IN-DEPTH PROFESSIONAL BIO */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* CORE EXPERTISE BULLETS */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#06060E] border border-white/5 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: founder.accentColor }} />
                      Specialized Competencies
                    </div>
                    {founder.expertise.map((item, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: founder.accentColor }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKILLS STRIP */}
                <div className="relative z-10 pt-5 border-t border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: founder.accentColor }} />
                    Core Technologies & Tools
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

        {/* BOTTOM FOUNDER COMMITMENT STRIP */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#00D2FF]/10 via-[#784BA0]/15 to-[#FF3CAC]/10 border border-white/15 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2">
            DIRECT COLLABORATION • NO MIDDLEMEN
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Work Directly With Renu & Stuti.
          </h3>
          <p className="text-sm font-semibold text-slate-300 max-w-xl mx-auto mb-6">
            From the initial consultation to final deployment and support, we personally ensure your project is built to the highest standard.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start Building With Us</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
