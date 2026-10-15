import React from 'react';
import { Sparkles, Layers, Trophy, Globe2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';

interface StatsRibbonProps {
  darkMode: boolean;
}

export const StatsRibbon: React.FC<StatsRibbonProps> = ({ darkMode }) => {
  const icons = [Sparkles, Layers, Trophy, Globe2];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 ${
            darkMode
              ? 'bg-[#111622]/90 border-slate-800/90 shadow-black/40'
              : 'bg-white/95 border-slate-200/90 shadow-slate-900/5'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-700/40 dark:divide-slate-800">
            {STATS.map((stat, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                    idx > 1 ? 'pt-6 lg:pt-4' : ''
                  }`}
                >
                  <div
                    className={`mb-3 p-2 rounded-xl inline-flex items-center justify-center ${
                      darkMode
                        ? 'bg-amber-400/10 text-amber-400'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight tabular-nums mb-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`font-mono text-xs sm:text-xs font-bold tracking-wider uppercase mb-0.5 ${
                      darkMode ? 'text-amber-400' : 'text-amber-700'
                    }`}
                  >
                    {stat.label}
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {stat.sublabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
