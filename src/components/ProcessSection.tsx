import React from 'react';
import { ArrowRight, Compass, PencilRuler, Hammer, Cpu, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessSectionProps {
  darkMode: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ darkMode }) => {
  const stepIcons = [Compass, PencilRuler, Hammer, Cpu, Rocket];

  return (
    <section id="process" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <span
            className={`text-xs font-semibold tracking-widest uppercase font-mono mb-2 ${
              darkMode ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            SYSTEMATIC IMPLEMENTATION
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl uppercase">
            My Workflow Process
          </h2>
        </div>

        {/* 5-step container matching Reference Image 1 */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 transition-all duration-300 ${
            darkMode
              ? 'bg-[#111622] border-slate-800'
              : 'bg-white border-slate-200 shadow-slate-900/5'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div key={step.number} className="flex flex-col relative group">
                  {/* Step Number & Line */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs tracking-wider text-amber-500">
                      {step.number}
                    </span>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-600 dark:text-slate-700" />
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                      darkMode
                        ? 'bg-slate-800 text-amber-400'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Deliverables mini tags */}
                  <div className="mt-auto pt-3 border-t border-slate-800/40 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {step.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          darkMode
                            ? 'bg-slate-800/60 text-slate-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
