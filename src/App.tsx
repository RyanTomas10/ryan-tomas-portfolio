import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { FeaturedWork } from './components/FeaturedWork';
import { CapabilitiesAndTools } from './components/CapabilitiesAndTools';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to true (matches reference design dark aesthetic)
    const saved = localStorage.getItem('portfolio-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className =
        'bg-[#0B0F17] text-slate-100 antialiased selection:bg-amber-500 selection:text-black min-h-screen';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className =
        'bg-[#F8FAFC] text-slate-900 antialiased selection:bg-amber-500 selection:text-black min-h-screen';
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 relative overflow-x-hidden ${
        darkMode ? 'dark bg-[#0B0F17] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* Subtle Atmospheric Ambient Background Gradients (prevents emptiness) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {darkMode ? (
          <>
            {/* Dark mode: warm obsidian & amber ambient mesh */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent blur-[120px]" />
            <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-amber-500/8 via-amber-400/4 to-transparent blur-[140px]" />
            <div className="absolute top-2/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-600/6 via-slate-800/20 to-transparent blur-[130px]" />
            <div className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-amber-500/8 to-transparent blur-[150px]" />
            {/* Fine architectural dot grid for subtle texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.7) 1px, transparent 1px)`,
                backgroundSize: '36px 36px',
              }}
            />
          </>
        ) : (
          <>
            {/* Light mode: crisp ivory & soft amber warmth */}
            <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-amber-200/40 via-amber-100/20 to-transparent blur-[100px]" />
            <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-slate-200/60 via-amber-100/30 to-transparent blur-[120px]" />
            <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-amber-200/30 to-transparent blur-[130px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.6) 1px, transparent 1px)`,
                backgroundSize: '36px 36px',
              }}
            />
          </>
        )}
      </div>

      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
        />

        {/* 4-Metric Ribbon */}
        <StatsRibbon darkMode={darkMode} />

        {/* Featured Projects / Services Showcase (Next 4 images) */}
        <FeaturedWork
          darkMode={darkMode}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Core Capabilities, Tools & Education Split */}
        <CapabilitiesAndTools darkMode={darkMode} />

        {/* Professional Experience Section */}
        <ExperienceTimeline darkMode={darkMode} />

        {/* Systematic 5-Step Process */}
        <ProcessSection darkMode={darkMode} />

        {/* Contact Banner & Interactive Form */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} onOpenResume={handleOpenResume} />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        darkMode={darkMode}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Dedicated CV / Resume Modal (Download CV button) */}
      <ResumeModal
        isOpen={isResumeOpen}
        darkMode={darkMode}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
