import React from 'react';
import { ArrowUp, Mail, Send, Clock, Globe, Sparkles } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterXIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.21a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05050A] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#00D2FF] via-[#784BA0] to-[#FF3CAC]">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full bg-[#05050A]" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-wide">
                BUILD WITH US
              </span>
            </a>

            <p className="text-sm font-semibold text-slate-200 mb-2">
              Your Idea. Our Skills. Let's Build It.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              A modern creative digital studio crafting custom websites, portfolios & resumes, graphic designs, academic presentation support, and research paper formatting.
            </p>

            {/* SOCIAL ICON BUTTONS */}
            <div className="flex items-center gap-2.5">
              <a
                href="mailto:buildwithus0723@gmail.com"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="Email"
                title="Direct Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/build_with_us.07?igsi=MXN5ZmdmdzYxaHJwYQ=="
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3CAC] hover:bg-pink-500/10 text-slate-300 hover:text-[#FF3CAC] transition-colors"
                aria-label="Instagram"
                title="Instagram @build_with_us.07"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://x.com/BuildWithUs0723"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
                title="Twitter / X @BuildWithUs0723"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/build-with-us-undefined-71b300430/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-blue-600/10 text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn Build With Us"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 1: NAVIGATION */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#what-we-are-for" className="hover:text-white transition-colors text-cyan-300">What We Are For</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors text-[#00D2FF]">Pricing & Plans</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Featured Showcase</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How We Build</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Founders & Team</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* COLUMN 2: 7 OFFICIAL SERVICES */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Official Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">01. Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">02. Portfolio & Resume Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">03. Graphic Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">04. Academic Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">05. Research Paper Formatting</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">06. Website Maintenance</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">07. Modular Add-ons</a></li>
            </ul>
          </div>

          {/* COLUMN 3: DIRECT CONTACT & SUPPORT */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href="#contact" 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/20 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Project Enquiry</span>
                  <span className="text-[10px] text-slate-400">Get proposal & pricing</span>
                </div>
              </a>

              <a 
                href="mailto:buildwithus0723@gmail.com" 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 text-slate-300 hover:text-pink-300 transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF3CAC]/10 border border-[#FF3CAC]/20 flex items-center justify-center text-[#FF3CAC] group-hover:scale-110 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-semibold text-white">Direct Email</span>
                  <span className="text-[10px] text-slate-400 truncate">buildwithus0723@gmail.com</span>
                </div>
              </a>

              <div className="pt-1 flex flex-col gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Turnaround: <strong className="text-slate-200">2–4 Hours</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>India • Worldwide Clients</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Build With Us. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-md bg-white/5 border border-white/10">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
