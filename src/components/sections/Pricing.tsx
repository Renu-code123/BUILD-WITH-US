import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { pricingData } from '../../data/pricingData';

interface PricingProps {
  onOpenInquiry: (serviceId?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenInquiry }) => {
  return (
    <section id="pricing" className="relative py-24 bg-[#0A0A12] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF3CAC]/15 via-[#784BA0]/15 to-[#2B86C5]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> TRANSPARENT RATES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple <span className="gradient-text">Starting Prices.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Clear starting prices. Custom quotes for custom requirements.
          </p>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((tier) => (
            <div
              key={tier.id}
              className={`relative glass-card p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                tier.isPopular
                  ? 'border-[#FF3CAC] bg-[#10101C]/90 shadow-2xl shadow-pink-500/15 lg:-translate-y-2'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* POPULAR BADGE */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* TIER NAME & PRICE */}
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {tier.price}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* FEATURE LIST */}
                <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button
                onClick={() => onOpenInquiry(tier.serviceId)}
                className={`w-full py-3.5 rounded-full font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.isPopular
                    ? 'bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] text-white shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>{tier.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* DISCLAIMER & SECONDARY CTA */}
        <div className="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 mb-6">
            Final pricing depends on project requirements, complexity, content and revisions.
          </p>

          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10101C] hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-bold transition-all group"
          >
            <span>Need Something Custom? Get a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#FF3CAC] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
