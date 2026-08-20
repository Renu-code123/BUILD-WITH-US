import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faqData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('services-offered');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL LIGHT */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2B86C5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Got Questions? <span className="gradient-text">We Have Answers.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Everything you need to know about starting your project with Build With Us.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#FF3CAC]/40 bg-[#0A0A12]/90 shadow-xl' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#FF3CAC]' : 'text-slate-400'}`} />
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF3CAC]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200 pl-14">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
