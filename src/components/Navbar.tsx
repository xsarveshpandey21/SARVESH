import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onReplayIntro?: () => void;
}

const NAV_LINKS = [
  { name: 'About', targetId: 'about', num: '01' },
  { name: 'Skills', targetId: 'skills', num: '02' },
  { name: 'Experience', targetId: 'experience', num: '03' },
  { name: 'Projects', targetId: 'github-projects', num: '04' },
  { name: 'Live', targetId: 'live-deployments', num: '05' },
  { name: 'Certificates', targetId: 'certifications', num: '06' },
  { name: 'Contact', targetId: 'contact', num: '07' },
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onReplayIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].targetId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(NAV_LINKS[i].targetId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    setActiveId(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCover = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-cream-50/70 dark:bg-darkgreen-surface/70 backdrop-blur-md shadow-soft border-b border-blush-300/60 dark:border-darkgreen-border'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram "SP." (Playfair italic) */}
          <button
            onClick={scrollToCover}
            className="group flex items-center gap-2.5 text-ink-900 dark:text-cream-50 text-left focus:outline-none"
            aria-label="Sarvesh Pandey Portfolio Home"
          >
            <div className="w-8 h-8 rounded-full bg-ink-700 text-cream-50 flex items-center justify-center font-serif italic text-base font-bold shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-terracotta">
              SP.
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic font-bold text-sm sm:text-base tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] uppercase tracking-label text-ink-500 dark:text-sage-300 leading-tight">
                Digital Lookbook
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Active Underline */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Magazine Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.targetId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.targetId)}
                  className={`relative text-[11px] uppercase tracking-label font-mono py-1 transition-colors ${
                    isActive
                      ? 'text-ink-900 dark:text-cream-50 font-semibold'
                      : 'text-ink-700/80 dark:text-cream-50/70 hover:text-ink-900 dark:hover:text-cream-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-terracotta rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="flex items-center gap-2.5">
            {/* "Resume" Outline Button */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Sarvesh_Pandey_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sand-400 text-ink-900 dark:text-cream-50 hover:bg-sand-200/40 text-xs font-mono font-medium transition-colors"
            >
              <Download className="w-3 h-3 text-terracotta" />
              <span>Resume</span>
            </a>

            {/* Replay Intro Lookbook */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                aria-label="Replay Lookbook Intro"
                title="Replay Lookbook Intro"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-200/40 hover:bg-sand-200 text-ink-900 dark:text-cream-50 text-xs font-mono transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                <span>Intro</span>
              </button>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full text-ink-700 dark:text-cream-50 hover:bg-sand-200/50 dark:hover:bg-darkgreen-border transition-colors focus:outline-none"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-ink-700" />
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-ink-900 dark:text-cream-50 hover:bg-sand-200/40 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Full-Height Blush Drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-blush-100 dark:bg-darkgreen-surface border-t border-blush-300 dark:border-darkgreen-border p-6 overflow-y-auto flex flex-col justify-between shadow-2xl z-50"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase font-mono tracking-widest text-ink-500 dark:text-cream-50/60 border-b border-blush-300/60 pb-2">
                Magazine Contents
              </div>

              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.targetId)}
                    className="flex items-center justify-between text-base font-serif text-ink-900 dark:text-cream-50 py-2 border-b border-blush-300/40 text-left"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-terracotta">{link.num}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-blush-300/60 space-y-3">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Sarvesh_Pandey_Resume.pdf"
                className="w-full py-2.5 rounded-full bg-terracotta text-cream-50 text-xs font-mono font-medium flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume CV</span>
              </a>

              <div className="text-center text-[11px] font-mono text-ink-500 dark:text-cream-50/60">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
