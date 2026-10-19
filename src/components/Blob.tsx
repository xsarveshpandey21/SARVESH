import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface BlobProps {
  color?: 'blush' | 'sage' | 'sand' | 'terracotta' | 'slate';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  delay?: number;
  duration?: number;
  opacity?: number;
  parallax?: boolean;
}

const colorMap = {
  blush: '#EBD3CB',
  sage: '#8FA89A',
  sand: '#CDB39B',
  terracotta: '#C58B72',
  slate: '#4F5A5E',
};

const sizeMap = {
  sm: 'w-48 h-48 md:w-64 md:h-64',
  md: 'w-64 h-64 md:w-80 md:h-80',
  lg: 'w-80 h-80 md:w-[28rem] md:h-[28rem]',
  xl: 'w-96 h-96 md:w-[36rem] md:h-[36rem]',
};

// 4 organic bezier spline states with identical cubic bezier command structure
const MORPH_PATHS = [
  // Shape 1: Rounded asymmetrical bean
  "M 200,45 C 310,35 365,115 355,215 C 345,315 275,365 185,355 C 95,345 35,275 45,175 C 55,75 110,55 200,45 Z",
  // Shape 2: Tilted droplet
  "M 215,35 C 330,65 385,155 345,245 C 305,335 225,375 145,345 C 65,315 25,225 55,135 C 85,45 135,35 215,35 Z",
  // Shape 3: Organic pebble
  "M 190,55 C 295,25 375,95 365,195 C 355,295 285,370 195,360 C 105,350 45,285 35,185 C 25,85 105,65 190,55 Z",
  // Shape 4: Soft rounded star-like polygon
  "M 200,40 C 305,45 370,130 350,225 C 330,320 255,365 170,350 C 85,335 35,250 50,155 C 65,60 120,40 200,40 Z",
];

export const Blob: React.FC<BlobProps> = ({
  color = 'blush',
  size = 'md',
  className = '',
  delay = 0,
  duration = 13,
  opacity = 0.5,
  parallax = true,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 40, stiffness: 60 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 60 });

  useEffect(() => {
    if (!parallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * 0.035;
      const y = (e.clientY - innerHeight / 2) * 0.035;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [parallax, mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 1.2, delay }}
      style={{
        x: parallax ? springX : 0,
        y: parallax ? springY : 0,
      }}
      className={`absolute pointer-events-none filter blur-2xl md:blur-3xl transition-opacity ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full overflow-visible"
        fill="none"
      >
        <motion.path
          d={MORPH_PATHS[0]}
          animate={{
            d: [
              MORPH_PATHS[0],
              MORPH_PATHS[1],
              MORPH_PATHS[2],
              MORPH_PATHS[3],
              MORPH_PATHS[0],
            ],
            rotate: [0, 8, -6, 4, 0],
          }}
          transition={{
            d: {
              repeat: Infinity,
              duration,
              ease: 'easeInOut',
              delay,
            },
            rotate: {
              repeat: Infinity,
              duration: duration * 1.2,
              ease: 'easeInOut',
              delay,
            },
          }}
          fill={colorMap[color]}
        />
      </svg>
    </motion.div>
  );
};
