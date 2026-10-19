import React from 'react';
import { motion } from 'framer-motion';

interface BotanicalProps {
  className?: string;
  style?: React.CSSProperties;
  swayDuration?: number;
  delay?: number;
}

// 1. Eucalyptus Branch: round, alternating silver-dollar leaves
export const EucalyptusSprig: React.FC<BotanicalProps> = ({
  className = 'w-32 h-64',
  style,
  swayDuration = 8,
  delay = 0,
}) => {
  return (
    <motion.svg
      viewBox="0 0 140 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{ rotate: [-3.5, 3.5, -3.5] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Main Curved Stem */}
      <motion.path
        d="M 68 310 C 65 240, 72 160, 68 12"
        stroke="#5F7A6B"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay, ease: 'easeOut' }}
      />
      
      {/* Eucalyptus Leaves with soft sage-300 fill and sage-700 outline */}
      <g stroke="#5F7A6B" strokeWidth="1.2">
        {/* Leaf Pair 1 (Bottom) */}
        <motion.path
          d="M 67 270 C 40 265, 20 280, 24 295 C 30 308, 55 295, 67 274"
          fill="#B7C8BA"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
        <motion.path
          d="M 69 265 C 95 260, 115 272, 112 288 C 108 300, 85 290, 69 269"
          fill="#8FA89A"
          fillOpacity="0.8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        />

        {/* Leaf Pair 2 */}
        <motion.path
          d="M 68 215 C 38 208, 18 222, 22 238 C 28 250, 52 240, 68 219"
          fill="#E4EBE4"
          fillOpacity="0.9"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.6 }}
        />
        <motion.path
          d="M 70 210 C 98 205, 120 216, 116 230 C 112 242, 88 232, 70 213"
          fill="#B7C8BA"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.7 }}
        />

        {/* Leaf Pair 3 */}
        <motion.path
          d="M 69 155 C 42 148, 25 160, 28 174 C 34 184, 56 176, 69 158"
          fill="#8FA89A"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.9 }}
        />
        <motion.path
          d="M 71 150 C 96 144, 115 154, 112 168 C 108 178, 86 170, 71 153"
          fill="#E4EBE4"
          fillOpacity="0.9"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 1.0 }}
        />

        {/* Leaf Pair 4 */}
        <motion.path
          d="M 68 95 C 46 90, 32 100, 36 112 C 40 120, 58 114, 68 98"
          fill="#B7C8BA"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 1.2 }}
        />
        <motion.path
          d="M 70 90 C 92 84, 108 94, 104 105 C 100 114, 82 108, 70 93"
          fill="#8FA89A"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 1.3 }}
        />

        {/* Top Tip Leaves */}
        <motion.path
          d="M 68 45 C 50 40, 42 48, 45 58 C 50 64, 62 60, 68 48"
          fill="#E4EBE4"
          fillOpacity="0.9"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 1.4 }}
        />
        <motion.path
          d="M 69 40 C 85 36, 96 44, 93 54 C 90 62, 78 56, 69 43"
          fill="#B7C8BA"
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 1.5 }}
        />
        <motion.circle
          cx="68"
          cy="12"
          r="5"
          fill="#8FA89A"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 1.6 }}
        />
      </g>
    </motion.svg>
  );
};

// 2. Olive Sprig with slender leaves and delicate olive fruit
export const OliveSprig: React.FC<BotanicalProps> = ({
  className = 'w-36 h-48',
  style,
  swayDuration = 9,
  delay = 0.2,
}) => {
  return (
    <motion.svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{ rotate: [3, -3, 3] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Olive Main Stem */}
      <motion.path
        d="M 20 200 C 60 170, 95 110, 145 25"
        stroke="#5F7A6B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay, ease: 'easeOut' }}
      />

      {/* Slender Olive Leaves */}
      <g stroke="#5F7A6B" strokeWidth="1.2">
        <motion.path
          d="M 45 178 C 30 160, 22 135, 38 128 C 52 135, 52 162, 45 178 Z"
          fill="#8FA89A"
          fillOpacity="0.85"
        />
        <motion.path
          d="M 68 150 C 72 130, 85 115, 100 120 C 102 135, 84 150, 68 150 Z"
          fill="#B7C8BA"
          fillOpacity="0.8"
        />
        <motion.path
          d="M 85 125 C 70 105, 62 80, 80 75 C 92 82, 92 108, 85 125 Z"
          fill="#8FA89A"
          fillOpacity="0.85"
        />
        <motion.path
          d="M 112 95 C 122 75, 138 65, 148 72 C 146 88, 126 100, 112 95 Z"
          fill="#B7C8BA"
          fillOpacity="0.8"
        />
        <motion.path
          d="M 132 60 C 130 40, 140 20, 155 22 C 158 35, 148 55, 132 60 Z"
          fill="#E4EBE4"
          fillOpacity="0.9"
        />

        {/* Small Olives */}
        <ellipse cx="62" cy="168" rx="6" ry="8" transform="rotate(-20 62 168)" fill="#5F7A6B" />
        <ellipse cx="108" cy="115" rx="6" ry="8" transform="rotate(25 108 115)" fill="#5F7A6B" />
      </g>
    </motion.svg>
  );
};

