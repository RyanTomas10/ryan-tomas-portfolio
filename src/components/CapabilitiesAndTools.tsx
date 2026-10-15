import React from 'react';
import {
  Workflow,
  Cpu,
  Code2,
  Sliders,
  GitBranch,
  CalendarCheck,
  GraduationCap,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { CORE_CAPABILITIES, TOOLS_AND_TECH, EDUCATION } from '../data/portfolioData';

interface CapabilitiesAndToolsProps {
  darkMode: boolean;
}

export const CapabilitiesAndTools: React.FC<CapabilitiesAndToolsProps> = ({ darkMode }) => {
  const capabilityIcons = [
    Workflow,
    Cpu,
    Code2,
    Sliders,
    GitBranch,
    CalendarCheck,
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <span
            className={`text-xs font-semibold tracking-widest uppercase font-mono mb-2 ${
              darkMode ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            TECHNICAL COMPETENCIES & STACK
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl uppercase">
            Core Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Container: Core Capabilities (Matching Reference Image 1) */}
          <div
            className={`lg:col-span-7 rounded-3xl border p-6 sm:p-10 transition-all duration-300 ${
              darkMode
                ? 'bg-[#111622] border-slate-800'
                : 'bg-white border-slate-200 shadow-slate-900/5'
            }`}
          >
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500 mb-8 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>CORE CAPABILITIES</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {CORE_CAPABILITIES.map((cap, idx) => {
                const Icon = capabilityIcons[idx % capabilityIcons.length];
                return (
                  <div key={cap.title} className="flex flex-col group">
                    <div
                      className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-colors ${
                        darkMode
                          ? 'bg-slate-800 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950'
                          : 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-display font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {cap.title}
                    </h4>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Container: Tools & Tech + Education (Matching Reference Image 1) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Box 1: Tools & Technologies */}
            <div
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111622] border-slate-800'
                  : 'bg-white border-slate-200 shadow-slate-900/5'
              }`}
            >
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500 mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>TOOLS & TECHNOLOGIES</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {TOOLS_AND_TECH.map((tool) => (
                  <div
                    key={tool.name}
                    className={`p-3 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {tool.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2: Certifications & Education (Matching Reference Image 1) */}
            <div
              className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-[#111622] border-slate-800'
                  : 'bg-white border-slate-200 shadow-slate-900/5'
              }`}
            >
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500 mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION & TECHNICAL FOUNDATION</span>
              </h3>

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    darkMode
                      ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {EDUCATION.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 my-1">
                    <span>{EDUCATION.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span>{EDUCATION.subtitle}</span>
                  </div>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mt-2 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {EDUCATION.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
