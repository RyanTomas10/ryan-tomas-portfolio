import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerDirectResumeDownload } from '../utils/resumeDownload';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 border-b ${
        darkMode
          ? 'bg-[#0B0F17]/90 border-slate-800/80 text-slate-100'
          : 'bg-white/90 border-slate-200/90 text-slate-900 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark / Monogram */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          aria-label="Ryan Tomas Portfolio Home"
        >
          <span
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-base tracking-wider transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105'
                : 'bg-slate-900 text-amber-400 shadow-md group-hover:scale-105'
            }`}
          >
            {PERSONAL_INFO.monogram}
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base sm:text-lg">
              {PERSONAL_INFO.name}
            </span>
            <span
              className={`text-xs tracking-wider uppercase font-mono ${
                darkMode ? 'text-amber-400/90' : 'text-amber-700'
              }`}
            >
              GHL Specialist
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-200 ${
                darkMode
                  ? 'text-slate-300 hover:text-white after:bg-amber-400'
                  : 'text-slate-600 hover:text-slate-950 after:bg-amber-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Theme Toggle, Download CV, Let's Talk) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 ${
              darkMode
                ? 'bg-slate-800/80 text-amber-400 hover:bg-slate-700/80 border border-slate-700/60'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download CV Button (Guaranteed direct download of authentic resume PDF) */}
          <button
            onClick={() => triggerDirectResumeDownload('Ryan_Tomas_Resume.pdf')}
            className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-98 cursor-pointer ${
              darkMode
                ? 'border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 shadow-xs'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>Download CV</span>
          </button>

          {/* Let's Talk CTA */}
          <button
            onClick={onOpenContact}
            className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 ${
              darkMode
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/20 active:scale-98'
                : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-98'
            }`}
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl border transition-colors ${
              darkMode
                ? 'bg-slate-800/80 text-slate-200 border-slate-700'
                : 'bg-slate-100 text-slate-800 border-slate-300'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 transition-colors ${
            darkMode ? 'bg-[#0E131F] border-slate-800' : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  darkMode ? 'text-slate-200 hover:text-amber-400' : 'text-slate-800 hover:text-amber-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-700/50 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerDirectResumeDownload('Ryan_Tomas_Resume.pdf');
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border active:scale-98 cursor-pointer ${
                  darkMode
                    ? 'border-slate-700 bg-slate-800 text-slate-100'
                    : 'border-slate-300 bg-slate-50 text-slate-800'
                }`}
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Download CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
