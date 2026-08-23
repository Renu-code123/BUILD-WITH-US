import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  UserCheck, 
  Palette, 
  BookOpen, 
  FileCode2, 
  AlertCircle,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Eye
} from 'lucide-react';
import { OFFICIAL_SERVICES, ServiceDefinition } from '../../data/servicesData';
import { ServiceModal } from '../modals/ServiceModal';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceDisplayName: string, serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceDefinition | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-development':
        return Globe;
      case 'portfolio-resume-services':
        return UserCheck;
      case 'graphic-design':
        return Palette;
      case 'assignment-academic-support':
        return BookOpen;
      case 'research-paper-formatting':
        return FileCode2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#05050A] overflow-hidden">
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#00D2FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-[#FF3CAC]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[#784BA0]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D2FF] mb-5 shadow-lg shadow-cyan-500/5 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> OFFICIAL SERVICES CATALOG
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Five Core Services.{' '}
            <span className="gradient-text">Built To Perfection.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Select any service below to explore specific subcategories, inspect real sample work, or launch your project enquiry directly.
          </p>
        </div>

        {/* 2-CARDS PER ROW HORIZONTAL GRID (All 5 cards have the exact same unified single card shape) */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {OFFICIAL_SERVICES.map((service) => {
            const Icon = getServiceIcon(service.id);
            const isHovered = hoveredCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setActiveModalService(service)}
                className={`group relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-500 border overflow-hidden ${
                  isHovered
                    ? 'bg-[#0E0E1B] border-[#00D2FF]/60 shadow-2xl -translate-y-1.5'
                    : 'bg-[#0A0A14]/90 border-white/[0.09] hover:border-white/20'
                }`}
                style={{
                  boxShadow: isHovered 
                    ? `0 24px 48px -12px ${service.accentColor}30, 0 0 1px 1px ${service.accentColor}50`
                    : '0 10px 30px -10px rgba(0,0,0,0.6)'
                }}
              >
                {/* SUBTLE GLOW OVERLAY ON HOVER */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.previewGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  {/* CARD MAIN CONTENT GRID (Horizontal 2-pane layout) */}
                  <div className="grid md:grid-cols-12 gap-5 items-start">
                    
                    {/* LEFT COLUMN: DETAILS & SUBCATEGORIES */}
                    <div className="md:col-span-7 flex flex-col justify-between">
                      
                      {/* HEADER WITH NUMBER AND TITLE */}
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="flex items-center gap-2">
                            <span 
                              className="font-mono text-xl sm:text-2xl font-extrabold tracking-tight px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white transition-colors"
                              style={{
                                borderColor: isHovered ? `${service.accentColor}60` : undefined,
                                color: isHovered ? service.accentColor : undefined
                              }}
                            >
                              {service.number}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                              BUILD WITH US
                            </span>
                          </div>

                          <div 
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md md:hidden"
                            style={{
                              backgroundColor: isHovered ? `${service.accentColor}18` : undefined,
                              borderColor: isHovered ? `${service.accentColor}60` : undefined
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: isHovered ? service.accentColor : undefined }} />
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* SUBCATEGORIES CHIPS */}
                      <div className="space-y-2.5 mb-4">
                        {service.subcategoryGroups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-1.5">
                            {group.groupName && (
                              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <span 
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ backgroundColor: service.accentColor }} 
                                />
                                {group.groupName}
                              </div>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                              {group.subcategories.map((sub, sIdx) => (
                                <button
                                  key={sIdx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectServiceForInquiry(service.displayName, sub);
                                  }}
                                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/[0.05] hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-200 border border-white/10 hover:border-cyan-400/50 transition-all text-left flex items-center gap-1 group/chip shadow-sm"
                                  title={`Click to enquire about ${sub}`}
                                >
                                  <span>{sub}</span>
                                  <ChevronRight className="w-3 h-3 opacity-30 group-hover/chip:opacity-100 group-hover/chip:translate-x-0.5 transition-all shrink-0" />
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* IMPORTANT NOTE IF ANY */}
                      {service.importantNote && (
                        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-[10px] leading-relaxed mb-3 flex items-start gap-2">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{service.importantNote}</span>
                        </div>
                      )}
                    </div>

                    {/* RIGHT COLUMN: REAL SAMPLE IMAGE PREVIEW */}
                    <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[190px]">
                      
                      {/* ICON HEADER ON DESKTOP */}
                      <div className="hidden md:flex justify-end mb-2.5">
                        <div 
                          className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg"
                          style={{
                            backgroundColor: isHovered ? `${service.accentColor}18` : undefined,
                            borderColor: isHovered ? `${service.accentColor}60` : undefined,
                            boxShadow: isHovered ? `0 0 25px ${service.accentColor}40` : undefined
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: isHovered ? service.accentColor : undefined }} />
                        </div>
                      </div>

                      {/* REAL SAMPLE IMAGE SHOWCASE CONTAINER */}
                      <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-inner group/img aspect-[4/3] flex flex-col justify-end">
                        <img
                          src={service.sampleImage}
                          alt={`${service.title} sample`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06060F] via-[#06060F]/40 to-transparent" />

                        {/* SAMPLE LABEL BADGE */}
                        <div className="relative z-10 p-2.5 flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white tracking-wide">
                            {service.sampleImageCaption}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-[#00D2FF] flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* BOTTOM ACTION BAR */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                      Click to view full brief
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceForInquiry(service.displayName);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#00D2FF] group-hover:via-[#784BA0] group-hover:to-[#FF3CAC] text-xs font-extrabold text-white border border-white/15 group-hover:border-transparent shadow-lg transition-all duration-300 active:scale-95 group-hover:shadow-cyan-500/30"
                    >
                      <span>START THIS PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* SERVICE DETAILS MODAL */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestService={(serviceDisplayName, subcategory) => {
          onSelectServiceForInquiry(serviceDisplayName, subcategory);
        }}
      />
    </section>
  );
};
