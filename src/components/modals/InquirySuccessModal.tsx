import React from 'react';
import { CheckCircle2, X, MessageSquare, Clock, Copy, Check } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0A0A12] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* RADIAL SUCCESS GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/20 blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 inline-block">
          REQUEST RECEIVED
        </span>

        <h3 className="text-2xl font-extrabold text-white mb-2">
          Project Inquiry Submitted!
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Thank you, <span className="text-white font-bold">{inquiry.name}</span>. We've received your request for <span className="text-[#FF3CAC] font-semibold">{inquiry.service}</span>.
        </p>

        {/* REFERENCE CODE STRIP */}
        <div className="p-3 rounded-xl bg-[#10101C] border border-white/10 flex items-center justify-between gap-2 mb-6">
          <div className="text-left">
            <span className="text-[10px] text-slate-400 block uppercase">Reference ID</span>
            <span className="text-xs font-mono font-bold text-white">{refId}</span>
          </div>
          <button
            onClick={handleCopyRef}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* NEXT STEPS */}
        <div className="text-left p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 mb-6">
          <div className="flex items-center gap-2 font-bold text-white">
            <Clock className="w-4 h-4 text-[#FF3CAC]" /> What Happens Next:
          </div>
          <p>1. Our founders will review your requirements within 2 to 4 hours.</p>
          <p>2. We will contact you via WhatsApp ({inquiry.phone || inquiry.email}) with an initial plan & quote.</p>
          <p>3. Once approved, project creation starts immediately!</p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white font-bold text-sm shadow-lg shadow-pink-500/20 active:scale-95 transition-transform"
        >
          Got It, Thanks!
        </button>

      </div>
    </div>
  );
};
