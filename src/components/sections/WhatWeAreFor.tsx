import React, { useState } from 'react';
import { 
  Sparkles, 
  Target, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Layers, 
  Users,
  Compass,
  HeartHandshake
} from 'lucide-react';

interface WhatWeAreForProps {
  onOpenInquiry?: (serviceDisplayName?: string, serviceType?: string) => void;
}

export const WhatWeAreFor: React.FC<WhatWeAreForProps> = ({ onOpenInquiry }) => {
  const [activeAudience, setActiveAudience] = useState<number>(0);

  const audiences = [
    {
      id: 'businesses',
      title: 'Startups & Businesses',
      icon: Rocket,
      tag: 'GROWTH & PRESENCE',
      accentColor: '#00D2FF',
      gradient: 'from-[#00D2FF]/20 via-[#2B86C5]/10 to-transparent',
      borderColor: 'border-[#00D2FF]/30',
      tagColor: 'text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/20',
      headline: 'Launch fast with high-converting, modern websites.',
      description: 'Whether you are launching a new startup, scaling an e-commerce brand, or need a corporate digital presence, we build websites that turn visitors into paying customers.',
      points: [
        'Custom Business & E-Commerce Websites built for conversion',
        'Mobile-first responsive design that works flawlessly on every device',
        'Built-in SEO foundations, analytics, and contact integrations',
        'Ongoing monthly website maintenance and technical support'
      ],
      ctaText: 'Explore Business Websites',
      serviceName: 'Website Development',
      serviceType: 'Business Website (From ₹5,000)'
    },
    {
      id: 'professionals',
      title: 'Job Seekers & Creators',
      icon: Briefcase,
      tag: 'CAREER & BRANDING',
      accentColor: '#FF3CAC',
      gradient: 'from-[#FF3CAC]/20 via-[#784BA0]/10 to-transparent',
      borderColor: 'border-[#FF3CAC]/30',
      tagColor: 'text-[#FF3CAC] bg-[#FF3CAC]/10 border-[#FF3CAC]/20',
      headline: 'Stand out to recruiters with ATS resumes and interactive portfolios.',
      description: 'Generic templates get ignored. We craft ATS-compliant resumes and interactive developer/designer portfolio sites that highlight your true potential and get you hired.',
      points: [
        '6 Production-ready ATS resume templates (R1 to R6)',
        'Custom interactive portfolio websites with live project showcases',
        'Recruiter-friendly typography, hierarchy, and skill verification',
        'High-resolution PDF and editable source files delivered'
      ],
      ctaText: 'Explore Resumes & Portfolios',
      serviceName: 'Portfolio & Resume Services',
      serviceType: 'Professional Resume (From ₹1,000)'
    },
    {
      id: 'academics',
      title: 'Students & Researchers',
      icon: GraduationCap,
      tag: 'ACADEMIC EXCELLENCE',
      accentColor: '#10B981',
      gradient: 'from-[#10B981]/20 via-[#00D2FF]/10 to-transparent',
      borderColor: 'border-[#10B981]/30',
      tagColor: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/20',
      headline: 'Polished slide decks and publication-ready manuscript formatting.',
      description: 'Focus on your research and coursework while we handle the formatting headache. We format IEEE/Springer papers, LaTeX templates, and design compelling presentation decks.',
      points: [
        'Precise IEEE and Springer conference/journal template compliance',
        'Bidirectional Word ↔ LaTeX conversion & equation structuring',
        'School, college, and conference presentation slide design',
        'Strict adherence to academic integrity and client-provided drafts'
      ],
      ctaText: 'Explore Academic Support',
      serviceName: 'Research Paper Formatting',
      serviceType: 'IEEE Template Formatting (From ₹1,000)'
    },
    {
      id: 'creatives',
      title: 'Brands & Event Organizers',
      icon: Palette,
      tag: 'VISUAL IDENTITY',
      accentColor: '#F59E0B',
      gradient: 'from-[#F59E0B]/20 via-[#FF3CAC]/10 to-transparent',
      borderColor: 'border-[#F59E0B]/30',
      tagColor: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/20',
      headline: 'Eye-catching creatives that command attention on any feed.',
      description: 'From viral Instagram carousels and YouTube thumbnails to event posters and business stationery, we design visuals that elevate your brand and spark engagement.',
      points: [
        'High-engagement social media posts, stories, and carousels',
        'Event posters, flyers, and advertising creatives',
        'Corporate stationery: business cards, letterheads, certificates',
        'Pixel-perfect sizing and print-ready vector PDF / HD exports'
      ],
      ctaText: 'Explore Graphic Design',
      serviceName: 'Graphic Design',
      serviceType: 'Promotional Poster (From ₹400)'
    }
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Our Purpose',
      desc: 'To make premium digital craftsmanship — code, design, and academic formatting — accessible, honest, and personal for everyone.'
    },
    {
      icon: Zap,
      title: 'Direct Execution',
      desc: 'No corporate bureaucracy or agency middlemen. You collaborate directly with the passionate developers and designers who build your solution.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Pricing',
      desc: 'Clear "starting from" benchmarks with no hidden markups. You always know what to expect and retain complete control over your project budget.'
    },
    {
      icon: HeartHandshake,
      title: 'Your Idea, Our Craft',
      desc: 'We treat every project as our own. From minor tweaks to multi-page platform launches, we do not rest until the final product exceeds your expectations.'
    }
  ];

  return (
    <section id="what-we-are-for" className="relative py-28 bg-[#05050A] border-t border-white/10 overflow-hidden">
      {/* AMBIENT RADIAL LIGHTS */}
      <div className="absolute top-1/4 -right-24 w-[550px] h-[550px] bg-[#00D2FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-[550px] h-[550px] bg-[#784BA0]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D2FF] mb-5 shadow-lg shadow-cyan-500/5 tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-[#00D2FF]" /> WHAT BUILD WITH US IS FOR
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Your Digital Launchpad.{' '}
            <span className="gradient-text">Built For What You Need.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            <strong className="text-white font-semibold">Build With Us</strong> is an all-in-one creative digital studio created to solve a real problem: getting high-quality websites, resumes, academic formatting, and graphics shouldn't be expensive, complicated, or impersonal.
          </p>
        </div>

        {/* 4 CORE VALUE PILLARS STRIP */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pIdx}
                className="relative rounded-2xl p-6 bg-[#0A0A14] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE "WHO IS IT FOR?" AUDIENCE SECTION */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0A0A16] via-[#0E0E20] to-[#0A0A14] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D2FF] block mb-2 font-mono">
              TAILORED SOLUTIONS FOR REAL PEOPLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Who is Build With Us built for?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Select your profile below to see exactly how we turn your requirements into finished digital results.
            </p>
          </div>

          {/* AUDIENCE SELECTOR PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {audiences.map((aud, aIdx) => {
              const Icon = aud.icon;
              const isActive = activeAudience === aIdx;
              return (
                <button
                  key={aud.id}
                  onClick={() => setActiveAudience(aIdx)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2.5 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-white border-transparent shadow-lg shadow-cyan-500/25 scale-[1.02]'
                      : 'bg-[#0E0E18] text-slate-300 border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{aud.title}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE AUDIENCE CONTENT CARD */}
          {(() => {
            const current = audiences[activeAudience];
            const Icon = current.icon;
            return (
              <div className="grid lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/10 animate-in fade-in duration-300">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${current.tagColor}`}>
                      {current.tag}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {current.headline}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {current.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        if (onOpenInquiry) {
                          onOpenInquiry(current.serviceName, current.serviceType);
                        } else {
                          const contactElem = document.getElementById('contact');
                          if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-white font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition-all"
                    >
                      <span>{current.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative p-6 sm:p-8 rounded-3xl bg-[#080812] border border-white/10 shadow-inner">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 block uppercase">Dedicated Focus</span>
                        <h5 className="text-base font-bold text-white">{current.title}</h5>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      We eliminate the friction of juggling multiple freelancers or overpaying agencies. From first concept to final delivery, you get clear communication and guaranteed quality.
                    </p>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Guaranteed Response Time:</span>
                      <span className="text-[#00D2FF] font-bold">2 to 4 Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* BOTTOM QUICK STATEMENT BANNER */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Have a project that spans across multiple services?{' '}
            <a href="#contact" className="text-[#00D2FF] hover:underline font-semibold ml-1">
              Talk directly with our co-founders for a customized package →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
