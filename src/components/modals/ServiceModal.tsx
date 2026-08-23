import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Layers } from 'lucide-react';
import { ServiceDefinition } from '../../data/servicesData';

interface ServiceModalProps {
  service: ServiceDefinition | null;
  onClose: () => void;
  onRequestService: (serviceDisplayName: string, subcategory?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestService }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0A0A12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP RADIAL ACCENT GLOW */}
        <div 
          className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: service.accentColor }}
        />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SERVICE HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border text-white"
            style={{ borderColor: `${service.accentColor}66`, color: service.accentColor }}
          >
            SERVICE {service.number}
          </span>
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            BUILD WITH US
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* REAL SAMPLE IMAGE BANNER */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/15 shadow-lg">
          <img
            src={service.sampleImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs font-bold text-white">
            {service.sampleImageCaption}
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* SUBCATEGORIES LIST */}
        <div className="mb-6 p-4 rounded-2xl bg-[#10101C] border border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00D2FF]" /> Available Service Types & Subcategories:
          </h4>
          <div className="space-y-3">
            {service.subcategoryGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1.5">
                {group.groupName && (
                  <div className="text-[11px] font-semibold text-slate-400">
                    {group.groupName}:
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {group.subcategories.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => {
                        onClose();
                        onRequestService(service.displayName, sub);
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-200 border border-white/10 hover:border-cyan-500/40 transition-colors flex items-center gap-1.5"
                    >
                      <span>{sub}</span>
                      <ArrowRight className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00D2FF]" /> What's Included:
          </h4>
          <ul className="space-y-2.5">
            {service.featuresIncluded.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMPORTANT NOTE IF ANY */}
        {service.importantNote && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs mb-6 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>{service.importantNote}</p>
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
              onRequestService(service.displayName);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>START THIS PROJECT →</span>
          </button>
        </div>

      </div>
    </div>
  );
};
