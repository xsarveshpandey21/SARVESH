import React from 'react';
import type { LiveProject } from '../data/liveProjects';

interface DeployTimelineProps {
  projects: LiveProject[];
  onSelectProject: (project: LiveProject) => void;
}

export const DeployTimeline: React.FC<DeployTimelineProps> = ({ projects, onSelectProject }) => {
  // Sort by deployedDate
  const sorted = [...projects].sort(
    (a, b) => new Date(a.deployedDate).getTime() - new Date(b.deployedDate).getTime()
  );

  return (
    <div className="py-4 border-t border-b border-sand-200/60 dark:border-darkgreen-border my-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-mono tracking-label text-ink-700/70 dark:text-cream-50/60">
          OCTOBER 2026 DEPLOYMENT HORIZON
        </span>
        <span className="text-[10px] font-mono text-terracotta">
          {sorted.length} Production Systems
        </span>
      </div>

      {/* Horizontal Timeline Bar */}
      <div className="relative flex items-center justify-between pt-3 pb-1 overflow-x-auto">
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-sand-200 dark:bg-darkgreen-border -z-0" />

        {sorted.map((p) => (
          <button
            key={p.slug}
            onClick={() => onSelectProject(p)}
            className="group relative flex flex-col items-center focus:outline-none z-10 px-2 shrink-0"
            title={`${p.title} (${p.deployedAt})`}
          >
            {/* Interactive Timeline Dot */}
            <div className="w-3.5 h-3.5 rounded-full bg-cream-50 border-2 border-sage-500 group-hover:border-terracotta group-hover:scale-125 transition-transform shadow-xs" />

            {/* Date and Hover Title */}
            <span className="mt-1 text-[9px] font-mono text-ink-500 dark:text-cream-50/50 group-hover:text-ink-900 dark:group-hover:text-cream-50 transition-colors">
              Oct {new Date(p.deployedDate).getDate()}
            </span>

            {/* Tooltip on hover */}
            <div className="absolute -top-7 hidden group-hover:block bg-ink-700 text-cream-50 text-[10px] font-mono px-2 py-0.5 rounded shadow-md whitespace-nowrap pointer-events-none">
              {p.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
