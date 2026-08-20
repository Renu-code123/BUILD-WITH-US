import React from 'react';
import { MessageSquareQuote, Sparkles, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0A0A12] border-t border-white/10 overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#784BA0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* HEADER */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
          <Sparkles className="w-3.5 h-3.5" /> REVIEWS & FEEDBACK
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
          Client <span className="gradient-text">Testimonials</span>
        </h2>

        {/* ELEGANT PLACEHOLDER CARD */}
        <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl relative">
          
          <div className="w-14 h-14 rounded-full bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 flex items-center justify-center text-[#FF3CAC] mx-auto mb-6">
            <MessageSquareQuote className="w-7 h-7" />
          </div>

          <div className="flex justify-center gap-1 mb-4 text-amber-400 opacity-60">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <p className="text-base sm:text-xl font-medium text-slate-200 leading-relaxed mb-6 italic">
            “Client testimonials will appear here as we complete projects.”
          </p>

          <p className="text-xs text-slate-400">
            We value authenticity and 100% genuine client feedback. Be among our first featured success stories!
          </p>

        </div>

      </div>
    </section>
  );
};
