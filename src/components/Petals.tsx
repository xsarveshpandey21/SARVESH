import React from 'react';
import { motion } from 'framer-motion';

interface PetalsProps {
  count?: number;
  className?: string;
}

interface Particle {
  id: number;
  xStart: number;
  xEnd: number;
  yDuration: number;
  delay: number;
  scale: number;
  rotateStart: number;
  rotateEnd: number;
  color: string;
  type: 'petal' | 'leaf';
}

const PALETTE_COLORS = [
  '#EBD3CB', // blush-300
  '#F6E6E0', // blush-100
  '#B7C8BA', // sage-300
  '#E4EBE4', // sage-100
  '#E6D5C3', // sand-200
];

export const Petals: React.FC<PetalsProps> = ({ count = 16, className = '' }) => {
  const particles: Particle[] = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      xStart: 5 + (i * 90) / count + Math.sin(i * 3.7) * 4,
      xEnd: 5 + (i * 90) / count + Math.cos(i * 2.3) * 12,
      yDuration: 14 + (i % 5) * 2.5 + ((i * 7) % 4),
      delay: (i * 1.2) % 10,
      scale: 0.6 + (i % 4) * 0.15,
      rotateStart: Math.sin(i * 5.1) * 30,
      rotateEnd: 180 + ((i * 47) % 180),
      color: PALETTE_COLORS[i % PALETTE_COLORS.length],
      type: i % 3 === 0 ? 'leaf' : 'petal',
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-15 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.xStart}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (p.xEnd - p.xStart) * 5, (p.xStart - p.xEnd) * 3, 0],
            rotate: [p.rotateStart, p.rotateEnd],
            opacity: [0, 0.35, 0.45, 0.25, 0],
          }}
          transition={{
            duration: p.yDuration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.type === 'leaf' ? (
            // Small curved leaf
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              style={{ transform: `scale(${p.scale})` }}
            >
              <path
                d="M 11 2 C 20 8, 22 20, 11 26 C 0 20, 2 8, 11 2 Z"
                fill={p.color}
                fillOpacity="0.75"
              />
              <path d="M 11 4 L 11 24" stroke="rgba(74,85,82,0.2)" strokeWidth="0.8" />
            </svg>
          ) : (
            // Soft rounded floral petal
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              style={{ transform: `scale(${p.scale})` }}
            >
              <ellipse
                cx="10"
                cy="12"
                rx="8"
                ry="11"
                transform="rotate(15 10 12)"
                fill={p.color}
                fillOpacity="0.8"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
