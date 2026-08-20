import React from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]">
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
              A modern digital services studio dedicated to creating websites, portfolios, resumes, promotional graphics, and document solutions for students, creators, freelancers, and businesses.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3CAC] text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@buildwithus.com"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500 text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 1: COMPANY */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Featured Work</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Portfolios</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Resumes & CVs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Poster Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Document Support</a></li>
            </ul>
          </div>

          {/* COLUMN 3: CONNECT */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="mailto:hello@buildwithus.com" className="hover:text-white transition-colors">hello@buildwithus.com</a></li>
            </ul>
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
