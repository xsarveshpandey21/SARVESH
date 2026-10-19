import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles } from 'lucide-react';
import type { LiveProject } from '../data/liveProjects';

interface PreviewModalProps {
  project: LiveProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ project, isOpen, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeError, setIframeError] = useState(false);

  const [lastSlug, setLastSlug] = useState(project?.slug);
  if (project && project.slug !== lastSlug) {
    setLastSlug(project.slug);
    setIframeError(false);
  }

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const deviceWidths = {
    desktop: 'max-w-4xl',
    tablet: 'max-w-xl',
    mobile: 'max-w-xs',
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
          className="fixed inset-0 bg-ink-900/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          className={`relative w-full ${deviceWidths[device]} bg-cream-50 dark:bg-darkgreen-surface rounded-2xl sm:rounded-3xl shadow-2xl border border-sand-200 dark:border-darkgreen-border z-10 overflow-hidden flex flex-col transition-all duration-300`}
        >
          {/* Top Bar: Laptop / Device Header */}
          <div className="p-4 bg-sand-200/40 dark:bg-darkgreen-border/50 border-b border-sand-200 dark:border-darkgreen-border flex items-center justify-between gap-3">
            {/* Window Dots & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blush-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-sand-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-sage-500" />
              </div>
              <span className="font-mono text-xs text-ink-700 dark:text-cream-50/80 truncate max-w-[200px] sm:max-w-xs">
                {project.url.replace('https://', '')}
              </span>
            </div>

            {/* Device Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-cream-50 dark:bg-darkgreen p-1 rounded-xl border border-sand-200 dark:border-darkgreen-border">
              <button
                onClick={() => setDevice('desktop')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  device === 'desktop'
                    ? 'bg-ink-700 text-cream-50'
                    : 'text-ink-700 dark:text-cream-50/70 hover:bg-sand-200/50'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  device === 'tablet'
                    ? 'bg-ink-700 text-cream-50'
                    : 'text-ink-700 dark:text-cream-50/70 hover:bg-sand-200/50'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  device === 'mobile'
                    ? 'bg-ink-700 text-cream-50'
                    : 'text-ink-700 dark:text-cream-50/70 hover:bg-sand-200/50'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream-50 text-xs font-mono font-medium shadow-xs"
              >
                <span>Visit Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-sand-200/60 dark:hover:bg-darkgreen-border text-ink-700 dark:text-cream-50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Device Screen Body */}
          <div className="relative aspect-[16/10] w-full bg-cream-100 dark:bg-darkgreen overflow-hidden">
            {!iframeError ? (
              <iframe
                src={project.url}
                title={`${project.title} live interactive preview`}
                onError={() => setIframeError(true)}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              /* Fallback preview */
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-cream-50 dark:bg-darkgreen-surface">
                <Sparkles className="w-8 h-8 text-terracotta mb-3" />
                <h4 className="font-serif text-xl font-normal text-ink-900 dark:text-cream-50 mb-1">
                  {project.title}
                </h4>
                <p className="text-xs text-ink-700 dark:text-cream-50/70 max-w-md mb-4 font-light">
                  {project.summary}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-terracotta text-cream-50 text-xs font-mono font-medium flex items-center gap-2"
                >
                  <span>Open directly in new window</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-cream-50 dark:bg-darkgreen-surface border-t border-sand-200 dark:border-darkgreen-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="font-serif italic font-semibold text-ink-900 dark:text-cream-50 mr-2">
                {project.title}
              </span>
              <span className="text-ink-500 dark:text-cream-50/50">
                Deployed {project.deployedAt} • Category: {project.category}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-sand-200/40 dark:bg-darkgreen-border text-[10px] text-ink-700 dark:text-cream-50/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
