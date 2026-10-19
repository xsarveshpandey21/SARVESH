import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
import { Spread } from '../components/Spread';
import { LabelBox } from '../components/LabelBox';
import { CountUp } from '../components/CountUp';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import { PUBLIC_LIVE_PROJECTS } from '../data/liveProjects';
import { EucalyptusSprig } from '../components/BotanicalArt';

export const AboutSpread: React.FC = () => {
  // Top 6 primary metrics for the 2x3 grid
  const primaryStats = [
    STATS[0], // 10,000+ records modeled
    STATS[1], // 95% accuracy, ROC-AUC 0.94
    STATS[2], // 50,000+ transactions
    STATS[3], // 5,000+ daily records
    STATS[4], // 15+ hrs/week saved
    STATS[5], // 30% lower inference latency
  ];

  // Secondary metrics row
  const secondaryStats = [
    STATS[6], // 98% schema accuracy
    STATS[7], // CGPA 8.5
    {
      id: 'live-deployments',
      value: PUBLIC_LIVE_PROJECTS.length,
      suffix: ' Deployments',
      label: 'Live Web Systems',
      sublabel: 'Vercel production nodes',
    },
  ];

  const leftPageContent = (
    <div className="relative h-full flex flex-col justify-between">
      {/* Decorative Sage-300 organic blob bleeding across page */}
      <div
        className="absolute -top-12 -left-12 w-64 h-64 rounded-full pointer-events-none opacity-40 -z-0"
        style={{ backgroundColor: '#B7C8BA' }}
      />

      {/* Eucalyptus sprig prop in margin */}
      <div className="absolute bottom-4 left-2 pointer-events-none opacity-30 z-20">
        <EucalyptusSprig className="w-28 h-56" swayDuration={9} />
      </div>

      <div className="relative z-10 mb-8">
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 leading-tight mb-2">
          Bridging Natural Reasoning & <span className="italic text-terracotta">Autonomous Systems</span>
        </h3>
        <p className="font-serif italic text-sm text-ink-700 dark:text-cream-50/80 font-light">
          "I build intelligent AI systems, automate workflows, and turn data into decisions."
        </p>
      </div>

      {/* Photo Composition: Framed Arch Photo + Tilted Polaroid with LabelBox */}
      <div className="relative my-auto py-4 z-10">
        {/* Main Framed Arch Photo (about-1.jpg) */}
        <div className="relative w-48 sm:w-56 aspect-[3/4] mx-auto rounded-t-[999px] rounded-b-2xl overflow-hidden border-[8px] border-cream-50 shadow-page bg-sand-200 photo-warm-grade">
          <img
            src="/images/about-1.jpg"
            alt="Sarvesh Pandey in laboratory"
            className="w-full h-full object-cover filter contrast-[1.03]"
            loading="lazy"
          />
        </div>

        {/* Secondary Tilted Polaroid (about-2.jpg) overlapping with LabelBox */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-4 right-2 sm:right-8 w-36 sm:w-44 bg-cream-50 p-2.5 pb-3 rounded-xl shadow-lift border border-sand-200 rotate-3 z-20"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-sand-200 mb-2 photo-warm-grade">
            <img
              src="/images/about-2.jpg"
              alt="Engineering desk flat-lay"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="-mt-4 flex justify-center">
            <LabelBox accentColor="terracotta" className="!py-1 !px-2.5 !text-[11px]">
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-blush-300" />
                <span>Lucknow, India</span>
              </span>
            </LabelBox>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 pt-4 text-[11px] font-mono text-ink-700/80 dark:text-cream-50/70 flex justify-between">
        <span>B.Tech IT • 2027</span>
        <span>AI & Data Science Specialist</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-4">
          About <span className="italic text-terracotta">me</span>
        </h2>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/90 font-light leading-relaxed mb-6">
          {PERSONAL_INFO.summary}
        </p>
      </div>

      {/* 2x3 Stat Grid with Count-up Numbers on Scroll */}
      <div className="space-y-3">
        <div className="text-[10px] uppercase font-mono tracking-widest text-terracotta font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Validated Production Benchmarks</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {primaryStats.map((st) => (
            <div
              key={st.id}
              className="p-3 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-200/80 dark:border-darkgreen-border shadow-soft flex flex-col justify-between"
            >
              <div className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-cream-50 leading-none mb-1">
                <CountUp value={st.value} decimals={st.decimals} suffix={st.suffix} />
              </div>
              <div className="text-[9.5px] uppercase font-mono text-ink-700 dark:text-cream-50/75 leading-tight">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smaller Row for Remaining Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-sand-200/60 dark:border-darkgreen-border">
        {secondaryStats.map((st) => (
          <div key={st.id} className="p-2 rounded-xl bg-sand-200/30 dark:bg-darkgreen-border/40 text-center">
            <div className="font-serif text-sm sm:text-base font-bold text-ink-900 dark:text-cream-50 leading-none">
              <CountUp value={st.value} decimals={st.decimals} suffix={st.suffix} />
            </div>
            <div className="text-[8.5px] uppercase font-mono text-ink-500 dark:text-cream-50/60 mt-0.5 truncate">
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Spread
      id="about"
      sectionNum="01"
      sectionEyebrow="SECTION 01 • BIOGRAPHY & BENCHMARKS"
      theme="blush"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 02"
      pageRightNum="P. 03"
    />
  );
};
