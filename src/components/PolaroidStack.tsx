import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PolaroidStack: React.FC = () => {
  const [isFanned, setIsFanned] = useState(false);

  const photos = [
    {
      src: '/images/education-botanical.jpg',
      caption: 'Analytical Foundations & Research',
      rotateDefault: -6,
      rotateFanned: -16,
      xDefault: -8,
      xFanned: -60,
      yDefault: 0,
      yFanned: 10,
    },
    {
      src: '/images/about-botanical.jpg',
      caption: 'Natural Algorithms & GenAI Systems',
      rotateDefault: 4,
      rotateFanned: 14,
      xDefault: 8,
      xFanned: 60,
      yDefault: -4,
      yFanned: 12,
    },
    {
      src: '/images/profile.jpg',
      caption: 'Sarvesh Pandey • Data Scientist',
      rotateDefault: 0,
      rotateFanned: 0,
      xDefault: 0,
      xFanned: 0,
      yDefault: -8,
      yFanned: -16,
    },
  ];

  return (
    <div
      onMouseEnter={() => setIsFanned(true)}
      onMouseLeave={() => setIsFanned(false)}
      onClick={() => setIsFanned((prev) => !prev)}
      className="relative w-full max-w-[280px] sm:max-w-[320px] h-[340px] sm:h-[370px] mx-auto cursor-pointer select-none flex items-center justify-center"
      title="Hover or tap to fan out polaroid photos"
    >
      {photos.map((item, index) => {
        const isCenter = index === 2;
        return (
          <motion.div
            key={item.src}
            animate={{
              rotate: isFanned ? item.rotateFanned : item.rotateDefault,
              x: isFanned ? item.xFanned : item.xDefault,
              y: isFanned ? item.yFanned : item.yDefault,
              scale: isCenter ? 1.02 : 0.96,
              zIndex: isCenter ? 30 : index === 1 ? 20 : 10,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute w-[210px] sm:w-[240px] bg-cream-50 p-3 pb-5 rounded-xl shadow-[0_12px_30px_-8px_rgba(43,48,46,0.22)] border border-sand-200 photo-warm-grade"
          >
            {/* Image frame */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-sand-200/40 mb-2.5 shadow-inner">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
              />
            </div>
            {/* Handwritten style font/label */}
            <div className="flex items-center justify-between px-1">
              <span className="font-serif italic text-xs text-ink-900 truncate">
                {item.caption}
              </span>
              <span className="font-mono text-[9px] text-terracotta">
                0{index + 1}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Floating indicator */}
      <div className="absolute -bottom-2 text-[10px] uppercase tracking-widest font-mono text-ink-700 dark:text-cream/70 bg-cream-50/90 dark:bg-darkgreen-surface/90 px-2.5 py-0.5 rounded-full border border-sand-200 shadow-sm pointer-events-none z-40">
        {isFanned ? 'Photos Fanned' : 'Hover to fan stack'}
      </div>
    </div>
  );
};
