import React from 'react';
import { X, CheckCircle2, Clock, Tag, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0A0A12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP RADIAL ACCENT GLOW */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#FF3CAC]/20 via-[#784BA0]/20 to-transparent blur-3xl pointer-events-none" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SERVICE HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF3CAC]/10 text-[#FF3CAC] border border-[#FF3CAC]/30">
            SERVICE {service.number}
          </span>
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            BUILD WITH US
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* METRICS STRIP */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#10101C] border border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-pink-500/10 text-[#FF3CAC]">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium uppercase">Starting Price</div>
              <div className="text-lg font-extrabold text-white">{service.startingPrice}+</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-[#784BA0]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium uppercase">Typical Delivery</div>
              <div className="text-lg font-extrabold text-white">{service.deliveryTime}</div>
            </div>
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF3CAC]" /> What's Included:
          </h4>
          <ul className="space-y-2.5">
            {service.featuresIncluded.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DISCLAIMER IF ANY */}
        {service.disclaimer && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs mb-6 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>{service.disclaimer}</p>
          </div>
        )}

        {/* FOOTER ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs text-slate-400">
            Deliverable: <span className="text-slate-200 font-medium">{service.sampleDeliverable}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestService(service.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] text-white font-bold text-sm shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
