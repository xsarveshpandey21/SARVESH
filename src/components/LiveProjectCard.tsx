import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Calendar } from 'lucide-react';
import type { LiveProject } from '../data/liveProjects';
import { useLiveStatus } from '../hooks/useLiveStatus';
import { StatusBadge } from './StatusBadge';
import { LabelBox } from './LabelBox';

interface LiveProjectCardProps {
  project: LiveProject;
  onPreview: (project: LiveProject) => void;
  tiltDegree?: number;
}

export const LiveProjectCard: React.FC<LiveProjectCardProps> = ({
  project,
  onPreview,
  tiltDegree = 0,
}) => {
  const liveStatus = useLiveStatus(project.url);

  return (
    <motion.div
      whileHover={{ y: -5, rotate: 0 }}
      style={{ rotate: tiltDegree }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-[20px] bg-paper dark:bg-darkgreen-surface border border-sand-200 dark:border-darkgreen-border shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col justify-between overflow-hidden p-5"
    >
      {/* Top Framed Browser Window Bar */}
      <div className="rounded-xl overflow-hidden border border-sand-200/80 dark:border-darkgreen-border bg-cream-50 dark:bg-darkgreen mb-4">
        {/* Browser Title Bar */}
        <div className="px-3.5 py-2 bg-sand-200/30 dark:bg-darkgreen-border/50 border-b border-sand-200/60 dark:border-darkgreen-border flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blush-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-sand-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-sage-500" />
          </div>

          <span className="font-mono text-[10px] text-ink-500 dark:text-cream-50/60 truncate max-w-[180px]">
            {project.url.replace('https://', '')}
          </span>

          <StatusBadge status={liveStatus} />
        </div>

        {/* Browser Viewport Simulation */}
        <div className="relative h-36 bg-gradient-to-br from-cream-50 via-blush-100/30 to-sage-100/40 dark:from-darkgreen dark:to-darkgreen-surface p-4 flex flex-col justify-between overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#4A5552_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.07] pointer-events-none" />

          {/* Overlapping Signature LabelBox with Project Title */}
          <div className="relative z-10 -ml-1">
            <LabelBox accentColor="sage" className="!py-1.5 !px-3.5 text-xs sm:text-sm">
              {project.title}
            </LabelBox>
          </div>

          <p className="relative z-10 text-[11px] text-ink-700 dark:text-cream-50/80 font-light line-clamp-2 mt-2">
            {project.description}
          </p>

          <div className="relative z-10 flex items-center justify-between pt-2">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cream-50/90 dark:bg-darkgreen-border text-ink-700 dark:text-cream-50/90 shadow-2xs">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-ink-500 dark:text-cream-50/50">
              <Calendar className="w-3 h-3 text-terracotta" />
              <span>{project.deployedAt}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Narrative & Tags */}
      <div>
        <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-3">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-sand-200/40 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons: "Open Live Site" (terracotta) and "Quick Preview" (outline) */}
      <div className="pt-3 border-t border-sand-200/60 dark:border-darkgreen-border flex items-center justify-between gap-2">
        <button
          onClick={() => onPreview(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sand-400 text-ink-900 dark:text-cream-50 hover:bg-sand-200/40 text-xs font-mono transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-sage-700 dark:text-sage-300" />
          <span>Quick Preview</span>
        </button>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream-50 text-xs font-mono font-medium shadow-xs transition-colors"
        >
          <span>Open Live Site</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
};
