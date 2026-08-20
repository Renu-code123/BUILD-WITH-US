import React, { useState } from 'react';
import { Laptop, Tablet, Smartphone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const DeviceShowcase: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'desktop': return 'w-full max-w-5xl';
      case 'tablet': return 'w-full max-w-xl';
      case 'mobile': return 'w-full max-w-xs';
    }
  };

  return (
    <section id="showcase" className="relative py-24 bg-[#05050A] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF3CAC]/15 via-[#784BA0]/15 to-[#2B86C5]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> LIVE INTERACTIVE SHOWCASE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Blank Page → <span className="gradient-text">Beautiful Website.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Switch between device viewports to see how every website we build adapts flawlessly across screens.
          </p>
        </div>

        {/* DEVICE MODE TOGGLE BUTTONS */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              deviceMode === 'desktop'
                ? 'bg-[#FF3CAC] text-white shadow-lg shadow-pink-500/25 scale-105'
                : 'bg-[#10101C] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Laptop className="w-4 h-4" />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              deviceMode === 'tablet'
                ? 'bg-[#784BA0] text-white shadow-lg shadow-purple-500/25 scale-105'
                : 'bg-[#10101C] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              deviceMode === 'mobile'
                ? 'bg-[#2B86C5] text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-[#10101C] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </button>
        </div>

        {/* INTERACTIVE DEVICE CONTAINER MOCKUP */}
        <div className="flex justify-center transition-all duration-500 ease-out">
          <div className={`${getContainerWidth()} transition-all duration-500 ease-out`}>
            
            {/* DEVICE OUTER FRAME */}
            <div className="relative rounded-3xl bg-[#0A0A12] border-2 border-white/20 p-2 sm:p-4 shadow-2xl shadow-purple-950/70 overflow-hidden">
              
              {/* BROWSER BAR */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                <div className="flex-1 mx-4 max-w-md bg-white/5 border border-white/10 rounded-full px-4 py-1 text-[11px] text-slate-400 font-mono text-center truncate">
                  https://build-with-us.preview/client-demo
                </div>

                <div className="text-[10px] text-emerald-400 font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Live Preview
                </div>
              </div>

              {/* DEMO INTERACTIVE SCREEN CONTENT */}
              <div className="bg-[#05050A] rounded-2xl p-6 border border-white/10 min-h-[360px] flex flex-col justify-between overflow-hidden">
                
                {/* SAMPLE DEMO APP HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                      BW
                    </div>
                    <span className="font-extrabold text-sm text-white tracking-wide">AURA STUDIO</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs text-slate-300">
                    <span className="hover:text-white cursor-pointer">Services</span>
                    <span className="hover:text-white cursor-pointer">Portfolio</span>
                    <span className="hover:text-white cursor-pointer">Contact</span>
                  </div>
                </div>

                {/* SAMPLE DEMO HERO CONTENT */}
                <div className="my-auto py-4">
                  <div className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#FF3CAC] bg-pink-500/10 px-3 py-1 rounded-full mb-3">
                    Crafting Next-Gen Brands
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3">
                    Elevate Your Brand With <span className="text-[#FF3CAC]">Modern Aesthetics.</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed mb-6">
                    High-impact digital designs built with speed, precision and conversion in mind.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button className="px-5 py-2 rounded-full bg-[#FF3CAC] text-white font-bold text-xs shadow-lg shadow-pink-500/30 flex items-center gap-1.5">
                      <span>Explore Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* SAMPLE METRICS FOOTER */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
                  <div>
                    <span className="block text-white font-bold text-sm">99.9%</span>
                    <span>Uptime</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold text-sm">100/100</span>
                    <span>Lighthouse</span>
                  </div>
                  <div>
                    <span className="block text-purple-400 font-bold text-sm">0.2s</span>
                    <span>Load Speed</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
