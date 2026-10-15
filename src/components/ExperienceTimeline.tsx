import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Globe } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

interface ExperienceTimelineProps {
  darkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <span
            className={`text-xs font-semibold tracking-widest uppercase font-mono mb-2 ${
              darkMode ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            CAREER & CLIENT PARTNERSHIPS
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl uppercase">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-10 transition-all duration-300 relative overflow-hidden ${
                darkMode
                  ? 'bg-[#111622] border-slate-800'
                  : 'bg-white border-slate-200 shadow-slate-900/5'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700/50 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      darkMode
                        ? 'bg-amber-400/10 text-amber-400'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-semibold">
                        <Globe className="w-3.5 h-3.5" />
                        {exp.employmentType}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider self-start lg:self-auto ${
                    darkMode
                      ? 'bg-slate-800/80 text-amber-400 border border-slate-700'
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Exact bullets from PDF */}
              <ul className="space-y-4">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
