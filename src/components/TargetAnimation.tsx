import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Award } from 'lucide-react';

export const TargetAnimation: React.FC = () => {
  const [hasHit, setHasHit] = useState(false);
  const [hitCount, setHitCount] = useState(1);

  const triggerHit = () => {
    setHasHit(true);
    setHitCount((prev) => prev + 1);
    setTimeout(() => setHasHit(false), 900);
  };

  return (
    <div
      onClick={triggerHit}
      className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto flex items-center justify-center cursor-pointer select-none group"
      title="Click target to lock crosshair and fire bullseye shot!"
    >
      {/* Concentric Target Rings */}
      <div className="absolute inset-2 rounded-full border border-sand-300 dark:border-darkgreen-border flex items-center justify-center">
        <div className="w-[82%] h-[82%] rounded-full border border-sand-300 dark:border-darkgreen-border flex items-center justify-center">
          <div className="w-[64%] h-[64%] rounded-full border-2 border-sage-500/60 dark:border-sage-500/40 flex items-center justify-center">
            <div className="w-[45%] h-[45%] rounded-full bg-sand-200/30 dark:bg-darkgreen-border/30 border border-terracotta/40 flex items-center justify-center">
              {/* Center 10-Ring Gold Bullseye */}
              <div className="w-6 h-6 rounded-full bg-sand-400 text-ink-900 flex items-center justify-center font-mono text-[9px] font-bold shadow-md">
                10
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crosshair Horizontal & Vertical Lines */}
      <div className="absolute inset-x-0 h-px bg-terracotta/40 pointer-events-none group-hover:bg-terracotta transition-colors" />
      <div className="absolute inset-y-0 w-px bg-terracotta/40 pointer-events-none group-hover:bg-terracotta transition-colors" />

      {/* Animated Reticle Crosshair */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute w-20 h-20 rounded-full border-2 border-dashed border-terracotta/70 pointer-events-none"
      />

      {/* Hit Ripple Wave */}
      <AnimatePresence>
        {hasHit && (
          <motion.div
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute w-20 h-20 rounded-full bg-amber-400/30 border-2 border-amber-500 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Floating Center Icon */}
      <div className="relative z-10 p-2 rounded-full bg-cream dark:bg-charcoal shadow-md border border-terracotta/30 group-hover:scale-110 transition-transform">
        <Target className="w-5 h-5 text-terracotta" />
      </div>

      {/* Badge Pill */}
      <div className="absolute -bottom-2 bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-medium flex items-center gap-1 shadow-sm">
        <Award className="w-3 h-3 text-amber-600 dark:text-amber-400" />
        <span>Bullseye Score: {hitCount * 10}</span>
      </div>
    </div>
  );
};
