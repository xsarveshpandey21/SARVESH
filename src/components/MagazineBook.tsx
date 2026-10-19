import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  LayoutGrid,
  Scroll,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Mail,
  Download,
} from 'lucide-react';
import { CoverPage } from './CoverPage';
import { PolaroidStack } from './PolaroidStack';
import { TargetAnimation } from './TargetAnimation';
import { GithubShowcase } from './GithubShowcase';
import { DataScienceLab } from './DataScienceLab';
import { CountUp } from './CountUp';
import {
  EucalyptusSprig,
  OliveSprig,
  WildflowerSprig,
} from './BotanicalArt';
import {
  PERSONAL_INFO,
  STATS,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
} from '../data/portfolio';

interface MagazineBookProps {
  initialSpread?: number;
  activeSpread?: number;
  onSpreadChange?: (spread: number) => void;
}

export const MagazineBook: React.FC<MagazineBookProps> = ({
  initialSpread = 0,
  activeSpread,
  onSpreadChange,
}) => {
  const [internalSpread, setInternalSpread] = useState(initialSpread);
  const currentSpread = activeSpread !== undefined ? activeSpread : internalSpread;
  const [viewMode, setViewMode] = useState<'book' | 'grid' | 'scroll'>('book');
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const bookContainerRef = useRef<HTMLDivElement>(null);

  const setCurrentSpread = useCallback(
    (updater: number | ((prev: number) => number)) => {
      const nextVal = typeof updater === 'function' ? updater(currentSpread) : updater;
      if (onSpreadChange) {
        onSpreadChange(nextVal);
      }
      setInternalSpread(nextVal);
    },
    [currentSpread, onSpreadChange]
  );

  const totalSpreads = 9; // 0 to 8

  const spreadMetadata = [
    { title: 'Cover Lookbook', spreadNum: '01', theme: 'Split Color Blocks' },
    { title: 'Biography & Impact Stats', spreadNum: '02', theme: 'Blush Theme' },
    { title: 'Skills & Data Science Lab', spreadNum: '03', theme: 'Sage Theme' },
    { title: 'Industry Experience', spreadNum: '04', theme: 'Cream & Sand Theme' },
    { title: 'Featured ML Projects', spreadNum: '05', theme: 'Blush Theme' },
    { title: 'Live GitHub Repos & Telemetry', spreadNum: '06', theme: 'Sage Theme' },
    { title: 'Academia & Varsity Shooting', spreadNum: '07', theme: 'Sand Theme' },
    { title: 'Certifications Marquee', spreadNum: '08', theme: 'Sage-Light Theme' },
    { title: 'Contact Dossier & Inquiry', spreadNum: '09', theme: 'Blush Back Cover' },
  ];

  const handleNext = useCallback(() => {
    setCurrentSpread((prev) => {
      if (prev < totalSpreads - 1) {
        setFlipDirection('next');
        return prev + 1;
      }
      return prev;
    });
  }, [totalSpreads, setCurrentSpread]);

  const handlePrev = useCallback(() => {
    setCurrentSpread((prev) => {
      if (prev > 0) {
        setFlipDirection('prev');
        return prev - 1;
      }
      return prev;
    });
  }, [setCurrentSpread]);

  const handleJumpToSpread = (index: number) => {
    setFlipDirection(index > currentSpread ? 'next' : 'prev');
    setCurrentSpread(index);
    if (viewMode === 'grid') {
      setViewMode('book');
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Subtle Mouse Wheel Navigation with 650ms throttle
  useEffect(() => {
    const container = bookContainerRef.current;
    if (!container || viewMode !== 'book') return;

    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 45 && Math.abs(e.deltaX) < 45) return;
      const now = Date.now();
      if (now - lastScrollTime < 650) return;

      if (e.deltaY > 50 || e.deltaX > 50) {
        lastScrollTime = now;
        handleNext();
      } else if (e.deltaY < -50 || e.deltaX < -50) {
        lastScrollTime = now;
        handlePrev();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev, viewMode]);

  // Handle contact submission with paper plane and botanical confetti
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EBD3CB', '#B7C8BA', '#E6D5C3', '#C58B72', '#8FA89A'],
    });

    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section
      id="magazine-view"
      className="relative py-12 lg:py-20 bg-botanical-canvas text-ink-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Paper grain noise overlay across entire spread canvas */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      {/* Ambient Botanical Backdrop Silhouettes (Soft Cream & Sage Glows, NEVER brown!) */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-blush-100/60 dark:bg-darkgreen-surface/40 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-sage-100/70 dark:bg-darkgreen-border/30 filter blur-3xl pointer-events-none" />

      {/* Decorative Botanical Leaf Silhouettes floating faintly in canvas margin */}
      <div className="absolute top-12 left-4 hidden 2xl:block pointer-events-none opacity-40">
        <EucalyptusSprig className="w-44 h-80" swayDuration={11} />
      </div>
      <div className="absolute bottom-16 right-6 hidden 2xl:block pointer-events-none opacity-35">
        <OliveSprig className="w-48 h-64" swayDuration={10} delay={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= TOP CONTROL BAR ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-cream-50/90 dark:bg-darkgreen-surface/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-sand-200/80 shadow-editorial">
          {/* Spread Index Indicator */}
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-sm sm:text-base text-terracotta font-semibold">
              SPREAD {currentSpread + 1 < 10 ? `0${currentSpread + 1}` : currentSpread + 1} / 0{totalSpreads}
            </span>
            <span className="text-ink-700/30">•</span>
            <span className="text-xs uppercase tracking-magazine font-medium text-ink-700 dark:text-cream/90 hidden md:inline">
              {spreadMetadata[currentSpread].title}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-sand-200/60 text-ink-900 font-mono hidden lg:inline">
              {spreadMetadata[currentSpread].theme}
            </span>
          </div>

          {/* Center Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSpread === 0}
              aria-label="Previous spread"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-sand-200/30 hover:bg-sand-200/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-ink-900 dark:text-cream flex items-center gap-1 text-xs font-mono"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <span className="font-mono text-xs text-ink-700 dark:text-cream px-2 select-none">
              {currentSpread + 1} of {totalSpreads}
            </span>

            <button
              onClick={handleNext}
              disabled={currentSpread === totalSpreads - 1}
              aria-label="Next spread"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-sand-200/30 hover:bg-sand-200/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-ink-900 dark:text-cream flex items-center gap-1 text-xs font-mono"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-sand-200/30 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('book')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'book'
                  ? 'bg-ink-700 text-cream-50 shadow-sm dark:bg-cream dark:text-ink-900'
                  : 'text-ink-700 dark:text-cream/80 hover:text-ink-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Flip Book</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-ink-700 text-cream-50 shadow-sm dark:bg-cream dark:text-ink-900'
                  : 'text-ink-700 dark:text-cream/80 hover:text-ink-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>2x3 Grid</span>
            </button>

            <button
              onClick={() => setViewMode('scroll')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'scroll'
                  ? 'bg-ink-700 text-cream-50 shadow-sm dark:bg-cream dark:text-ink-900'
                  : 'text-ink-700 dark:text-cream/80 hover:text-ink-900'
              }`}
            >
              <Scroll className="w-3.5 h-3.5" />
              <span>Stacked</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW MODE 1: 3D OPEN SPREAD PRESENTATION ================= */}
        {viewMode === 'book' && (
          <div
            ref={bookContainerRef}
            className="relative perspective-[2200px] my-6 min-h-[580px] sm:min-h-[640px] flex items-center justify-center select-none"
          >
            {/* Prev / Next Floating Turn Buttons on Book Edges */}
            {currentSpread > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-4 z-40 p-3 rounded-full bg-cream-50/95 text-ink-900 shadow-2xl hover:scale-110 transition-transform hidden sm:flex items-center justify-center border border-sand-200"
                title="Turn to previous spread"
              >
                <ChevronLeft className="w-5 h-5 text-terracotta" />
              </button>
            )}

            {currentSpread < totalSpreads - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-4 z-40 p-3 rounded-full bg-cream-50/95 text-ink-900 shadow-2xl hover:scale-110 transition-transform hidden sm:flex items-center justify-center border border-sand-200"
                title="Turn to next spread"
              >
                <ChevronRight className="w-5 h-5 text-terracotta" />
              </button>
            )}

            <AnimatePresence mode="wait">
              {/* SPREAD 0: COVER PAGE */}
              {currentSpread === 0 && (
                <motion.div
                  key="spread-cover"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                  }}
                  initial={{ opacity: 0, scale: 0.94, rotateY: flipDirection === 'next' ? -25 : 25 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.94, rotateY: flipDirection === 'next' ? 25 : -25 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-center w-full cursor-grab active:cursor-grabbing"
                >
                  <CoverPage onOpenBook={() => handleJumpToSpread(1)} />
                </motion.div>
              )}

              {/* SPREAD 1: ABOUT (BLUSH THEME: blush-100/300 pages, sage-300 blob, ink text, terracotta accent) */}
              {currentSpread === 1 && (
                <motion.div
                  key="spread-about"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sand-200 bg-blush-100 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  {/* Center Gutter Spine & Shadow */}
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sand-200 pointer-events-none z-30" />

                  {/* Left Page (P. 02): Blush-100 with Sage-300 Blob and Polaroid Stack */}
                  <div className="p-8 sm:p-12 bg-blush-100 border-r border-sand-200/60 flex flex-col justify-between relative overflow-hidden">
                    {/* Sage-300 organic blob bleeding across page */}
                    <div
                      className="absolute -top-16 -left-16 w-64 h-64 rounded-full pointer-events-none opacity-40"
                      style={{ backgroundColor: '#B7C8BA' }}
                    />
                    {/* Eucalyptus Sprig prop */}
                    <div className="absolute bottom-4 left-4 pointer-events-none opacity-30">
                      <EucalyptusSprig className="w-24 h-48" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          VOL. 2026 • SECTION 01
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 02</span>
                      </div>
                      <h3 className="font-serif text-3xl font-normal text-ink-900 mb-3 leading-snug">
                        Bridging Natural Reasoning & <span className="italic text-terracotta">Autonomous Systems</span>
                      </h3>
                      <p className="font-serif italic text-xs sm:text-sm text-ink-700 leading-relaxed mb-4">
                        "{PERSONAL_INFO.heroTagline}"
                      </p>
                    </div>

                    <div className="my-2 relative z-10">
                      <PolaroidStack />
                    </div>

                    <div className="pt-4 border-t border-sand-200/80 text-[11px] text-ink-700 flex justify-between font-mono relative z-10">
                      <span>B.Tech IT • 2027</span>
                      <span>Lucknow, Uttar Pradesh</span>
                    </div>
                  </div>

                  {/* Right Page (P. 03): Blush-100 to Blush-300 with Executive Narrative & Count-up Stats */}
                  <div className="p-8 sm:p-12 bg-gradient-to-b from-blush-100 to-blush-300/40 flex flex-col justify-between relative">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          EXECUTIVE DOSSIER
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 03</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-900 font-light leading-relaxed mb-6">
                        {PERSONAL_INFO.summary}
                      </p>
                    </div>

                    {/* Stats 2x4 Count-Up Grid */}
                    <div className="space-y-3">
                      <div className="text-[10px] uppercase tracking-widest text-terracotta font-semibold font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Key Production Metrics</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        {STATS.slice(0, 6).map((st) => (
                          <div
                            key={st.id}
                            className="p-2.5 rounded-xl bg-cream-50/80 border border-sand-200 shadow-xs"
                          >
                            <div className="font-serif text-lg font-bold text-ink-900 leading-none mb-1">
                              <CountUp value={st.value} decimals={st.decimals} suffix={st.suffix} />
                            </div>
                            <div className="text-[9px] uppercase tracking-wider text-ink-700 font-mono">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-200/80 flex items-center justify-between text-xs text-ink-700 font-mono">
                      <span>Academic CGPA: 8.5/10</span>
                      <button
                        onClick={handleNext}
                        className="text-terracotta hover:underline flex items-center gap-1"
                      >
                        <span>Skills & Lab</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 2: SKILLS & DATA SCIENCE LAB (SAGE THEME: sage-100/300 pages, blush-300 blob, ink text) */}
              {currentSpread === 2 && (
                <motion.div
                  key="spread-skills"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sage-300 bg-sage-100 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sage-300 pointer-events-none z-30" />

                  {/* Left Page (P. 04): 6 Skill Groups */}
                  <div className="p-6 sm:p-10 bg-sage-100 border-r border-sage-300 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative blush-300 blob */}
                    <div
                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-30"
                      style={{ backgroundColor: '#EBD3CB' }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          SECTION 02 / ARSENAL
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 04</span>
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-2">
                        Core Competencies & <span className="italic text-sage-700">Toolchains</span>
                      </h3>
                      <p className="text-xs text-ink-700 font-light mb-4">
                        Structured technical proficiencies across predictive modeling, neural architectures, and GenAI.
                      </p>

                      <div className="space-y-3">
                        {SKILL_CATEGORIES.slice(0, 3).map((cat) => (
                          <div
                            key={cat.id}
                            className="p-3 rounded-xl bg-cream-50/90 border border-sage-300 shadow-xs"
                          >
                            <h4 className="font-serif text-xs font-semibold text-ink-900 mb-1.5 flex items-center justify-between">
                              <span>{cat.name}</span>
                              <span className="text-[9px] font-mono text-sage-700">{cat.skills.length} competencies</span>
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {cat.skills.slice(0, 6).map((s) => (
                                <span
                                  key={s.name}
                                  className="text-[9.5px] px-2 py-0.5 rounded bg-sage-200/70 text-ink-900 font-mono"
                                >
                                  {s.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-sage-300 text-[10px] font-mono text-ink-700 flex justify-between">
                      <span>Python • Scikit-Learn • TensorFlow • PyTorch</span>
                      <span>Power BI • SQL • n8n</span>
                    </div>
                  </div>

                  {/* Right Page (P. 05): Interactive Data Science Lab (SAGE Theme) */}
                  <div className="p-6 sm:p-10 bg-gradient-to-b from-sage-100 to-sage-300/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          DATA SCIENCE LAB
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 05</span>
                      </div>

                      {/* Embedded Interactive Data Science Lab Component */}
                      <DataScienceLab />
                    </div>

                    <div className="pt-3 border-t border-sage-300 flex justify-between text-xs text-ink-700 font-mono">
                      <span>Interactive Demonstrations</span>
                      <button
                        onClick={handleNext}
                        className="text-terracotta hover:underline flex items-center gap-1"
                      >
                        <span>Experience Spread</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 3: EXPERIENCE (CREAM + SAND THEME: cream pages, sand-200/400 blobs, sage accent) */}
              {currentSpread === 3 && (
                <motion.div
                  key="spread-experience"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sand-200 bg-cream-50 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sand-200 pointer-events-none z-30" />

                  {/* Left Page (P. 06): Role 1 - Saanvi Technologies and Solutions */}
                  <div className="p-8 sm:p-12 bg-cream-50 border-r border-sand-200 flex flex-col justify-between relative overflow-hidden">
                    {/* Sand organic blob */}
                    <div
                      className="absolute -top-16 -left-16 w-60 h-60 rounded-full pointer-events-none opacity-25"
                      style={{ backgroundColor: '#E6D5C3' }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          CURRENT ROLE • 2026–PRESENT
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 06</span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-1">
                        {EXPERIENCES[0].role}
                      </h3>
                      <p className="text-xs text-terracotta font-serif italic mb-4">
                        {EXPERIENCES[0].company} • {EXPERIENCES[0].location}
                      </p>

                      <ul className="space-y-3 text-xs text-ink-900 font-light leading-relaxed">
                        {EXPERIENCES[0].bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-sage-700 text-sm leading-none shrink-0 mt-0.5">✦</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex flex-wrap gap-1.5 relative z-10">
                      {EXPERIENCES[0].technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-sand-200/50 text-ink-900 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Page (P. 07): Role 2 - IBM Virtual Internship */}
                  <div className="p-8 sm:p-12 bg-gradient-to-b from-cream-50 to-cream-100 flex flex-col justify-between relative overflow-hidden">
                    {/* Olive sprig prop */}
                    <div className="absolute bottom-4 right-4 pointer-events-none opacity-25">
                      <OliveSprig className="w-28 h-40" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          ANALYTICAL INTERNSHIP • 2026
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 07</span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-1">
                        {EXPERIENCES[1].role}
                      </h3>
                      <p className="text-xs text-terracotta font-serif italic mb-4">
                        {EXPERIENCES[1].company} • {EXPERIENCES[1].location}
                      </p>

                      <ul className="space-y-3 text-xs text-ink-900 font-light leading-relaxed mb-6">
                        {EXPERIENCES[1].bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-sage-700 text-sm leading-none shrink-0 mt-0.5">✦</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlighted Metric Card */}
                      <div className="p-3.5 rounded-xl bg-sand-200/40 border border-sand-200 flex items-center justify-between">
                        <div>
                          <div className="font-serif text-lg font-bold text-ink-900">98% Schema Accuracy</div>
                          <div className="text-[10px] text-ink-700 font-mono">1,000+ Unstructured Docs Parsed</div>
                        </div>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-cream-50 text-sage-700 font-semibold">
                          Verified
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex justify-between items-center text-xs text-ink-700 font-mono relative z-10">
                      <span>40% Faster KPI Synthesis</span>
                      <button
                        onClick={handleNext}
                        className="text-terracotta hover:underline flex items-center gap-1"
                      >
                        <span>Featured Projects</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 4: FEATURED PROJECTS (BLUSH THEME: blush-100 pages, cream frames, sage tags) */}
              {currentSpread === 4 && (
                <motion.div
                  key="spread-projects-curated"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sand-200 bg-blush-100 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sand-200 pointer-events-none z-30" />

                  {/* Left Page (P. 08): Project 1 - Customer Churn */}
                  <div className="p-8 sm:p-12 bg-blush-100 border-r border-sand-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          CASE STUDY 01 / MACHINE LEARNING
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 08</span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-2">
                        {PROJECTS[0].title}
                      </h3>
                      <p className="text-xs text-ink-700 font-light leading-relaxed mb-4">
                        {PROJECTS[0].description}
                      </p>

                      <div className="p-4 rounded-xl bg-cream-50 border border-sand-200 space-y-2 mb-4">
                        <div className="text-[10px] uppercase tracking-wider text-terracotta font-mono font-semibold">
                          Validated Metrics & Achievements:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {PROJECTS[0].metrics.map((m) => (
                            <div key={m} className="p-1.5 rounded bg-sand-200/40 text-ink-900">
                              ✓ {m}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex flex-wrap gap-1.5">
                      {PROJECTS[0].techStack.map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-cream-50 text-ink-900 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Page (P. 09): Project 2 - Sales Performance & Forecasting */}
                  <div className="p-8 sm:p-12 bg-gradient-to-b from-blush-100 to-blush-300/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          CASE STUDY 02 / BI & OPTIMIZATION
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 09</span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-2">
                        {PROJECTS[1].title}
                      </h3>
                      <p className="text-xs text-ink-700 font-light leading-relaxed mb-4">
                        {PROJECTS[1].description}
                      </p>

                      <div className="p-4 rounded-xl bg-cream-50 border border-sand-200 space-y-2 mb-4">
                        <div className="text-[10px] uppercase tracking-wider text-sage-700 font-mono font-semibold">
                          Transformation & Discovery:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          {PROJECTS[1].metrics.map((m) => (
                            <div key={m} className="p-1.5 rounded bg-sage-100 text-ink-900">
                              ✦ {m}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex justify-between items-center text-xs text-ink-700 font-mono">
                      <span>50,000+ Transactions Analyzed</span>
                      <button
                        onClick={handleNext}
                        className="text-terracotta hover:underline flex items-center gap-1"
                      >
                        <span>Live Repos & Telemetry</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 5: LIVE GITHUB REPOS & TELEMETRY (SAGE THEME: sage-100 pages, sage-300 frames) */}
              {currentSpread === 5 && (
                <motion.div
                  key="spread-github"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-sage-100 rounded-2xl p-6 sm:p-10 shadow-book border border-sage-300 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-center justify-between border-b border-sage-300 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta">
                        SPREAD 06 • LIVE GITHUB REST API
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900">
                        Repositories, Heatmap & <span className="italic text-sage-700">Telemetry</span>
                      </h3>
                    </div>
                    <span className="font-serif italic text-xs text-terracotta">P. 10–11</span>
                  </div>

                  {/* Render Live GitHub Component */}
                  <GithubShowcase />
                </motion.div>
              )}

              {/* SPREAD 6: EDUCATION & ACHIEVEMENTS (SAND THEME with blush accent) */}
              {currentSpread === 6 && (
                <motion.div
                  key="spread-education"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sand-400/40 bg-sand-200/50 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sand-400/40 pointer-events-none z-30" />

                  {/* Left Page (P. 12): B.Tech IT Education */}
                  <div className="p-8 sm:p-12 bg-cream-50 border-r border-sand-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          SECTION 06 / ACADEMIA
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 12</span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-ink-900 mb-2">
                        {EDUCATION[0].degree}
                      </h3>
                      <p className="text-xs text-terracotta font-medium mb-3">
                        {EDUCATION[0].institution}
                      </p>

                      <div className="inline-block px-3.5 py-1.5 rounded-full bg-sand-200/70 font-serif font-bold text-xs text-ink-900 mb-4 border border-sand-400/40">
                        CGPA 8.5 / 10 • 2023–2027 (Expected)
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest text-ink-700 font-mono block">
                          Core Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {EDUCATION[0].coursework?.map((c) => (
                            <span
                              key={c}
                              className="text-[10px] px-2 py-0.5 rounded bg-sand-200/50 text-ink-900 font-mono"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-300 text-xs text-ink-700 font-mono">
                      UP Board Class XII (2023) & Class X (2021) • First Division Distinction
                    </div>
                  </div>

                  {/* Right Page (P. 13): Varsity Pistol Shooting Championship & Honors */}
                  <div className="p-8 sm:p-12 bg-gradient-to-b from-sand-200/60 to-sand-400/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold">
                          VARSITY HONORS
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">P. 13</span>
                      </div>

                      <h3 className="font-serif text-xl font-normal text-ink-900 mb-1">
                        Championship Gold Medalist
                      </h3>
                      <p className="text-xs text-terracotta font-serif italic mb-3">
                        100-Meter Pistol Shooting Varsity Championship
                      </p>
                    </div>

                    <div className="my-2">
                      <TargetAnimation />
                    </div>

                    <div className="space-y-2 text-xs font-mono text-ink-900">
                      <div className="p-2.5 rounded-xl bg-cream-50/80 border border-sand-300 flex items-center justify-between">
                        <span>Institutional 100% Attendance Award</span>
                        <span className="text-terracotta font-bold">Excellence</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-cream-50/80 border border-sand-300 flex items-center justify-between">
                        <span>Languages</span>
                        <span>English (Prof.) • Hindi (Native)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-300 flex justify-between items-center text-xs text-ink-700 font-mono">
                      <span>Precision • Discipline</span>
                      <button
                        onClick={handleNext}
                        className="text-terracotta hover:underline flex items-center gap-1"
                      >
                        <span>Certifications</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 7: CERTIFICATIONS (SAGE-LIGHT THEME: sage-100 pages, sage-300 cards) */}
              {currentSpread === 7 && (
                <motion.div
                  key="spread-certifications"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) handleNext();
                    else if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-sage-100 rounded-2xl p-8 sm:p-12 shadow-book border border-sage-300 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-center justify-between border-b border-sage-300 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta">
                        SECTION 07 / ACCREDITATIONS
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900">
                        Industry Certifications & Credentials
                      </h3>
                    </div>
                    <span className="font-serif italic text-xs text-terracotta">P. 14–15</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-3.5 rounded-xl bg-cream-50/90 border border-sage-300/80 shadow-xs hover:border-terracotta transition-colors"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-ink-700 mb-1.5">
                          <span>{cert.issuer}</span>
                          <span className="text-terracotta font-medium">{cert.date}</span>
                        </div>
                        <h4 className="font-serif text-xs font-normal text-ink-900 line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-sage-300 flex justify-between items-center text-xs font-mono text-ink-700">
                    <span>NASSCOM (Gold) • AWS Academy • IBM • Intel • Simplilearn</span>
                    <button
                      onClick={handleNext}
                      className="text-terracotta hover:underline flex items-center gap-1"
                    >
                      <span>Contact Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SPREAD 8: BACK COVER / CONTACT (BLUSH THEME with ink-700 label box and terracotta button) */}
              {currentSpread === 8 && (
                <motion.div
                  key="spread-contact"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 60) handlePrev();
                  }}
                  initial={{ opacity: 0, rotateY: flipDirection === 'next' ? -20 : 20 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: flipDirection === 'next' ? 20 : -20 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-book border border-sand-200 bg-blush-100 max-w-5xl mx-auto w-full cursor-grab active:cursor-grabbing"
                >
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 magazine-gutter pointer-events-none z-30" />
                  <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-sand-200 pointer-events-none z-30" />

                  {/* Left Page (P. 16): Blush base with INK-700 LABEL BOX (not a full black page!) */}
                  <div className="p-8 sm:p-12 bg-blush-100 border-r border-sand-200 flex flex-col justify-between relative overflow-hidden">
                    {/* Delicate Wildflower Sprig prop */}
                    <div className="absolute top-4 right-4 pointer-events-none opacity-40">
                      <WildflowerSprig className="w-20 h-40" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-700">
                          BACK COVER • DOSSIER
                        </span>
                        <span className="font-serif italic text-xs text-sand-400">P. 16</span>
                      </div>

                      {/* Overlapping Ink-700 Box with White Serif Text */}
                      <div className="p-6 rounded-2xl bg-ink-700 text-cream-50 shadow-xl border-l-4 border-terracotta mb-6">
                        <h3 className="font-serif text-2xl font-normal text-cream-50 mb-2">
                          Initiate Collaboration
                        </h3>
                        <p className="text-xs text-cream-50/80 font-light leading-relaxed mb-4">
                          Available for full-time Data Scientist and Generative AI Developer roles, technical consultations, and autonomous workflow engineering.
                        </p>

                        <div className="space-y-2.5 text-xs font-mono">
                          <div className="flex items-center gap-2 text-cream-50/90">
                            <Mail className="w-3.5 h-3.5 text-blush-300" />
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                              {PERSONAL_INFO.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-cream-50/90">
                            <MapPin className="w-3.5 h-3.5 text-sage-300" />
                            <span>{PERSONAL_INFO.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sand-200 flex items-center justify-between relative z-10">
                      <a
                        href={PERSONAL_INFO.resumePath}
                        download="Sarvesh_Pandey_Resume.pdf"
                        className="px-4 py-2 rounded-full bg-cream-50 text-ink-900 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100 transition-all border border-sand-200 shadow-xs flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5 text-terracotta" />
                        <span>Download CV</span>
                      </a>
                      <button
                        onClick={() => handleJumpToSpread(0)}
                        className="text-terracotta text-xs hover:underline font-mono"
                      >
                        Return to Cover ↑
                      </button>
                    </div>
                  </div>

                  {/* Right Page (P. 17 / FINAL): Direct Message Form with Floating Labels & Flyaway Plane */}
                  <div className="p-8 sm:p-12 bg-cream-50 flex flex-col justify-between relative">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold">
                          DISPATCH INQUIRY
                        </span>
                        <span className="font-serif italic text-xs text-terracotta">FINAL</span>
                      </div>

                      <h4 className="font-serif text-xl font-normal text-ink-900 mb-1">
                        Send Direct Message
                      </h4>
                      <p className="text-xs text-ink-700 font-light mb-4">
                        Drop a transmission directly to Sarvesh's primary engineering queue.
                      </p>

                      <form onSubmit={handleContactSubmit} className="space-y-3.5">
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name / Organization"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-sand-200/20 border border-sand-200 text-xs font-mono text-ink-900 placeholder:text-ink-700/50 focus:outline-none focus:ring-1 focus:ring-terracotta"
                          />
                        </div>

                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Your Email Address"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-sand-200/20 border border-sand-200 text-xs font-mono text-ink-900 placeholder:text-ink-700/50 focus:outline-none focus:ring-1 focus:ring-terracotta"
                          />
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Subject (Project Inquiry / Role)"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-sand-200/20 border border-sand-200 text-xs font-mono text-ink-900 placeholder:text-ink-700/50 focus:outline-none focus:ring-1 focus:ring-terracotta"
                          />
                        </div>

                        <div className="relative">
                          <textarea
                            required
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Your Message..."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-sand-200/20 border border-sand-200 text-xs font-mono text-ink-900 placeholder:text-ink-700/50 focus:outline-none focus:ring-1 focus:ring-terracotta resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={contactSubmitted}
                          className="w-full py-2.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream-50 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-75"
                        >
                          {contactSubmitted ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-cream-50" />
                              <span>Message Dispatched!</span>
                            </>
                          ) : (
                            <>
                              <span>Dispatch Message</span>
                              <Send className="w-3.5 h-3.5 text-cream-50" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    <div className="pt-3 border-t border-sand-200 flex justify-between items-center text-[11px] text-ink-700 font-mono">
                      <span>Response window: &lt; 24 Hours</span>
                      <span>Lucknow, India</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ================= VIEW MODE 2: 2x3 THUMBNAIL GRID (Matching Template Grid) ================= */}
        {viewMode === 'grid' && (
          <div className="my-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {spreadMetadata.map((spread, idx) => (
                <motion.div
                  key={spread.spreadNum}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleJumpToSpread(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    currentSpread === idx
                      ? 'bg-cream-50 border-terracotta shadow-lg ring-2 ring-terracotta/30'
                      : 'bg-cream-50/70 border-sand-200 hover:border-sand-400'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-xl bg-sand-200/40 mb-3 flex items-center justify-center border border-sand-200 overflow-hidden relative">
                    <span className="font-serif italic text-3xl font-bold text-ink-900/40">
                      {spread.spreadNum}
                    </span>
                    <div className="absolute bottom-2 left-2 text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-cream-50/90 text-ink-700">
                      {spread.theme}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h5 className="font-serif text-xs font-semibold text-ink-900 truncate">
                      {spread.title}
                    </h5>
                    <span className="text-[10px] font-mono text-terracotta">P.{idx * 2 || 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= VIEW MODE 3: STACKED (MOBILE RESPONSIVE SPREADS) ================= */}
        {viewMode === 'scroll' && (
          <div className="my-8 space-y-12 max-w-4xl mx-auto">
            {spreadMetadata.map((spread, idx) => (
              <div
                key={spread.spreadNum}
                className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-sand-200 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between border-b border-sand-200 pb-3">
                  <span className="font-serif italic text-base text-terracotta font-semibold">
                    SPREAD {spread.spreadNum} • {spread.theme}
                  </span>
                  <button
                    onClick={() => handleJumpToSpread(idx)}
                    className="text-xs font-mono text-terracotta hover:underline"
                  >
                    Open in Flipbook ↗
                  </button>
                </div>
                <h4 className="font-serif text-2xl font-normal text-ink-900">
                  {spread.title}
                </h4>
                <p className="text-xs text-ink-700">
                  Full spread content accessible via Flip Book mode or interactive thumbnails.
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ================= BOTTOM THUMBNAIL STRIP ================= */}
        <div className="mt-8 pt-4 border-t border-sand-200/80 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
          {spreadMetadata.map((sp, idx) => (
            <button
              key={sp.spreadNum}
              onClick={() => handleJumpToSpread(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                currentSpread === idx
                  ? 'bg-terracotta text-cream-50 font-bold shadow-sm'
                  : 'bg-cream-50/80 hover:bg-sand-200/60 text-ink-700 border border-sand-200'
              }`}
            >
              <span>{sp.spreadNum}</span>
              <span className="hidden md:inline text-[11px]">{sp.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
