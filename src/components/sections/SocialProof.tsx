import React from 'react';
import { Smartphone, Zap, Tag, HeartHandshake, Sparkles } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const items = [
    { label: 'Modern Design', icon: Sparkles, color: 'text-pink-400' },
    { label: 'Mobile Responsive', icon: Smartphone, color: 'text-purple-400' },
    { label: 'Affordable Pricing', icon: Tag, color: 'text-cyan-400' },
    { label: 'Fast Delivery', icon: Zap, color: 'text-amber-400' },
    { label: 'Personal Support', icon: HeartHandshake, color: 'text-rose-400' },
  ];

  return (
    <section className="relative z-20 border-y border-white/10 bg-[#0A0A12]/90 backdrop-blur-xl py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-between">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
              >
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
