import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Petals } from './Petals';
import { EucalyptusSprig } from './BotanicalArt';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'blobs' | 'drawing' | 'opening' | 'finished'>('blobs');

  useEffect(() => {
    // Stage 1: Blobs enter (0 - 600ms)
    const t1 = setTimeout(() => {
      setPhase('drawing');
    }, 600);

    // Stage 2: SP Monogram strokes in (600ms - 2200ms)
    const t2 = setTimeout(() => {
      setPhase('opening');
    }, 2200);

    // Stage 3: Cover 3D opens, reveals site (2200ms - 3200ms)
    const t3 = setTimeout(() => {
      setPhase('finished');
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('finished');
    onComplete();
  };

  if (phase === 'finished') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-botanical-canvas overflow-hidden select-none"
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

        {/* Floating petals */}
        <Petals count={10} />

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 px-3.5 py-1.5 rounded-full bg-sand-200/50 hover:bg-sand-200 text-ink-900 text-[11px] font-mono uppercase tracking-widest backdrop-blur-sm transition-all border border-sand-300"
        >
          Skip Intro ✕
        </button>

        {/* Ambient Blobs & Stems Drawing In */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blush-300 filter blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sage-300 filter blur-3xl"
        />

        {/* Faint Botanical Sprig in margin */}
        <div className="absolute bottom-6 left-6 pointer-events-none opacity-35 hidden sm:block">
          <EucalyptusSprig className="w-28 h-56" />
        </div>

        {/* 3D Perspective Stage for Closed Magazine */}
        <div className="relative perspective-[1800px] w-[320px] sm:w-[380px] aspect-[1/1.414]">
          {/* Back base cover / inside page */}
          <div className="absolute inset-0 rounded-2xl bg-cream-50 shadow-book p-6 flex flex-col justify-between border border-sand-200 overflow-hidden">
            <div className="flex items-center justify-between border-b border-sand-200 pb-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700">
                LOOKBOOK • VOL. 2026
              </span>
              <span className="font-serif italic text-xs text-terracotta">
                SARVESH PANDEY
              </span>
            </div>
            <div className="text-center space-y-2">
              <span className="font-serif italic text-xl text-ink-900 block">
                Opening Portfolio Edition...
              </span>
              <span className="text-[11px] font-mono text-ink-700">
                Data Scientist & Generative AI Developer
              </span>
            </div>
            <div className="pt-3 border-t border-sand-200 flex justify-between text-[10px] font-mono text-ink-700">
              <span>01 / COVER</span>
              <span>LUCKNOW, IN</span>
            </div>
          </div>

          {/* Turning Front Cover Door */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: phase === 'opening' ? -155 : 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
            }}
            className="absolute inset-0 rounded-2xl bg-cream-50 shadow-[0_25px_50px_-12px_rgba(43,48,46,0.35)] border border-sand-200 overflow-hidden"
          >
            {/* Front Cover Layout */}
            <div className="relative w-full h-full bg-cream-50 overflow-hidden">
              {/* Exact 4-block split */}
              <div className="absolute top-0 left-0 w-[68%] h-[65%] bg-blush-300" />
              <div className="absolute top-0 right-0 w-[32%] h-[65%] bg-ink-700" />
              <div className="absolute bottom-0 left-0 w-[68%] h-[35%] bg-ink-700" />
              <div className="absolute bottom-0 right-0 w-[32%] h-[35%] bg-sage-500" />

              {/* Sand Organic Blob Crop */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-sand-400/80 filter blur-xs pointer-events-none" />

              {/* Sweeping Line Art */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 540">
                <motion.path
                  d="M -20 120 C 120 40, 260 220, 400 140"
                  stroke="#FBF7F1"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 60 0 C 180 180, 140 400, 380 500"
                  stroke="#8FA89A"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
                />
              </svg>

              {/* Center Monogram SP. that strokes itself in */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className="w-28 h-28 rounded-3xl bg-ink-900 border-2 border-cream-50/80 shadow-2xl flex items-center justify-center p-3 backdrop-blur-sm">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* S Path */}
                    <motion.path
                      d="M 44 32 C 40 26, 26 26, 22 35 C 18 44, 38 48, 36 60 C 34 70, 18 72, 14 62"
                      stroke="#FBF7F1"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: phase !== 'blobs' ? 1 : 0,
                        opacity: phase !== 'blobs' ? 1 : 0,
                      }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                    />
                    {/* P Path */}
                    <motion.path
                      d="M 52 70 L 52 28 C 52 28, 76 26, 76 42 C 76 56, 52 56, 52 56"
                      stroke="#EBD3CB"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: phase !== 'blobs' ? 1 : 0,
                        opacity: phase !== 'blobs' ? 1 : 0,
                      }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
                    />
                    {/* Monogram Dot */}
                    <motion.circle
                      cx="84"
                      cy="68"
                      r="4"
                      fill="#C58B72"
                      initial={{ scale: 0 }}
                      animate={{ scale: phase !== 'blobs' ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 1.4, type: 'spring' }}
                    />
                  </svg>
                </div>

                {/* Cover Title Label Box */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-4 px-4 py-1.5 rounded-xs bg-ink-700 text-cream-50 shadow-lg border-l-2 border-terracotta"
                >
                  <span className="font-serif italic text-sm tracking-widest block font-medium">
                    Sarvesh Pandey
                  </span>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-[10px] font-mono tracking-widest text-ink-900 uppercase mt-2 bg-cream-50/90 px-2 py-0.5 rounded shadow-2xs border border-sand-200"
                >
                  Data Scientist & GenAI Developer
                </motion.span>
              </div>

              {/* Dynamic Gutter & Spine Lighting */}
              <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/25 via-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Backside of turning cover door */}
            <div
              style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
              className="absolute inset-0 bg-sand-200/50 flex items-center justify-center p-6 border-l border-sand-300"
            >
              <div className="text-center font-serif italic text-ink-700">
                Welcome to the Lookbook
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
