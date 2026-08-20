import React from 'react';
import { Sparkles, Smartphone, Zap, Wallet, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      title: 'Modern Design',
      desc: 'Clean, contemporary visual design engineered to make an immediate impact.',
      icon: Sparkles,
      color: 'text-pink-400',
      gradient: 'from-pink-500/10 to-rose-500/5'
    },
    {
      title: 'Responsive',
      desc: 'Designed & tested to work fluidly across phones, tablets and desktops.',
      icon: Smartphone,
      color: 'text-purple-400',
      gradient: 'from-purple-500/10 to-indigo-500/5'
    },
    {
      title: 'Fast Delivery',
      desc: 'Efficient project workflow and strict adherence to agreed delivery timelines.',
      icon: Zap,
      color: 'text-amber-400',
      gradient: 'from-amber-500/10 to-yellow-500/5'
    },
    {
      title: 'Affordable',
      desc: 'High quality professional services priced accessibly without agency overhead.',
      icon: Wallet,
      color: 'text-cyan-400',
      gradient: 'from-cyan-500/10 to-blue-500/5'
    },
    {
      title: 'Personal Support',
      desc: 'Direct line of communication with the actual creators building your project.',
      icon: HeartHandshake,
      color: 'text-emerald-400',
      gradient: 'from-emerald-500/10 to-teal-500/5'
    },
    {
      title: 'Privacy',
      desc: 'Your project information, files, and personal data are handled strictly confidentially.',
      icon: ShieldCheck,
      color: 'text-blue-400',
      gradient: 'from-blue-500/10 to-indigo-500/5'
    }
  ];

  return (
    <section className="relative py-24 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#784BA0]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> WHY CHOOSE US
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built For Your Goals.{' '}
            <span className="gradient-text">Not Just For Looks.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            We focus on real outcomes, transparent communication, and polished execution.
          </p>
        </div>

        {/* 6 FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover bg-gradient-to-br ${item.gradient}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
