import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { EucalyptusSprig, OliveSprig } from '../components/BotanicalArt';
import { Petals } from '../components/Petals';

interface HeroCoverProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onNavigateSection }) => {
  const scrollTo = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const miniSpreads = [
    { num: '01', title: 'About me', id: 'about', themeColor: '#EBD3CB', label: 'Blush' },
    { num: '02', title: 'Skills & Lab', id: 'skills', themeColor: '#B7C8BA', label: 'Sage' },
    { num: '03', title: 'Experience', id: 'experience', themeColor: '#E6D5C3', label: 'Sand' },
    { num: '04', title: 'GitHub Code', id: 'github-projects', themeColor: '#EBD3CB', label: 'Blush' },
    { num: '05', title: 'Live on Web', id: 'live-deployments', themeColor: '#8FA89A', label: 'Sage' },
    { num: '06', title: 'Credentials', id: 'certifications', themeColor: '#E4EBE4', label: 'Light Sage' },
  ];

  return (
    <section
      id="cover"
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-10" />

      {/* Floating Petals/Leaves Drifting Softly Across Cover */}
      <Petals count={14} className="z-10" />

      {/* Radial Glow Backdrops (Warm Cream & Sage Glows, NEVER brown!) */}
      <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-blush-100/70 dark:bg-darkgreen-surface/40 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-sage-100/70 dark:bg-darkgreen-border/30 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT (45%): PORTRAIT MAGAZINE COVER ================= */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[440px] aspect-[3/4] max-h-[84vh] bg-cream-50 rounded-2xl shadow-page overflow-hidden select-none border border-sand-200"
            >
              {/* Paper grain on cover */}
              <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-30" />

              {/* Exact 4-Block Split from Botanical Template */}
              {/* 1. Blush (#EBD3CB) top-left area */}
              <div
                className="absolute top-0 left-0 w-[68%] h-[65%]"
                style={{ backgroundColor: '#EBD3CB' }}
              />

              {/* 2. Ink-700 (#4A5552) right vertical strip */}
              <div
                className="absolute top-0 right-0 w-[32%] h-[65%]"
                style={{ backgroundColor: '#4A5552' }}
              />

              {/* 3. Ink-700 (#4A5552) bottom block */}
              <div
                className="absolute bottom-0 left-0 w-[68%] h-[35%]"
                style={{ backgroundColor: '#4A5552' }}
              />

              {/* 4. Sage-500 (#8FA89A) bottom-right square */}
              <div
                className="absolute bottom-0 right-0 w-[32%] h-[35%]"
                style={{ backgroundColor: '#8FA89A' }}
              />

              {/* 5. Sand-400 organic blob cropped at bottom-left */}
              <div
                className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none z-10"
                style={{
                  backgroundColor: '#CDB39B',
                  borderRadius: '55% 45% 60% 40% / 45% 60% 40% 55%',
                }}
              />

              {/* Botanical sprigs overlapping photo & frame */}
              <div className="absolute -top-8 -left-4 z-25 pointer-events-none">
                <EucalyptusSprig className="w-24 h-48 opacity-90" swayDuration={8} />
              </div>
              <div className="absolute bottom-14 right-3 z-25 pointer-events-none">
                <OliveSprig className="w-24 h-32 opacity-85" swayDuration={9} delay={0.4} />
              </div>

              {/* Sweeping Curved Line-Art Strokes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 600 800"
                fill="none"
              >
                {/* Sweeping White Dash-Stroke */}
                <motion.path
                  d="M -30 200 C 160 80, 420 340, 640 210"
                  stroke="#FBF7F1"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
                {/* Sweeping Sage Accent Stroke */}
                <motion.path
                  d="M 80 -10 C 270 240, 190 620, 590 760"
                  stroke="#8FA89A"
                  strokeWidth="1.75"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 2.2, delay: 0.3, ease: 'easeInOut' }}
                />
              </svg>

              {/* Small Cream Tag Box Top-Right */}
              <div className="absolute top-5 right-5 z-20 bg-cream-50 text-ink-900 px-3 py-1.5 rounded-sm shadow-md border border-sand-200">
                <span className="font-serif italic text-xs font-semibold tracking-wide block text-ink-900">
                  Data Scientist & GenAI
                </span>
              </div>

              {/* Volume Tag Top-Left */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest-plus font-mono text-ink-900 font-semibold bg-cream-50/90 backdrop-blur-xs px-2.5 py-0.5 rounded shadow-2xs border border-sand-200">
                  VOL. 2026
                </span>
              </div>

              {/* Large Framed Portrait (Arch Top, Cream Border, Soft Shadow) */}
              <div className="absolute top-[18%] left-[8%] w-[58%] aspect-[3/4] z-20">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <div className="relative w-full h-full rounded-t-[999px] rounded-b-2xl overflow-hidden border-[8px] border-cream-50 shadow-lift bg-sand-200 photo-warm-grade">
                    <img
                      src={PERSONAL_INFO.profilePhotoPath}
                      alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-black/10 pointer-events-none rounded-t-[999px] rounded-b-2xl" />
                  </div>

                  {/* Two Ink-700 Label Boxes Overlapping Right Edge with Overshoot */}
                  <div className="absolute -right-12 sm:-right-16 top-1/3 space-y-2 z-30 pointer-events-none">
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', damping: 14, stiffness: 110, delay: 0.4 }}
                        className="bg-ink-700 text-cream-50 px-4 py-2 rounded-xs shadow-lift border-l-[3px] border-terracotta inline-block"
                      >
                        <span className="font-serif italic text-sm sm:text-base tracking-widest block font-light">
                          Portfolio
                        </span>
                      </motion.div>
                    </div>

                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', damping: 14, stiffness: 110, delay: 0.55 }}
                        className="bg-ink-700 text-cream-50 px-4 py-2 rounded-xs shadow-lift border-l-[3px] border-sage-500 inline-block"
                      >
                        <h2 className="font-serif text-base sm:text-lg font-normal tracking-tight block">
                          {PERSONAL_INFO.name}
                        </h2>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Rotating Circular Text Badge */}
              <div className="absolute top-[10%] right-[5%] z-20 pointer-events-none hidden sm:block">
                <div className="relative w-20 h-20 flex items-center justify-center animate-[spin_14s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="heroCoverCircle"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] font-mono tracking-widest uppercase fill-cream-50 font-medium">
                      <textPath href="#heroCoverCircle">
                        • OPEN TO WORK • DATA SCIENCE • GENAI •
                      </textPath>
                    </text>
                  </svg>
                  <Sparkles className="w-3.5 h-3.5 text-terracotta absolute" />
                </div>
              </div>

              {/* Bottom-Left Inside Ink Block: Short Intro Paragraph */}
              <div className="absolute bottom-5 left-5 w-[60%] z-20 text-cream-50 space-y-2">
                <p className="font-serif italic text-[11px] sm:text-xs text-cream-50/90 leading-relaxed font-light">
                  "{PERSONAL_INFO.coverIntro}"
                </p>
                <div className="text-[10px] uppercase font-mono text-blush-300 tracking-wider">
                  {PERSONAL_INFO.location}
                </div>
              </div>

              {/* Bottom-Right Stamp in Sage-500 Square */}
              <div className="absolute bottom-5 right-5 z-20 text-right">
                <span className="font-serif italic text-2xl font-bold text-cream-50/90 block leading-none">
                  01
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-cream-50/75">
                  COVER
                </span>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT (55%): TABLE OF CONTENTS & SPREAD GRID ================= */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-ink-700 dark:text-sage-300 font-semibold">
                  PORTFOLIO 2026 • DIGITAL PRINT EDITION
                </span>
              </div>

              {/* H1 Tagline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 dark:text-cream-50 leading-[1.18] tracking-tight">
                I turn data into <span className="italic font-normal text-terracotta">predictions</span> and build AI systems that <span className="italic font-normal text-sage-700 dark:text-sage-300">automate decisions</span>.
              </h1>

              {/* Sub-narrative */}
              <p className="text-sm sm:text-base text-ink-700 dark:text-cream-50/80 font-light max-w-[56ch] leading-relaxed">
                Analytical Data Scientist and Generative AI Developer specializing in production ML pipelines, deep neural architectures, and event-driven automation.
              </p>

              {/* Action Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollTo('github-projects')}
                  className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream-50 text-xs font-mono font-medium shadow-soft hover:shadow-lift transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Featured Projects
                </button>

                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Sarvesh_Pandey_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-sand-400 text-ink-900 dark:text-cream-50 hover:bg-sand-200/40 text-xs font-mono font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-terracotta" />
                  <span>Download Resume</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-sand-200/40 hover:bg-sand-200/70 text-ink-700 dark:text-cream-50 transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-sand-200/40 hover:bg-sand-200/70 text-ink-700 dark:text-cream-50 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 rounded-full bg-sand-200/40 hover:bg-sand-200/70 text-ink-700 dark:text-cream-50 transition-colors"
                    title="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ================= 2x3 MINI SPREAD THUMBNAIL GRID (TABLE OF CONTENTS) ================= */}
            <div className="pt-4 border-t border-sand-200/80 dark:border-darkgreen-border">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="uppercase tracking-widest text-ink-700/80 dark:text-cream-50/70 font-medium">
                  TABLE OF CONTENTS • JUMP TO SPREAD
                </span>
                <span className="text-[11px] text-terracotta font-serif italic">
                  6 Curated Spreads
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {miniSpreads.map((sp) => (
                  <motion.button
                    key={sp.num}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo(sp.id)}
                    className="group p-3 rounded-2xl bg-paper dark:bg-darkgreen-surface border border-sand-200 dark:border-darkgreen-border hover:border-terracotta shadow-soft transition-all text-left flex flex-col justify-between"
                  >
                    {/* Mini Two-Page Spread Layout Simulation */}
                    <div
                      className="aspect-[16/10] rounded-xl mb-2 flex items-center justify-center relative overflow-hidden border border-sand-200/60 dark:border-darkgreen-border shadow-xs"
                      style={{ backgroundColor: sp.themeColor }}
                    >
                      {/* Spine gutter simulation */}
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-black/10" />
                      <span className="font-serif italic text-2xl font-bold text-ink-900/30 group-hover:text-ink-900/60 transition-colors">
                        {sp.num}
                      </span>
                      <div className="absolute bottom-1 left-1.5 text-[8.5px] font-mono uppercase px-1.5 py-0.2 rounded bg-cream-50/80 text-ink-700">
                        {sp.label}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs font-semibold text-ink-900 dark:text-cream-50 truncate">
                        {sp.num} {sp.title}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
