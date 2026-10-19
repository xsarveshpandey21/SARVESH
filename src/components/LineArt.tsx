import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface LineArtSweepProps {
  variant?: 'wave1' | 'wave2' | 's-curve' | 'vertical-flow' | 'cover-sweep';
  color?: 'sage' | 'slate' | 'sand' | 'terracotta' | 'white';
  className?: string;
}

export const LineArtSweep: React.FC<LineArtSweepProps> = ({
  variant = 'wave1',
  color = 'sage',
  className = '',
}) => {
  const { scrollYProgress } = useScroll();
  const pathSpring = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  });

  const strokeColors: Record<string, string> = {
    sage: '#8FA89A',
    slate: '#4F5A5E',
    sand: '#CDB39B',
    terracotta: '#C58B72',
    white: '#F6EFE6',
  };

  const paths = {
    wave1: "M 0 100 C 300 0, 700 200, 1000 80 C 1300 -40, 1600 160, 2000 60",
    wave2: "M 0 80 C 400 180, 800 -20, 1200 120 C 1600 240, 1800 20, 2000 100",
    's-curve': "M 100 0 C 120 400, -50 800, 100 1200 C 250 1600, 80 2000, 150 2400",
    'vertical-flow': "M 50 0 Q 150 500, 50 1000 T 50 2000",
    'cover-sweep': "M -40 220 C 160 80, 420 340, 640 180",
  };

  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox={variant.startsWith('wave') ? "0 0 2000 200" : variant === 'cover-sweep' ? "0 0 600 400" : "0 0 300 2400"}
        fill="none"
        className="w-full h-full opacity-40 dark:opacity-30"
      >
        {/* Animated Dashed Stroke */}
        <motion.path
          d={paths[variant]}
          stroke={strokeColors[color] || '#8FA89A'}
          strokeWidth="1.75"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ pathLength: pathSpring }}
        />
        {/* Animated Solid Hairline */}
        <motion.path
          d={paths[variant]}
          stroke={strokeColors[color] || '#8FA89A'}
          strokeWidth="1.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </div>
  );
};

export const EditorialPattern: React.FC<{
  type?: 'dots' | 'crosses' | 'circles';
  className?: string;
}> = ({ type = 'dots', className = '' }) => {
  if (type === 'crosses') {
    return (
      <div className={`grid grid-cols-4 gap-4 opacity-25 dark:opacity-20 pointer-events-none ${className}`} aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="text-slate dark:text-cream text-xs select-none font-light">＋</span>
        ))}
      </div>
    );
  }

  if (type === 'circles') {
    return (
      <div className={`flex gap-3 items-center opacity-30 pointer-events-none ${className}`} aria-hidden="true">
        <div className="w-3 h-3 rounded-full border border-slate dark:border-cream" />
        <div className="w-2 h-2 rounded-full bg-terracotta" />
        <div className="w-4 h-4 rounded-full border border-dashed border-sage" />
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-6 gap-2.5 opacity-25 dark:opacity-20 pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="w-1 h-1 rounded-full bg-slate dark:bg-cream" />
      ))}
    </div>
  );
};
