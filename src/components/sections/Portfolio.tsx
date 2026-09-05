import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectItem } from '../../types';

interface PortfolioProps {
  onOpenInquiry: (serviceDisplayName?: string, serviceType?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenInquiry }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'Websites', 'Portfolios', 'Resumes', 'Graphic Design', 'Research Paper Formatting'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="relative py-24 bg-[#0A0A12] border-t border-white/10 overflow-hidden">
      
      {/* GLOW DECORATIONS */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D2FF] mb-4 shadow-lg shadow-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> FEATURED SHOWCASE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            We Don't Just Talk.{' '}
            <span className="gradient-text">We Build.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Explore sample work across websites, portfolios, resumes, and graphic designs.
          </p>
        </div>

        {/* FILTER CATEGORY BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-[#10101C] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* IMAGE PREVIEW */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent opacity-80" />

                {/* CATEGORY BADGE */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md border border-white/10 text-white">
                  {project.category}
                </div>

                {/* TOP RIGHT ARROW ICON / LIVE DEMO BUTTON */}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#00D2FF] hover:bg-white text-black font-extrabold text-[11px] flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
                    title={`Open live site for ${project.title}`}
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                ) : (
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#00D2FF] group-hover:text-black group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                )}
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00D2FF] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-[#00D2FF] mb-2">
                    {project.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* TAG PILLS */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#0A0A12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/60 flex items-center justify-center ${
              selectedProject.category === 'Resumes' || selectedProject.category === 'Graphic Design' || selectedProject.category === 'Research Paper Formatting' ? 'max-h-[60vh] p-2' : 'aspect-video'
            }`}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={selectedProject.category === 'Resumes' || selectedProject.category === 'Graphic Design' || selectedProject.category === 'Research Paper Formatting' ? 'max-h-[56vh] w-auto object-contain rounded-lg shadow-2xl' : 'w-full h-full object-cover object-top'}
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00D2FF]/20 text-[#00D2FF]">
                {selectedProject.category}
              </span>
              <span className="text-xs text-slate-400">Build With Us Portfolio Item</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
            <p className="text-sm font-semibold text-[#00D2FF] mb-4">{selectedProject.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedProject.description}</p>

            {/* LIVE URL BANNER */}
            {selectedProject.demoUrl && (
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#00D2FF]/15 via-[#784BA0]/15 to-transparent border border-[#00D2FF]/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg shadow-cyan-500/10">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#00D2FF] mb-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Website Active
                  </div>
                  <span className="text-sm font-bold text-white">
                    Verified Production Deployment
                  </span>
                </div>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00D2FF] hover:bg-white text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/30 hover:scale-105 shrink-0"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">Key Highlights:</h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400">
                Want a similar build for your brand?
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => {
                    const serviceName = selectedProject.category === 'Websites' 
                      ? 'Website Development' 
                      : selectedProject.category === 'Portfolios' || selectedProject.category === 'Resumes'
                      ? 'Portfolio & Resume Services'
                      : selectedProject.category === 'Research Paper Formatting'
                      ? 'Research Paper Formatting'
                      : 'Graphic Design';
                    setSelectedProject(null);
                    onOpenInquiry(serviceName);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Build Something Similar →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
