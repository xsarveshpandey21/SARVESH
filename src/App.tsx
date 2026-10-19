import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorFollower } from './components/CursorFollower';
import { IntroLoader } from './components/IntroLoader';
import { Petals } from './components/Petals';
import { HeroCover } from './sections/HeroCover';
import { AboutSpread } from './sections/AboutSpread';
import { SkillsLabSpread } from './sections/SkillsLabSpread';
import { ExperienceSpread } from './sections/ExperienceSpread';
import { GithubProjectsSpread } from './sections/GithubProjectsSpread';
import { LiveDeploymentsSpread } from './sections/LiveDeploymentsSpread';
import { EducationSpread } from './sections/EducationSpread';
import { CertificationsSpread } from './sections/CertificationsSpread';
import { ContactSpread } from './sections/ContactSpread';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  // Intro Loader State (skippable, 1.6s max duration)
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Dark mode state with localStorage persistence (Default: false, off by default)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('sp_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return false;
  });

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('sp_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('sp_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Lenis Smooth Scrolling setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-botanical-canvas text-ink-900 dark:bg-darkgreen dark:text-cream-50 transition-colors duration-500 overflow-x-hidden font-sans">
      {/* Intro Opening Sequence (Skippable) */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* Tactile Paper Grain Noise Overlay at ~3% */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-noise opacity-[0.035] dark:opacity-[0.05]" />

      {/* Floating Petals/Leaves drifting softly across background */}
      <Petals count={14} className="z-10" />

      {/* Top Terracotta Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Desktop Cursor Follower */}
      <CursorFollower />

      {/* Sticky Glass-Blur Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Continuous Editorial Lookbook Spreads */}
      <main id="main-content" className="relative z-20">
        {/* Cover Stage & 2x3 Table of Contents */}
        <HeroCover onNavigateSection={handleNavigateSection} />

        {/* Section 01: About Me (Blush Paper Spread) */}
        <AboutSpread />

        {/* Section 02: Skills & Data Science Lab (Sage Paper Spread) */}
        <SkillsLabSpread />

        {/* Section 03: Industry Experience Timeline (Cream + Sand Paper Spread) */}
        <ExperienceSpread />

        {/* Section 04: Curated ML & Live GitHub Code (Blush Paper Spread) */}
        <GithubProjectsSpread />

        {/* Section 05: Live Deployments & Vercel Fleet (Sage Paper Spread) */}
        <LiveDeploymentsSpread />

        {/* Section 06: Academia & Varsity Honors (Sand Paper Spread) */}
        <EducationSpread />

        {/* Section 07: Industry Certifications Marquee (Sage-Light Paper Spread) */}
        <CertificationsSpread />

        {/* Section 08: Contact Dossier & Dispatch (Blush Paper Spread, Back Cover) */}
        <ContactSpread />
      </main>

      {/* Editorial Footer */}
      <Footer onReplayIntro={() => setShowIntro(true)} />
    </div>
  );
};

export default App;
