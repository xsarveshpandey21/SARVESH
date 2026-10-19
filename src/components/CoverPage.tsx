import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { EucalyptusSprig, OliveSprig } from './BotanicalArt';
import { Petals } from './Petals';

interface CoverPageProps {
  onOpenBook?: () => void;
  className?: string;
  isHero?: boolean;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  onOpenBook,
  className = '',
  isHero = false,
}) => {
  return (
    <div
      className={`relative w-full aspect-[1/1.414] max-w-[620px] mx-auto bg-cream-50 rounded-2xl shadow-[0_35px_80px_-20px_rgba(43,48,46,0.28),0_0_0_1px_rgba(74,85,82,0.12)] overflow-hidden select-none border border-sand-200 ${className}`}
    >
      {/* Paper texture overlay for authentic tactile editorial look */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-30" />

      {/* Floating Petals/Leaves Drifting Gently */}
      <Petals count={14} />

      {/* ================= EXACT 4-BLOCK SPLIT FROM BOTANICAL TEMPLATE ================= */}
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

      {/* 5. Large Sand-400 (#CDB39B) organic blob cropped at bottom-left */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none z-10"
        style={{
          backgroundColor: '#CDB39B',
          borderRadius: '55% 45% 60% 40% / 45% 60% 40% 55%',
        }}
      />

      {/* ================= BOTANICAL SPRIGS (PROPS OVERLAPPING PHOTO & EDGES) ================= */}
      {/* Eucalyptus sprig top-left */}
      <div className="absolute -top-10 -left-6 z-25 pointer-events-none">
        <EucalyptusSprig className="w-28 h-56 opacity-90" swayDuration={8} />
      </div>

      {/* Olive sprig overlapping bottom-right junction */}
      <div className="absolute bottom-16 right-4 z-25 pointer-events-none">
        <OliveSprig className="w-28 h-36 opacity-85" swayDuration={9} delay={0.4} />
      </div>

      {/* ================= CURVED LINE ART STROKES SWEEPING ACROSS ================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 600 850"
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
        {/* White Hairline Flow */}
        <motion.path
          d="M 210 500 C 360 580, 480 630, 630 550"
          stroke="#FBF7F1"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* ================= TOP-RIGHT CREAM TAG BOX ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-6 right-6 z-20 bg-cream-50 text-ink-900 px-3.5 py-1.5 rounded-sm shadow-md border border-sand-200"
      >
        <span className="font-serif italic text-xs font-semibold tracking-wide block text-ink-900">
          Data Scientist & GenAI Developer
        </span>
      </motion.div>

      {/* Top-Left Volume Publication Tag */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest-plus font-mono text-ink-900 font-semibold bg-cream-50/90 backdrop-blur-xs px-2.5 py-0.5 rounded shadow-2xs border border-sand-200">
          LOOKBOOK • VOL. 2026
        </span>
      </div>

      {/* ================= LEFT-CENTER FRAMED PORTRAIT PHOTO ================= */}
      <div className="absolute top-[18%] left-[8%] w-[58%] aspect-[3/4] z-20">
        {/* Gentle floating wrapper */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full"
        >
          {/* Framed portrait with thin cream border and soft shadow */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0% round 1rem)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 1rem)' }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-full rounded-2xl overflow-hidden border-[6px] border-cream-50 shadow-[0_20px_45px_-10px_rgba(43,48,46,0.35)] bg-sand-200 photo-warm-grade"
          >
            <img
              src="./images/profile.jpg"
              alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
              className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
            />
            {/* Soft inner frame vignette */}
            <div className="absolute inset-0 ring-1 ring-black/10 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* ================= OVERLAPPING DARK INK-700 LABEL BOXES WITH OVERSHOOT ================= */}
          <div className="absolute -right-14 sm:-right-18 top-1/3 space-y-2.5 z-30 pointer-events-none">
            {/* Label 1: "Portfolio" with SplitText mask reveal sliding from left */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -140, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  damping: 14,
                  stiffness: 110,
                  delay: 0.5,
                }}
                className="bg-ink-700 text-cream-50 px-5 py-2.5 rounded-xs shadow-2xl border-l-[3px] border-terracotta inline-block"
              >
                <span className="font-serif italic text-base sm:text-lg tracking-widest block font-light">
                  Portfolio
                </span>
              </motion.div>
            </div>

            {/* Label 2: "Sarvesh Pandey" with slight stagger & overshoot */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: -140, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  damping: 14,
                  stiffness: 110,
                  delay: 0.65,
                }}
                className="bg-ink-700 text-cream-50 px-5 py-2.5 rounded-xs shadow-2xl border-l-[3px] border-sage-500 inline-block"
              >
                <h1 className="font-serif text-lg sm:text-xl font-normal tracking-tight block">
                  {PERSONAL_INFO.name}
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= ROTATING CIRCULAR TEXT BADGE ================= */}
      <div className="absolute top-[11%] right-[6%] z-20 pointer-events-none hidden sm:block">
        <div className="relative w-22 h-22 flex items-center justify-center animate-[spin_14s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="coverCirclePath"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              fill="none"
            />
            <text className="text-[9.5px] font-mono tracking-widest uppercase fill-cream-50 font-medium">
              <textPath href="#coverCirclePath">
                • OPEN TO WORK • DATA SCIENCE • GENAI •
              </textPath>
            </text>
          </svg>
          <Sparkles className="w-4 h-4 text-terracotta absolute" />
        </div>
      </div>

      {/* ================= BOTTOM-LEFT INK-700 BLOCK CONTENT ================= */}
      <div className="absolute bottom-6 left-6 w-[58%] z-20 text-cream-50 space-y-2.5">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-blush-300 font-medium font-mono">
          <MapPin className="w-3 h-3 text-terracotta" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* Short intro paragraph from user specifications */}
        <p className="font-serif italic text-xs sm:text-sm text-cream-50/90 leading-relaxed font-light">
          "{PERSONAL_INFO.heroTagline}"
        </p>

        <div className="pt-2 flex items-center gap-2">
          {onOpenBook && (
            <button
              onClick={onOpenBook}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-cream-50 text-ink-900 text-[11px] font-semibold uppercase tracking-magazine shadow-md hover:bg-cream-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{isHero ? 'Open Lookbook' : 'Turn to Spread 01'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
            </button>
          )}

          <a
            href={PERSONAL_INFO.resumePath}
            download="Sarvesh_Pandey_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-cream-50/15 text-cream-50 text-[10px] uppercase tracking-wider hover:bg-cream-50/25 transition-all"
            title="Download PDF Resume"
          >
            <Download className="w-3.5 h-3.5 text-sand-200" />
            <span>CV</span>
          </a>
        </div>
      </div>

      {/* Bottom Right Page Number Stamp in Sage-500 square */}
      <div className="absolute bottom-6 right-6 z-20 text-right">
        <span className="font-serif italic text-2xl font-bold text-cream-50/90 block leading-none">
          01
        </span>
        <span className="text-[9px] uppercase tracking-widest font-mono text-cream-50/75">
          COVER
        </span>
      </div>
    </div>
  );
};
