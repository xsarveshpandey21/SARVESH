import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { ProjectItem } from '../data/portfolio';
import { ChatUIMockup, N8nWorkflowMockup, ChurnDashboardMockup, SalesTimeSeriesMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const renderMockup = (type: string) => {
    switch (type) {
      case 'chat':
        return <ChatUIMockup className="h-64 sm:h-80" />;
      case 'n8n':
        return <N8nWorkflowMockup className="h-64 sm:h-80" />;
      case 'churn':
        return <ChurnDashboardMockup className="h-64 sm:h-80" />;
      case 'sales':
        return <SalesTimeSeriesMockup className="h-64 sm:h-80" />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-cream dark:bg-charcoal rounded-2xl shadow-2xl border border-sand/40 dark:border-slate/60 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-sand/30 dark:border-slate/50 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] uppercase tracking-widest-plus text-terracotta font-medium">
                  {project.category}
                </span>
                <span className="text-slate/40 dark:text-cream/30">•</span>
                <span className="text-xs text-slate/70 dark:text-cream/60 font-serif italic">
                  {project.year}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal dark:text-cream">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-sand/30 dark:hover:bg-slate/40 text-slate dark:text-cream transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Visual Mockup */}
            <div className="rounded-xl overflow-hidden shadow-framed dark:shadow-framed-dark">
              {renderMockup(project.mockupType)}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/70 mb-2">
                Architecture & Implementation
              </h4>
              <p className="text-sm sm:text-base text-slate/85 dark:text-cream/85 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Verified Metrics */}
            <div>
              <h4 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/70 mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-sand/20 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                    <span className="text-xs font-medium text-charcoal dark:text-cream">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/70 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-slate/10 dark:bg-cream/10 text-charcoal dark:text-cream font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 bg-sand/20 dark:bg-charcoal-dark border-t border-sand/30 dark:border-slate/50 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate/70 dark:text-cream/60 italic font-serif">
              Source code placeholder linked to developer profile
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate hover:bg-slate-dark text-cream text-xs font-medium uppercase tracking-magazine transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
