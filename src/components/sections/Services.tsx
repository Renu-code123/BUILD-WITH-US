import React, { useState } from 'react';
import { ArrowRight, Sparkles, Globe, UserCheck, FileText, Image as ImageIcon, BookOpen, AlertCircle } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { ServiceModal } from '../modals/ServiceModal';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-development': return Globe;
      case 'portfolio-creation': return UserCheck;
      case 'resume-cv-design': return FileText;
      case 'poster-ad-design': return ImageIcon;
      case 'document-academic-support': return BookOpen;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#05050A] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF3CAC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2B86C5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF3CAC] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> OUR DIGITAL SOLUTIONS
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need.{' '}
            <span className="gradient-text">One Place.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From your first idea to the final product, Build With Us helps you create a professional digital presence.
          </p>
        </div>

        {/* 5 SERVICE CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            const isLargeCard = index === 0 || index === 4;

            return (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className={`group relative glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between cursor-pointer ${
                  isLargeCard ? 'lg:col-span-1 border-pink-500/20' : ''
                }`}
              >
                {/* NUMBER & ICON */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-white/20 group-hover:text-[#FF3CAC] transition-colors font-mono">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FF3CAC] group-hover:bg-gradient-to-r group-hover:from-[#FF3CAC] group-hover:to-[#784BA0] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#FF3CAC] transition-colors">
                    {service.title}
                  </h3>

                  {/* SHORT DESCRIPTION */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ACADEMIC SUPPORT DISCLAIMER MINI BADGE */}
                  {service.disclaimer && (
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 mb-4 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                      <span>Legitimate formatting & typing support</span>
                    </div>
                  )}
                </div>

                {/* BOTTOM ACTION & PRICE */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Starting at</span>
                    <span className="text-base font-extrabold text-white">{service.startingPrice}+</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalService(service);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FF3CAC] group-hover:text-white transition-colors"
                  >
                    <span>{service.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* SERVICE MODAL OVERLAY */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestService={(serviceId) => {
          onSelectServiceForInquiry(serviceId);
        }}
      />
    </section>
  );
};
