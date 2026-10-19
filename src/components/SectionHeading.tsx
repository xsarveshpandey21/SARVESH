import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string; // e.g. "01"
  label: string;  // e.g. "EXPERIENCE"
  title: string;  // e.g. "Work & Engineering"
  italicWord?: string; // e.g. "Impact"
  description?: string;
  align?: 'left' | 'center';
  lightText?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  label,
  title,
  italicWord,
  description,
  align = 'left',
  lightText = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}
    >
      {/* Editorial Number & Category Tag */}
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className="font-serif italic text-lg md:text-xl font-medium text-terracotta">
          {number}
        </span>
        <span className="w-8 h-px bg-slate/30 dark:bg-cream/30" />
        <span className={`text-xs uppercase tracking-widest-plus font-medium ${
          lightText ? 'text-cream/70' : 'text-slate dark:text-cream/70'
        }`}>
          {label}
        </span>
      </div>

      {/* Main Title */}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
        lightText ? 'text-cream' : 'text-charcoal dark:text-cream'
      }`}>
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal text-terracotta dark:text-blush underline decoration-sage/40 decoration-wavy decoration-1 underline-offset-8">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className={`mt-4 text-base md:text-lg font-light leading-relaxed ${
          lightText ? 'text-cream/80' : 'text-slate-600 dark:text-cream/75'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
