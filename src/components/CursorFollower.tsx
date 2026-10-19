import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isDesktop = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('#magazine-view')) {
        setCursorText('Drag');
        setIsHovered(true);
      } else if (target.closest('#projects, .project-card')) {
        setCursorText('View');
        setIsHovered(true);
      } else if (target.closest('a, button, input, textarea, select, [role="button"], .clickable')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          scale: cursorText ? 2.8 : isHovered ? 2.2 : 1,
          borderColor: isHovered ? '#C58B72' : '#8FA89A',
          backgroundColor: isHovered ? 'rgba(235, 211, 203, 0.45)' : 'rgba(235, 211, 203, 0.15)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="w-8 h-8 rounded-full border border-slate/40 dark:border-cream/40 backdrop-blur-[1px] flex items-center justify-center"
      >
        {cursorText && (
          <span className="text-[7px] uppercase font-mono tracking-widest font-bold text-charcoal select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
