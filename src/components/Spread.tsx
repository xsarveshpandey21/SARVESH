import React from 'react';
import { motion } from 'framer-motion';

export type SpreadTheme = 'blush' | 'sage' | 'sand' | 'cream' | 'sage-light';

interface SpreadProps {
  id: string;
  sectionNum: string;
  sectionEyebrow: string;
  theme: SpreadTheme;
  leftPage: React.ReactNode;
  rightPage: React.ReactNode;
  className?: string;
  pageLeftNum?: string;
  pageRightNum?: string;
}

export const Spread: React.FC<SpreadProps> = ({
  id,
  sectionNum,
  sectionEyebrow,
  theme,
  leftPage,
  rightPage,
  className = '',
  pageLeftNum,
  pageRightNum,
}) => {
  // Theme backgrounds adhering strictly to 60/30/10 rule
  const themeClasses: Record<SpreadTheme, { bg: string; border: string; gutter: string }> = {
    blush: {
      bg: 'bg-blush-100 dark:bg-darkgreen-surface',
      border: 'border-blush-300/80 dark:border-darkgreen-border',
      gutter: 'bg-sand-200/50 dark:bg-darkgreen-border',
    },
    sage: {
      bg: 'bg-sage-100 dark:bg-darkgreen-surface',
      border: 'border-sage-300 dark:border-darkgreen-border',
      gutter: 'bg-sage-300/60 dark:bg-darkgreen-border',
    },
    sand: {
      bg: 'bg-sand-200/40 dark:bg-darkgreen-surface',
      border: 'border-sand-300/80 dark:border-darkgreen-border',
      gutter: 'bg-sand-300/60 dark:bg-darkgreen-border',
    },
    cream: {
      bg: 'bg-paper dark:bg-darkgreen-surface',
      border: 'border-sand-200 dark:border-darkgreen-border',
      gutter: 'bg-sand-200 dark:bg-darkgreen-border',
    },
    'sage-light': {
      bg: 'bg-sage-100/70 dark:bg-darkgreen-surface',
      border: 'border-sage-300/80 dark:border-darkgreen-border',
      gutter: 'bg-sage-300/40 dark:bg-darkgreen-border',
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <section
      id={id}
      className={`relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 select-text overflow-hidden ${className}`}
    >
      {/* Spread Container (Max-Width 1240px, Radius 28px, Floating Paper Panel) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-[1240px] mx-auto rounded-[28px] overflow-hidden shadow-page relative border ${currentTheme.border} ${currentTheme.bg} transition-colors duration-500`}
      >
        {/* Subtle Paper Noise Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-30" />

        {/* Center Magazine Gutter Line and Spine Shadow (Desktop 2-facing page simulation) */}
        <div
          className={`hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] ${currentTheme.gutter} z-30 pointer-events-none`}
        />
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 magazine-gutter z-30 pointer-events-none" />

        {/* Two-Facing Pages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          {/* Left Page */}
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-sand-200/50 dark:border-darkgreen-border">
            {/* Top Eyebrow + Section Numeral */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-sand-200/40 dark:border-darkgreen-border/50">
              <span className="text-[10px] font-mono uppercase tracking-label text-ink-700/80 dark:text-cream-50/70 font-medium">
                {sectionEyebrow}
              </span>
              <span className="font-serif italic text-base text-terracotta font-normal">
                {sectionNum}
              </span>
            </div>

            {/* Left Page Body Content */}
            <div className="flex-1">{leftPage}</div>

            {/* Left Page Bottom Footer Numeral */}
            {pageLeftNum && (
              <div className="pt-6 mt-6 border-t border-sand-200/40 dark:border-darkgreen-border/50 flex items-center justify-between text-[11px] font-mono text-ink-500 dark:text-cream-50/50">
                <span>LOOKBOOK • VOL. 2026</span>
                <span className="font-serif italic text-xs text-ink-700 dark:text-cream-50/80">
                  {pageLeftNum}
                </span>
              </div>
            )}
          </div>

          {/* Right Page */}
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-between relative">
            {/* Top Right Folio Header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-sand-200/40 dark:border-darkgreen-border/50">
              <span className="text-[10px] font-mono uppercase tracking-label text-ink-700/80 dark:text-cream-50/70 font-medium">
                SARVESH PANDEY
              </span>
              <span className="font-serif italic text-xs text-terracotta">
                {sectionNum}
              </span>
            </div>

            {/* Right Page Body Content */}
            <div className="flex-1">{rightPage}</div>

            {/* Right Page Bottom Footer Numeral */}
            {pageRightNum && (
              <div className="pt-6 mt-6 border-t border-sand-200/40 dark:border-darkgreen-border/50 flex items-center justify-between text-[11px] font-mono text-ink-500 dark:text-cream-50/50">
                <span>LUCKNOW, U.P.</span>
                <span className="font-serif italic text-xs text-ink-700 dark:text-cream-50/80">
                  {pageRightNum}
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
