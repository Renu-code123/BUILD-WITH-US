import React from 'react';
import { ArrowRight, Sparkles, Code2, Layout, FileText, Palette, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-hero">
      
      {/* BACKGROUND DECORATIVE GLOW ORBS (Razorpay Style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF3CAC]/20 via-[#784BA0]/25 to-[#2B86C5]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF3CAC]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2B86C5]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* BACKGROUND GRID MATRIX PATTERN */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* ANNOUNCEMENT BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A12] border border-white/15 text-xs font-semibold tracking-wide text-slate-200 mb-6 shadow-xl shadow-pink-500/5 hover:border-[#FF3CAC]/50 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#FF3CAC] animate-ping" />
              <span className="text-[#FF3CAC] font-bold">✦</span> DIGITAL SERVICES, BUILT AROUND YOU
            </div>

            {/* MAIN HEADINGS */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              We Build Your Ideas Into{' '}
              <span className="gradient-text drop-shadow-lg">
                Digital Reality.
              </span>
            </h1>

            {/* SUPPORTING PARAGRAPH */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Websites, portfolios, resumes, promotional designs and professional document support — all in one place.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] text-white font-bold text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#0A0A12] hover:bg-[#10101C] border border-white/15 hover:border-white/30 text-slate-200 hover:text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Work</span>
                <span className="text-slate-400 group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>

            {/* QUICK SERVICE TAGS STRIP */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs font-semibold text-slate-400">
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3CAC]" /> Websites
              </span>
              <span>·</span>
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#784BA0]" /> Portfolios
              </span>
              <span>·</span>
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2B86C5]" /> Resumes
              </span>
              <span>·</span>
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3CAC]" /> Design
              </span>
              <span>·</span>
              <span className="text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#784BA0]" /> Document Support
              </span>
            </div>

          </div>

          {/* RIGHT HERO VISUAL COMPOSITION (Razorpay Studio Style Floating Cards) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            
            {/* CENTRAL GLOW RING WITH BRAND LOGO */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/10 p-2 flex items-center justify-center animate-spin-slow">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF3CAC]/20 via-[#784BA0]/30 to-[#2B86C5]/20 blur-xl animate-pulse" />
              <img
                src="/logo.png"
                alt="BUILD WITH US Centerpiece"
                className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full shadow-2xl shadow-pink-500/30 relative z-10 border-2 border-white/20 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FLOATING CARD 1: LAPTOP WEBSITE PREVIEW */}
            <div className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 glass-card p-3.5 rounded-2xl border border-white/15 shadow-2xl shadow-purple-950/60 max-w-[210px] animate-float-slow z-20">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-slate-400 font-mono ml-auto">Website Dev</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-[#FF3CAC]">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Modern Web App</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">⚡ Fast 60fps UI</div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2: MOBILE PORTFOLIO PREVIEW */}
            <div className="absolute top-1/4 -right-4 sm:-right-8 glass-card p-3.5 rounded-2xl border border-white/15 shadow-2xl shadow-blue-950/60 max-w-[190px] animate-float-reverse z-20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-[#784BA0]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Developer Portfolio</div>
                  <div className="text-[10px] text-purple-300 font-medium">Interactive Demos</div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 3: RESUME CARD PREVIEW */}
            <div className="absolute bottom-4 -left-2 sm:bottom-6 sm:-left-4 glass-card p-3.5 rounded-2xl border border-white/15 shadow-2xl shadow-pink-950/60 max-w-[200px] animate-float-slow z-20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-[#2B86C5]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">ATS CV Design</div>
                  <div className="text-[10px] text-slate-300">Passed HR Scanners</div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 4: POSTER DESIGN CARD */}
            <div className="absolute -bottom-6 right-2 sm:bottom-0 sm:right-6 glass-card p-3.5 rounded-2xl border border-white/15 shadow-2xl shadow-indigo-950/60 max-w-[195px] animate-float-reverse z-20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-500/10 text-[#FF3CAC]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Promo Poster</div>
                  <div className="text-[10px] text-pink-300 font-medium">Social Banners</div>
                </div>
              </div>
            </div>

            {/* CONNECTING GLOW RAYS & NODES (Razorpay Matrix) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <path d="M 60 80 Q 180 150 200 200" fill="none" stroke="url(#ray1)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 320 120 Q 240 200 200 200" fill="none" stroke="url(#ray2)" strokeWidth="2" strokeDasharray="4 4" />
              <defs>
                <linearGradient id="ray1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3CAC" />
                  <stop offset="100%" stopColor="#784BA0" />
                </linearGradient>
                <linearGradient id="ray2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2B86C5" />
                  <stop offset="100%" stopColor="#FF3CAC" />
                </linearGradient>
              </defs>
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
};
