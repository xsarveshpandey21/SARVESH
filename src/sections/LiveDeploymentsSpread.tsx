import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Spread } from '../components/Spread';
import { CountUp } from '../components/CountUp';
import { PUBLIC_LIVE_PROJECTS, type LiveProject } from '../data/liveProjects';
import { LiveProjectCard } from '../components/LiveProjectCard';
import { PreviewModal } from '../components/PreviewModal';
import { DeployTimeline } from '../components/DeployTimeline';

export const LiveDeploymentsSpread: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [previewProject, setPreviewProject] = useState<LiveProject | null>(null);

  const categories = ['All', 'AI', 'Data', 'Web App', 'Media', 'E-commerce'];

  // Filter ONLY public projects by category
  const filteredProjects = PUBLIC_LIVE_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const pageSize = 4; // 2x2 grid
  const totalPages = Math.ceil(filteredProjects.length / pageSize) || 1;
  const paginatedProjects = filteredProjects.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(0);
  };

  const leftPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-4 h-4 text-sage-700 dark:text-sage-300" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            VERCEL DEPLOYMENT FLEET
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Live on the <span className="italic text-sage-700 dark:text-sage-300">Web</span>
        </h2>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6">
          Real production applications, client platforms, and interactive AI dashboards deployed to Vercel edge networks during October 2026.
        </p>

        {/* Public Projects Count-Up & Stat Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300 dark:border-darkgreen-border shadow-soft flex items-center justify-between mb-6">
          <div>
            <div className="font-serif text-3xl font-bold text-ink-900 dark:text-cream-50 leading-none mb-1">
              <CountUp value={PUBLIC_LIVE_PROJECTS.length} suffix=" Systems" />
            </div>
            <div className="text-[10px] uppercase font-mono text-sage-700 dark:text-sage-300">
              Verified Public Deployments
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-ink-700 dark:text-cream-50/70">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            <span>100% Edge Hosted</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500 dark:text-cream-50/50 block">
            Filter by Domain Category:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-ink-700 text-cream-50 font-medium shadow-xs'
                    : 'bg-sage-200/50 dark:bg-darkgreen-border text-ink-700 dark:text-cream-50/70 hover:bg-sage-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Deployment Horizon Timeline (Oct 1 to Oct 14) */}
        <DeployTimeline
          projects={PUBLIC_LIVE_PROJECTS}
          onSelectProject={(p) => setPreviewProject(p)}
        />
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Vercel Edge Distribution</span>
        <span>October 2026 Production Sprint</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-4 flex flex-col justify-between h-full">
      <div>
        {/* Pagination Header Controls */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-sage-300/60 dark:border-darkgreen-border">
          <span className="text-xs font-mono text-ink-700 dark:text-cream-50/70">
            Showing Page {currentPage + 1} of {totalPages} ({filteredProjects.length} items)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-1.5 rounded-lg bg-sage-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sage-200"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-1.5 rounded-lg bg-sage-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-sage-200"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Live Projects with Framer Motion layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <LiveProjectCard
                  project={project}
                  onPreview={(p) => setPreviewProject(p)}
                  tiltDegree={idx % 2 === 0 ? -1 : 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Click "Quick Preview" for responsive device modal</span>
        <span>Automatic Live Status Checking</span>
      </div>

      {/* Interactive Quick Preview Modal */}
      <PreviewModal
        project={previewProject}
        isOpen={Boolean(previewProject)}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );

  return (
    <Spread
      id="live-deployments"
      sectionNum="05"
      sectionEyebrow="SECTION 05 • LIVE DEPLOYMENTS & VERCEL FLEET"
      theme="sage"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 10"
      pageRightNum="P. 11"
    />
  );
};
