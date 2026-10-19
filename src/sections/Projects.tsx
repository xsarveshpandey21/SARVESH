import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PROJECTS } from '../data/portfolio';
import type { ProjectItem } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Blob';
import { ProjectModal } from '../components/ProjectModal';
import { GithubShowcase } from '../components/GithubShowcase';
import { ChatUIMockup, N8nWorkflowMockup, ChurnDashboardMockup, SalesTimeSeriesMockup } from '../components/ProjectMockups';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'curated' | 'github'>('curated');

  const renderMockup = (type: string) => {
    switch (type) {
      case 'chat':
        return <ChatUIMockup className="h-64 sm:h-80 lg:h-96" />;
      case 'n8n':
        return <N8nWorkflowMockup className="h-64 sm:h-80 lg:h-96" />;
      case 'churn':
        return <ChurnDashboardMockup className="h-64 sm:h-80 lg:h-96" />;
      case 'sales':
        return <SalesTimeSeriesMockup className="h-64 sm:h-80 lg:h-96" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden bg-cream dark:bg-charcoal-dark">
      {/* Decorative Blobs */}
      <Blob color="blush" size="xl" className="top-1/4 -right-24 opacity-40" />
      <Blob color="sage" size="lg" className="bottom-1/4 -left-20 opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          label="FEATURED CASE STUDIES & LIVE GITHUB"
          title="Engineered Solutions &"
          italicWord="Autonomous Architectures"
          description="A selection of end-to-end applications demonstrating agentic LLM orchestration, scalable ETL pipelines, and predictive machine learning models."
        />

        {/* View Toggle: Case Studies vs Live GitHub */}
        <div className="flex items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setActiveTab('curated')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-magazine font-medium transition-all ${
              activeTab === 'curated'
                ? 'bg-slate text-cream shadow-sm dark:bg-cream dark:text-charcoal'
                : 'bg-sand/20 dark:bg-slate/30 text-slate dark:text-cream/80 hover:bg-sand/40'
            }`}
          >
            Curated Case Studies (04)
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-magazine font-medium transition-all flex items-center gap-2 ${
              activeTab === 'github'
                ? 'bg-slate text-cream shadow-sm dark:bg-cream dark:text-charcoal'
                : 'bg-sand/20 dark:bg-slate/30 text-slate dark:text-cream/80 hover:bg-sand/40'
            }`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Live GitHub Repos & Heatmap</span>
          </button>
        </div>

        {activeTab === 'github' ? (
          <div className="mt-8">
            <GithubShowcase />
          </div>
        ) : (
          /* Magazine-Style Spreads */
          <div className="space-y-20 lg:space-y-28 mt-12">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Mockup Illustration Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group relative cursor-pointer rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-br from-sand/30 via-cream to-blush/30 dark:from-slate/40 dark:to-charcoal border border-sand/40 dark:border-slate/50 shadow-editorial transition-all duration-500 hover:shadow-editorial-hover"
                  >
                    {/* Visual container with hover tilt & zoom */}
                    <div className="rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      {renderMockup(project.mockupType)}
                    </div>

                    {/* Quick overlay pill on hover */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/90 text-cream text-xs font-medium backdrop-blur-md shadow-lg">
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Information Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Editorial Category & Year Tag */}
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-widest-plus text-terracotta font-semibold">
                        {project.category}
                      </span>
                      <span className="text-slate/40 dark:text-cream/30">•</span>
                      <span className="text-xs font-serif italic text-slate/70 dark:text-cream/60">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-serif text-2xl sm:text-3xl font-normal text-charcoal dark:text-cream leading-snug cursor-pointer hover:text-terracotta transition-colors"
                    >
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-slate-700 dark:text-cream/80 font-light leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Verified Metrics Chips */}
                    <div className="space-y-2 pt-1">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 text-xs font-medium text-charcoal dark:text-cream/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <div className="text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 mb-2">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg bg-sand/20 dark:bg-slate/30 text-charcoal dark:text-cream/90 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate hover:bg-slate-dark text-cream text-xs font-medium uppercase tracking-magazine transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blush" />
                        <span>Case Study Details</span>
                      </button>

                      {/* GitHub Repo link marked TODO */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository Placeholder (TODO: Replace with exact repository URL)"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-magazine font-medium text-slate dark:text-cream/80 hover:text-terracotta transition-colors group"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repo</span>
                        <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
