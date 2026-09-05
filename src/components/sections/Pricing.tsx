import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Search, 
  Globe, 
  UserCheck, 
  Palette, 
  BookOpen, 
  FileCode2, 
  Wrench, 
  ShieldCheck, 
  Info,
  Layers,
  ChevronRight,
  Flame,
  Zap,
  HelpCircle
} from 'lucide-react';
import { 
  PRICING_CATEGORIES, 
  PRICING_HIGHLIGHT_TICKER, 
  PRICING_NOTE,
  PricingCategoryGroup,
  PricingItem 
} from '../../data/pricingData';

interface PricingProps {
  onSelectServiceForInquiry: (serviceDisplayName: string, serviceType?: string, suggestedBudget?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectServiceForInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'UserCheck':
        return UserCheck;
      case 'Palette':
        return Palette;
      case 'BookOpen':
        return BookOpen;
      case 'FileCode2':
        return FileCode2;
      case 'Wrench':
        return Wrench;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  // Filter categories and items based on search
  const filteredCategories = useMemo(() => {
    let list = PRICING_CATEGORIES;
    if (activeCategory !== 'all') {
      list = list.filter((cat) => cat.id === activeCategory);
    }

    if (!searchQuery.trim()) {
      return list;
    }

    const q = searchQuery.toLowerCase().trim();
    return list
      .map((cat) => {
        const catMatches = cat.title.toLowerCase().includes(q) || cat.displayName.toLowerCase().includes(q);
        const matchingSubgroups = cat.subgroups?.map((sub) => {
          const matchingItems = sub.items.filter(
            (item) => item.name.toLowerCase().includes(q) || (item.description && item.description.toLowerCase().includes(q))
          );
          return {
            ...sub,
            items: matchingItems
          };
        }).filter((sub) => sub.items.length > 0);

        if (catMatches) {
          return cat;
        }

        if (matchingSubgroups && matchingSubgroups.length > 0) {
          return {
            ...cat,
            subgroups: matchingSubgroups
          };
        }

        return null;
      })
      .filter((cat): cat is PricingCategoryGroup => cat !== null);
  }, [activeCategory, searchQuery]);

  const handleBook = (categoryDisplayName: string, itemName: string, startingPrice: string) => {
    onSelectServiceForInquiry(categoryDisplayName, `${itemName} (${startingPrice})`, startingPrice);
  };

  return (
    <section id="pricing" className="relative py-28 bg-[#05050A] border-t border-white/10 overflow-hidden">
      {/* AMBIENT RADIAL LIGHTS */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#784BA0]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF3CAC]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE & BADGE */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D2FF] mb-5 shadow-lg shadow-cyan-500/5 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> TRANSPARENT & TAILORED PRICING
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Simple, Transparent & <br className="hidden sm:inline" />
            <span className="gradient-text">"Starting From" Based Rates.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every project has unique requirements. We provide clear starting benchmarks so you always know what to expect, with room to customize scope to your exact budget.
          </p>
        </div>

        {/* HIGHLIGHT TICKER STRIP */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-3 justify-start lg:justify-center min-w-max mx-auto px-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 pr-2">
              <Zap className="w-3.5 h-3.5 text-[#00D2FF]" /> Starting Benchmarks:
            </span>
            {PRICING_HIGHLIGHT_TICKER.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0E18] border border-white/10 text-xs text-slate-200 hover:border-cyan-500/50 hover:bg-[#121222] transition-all"
              >
                <span className="text-slate-400 font-medium">{item.label}</span>
                <span className="font-bold text-[#00D2FF]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#0A0A14]/80 p-3 rounded-2xl border border-white/10 backdrop-blur-xl">
          {/* SEARCH INPUT */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any service, package, or keyword (e.g. Landing Page, ATS Resume, IEEE, Maintenance)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#05050A] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5"
              >
                Clear
              </button>
            )}
          </div>

          {/* QUICK DIRECT CONTACT CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors shrink-0"
          >
            Custom Quote Needed?
            <ChevronRight className="w-3.5 h-3.5 text-[#00D2FF]" />
          </a>
        </div>

        {/* CATEGORY SELECTOR TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-2 border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white border-transparent shadow-lg shadow-cyan-500/20'
                : 'bg-[#0E0E18] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            All Pricing Categories
          </button>

          {PRICING_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.icon);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-white border-transparent shadow-lg shadow-cyan-500/20'
                    : 'bg-[#0E0E18] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>{cat.number}. {cat.displayName}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN PRICING CATEGORIES DISPLAY */}
        <div className="space-y-20">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-[#0E0E18] rounded-3xl border border-white/10 p-8">
              <HelpCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No services found matching "{searchQuery}"</h3>
              <p className="text-sm text-slate-400 mb-6">Try searching for a broader term or browse through all categories.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-5 py-2.5 rounded-full bg-[#00D2FF] text-black font-bold text-xs hover:bg-cyan-300 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const Icon = getCategoryIcon(category.icon);

              return (
                <div 
                  key={category.id} 
                  id={`pricing-${category.id}`}
                  className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0A0A14] border border-white/10 shadow-2xl overflow-hidden scroll-mt-28"
                >
                  {/* CATEGORY HEADER */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-extrabold text-[#00D2FF] tracking-wider">
                            SECTION {category.number}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {category.description && (
                      <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
                        {category.description}
                      </p>
                    )}
                  </div>

                  {/* FEATURED PACKAGE CARD (E.g. STARTUP WEBSITE PACKAGE) */}
                  {category.packageFeature && (
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0E0E20] via-[#121226] to-[#1A1A36] border-2 border-cyan-500/40 relative overflow-hidden shadow-xl shadow-cyan-950/30">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 to-transparent blur-3xl pointer-events-none" />

                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-[#00D2FF] text-[11px] font-extrabold tracking-wider uppercase mb-2 border border-cyan-500/30">
                            <Flame className="w-3.5 h-3.5 text-cyan-300" /> RECOMMENDED ALL-IN-ONE
                          </div>
                          <h4 className="text-2xl font-black text-white tracking-tight">
                            🚀 {category.packageFeature.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1">
                            {category.packageFeature.description}
                          </p>
                        </div>

                        <div className="flex items-baseline sm:items-center gap-4 lg:text-right shrink-0">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Starting From</span>
                            <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00D2FF]">
                              {category.packageFeature.startingPrice}
                            </span>
                          </div>
                          <button
                            onClick={() => handleBook(category.displayName, category.packageFeature!.title, category.packageFeature!.startingPrice)}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#784BA0] hover:shadow-lg hover:shadow-cyan-500/30 text-white font-bold text-xs uppercase tracking-wider transition-all transform active:scale-95 flex items-center gap-2"
                          >
                            <span>Book Package</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                        {category.packageFeature.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-[#00D2FF] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {category.packageFeature.notes && (
                        <p className="text-[11px] text-slate-400 italic mt-5 pt-4 border-t border-white/5">
                          *{category.packageFeature.notes}
                        </p>
                      )}
                    </div>
                  )}

                  {/* SPECIAL TABLE MATRIX (E.g. IEEE / SPRINGER PAGE-BASED PRICING) */}
                  {category.tableMatrix && (
                    <div className="mb-10 p-6 rounded-2xl bg-[#0E0E18] border border-white/10">
                      <div className="flex items-center gap-2 mb-4">
                        <FileCode2 className="w-4 h-4 text-[#10B981]" />
                        <h4 className="text-base font-bold text-white tracking-wide">
                          📑 {category.tableMatrix.title}
                        </h4>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400">
                              <th className="py-2.5 px-4 font-bold">{category.tableMatrix.headers[0]}</th>
                              <th className="py-2.5 px-4 font-bold text-right">{category.tableMatrix.headers[1]}</th>
                              <th className="py-2.5 px-4 font-bold text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                            {category.tableMatrix.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                                <td className="py-3 px-4 font-medium text-white">{row.col1}</td>
                                <td className="py-3 px-4 font-bold text-[#10B981] text-right font-mono">{row.col2}</td>
                                <td className="py-3 px-4 text-right">
                                  <button
                                    onClick={() => handleBook(category.displayName, `IEEE/Springer (${row.col1})`, row.col2)}
                                    className="px-3 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-300 text-xs font-semibold transition-colors"
                                  >
                                    Book This Tier
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* SUBGROUPS & SERVICE ITEMS */}
                  {category.subgroups && category.subgroups.map((group, gIdx) => (
                    <div key={gIdx} className="mb-8 last:mb-0">
                      {group.subtitle && (
                        <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                          {group.subtitle}
                        </h4>
                      )}

                      {/* IF MAINTENANCE PACKAGES: RENDER 3 FEATURED TIER CARDS */}
                      {category.id === 'website-maintenance-support' && group.subtitle?.includes('Monthly') ? (
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          {group.items.map((item) => (
                            <div 
                              key={item.id}
                              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                                item.popular 
                                  ? 'bg-gradient-to-b from-[#14142B] to-[#0A0A16] border-2 border-[#00D2FF]/60 shadow-xl shadow-cyan-950/20' 
                                  : 'bg-[#0E0E18] border border-white/10 hover:border-white/20'
                              }`}
                            >
                              {item.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-black font-extrabold text-[10px] uppercase tracking-wider shadow">
                                  {item.badge}
                                </div>
                              )}

                              <div>
                                <h5 className="text-lg font-bold text-white mb-1">{item.name}</h5>
                                <p className="text-xs text-slate-400 mb-4">{item.description}</p>
                                
                                <div className="mb-6 pb-6 border-b border-white/10">
                                  <span className="text-3xl font-extrabold text-white">{item.startingPrice}</span>
                                </div>

                                {item.features && (
                                  <ul className="space-y-2.5 mb-6 text-xs text-slate-300">
                                    {item.features.map((feat, fIdx) => (
                                      <li key={fIdx} className="flex items-start gap-2">
                                        <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>

                              <button
                                onClick={() => handleBook(category.displayName, item.name, item.startingPrice)}
                                className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                                  item.popular
                                    ? 'bg-gradient-to-r from-[#00D2FF] to-[#784BA0] text-white hover:shadow-lg hover:shadow-cyan-500/25'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}
                              >
                                <span>Choose Plan</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* REGULAR GRID / LIST OF PRICING CARDS */
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {group.items.map((item) => (
                            <div
                              key={item.id}
                              className={`group relative rounded-2xl p-5 bg-[#0E0E18] hover:bg-[#121222] border transition-all duration-200 flex flex-col justify-between ${
                                item.popular 
                                  ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/10' 
                                  : 'border-white/10 hover:border-white/20'
                              }`}
                            >
                              <div>
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                                    {item.name}
                                  </h5>
                                  {item.badge && (
                                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-[#00D2FF] border border-cyan-500/20 shrink-0">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>

                                {item.description && (
                                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                <div>
                                  <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-medium">Starting From</span>
                                  <span className="text-base sm:text-lg font-black text-white font-mono">
                                    {item.startingPrice}
                                  </span>
                                </div>

                                <button
                                  onClick={() => handleBook(category.displayName, item.name, item.startingPrice)}
                                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-[#00D2FF] hover:text-black text-slate-200 text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border border-white/10 hover:border-[#00D2FF] active:scale-95"
                                >
                                  <span>Book</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* CATEGORY DISCLAIMER */}
                  {category.disclaimer && (
                    <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-400">
                      <Info className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{category.disclaimer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* PRICING POLICY & ACADEMIC INTEGRITY FOOTNOTE */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#0A0A14] border border-white/10 space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                Transparency & Project Scope Policy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {PRICING_NOTE}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-white/5">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Academic Support & Integrity Standard
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Academic and research paper services are strictly limited to formatting, slide styling, LaTeX/Word layout structuring, and documentation assistance based on client-provided content. We do not fabricate research, produce ghost-written empirical findings, or offer publication guarantees.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
