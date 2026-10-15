import React, { useEffect } from 'react';
import { X, Printer, Download, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, STATS, FEATURED_PROJECTS, CORE_CAPABILITIES, EDUCATION, EXPERIENCE } from '../data/portfolioData';
import { triggerDirectResumeDownload } from '../utils/resumeDownload';

interface ResumeModalProps {
  isOpen: boolean;
  darkMode: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, darkMode, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const fullText = `
RYAN TOMAS
GOHIGHLEVEL (GHL) SPECIALIST & AUTOMATION ENGINEER
Guiguinto, Central Luzon, PH
Email: ${PERSONAL_INFO.email} | WhatsApp: ${PERSONAL_INFO.whatsapp}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

CORE COMPETENCIES & TECHNICAL SKILLS
- Platforms & Builders: GHL Expert, Funnel & Website Builder, CRM Infrastructure, Custom Domains, Subdomains & Webhooks.
- Automation & Integrations: Multi-channel Workflows (Email/SMS), Zapier, Typeform, Calendly, API Integrations.
- Web Development: HTML, CSS, Custom UI Design, Responsive Layouts, Performance Optimization.
- Operations & Routing: DNS Setup, Pipeline Management, Lead Scoring, Lead-Routing Workflows.

PROFESSIONAL EXPERIENCE
GoHighLevel (GHL) Specialist & Automation Engineer | Remote (Supporting US & Canada Founders & CEOs) (2024 – Present)
${EXPERIENCE[0].highlights.map((h) => `- ${h}`).join('\n')}

FEATURED PROJECTS & CLIENT SOLUTIONS
${FEATURED_PROJECTS.map((p) => `${p.title}: ${p.description}`).join('\n\n')}

EDUCATION
Bachelor of Science in Computer Science | Systems Technology Institute (STI)
Technical Foundation - Covering software principles, logic structures, database organization, and system engineering principles.
`;
    navigator.clipboard.writeText(fullText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto transition-all duration-300 max-h-[92vh] flex flex-col ${
          darkMode ? 'bg-[#0E131F] border-slate-800' : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`px-6 sm:px-8 py-4 border-b flex items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md no-print ${
            darkMode ? 'bg-[#0E131F]/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Official Resume &amp; CV Overview
            </span>
            <span className="text-xs font-mono text-amber-500 hidden sm:inline">
              · 1-Page Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Action: Directly Download Actual Resume PDF to Local Computer */}
            <button
              onClick={() => triggerDirectResumeDownload('Ryan_Tomas_Resume.pdf')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wide bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md active:scale-98"
              title="Download actual resume file to your local computer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                darkMode
                  ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                darkMode
                  ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
              title="Copy Resume Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-700 bg-slate-800 text-slate-400 hover:text-white'
                  : 'border-slate-300 bg-white text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Representation (Matches the PDF exact layout) */}
        <div className="p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-200 print:shadow-none print:border-none print:p-0">
            {/* Top Header */}
            <div className="border-b-2 border-slate-900 pb-5 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div>
                  <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-slate-950 uppercase">
                    RYAN TOMAS
                  </h1>
                  <h2 className="text-xs sm:text-sm font-bold font-mono text-blue-700 uppercase tracking-wider mt-0.5">
                    GOHIGHLEVEL (GHL) SPECIALIST &amp; AUTOMATION ENGINEER
                  </h2>
                </div>
                <div className="text-right text-xs font-mono text-slate-600 sm:self-start">
                  Guiguinto, Central Luzon, PH
                </div>
              </div>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-2 border-t border-slate-200 font-sans">
                <span>
                  <strong className="text-slate-900">Email:</strong> {PERSONAL_INFO.email}
                </span>
                <span>·</span>
                <span>
                  <strong className="text-slate-900">WhatsApp:</strong> {PERSONAL_INFO.whatsapp}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-6">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 text-justify">
                {PERSONAL_INFO.summary}
              </p>
            </section>

            {/* Core Competencies & Technical Skills */}
            <section className="mb-6">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                CORE COMPETENCIES &amp; TECHNICAL SKILLS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-[13px] text-slate-700">
                <div>
                  <strong className="text-slate-950">Platforms &amp; Builders:</strong> GHL Expert, Funnel &amp; Website Builder, CRM Infrastructure, Custom Domains, Subdomains &amp; Webhooks.
                </div>
                <div>
                  <strong className="text-slate-950">Automation &amp; Integrations:</strong> Multi-channel Workflows (Email/SMS), Zapier, Typeform, Calendly, API Integrations.
                </div>
                <div>
                  <strong className="text-slate-950">Web Development:</strong> HTML, CSS, Custom UI Design, Responsive Layouts, Performance Optimization.
                </div>
                <div>
                  <strong className="text-slate-950">Operations &amp; Routing:</strong> DNS Setup, Pipeline Management, Lead Scoring, Lead-Routing Workflows.
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                PROFESSIONAL EXPERIENCE
              </h3>
              <div className="mb-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <span className="font-bold text-xs sm:text-[13px] text-slate-950">
                    GoHighLevel (GHL) Specialist &amp; Automation Engineer | Remote (Supporting US &amp; Canada Founders &amp; CEOs)
                  </span>
                  <span className="text-xs font-mono text-slate-600 italic whitespace-nowrap">
                    2024 – Present
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  {EXPERIENCE[0].highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Featured Projects & Client Solutions */}
            <section className="mb-6">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                FEATURED PROJECTS &amp; CLIENT SOLUTIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px]">
                {FEATURED_PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <h4 className="font-bold text-slate-950 mb-1">{proj.title}</h4>
                    <p className="text-slate-700 text-[12px] leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                EDUCATION
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <span className="font-bold text-xs sm:text-[13px] text-slate-950">
                  {EDUCATION.degree} | {EDUCATION.institution}
                </span>
                <span className="text-xs font-mono text-slate-600 italic">
                  {EDUCATION.subtitle}
                </span>
              </div>
              <p className="text-xs text-slate-700">
                {EDUCATION.description}
              </p>
            </section>

            {/* Document Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Ryan Tomas — Resume &amp; Portfolio Overview</span>
              <span>Page 1 of 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
