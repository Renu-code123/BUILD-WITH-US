import React from 'react';
import { CheckCircle2, X, Clock, Copy, Check, Mail, ArrowRight } from 'lucide-react';
import { ProjectInquiry } from '../../types';

interface InquirySuccessModalProps {
  inquiry: ProjectInquiry | null;
  onClose: () => void;
}

export const InquirySuccessModal: React.FC<InquirySuccessModalProps> = ({ inquiry, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!inquiry) return null;

  const refId = `BWU-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleCopyRef = () => {
    navigator.clipboard.writeText(refId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailSubject = encodeURIComponent(`Project Inquiry [Ref: ${refId}]: ${inquiry.service} - ${inquiry.name}`);
  const emailBody = encodeURIComponent(
    `Hello Build With Us Team,\n\nI have submitted an enquiry:\n- Reference ID: ${refId}\n- Name: ${inquiry.name}\n- Service: ${inquiry.service}\n- Service Type: ${inquiry.serviceType}\n- Phone: ${inquiry.phone}\n- Preferred Contact: ${inquiry.contactPreference}\n\nProject Details:\n${inquiry.description}\n\nReference Link: ${inquiry.reference || 'None'}`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#0A0A12] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* RADIAL SUCCESS GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00D2FF] mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-[#00D2FF] border border-cyan-500/20 mb-3 inline-block">
          ENQUIRY RECEIVED.
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Thanks for reaching out to Build With Us.
        </h3>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          We'll review your requirements and get back to you via your preferred contact channel (<span className="text-white font-semibold">{inquiry.contactPreference}</span>).
        </p>

        {/* ENQUIRY DETAILS SUMMARY */}
        <div className="p-4 rounded-2xl bg-[#10101C] border border-white/10 text-left space-y-2 mb-6 text-xs text-slate-300">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-slate-400 font-medium">Reference ID:</span>
            <div className="flex items-center gap-1.5 font-mono text-white font-bold">
              <span>{refId}</span>
              <button 
                onClick={handleCopyRef} 
                className="p-1 hover:bg-white/10 rounded transition-colors text-slate-400 hover:text-white"
                title="Copy reference"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Service:</span>
            <span className="text-white font-semibold">{inquiry.service}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Service Type:</span>
            <span className="text-[#00D2FF] font-semibold">{inquiry.serviceType}</span>
          </div>

          {inquiry.budget && (
            <div className="flex justify-between">
              <span className="text-slate-400">Budget:</span>
              <span className="text-slate-200">{inquiry.budget}</span>
            </div>
          )}

          {inquiry.deadline && (
            <div className="flex justify-between">
              <span className="text-slate-400">Deadline:</span>
              <span className="text-slate-200">{inquiry.deadline}</span>
            </div>
          )}
        </div>

        {/* DIRECT ACTION BUTTONS */}
        <div className="space-y-3">
          {/* OPEN IN GMAIL WEB (Doesn't open Outlook desktop app) */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=buildwithus0723@gmail.com&su=${emailSubject}&body=${emailBody}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00D2FF] via-[#784BA0] to-[#FF3CAC] text-white font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2.5 active:scale-95 transition-all hover:opacity-95"
          >
            <Mail className="w-4 h-4" />
            <span>Open in Gmail (Web Browser)</span>
          </a>

          {/* FALLBACK / COPY DETAILS */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRef}
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs border border-white/10 transition-colors flex items-center justify-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Reference Copied!' : 'Copy Reference ID'}</span>
            </button>

            <a
              href={`mailto:buildwithus0723@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 text-xs border border-white/10 transition-colors"
              title="Open in default system email client (Outlook, Apple Mail, etc.)"
            >
              Other Mail App
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 active:scale-95 transition-all"
          >
            Done & Close
          </button>
        </div>

      </div>
    </div>
  );
};