// 3. Pampas Grass Plume: soft, airy textured lines in warm sand tones
export const PampasGrass: React.FC<BotanicalProps> = ({
  className = 'w-24 h-56',
  style,
  swayDuration = 7.5,
  delay = 0.4,
}) => {
  return (
    <motion.svg
      viewBox="0 0 100 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{ rotate: [-4, 4, -4] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <motion.path
        d="M 50 255 C 50 180, 48 100, 52 10"
        stroke="#CDB39B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay }}
      />
      {/* Plume Tufts */}
      <g stroke="#E6D5C3" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <path d="M 50 190 C 35 175, 20 180, 12 185" />
        <path d="M 50 185 C 65 170, 80 174, 88 180" />
        <path d="M 50 160 C 32 142, 16 150, 8 155" />
        <path d="M 50 155 C 68 138, 84 144, 92 150" />
        <path d="M 50 130 C 30 110, 18 118, 10 124" />
        <path d="M 50 125 C 70 108, 86 114, 90 120" />
        <path d="M 50 100 C 35 82, 22 90, 16 94" />
        <path d="M 50 95 C 66 78, 80 84, 85 90" />
        <path d="M 50 70 C 38 55, 28 62, 24 66" />
        <path d="M 50 65 C 62 50, 74 56, 78 60" />
        <path d="M 51 40 C 44 28, 38 32, 34 35" />
        <path d="M 51 35 C 58 24, 66 28, 70 32" />
        <path d="M 52 20 C 50 12, 53 8, 52 6" />
      </g>
    </motion.svg>
  );
};

// 4. Wildflower Sprig with tiny blush petals and delicate foliage
export const WildflowerSprig: React.FC<BotanicalProps> = ({
  className = 'w-24 h-48',
  style,
  swayDuration = 8.5,
  delay = 0.3,
}) => {
  return (
    <motion.svg
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{ rotate: [3.5, -3.5, 3.5] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <motion.path
        d="M 50 195 C 48 140, 52 80, 50 15"
        stroke="#8FA89A"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay }}
      />
      {/* Side Leaves */}
      <path d="M 49 150 C 35 145, 26 152, 22 160 C 32 162, 45 158, 49 150 Z" fill="#B7C8BA" stroke="#5F7A6B" strokeWidth="1" />
      <path d="M 51 125 C 65 120, 74 126, 78 134 C 68 136, 55 132, 51 125 Z" fill="#E4EBE4" stroke="#5F7A6B" strokeWidth="1" />
      <path d="M 49 85 C 38 80, 30 86, 26 94 C 36 96, 46 92, 49 85 Z" fill="#B7C8BA" stroke="#5F7A6B" strokeWidth="1" />

      {/* Wildflowers at branch tips (blush-300 / blush-500) */}
      <g>
        {/* Flower 1 */}
        <circle cx="50" cy="18" r="5" fill="#EBD3CB" stroke="#D9B3A7" strokeWidth="1.2" />
        <circle cx="50" cy="18" r="1.8" fill="#C58B72" />
        
        {/* Flower 2 */}
        <path d="M 51 60 C 65 55, 75 48, 80 42" stroke="#8FA89A" strokeWidth="1.2" />
        <circle cx="80" cy="42" r="4.5" fill="#F6E6E0" stroke="#D9B3A7" strokeWidth="1.2" />
        <circle cx="80" cy="42" r="1.5" fill="#C58B72" />

        {/* Flower 3 */}
        <path d="M 49 105 C 35 100, 25 94, 20 88" stroke="#8FA89A" strokeWidth="1.2" />
        <circle cx="20" cy="88" r="4.2" fill="#EBD3CB" stroke="#D9B3A7" strokeWidth="1.2" />
        <circle cx="20" cy="88" r="1.5" fill="#C58B72" />
      </g>
    </motion.svg>
  );
};

// 5. Monstera Leaf: Stylized silhouette with signature cutouts in soft sage
export const MonsteraLeaf: React.FC<BotanicalProps> = ({
  className = 'w-40 h-48',
  style,
  swayDuration = 9.5,
  delay = 0.5,
}) => {
  return (
    <motion.svg
      viewBox="0 0 180 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <motion.path
        d="M 90 190 C 88 150, 90 90, 92 15"
        stroke="#5F7A6B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Monstera blade outline with cutouts */}
      <motion.path
        d="M 90 20 C 130 30, 165 70, 160 120 C 158 135, 142 140, 135 130 C 128 120, 138 105, 145 95 C 130 90, 118 105, 120 120 C 122 135, 105 145, 96 138 C 92 125, 100 110, 105 95 C 92 90, 80 110, 84 125 C 75 145, 58 135, 60 120 C 62 105, 50 90, 35 95 C 42 105, 52 120, 45 130 C 38 140, 22 135, 20 120 C 15 70, 50 30, 90 20 Z"
        fill="#8FA89A"
        fillOpacity="0.8"
        stroke="#5F7A6B"
        strokeWidth="1.5"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay }}
      />
    </motion.svg>
  );
};
