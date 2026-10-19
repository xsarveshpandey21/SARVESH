import React from 'react';
import { motion } from 'framer-motion';

interface LabelBoxProps {
  children: React.ReactNode;
  accentColor?: 'terracotta' | 'sage' | 'sand' | 'blush';
  className?: string;
  animateIn?: boolean;
}

export const LabelBox: React.FC<LabelBoxProps> = ({
  children,
  accentColor = 'terracotta',
  className = '',
  animateIn = false,
}) => {
  const accentBorder = {
    terracotta: 'border-terracotta',
    sage: 'border-sage-500',
    sand: 'border-sand-400',
    blush: 'border-blush-300',
  }[accentColor];

  const content = (
    <div
      className={`bg-ink-700 text-cream-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xs shadow-lift border-l-[3px] ${accentBorder} inline-block select-none ${className}`}
    >
      <span className="font-serif italic text-sm sm:text-base font-light tracking-wide text-cream-50 block leading-tight">
        {children}
      </span>
    </div>
  );

  if (!animateIn) return content;

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 14, stiffness: 110 }}
    >
      {content}
    </motion.div>
  );
};
