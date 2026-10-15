import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  darkMode: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  darkMode,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto transition-all duration-300 max-h-[90vh] flex flex-col ${
          darkMode
            ? 'bg-[#0E131F] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar with Title and Close Button */}
        <div
          className={`px-6 sm:px-8 py-5 border-b flex items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md ${
            darkMode ? 'bg-[#0E131F]/90 border-slate-800' : 'bg-white/90 border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-0.5">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`p-2.5 rounded-full border transition-colors ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* High-Resolution Project Showcase Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-800/40 shadow-xl bg-slate-950 aspect-16/9 relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Key Metrics Banner */}
          <div
            className={`rounded-2xl border p-5 grid grid-cols-3 gap-4 text-center ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display font-black text-2xl sm:text-3xl text-amber-500 tabular-nums">
                  {metric.value}
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Project Summary Copy from PDF */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500 mb-2">
              PROJECT OVERVIEW
            </h4>
            <p
              className={`text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h5 className="font-display font-bold text-base mb-2 flex items-center gap-2 text-rose-500">
                <span>The Challenge</span>
              </h5>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {project.challenge}
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h5 className="font-display font-bold text-base mb-2 flex items-center gap-2 text-emerald-500">
                <span>The GHL Solution</span>
              </h5>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500 mb-3">
              KEY DELIVERABLES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs sm:text-sm ${
                    darkMode
                      ? 'bg-slate-900/30 border-slate-800 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-500 mb-3">
              TECH STACK & INTEGRATIONS
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border ${
                    darkMode
                      ? 'bg-slate-800/60 border-slate-700 text-amber-400'
                      : 'bg-slate-100 border-slate-200 text-amber-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div
          className={`p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <span className="text-xs text-slate-400 text-center sm:text-left">
            Looking for a similar high-converting architecture for your business?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Build A Similar Funnel</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
