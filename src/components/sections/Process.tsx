import React from 'react';
import { MessageSquare, Compass, Code, Send, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us',
      desc: 'Share your idea, requirements and references through our quick inquiry form.',
      icon: MessageSquare,
      color: 'text-pink-400',
      border: 'border-pink-500/30'
    },
    {
      number: '02',
      title: 'Plan',
      desc: 'We understand your exact needs, map out the timeline, and agree on transparent fixed pricing.',
      icon: Compass,
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      number: '03',
      title: 'Build',
      desc: 'We design, craft, refine, and optimize your project with continuous quality checks.',
      icon: Code,
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      number: '04',
      title: 'Deliver',
      desc: 'You receive the final polished product ready to launch, share, or submit.',
      icon: Send,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-[#0A0A12] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL LIGHT */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> OUR STREAMLINED WORKFLOW
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We <span className="gradient-text">Build With You</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            A simple, transparent 4-step journey from initial spark to final delivery.
          </p>
        </div>

        {/* 4 STEPS GRID WITH CONNECTING LINE */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CONNECTING LINE (DESKTOP) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] -translate-y-6 opacity-30 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative glass-card p-6 sm:p-8 rounded-3xl border ${step.border} glass-card-hover flex flex-col justify-between z-10`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-mono text-white/20">
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Step {index + 1} of 4
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
