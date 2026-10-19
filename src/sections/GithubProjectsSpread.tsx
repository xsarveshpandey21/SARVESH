import React from 'react';
import { Spread } from '../components/Spread';
import { GithubShowcase } from '../components/GithubShowcase';
import { PROJECTS } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';

export const GithubProjectsSpread: React.FC = () => {
  const leftPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight">
            Curated <span className="italic text-terracotta">ML Systems</span>
          </h2>
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cream-50 dark:bg-darkgreen-border text-ink-700 dark:text-cream-50/90 shadow-2xs">
            Verified Benchmarks
          </span>
        </div>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6">
          Architectural deep dives into predictive churn classification, sales velocity clustering, and multi-turn conversational agents.
        </p>

        {/* Case Study 1: Churn Analysis */}
        <div className="p-4 sm:p-5 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-200 dark:border-darkgreen-border shadow-soft space-y-3 mb-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-terracotta font-semibold block">
                MACHINE LEARNING • 2025–26
              </span>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-ink-900 dark:text-cream-50">
                {PROJECTS[0].title}
              </h4>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-sage-100 text-sage-700 text-[10px] font-mono">
              95% ACC
            </span>
          </div>

          <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
            {PROJECTS[0].summary}
          </p>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
            {PROJECTS[0].metrics.map((m) => (
              <div key={m} className="p-1.5 rounded-lg bg-sand-200/40 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50">
                ✓ {m}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 pt-2 border-t border-sand-200/50 dark:border-darkgreen-border">
            {PROJECTS[0].techStack.map((t) => (
              <span key={t} className="text-[9.5px] px-2 py-0.5 rounded bg-cream-50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study 2: Sales Performance */}
        <div className="p-4 sm:p-5 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-200 dark:border-darkgreen-border shadow-soft space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-sage-700 dark:text-sage-300 font-semibold block">
                ANALYTICS & BI • 2025
              </span>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-ink-900 dark:text-cream-50">
                {PROJECTS[1].title}
              </h4>
            </div>
            <span className="px-2 py-0.5 rounded-md bg-sand-200/50 text-ink-900 text-[10px] font-mono">
              50K TX
            </span>
          </div>

          <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
            {PROJECTS[1].summary}
          </p>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
            {PROJECTS[1].metrics.map((m) => (
              <div key={m} className="p-1.5 rounded-lg bg-sand-200/40 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50">
                ✦ {m}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1 pt-2 border-t border-sand-200/50 dark:border-darkgreen-border">
            {PROJECTS[1].techStack.map((t) => (
              <span key={t} className="text-[9.5px] px-2 py-0.5 rounded bg-cream-50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sand-200/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Scikit-Learn • XGBoost • Power BI</span>
        <span>DAX Retention Cohorts</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50">
            Live GitHub <span className="italic text-terracotta">Telemetry</span>
          </h3>
          <a
            href="https://github.com/xsarveshpandey21"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-terracotta hover:underline flex items-center gap-1"
          >
            <span>@xsarveshpandey21</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light mb-4">
          Real-time integration syncing public repositories, contribution activity, and top language distributions via GitHub REST API.
        </p>

        {/* Embedded Live GitHub Showcase Component */}
        <GithubShowcase />
      </div>

      <div className="pt-3 border-t border-sand-200/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>30-Min LocalStorage TTL • ETag Verified</span>
        <span>Public Repositories</span>
      </div>
    </div>
  );

  return (
    <Spread
      id="github-projects"
      sectionNum="04"
      sectionEyebrow="SECTION 04 • GITHUB CODE & PRODUCTION MODELS"
      theme="blush"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 08"
      pageRightNum="P. 09"
    />
  );
};
