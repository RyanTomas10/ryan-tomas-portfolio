import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedWorkProps {
  darkMode: boolean;
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ darkMode, onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'contractor', label: 'Contractor & Local' },
    { id: 'funnels', label: 'Acquisition Funnels' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'real-estate') return proj.id === 'abelam-realty' || proj.id === 'coastal-va-homes';
    if (filter === 'contractor') return proj.id === 'chris-concrete';
    if (filter === 'funnels') return proj.id === 'homechef-academy';
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Reference Image 1) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-semibold tracking-widest uppercase font-mono ${
                  darkMode ? 'text-amber-400' : 'text-amber-700'
                }`}
              >
                GHL EXPERTISE & CLIENT SOLUTIONS
              </span>
            </div>
            <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl uppercase">
              Featured Projects
            </h2>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            className={`flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 ${
                  filter === cat.id
                    ? darkMode
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'bg-white text-slate-900 shadow-sm font-bold'
                    : darkMode
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid (2x2 on large screens, matching reference card styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer rounded-3xl border overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col ${
                darkMode
                  ? 'bg-[#111622] border-slate-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5'
                  : 'bg-white border-slate-200 hover:border-amber-500/50 hover:shadow-lg shadow-slate-900/5'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                />

                {/* Ambient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-45 transition-opacity duration-500" />

                {/* Floating Circle Button (Matching Reference Image 1) */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-slate-950/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:scale-105 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed tags with typographic separator */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium mb-3 text-amber-500 dark:text-amber-400">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>GHL Architecture</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Exact PDF Copy */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Deliverables summary & View Details Link */}
                <div
                  className={`pt-5 border-t flex items-center justify-between gap-4 ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{project.deliverables.length} Key Deliverables</span>
                  </div>

                  <span className="text-xs font-bold font-mono tracking-wider text-amber-500 group-hover:underline inline-flex items-center gap-1">
                    VIEW CASE STUDY
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
