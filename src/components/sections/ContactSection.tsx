import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Loader2, 
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { ProjectInquiry } from '../../types';
import { InquirySuccessModal } from '../modals/InquirySuccessModal';
import { OFFICIAL_SERVICES } from '../../data/servicesData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterXIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.21a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
  </svg>
);

const SERVICE_OPTIONS = [
  'Website Development',
  'Portfolio & Resume Services',
  'Graphic Design',
  'Assignment & Academic Support',
  'Research Paper Formatting'
];

interface ContactSectionProps {
  preselectedService?: string;
  preselectedServiceType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedService, 
  preselectedServiceType 
}) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    email: '',
    phone: '',
    service: '',
    serviceType: '',
    budget: '',
    deadline: '',
    description: '',
    reference: '',
    contactPreference: 'Email'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ProjectInquiry | null>(null);

  // Sync props from service cards
  useEffect(() => {
    if (preselectedService) {
      const matchedService = OFFICIAL_SERVICES.find(
        (s) => s.displayName === preselectedService || s.title.toLowerCase() === preselectedService.toLowerCase()
      );

      if (matchedService) {
        setFormData((prev) => ({
          ...prev,
          service: matchedService.displayName,
          serviceType: preselectedServiceType || ''
        }));
        // Clear errors if any
        setErrors((prev) => {
          const next = { ...prev };
          delete next.service;
          if (preselectedServiceType) delete next.serviceType;
          return next;
        });
      }
    }
  }, [preselectedService, preselectedServiceType]);

  // Handle main service change with automatic subcategory reset
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setFormData((prev) => ({
      ...prev,
      service: selected,
      serviceType: '' // Reset the subcategory whenever the main service changes
    }));

    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: '' }));
    }
    if (errors.serviceType) {
      setErrors((prev) => ({ ...prev, serviceType: '' }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Get active service configuration
  const activeServiceDef = OFFICIAL_SERVICES.find(
    (s) => s.displayName === formData.service
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }
    if (!formData.service || formData.service === '') {
      newErrors.service = 'Please select a service category.';
    }
    if (!formData.serviceType || formData.serviceType === '') {
      newErrors.serviceType = 'Please select a specific service type.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project details or requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorElem = document.querySelector('.form-error-anchor');
      if (firstErrorElem) firstErrorElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Optional submission if backend access key exists
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (accessKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `✨ New Inquiry: ${formData.service} (${formData.serviceType}) from ${formData.name}`,
            from_name: 'Build With Us Studio',
            to_email: 'buildwithus0723@gmail.com',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            serviceType: formData.serviceType,
            budget: formData.budget || 'Flexible / To be discussed',
            deadline: formData.deadline || 'Flexible',
            contactPreference: formData.contactPreference,
            description: formData.description,
            reference: formData.reference || 'None provided'
          })
        }).catch((err) => console.warn('Network inquiry post notice:', err));
      }

      // Always show polished confirmation state
      setSubmittedInquiry(formData);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmittedInquiry(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0A12] border-t border-white/10 overflow-hidden">
      
      {/* RADIAL AMBIENT LIGHT */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[350px] bg-gradient-to-l from-[#00D2FF]/15 via-[#784BA0]/15 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#FF3CAC]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE HEADINGS & ICON-ONLY SOCIAL MEDIA BAR */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D2FF] mb-6 shadow-lg shadow-cyan-500/5">
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" /> START A PROJECT
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-2 uppercase">
                Have an Idea?
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-text tracking-tight leading-[1.1] mb-6 uppercase">
                Let's Build It.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
                Tell us what you need and we'll get back to you with the next steps.
              </p>

              {/* ICON-ONLY SOCIAL MEDIA ROW (Email, Instagram, Twitter/X, LinkedIn) */}
              <div className="mb-10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF]" /> Connect with us:
                </div>

                <div className="flex items-center gap-3.5">
                  {/* EMAIL ICON */}
                  <a
                    href="mailto:buildwithus0723@gmail.com?subject=Project%20Inquiry%20-%20Build%20With%20Us"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-[#00D2FF] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
                    title="Direct Email (buildwithus0723@gmail.com)"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  {/* INSTAGRAM ICON */}
                  <a
                    href="https://www.instagram.com/build_with_us.07?igsi=MXN5ZmdmdzYxaHJwYQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-pink-500/15 border border-white/10 hover:border-[#FF3CAC]/50 text-slate-300 hover:text-[#FF3CAC] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/20"
                    title="Instagram @build_with_us.07"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>

                  {/* TWITTER / X ICON */}
                  <a
                    href="https://x.com/BuildWithUs0723"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/50 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/10"
                    title="Twitter / X @BuildWithUs0723"
                    aria-label="Twitter / X"
                  >
                    <TwitterXIcon className="w-5 h-5" />
                  </a>

                  {/* LINKEDIN ICON */}
                  <a
                    href="https://www.linkedin.com/in/build-with-us-undefined-71b300430/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-blue-600/15 border border-white/10 hover:border-blue-400/50 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/20"
                    title="LinkedIn (Build With Us)"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#05050A] border border-white/10 text-xs text-slate-400">
              <span className="text-white font-bold block mb-1">Direct Founder Response</span>
              Every inquiry is reviewed personally by our team. You will receive next steps and a customized proposal within 2 to 4 hours.
            </div>
          </div>

          {/* RIGHT SIDE DYNAMIC ENQUIRY FORM */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl shadow-cyan-950/30">
            <h3 className="text-2xl font-bold text-white mb-2">Project Enquiry Form</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill in your requirements below to get started. All fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* DEPENDENT DROPDOWNS ROW */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* 1ST DROPDOWN: SERVICE * */}
                <div>
                  <label 
                    htmlFor="service-select" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    SERVICE *
                  </label>
                  <div className="relative">
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleServiceChange}
                      className={`w-full appearance-none px-4 py-3.5 pr-10 rounded-xl bg-[#05050A] text-sm text-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 cursor-pointer ${
                        errors.service ? 'border-2 border-rose-500' : 'border border-white/15 hover:border-white/30'
                      }`}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A0A12] text-white py-1">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.service && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 form-error-anchor">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.service}
                    </span>
                  )}
                </div>

                {/* 2ND DROPDOWN: SERVICE TYPE * (DEPENDENT) */}
                <div>
                  <label 
                    htmlFor="service-type-select" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    SERVICE TYPE *
                  </label>
                  <div className="relative">
                    <select
                      id="service-type-select"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      disabled={!formData.service}
                      className={`w-full appearance-none px-4 py-3.5 pr-10 rounded-xl bg-[#05050A] text-sm transition-all duration-200 ${
                        !formData.service
                          ? 'opacity-50 cursor-not-allowed border border-white/10 text-slate-500'
                          : errors.serviceType
                          ? 'border-2 border-rose-500 text-white cursor-pointer'
                          : 'border border-white/15 hover:border-white/30 text-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 cursor-pointer'
                      }`}
                    >
                      {!formData.service ? (
                        <option value="">Select a service first</option>
                      ) : (
                        <>
                          <option value="" disabled>Select a service type</option>
                          {activeServiceDef?.subcategoryGroups.map((group, gIdx) => {
                            if (group.groupName) {
                              return (
                                <optgroup key={gIdx} label={group.groupName} className="bg-[#10101C] text-slate-300 font-bold">
                                  {group.subcategories.map((sub, sIdx) => (
                                    <option key={sIdx} value={sub} className="bg-[#0A0A12] text-white font-normal py-1">
                                      {sub}
                                    </option>
                                  ))}
                                </optgroup>
                              );
                            }
                            return group.subcategories.map((sub, sIdx) => (
                              <option key={sIdx} value={sub} className="bg-[#0A0A12] text-white py-1">
                                {sub}
                              </option>
                            ));
                          })}
                        </>
                      )}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.serviceType && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 form-error-anchor">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.serviceType}
                    </span>
                  )}
                </div>

              </div>

              {/* NAME & EMAIL ROW */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="client-name" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05050A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 ${
                      errors.name ? 'border-2 border-rose-500' : 'border border-white/15 hover:border-white/30'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="client-email" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    EMAIL *
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05050A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 ${
                      errors.email ? 'border-2 border-rose-500' : 'border border-white/15 hover:border-white/30'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* PHONE & CONTACT PREFERENCE ROW */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="client-phone" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    PHONE NUMBER *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#05050A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 ${
                      errors.phone ? 'border-2 border-rose-500' : 'border border-white/15 hover:border-white/30'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="client-pref" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    CONTACT PREFERENCE
                  </label>
                  <div className="relative">
                    <select
                      id="client-pref"
                      name="contactPreference"
                      value={formData.contactPreference}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl bg-[#05050A] border border-white/15 hover:border-white/30 text-sm text-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 cursor-pointer"
                    >
                      <option value="Email" className="bg-[#0A0A12] text-white">Email</option>
                      <option value="Phone Call" className="bg-[#0A0A12] text-white">Phone Call</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT DETAILS * */}
              <div>
                <label 
                  htmlFor="client-details" 
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  PROJECT DETAILS *
                </label>
                <textarea
                  id="client-details"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what you need: key objectives, pages/sections, preferred colors, content details, or any special requests..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#05050A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 ${
                    errors.description ? 'border-2 border-rose-500' : 'border border-white/15 hover:border-white/30'
                  }`}
                />
                {errors.description && (
                  <span className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.description}
                  </span>
                )}
              </div>

              {/* DEADLINE & BUDGET RANGE */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="client-deadline" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    DEADLINE
                  </label>
                  <input
                    id="client-deadline"
                    type="text"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    placeholder="e.g. Next week, Urgent 24-48h, Specific date"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05050A] border border-white/15 hover:border-white/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="client-budget" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    BUDGET RANGE
                  </label>
                  <div className="relative">
                    <select
                      id="client-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl bg-[#05050A] border border-white/15 hover:border-white/30 text-sm text-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200 cursor-pointer"
                    >
                      <option value="" className="bg-[#0A0A12] text-slate-400">Select budget expectation</option>
                      <option value="Flexible / Discuss with team" className="bg-[#0A0A12] text-white">Flexible / Discuss with team</option>
                      <option value="Under ₹1,000" className="bg-[#0A0A12] text-white">Under ₹1,000</option>
                      <option value="₹1,000 – ₹3,000" className="bg-[#0A0A12] text-white">₹1,000 – ₹3,000</option>
                      <option value="₹3,000 – ₹5,000" className="bg-[#0A0A12] text-white">₹3,000 – ₹5,000</option>
                      <option value="₹5,000 – ₹10,000" className="bg-[#0A0A12] text-white">₹5,000 – ₹10,000</option>
                      <option value="₹10,000+" className="bg-[#0A0A12] text-white">₹10,000+</option>
                      <option value="Custom Scope" className="bg-[#0A0A12] text-white">Custom Scope</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* REFERENCE / PROJECT LINK */}
              <div>
                <label 
                  htmlFor="client-ref" 
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  REFERENCE / PROJECT LINK
                </label>
                <input
                  id="client-ref"
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  placeholder="Drive link, sample website, Figma file, PDF draft, etc."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#05050A] border border-white/15 hover:border-white/30 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all duration-200"
                />
              </div>

              {/* CTA BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-1 text-center">
                <p className="text-[11px] text-slate-400">
                  Prefer email directly? Write to us at{' '}
                  <a 
                    href="mailto:buildwithus0723@gmail.com" 
                    className="text-[#00D2FF] hover:underline font-medium"
                  >
                    buildwithus0723@gmail.com
                  </a>
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* SUCCESS CONFIRMATION MODAL */}
      <InquirySuccessModal
        inquiry={submittedInquiry}
        onClose={() => setSubmittedInquiry(null)}
      />
    </section>
  );
};
