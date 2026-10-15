import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerDirectResumeDownload } from '../utils/resumeDownload';
import { ArrowUp, Mail, MessageSquare, Globe } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        darkMode ? 'bg-[#080B11] border-slate-900 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span
              className={`font-display font-black text-sm tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-xs">
              GoHighLevel Specialist &amp; Automation Engineer
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-xs">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </span>
          </div>

          {/* Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-amber-500 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => triggerDirectResumeDownload('Ryan_Tomas_Resume.pdf')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              CV Overview
            </button>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs'
              }`}
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
