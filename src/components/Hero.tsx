import React, { useState } from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { triggerDirectResumeDownload } from '../utils/resumeDownload';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume, onOpenContact }) => {
  const [heroImgSrc, setHeroImgSrc] = useState(PERSONAL_INFO.heroImage);
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none radial-glow opacity-60 blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full pointer-events-none bg-amber-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono ${
                  darkMode ? 'text-amber-400' : 'text-amber-700'
                }`}
              >
                {PERSONAL_INFO.headlineTop}
              </span>
            </div>

            {/* Oversized Impact Headline */}
            <h1 className="font-display font-black tracking-tighter leading-[0.92] uppercase mb-6 text-5xl sm:text-7xl xl:text-8xl">
              <span
                className={`block transition-colors duration-200 ${
                  darkMode
                    ? 'text-white drop-shadow-[0_4px_28px_rgba(255,255,255,0.18)]'
                    : 'text-slate-950'
                }`}
              >
                {PERSONAL_INFO.headlineMain}
              </span>
              <span
                className={`block text-transparent bg-clip-text ${
                  darkMode
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_2px_16px_rgba(245,158,11,0.25)]'
                    : 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700'
                }`}
              >
                {PERSONAL_INFO.headlineSub}
              </span>
            </h1>

            {/* Exact Resume Copy Summary */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 shadow-lg active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  darkMode
                    ? 'bg-white text-slate-950 hover:bg-slate-100 shadow-white/10'
                    : 'bg-slate-950 text-white hover:bg-slate-800 shadow-slate-900/20'
                }`}
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Dedicated Download Resume Button */}
              <button
                onClick={() => triggerDirectResumeDownload('Ryan_Tomas_Resume.pdf')}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 border active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                }`}
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait with Glowing Arc Ring & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-md">
              {/* Decorative Geometric Arc Contour (matches Reference Image 1) */}
              <div
                className={`absolute -inset-4 sm:-inset-6 rounded-full border border-dashed pointer-events-none transition-opacity ${
                  darkMode ? 'border-amber-400/20' : 'border-amber-600/20'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 75%, 25% 100%, 0 70%)',
                }}
              />
              <div
                className={`absolute -inset-8 sm:-inset-10 rounded-full border pointer-events-none ${
                  darkMode ? 'border-slate-700/40' : 'border-slate-200'
                }`}
                style={{
                  clipPath: 'polygon(20% 0, 100% 0, 100% 90%, 60% 100%, 0 50%)',
                }}
              />

              {/* Floating Sparkle Icon */}
              <div
                className={`absolute -top-3 right-8 w-8 h-8 rounded-full flex items-center justify-center border shadow-md animate-pulse ${
                  darkMode
                    ? 'bg-slate-800/90 border-slate-700 text-amber-400'
                    : 'bg-white border-slate-200 text-amber-600'
                }`}
              >
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Hero Image Container */}
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border ${
                  darkMode
                    ? 'bg-gradient-to-b from-slate-800/80 to-slate-900/90 border-slate-700/70 shadow-amber-500/5'
                    : 'bg-white border-slate-200 shadow-slate-900/10'
                }`}
              >
                {/* Visual Glow Behind Head */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

                <img
                  src={heroImgSrc}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (heroImgSrc !== PERSONAL_INFO.heroImageFallback) {
                      setHeroImgSrc(PERSONAL_INFO.heroImageFallback);
                    }
                  }}
                  className="w-full h-auto object-cover object-top aspect-3/4 max-h-[520px] transition-transform duration-700 ease-out hover:scale-[1.008]"
                />

                {/* Subtle Gradient Shadow Scrim at bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t pointer-events-none ${
                    darkMode ? 'from-[#0B0F17]/80 to-transparent' : 'from-slate-900/40 to-transparent'
                  }`}
                />
              </div>

              {/* Floating Status Badge (Matching Reference Image 1) */}
              <button
                onClick={onOpenContact}
                className={`absolute -bottom-5 right-2 sm:right-6 px-4 py-3 rounded-2xl border shadow-xl flex items-center gap-3 backdrop-blur-md transition-all duration-200 hover:scale-105 group text-left ${
                  darkMode
                    ? 'bg-slate-900/95 border-amber-500/30 text-slate-100 hover:border-amber-400'
                    : 'bg-white/95 border-amber-500/40 text-slate-900 hover:border-amber-500 shadow-slate-900/15'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-wider uppercase font-mono text-slate-400">
                    Available For
                  </span>
                  <div className="flex items-center gap-1 font-bold text-xs sm:text-sm tracking-tight text-amber-500 group-hover:text-amber-400">
                    <span>FREELANCE PROJECTS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
