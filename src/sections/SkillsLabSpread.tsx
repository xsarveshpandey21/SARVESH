import React, { useState } from 'react';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';
import { Spread } from '../components/Spread';
import { DataScienceLab } from '../components/DataScienceLab';
import { SKILL_CATEGORIES } from '../data/portfolio';

export const SkillsLabSpread: React.FC = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

  const leftPageContent = (
    <div className="space-y-4 flex flex-col justify-between h-full">
      {/* Decorative Blush-300 organic blob */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-25"
        style={{ backgroundColor: '#EBD3CB' }}
      />

      <div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Technical <span className="italic text-sage-700 dark:text-sage-300">Arsenal</span>
        </h2>
        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-4">
          Structured competencies across supervised modeling, neural networks, GenAI reasoning, and enterprise business intelligence.
        </p>

        {/* 6 Skill Groups as Stacked Cards */}
        <div className="space-y-3">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isHovered = activeGroupIndex === idx;
            const isDimmed = activeGroupIndex !== null && !isHovered;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveGroupIndex(idx)}
                onMouseLeave={() => setActiveGroupIndex(null)}
                className={`p-3.5 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft transition-all duration-300 ${
                  isDimmed ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
                } ${isHovered ? 'ring-1 ring-terracotta border-terracotta/60' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-ink-900 dark:text-cream-50">
                    {cat.name}
                  </h4>
                  <span className="text-[9.5px] font-mono text-sage-700 dark:text-sage-300">
                    {cat.skills.length} proficiencies
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => {
                    // Soft pastel tint rotation (sage, blush, sand)
                    const chipColors = [
                      'bg-sage-100 dark:bg-darkgreen-border text-sage-700 dark:text-sage-300',
                      'bg-blush-100/80 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50',
                      'bg-sand-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50',
                    ];
                    const chipColor = chipColors[sIdx % chipColors.length];

                    return (
                      <span
                        key={skill.name}
                        className={`text-[10px] px-2.5 py-0.5 rounded-full font-mono transition-transform hover:scale-105 ${chipColor}`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Hover group to focus</span>
        <span>Python • SQL • TensorFlow • n8n</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50">
            Data Science <span className="italic text-terracotta">Lab</span>
          </h3>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-sage-200/60 dark:bg-darkgreen-border text-sage-700 dark:text-sage-300">
            Interactive Visuals
          </span>
        </div>

        <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light mb-3">
          Visual demonstrations of mathematical neural signal propagation, ROC classification curves, and K-Means clustering.
        </p>

        {/* Embedded Data Science Lab Component */}
        <DataScienceLab />

        {/* 1. Production Model Telemetry & Benchmarks */}
        <div className="p-3.5 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-sage-300/50 dark:border-darkgreen-border">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700 dark:text-sage-300 font-semibold">
                MODEL TELEMETRY & VERIFIED BENCHMARKS
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-sage-700 dark:text-sage-300">
              5-Fold Cross Validated
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="p-2.5 rounded-xl bg-sage-100/70 dark:bg-darkgreen-surface border border-sage-200 dark:border-darkgreen-border transition-transform hover:-translate-y-0.5">
              <div className="text-[9.5px] font-mono text-ink-500 dark:text-cream-50/60 uppercase">ROC-AUC</div>
              <div className="font-serif text-lg font-bold text-ink-900 dark:text-cream-50">0.94</div>
              <div className="text-[9px] text-sage-700 dark:text-sage-300 font-mono truncate">Tuned Churn Model</div>
            </div>

            <div className="p-2.5 rounded-xl bg-blush-100/70 dark:bg-darkgreen-surface border border-blush-200 dark:border-darkgreen-border transition-transform hover:-translate-y-0.5">
              <div className="text-[9.5px] font-mono text-ink-500 dark:text-cream-50/60 uppercase">Accuracy</div>
              <div className="font-serif text-lg font-bold text-ink-900 dark:text-cream-50">95.0%</div>
              <div className="text-[9px] text-terracotta font-mono truncate">XGBoost Ensemble</div>
            </div>

            <div className="p-2.5 rounded-xl bg-sand-200/50 dark:bg-darkgreen-surface border border-sand-300/50 dark:border-darkgreen-border transition-transform hover:-translate-y-0.5">
              <div className="text-[9.5px] font-mono text-ink-500 dark:text-cream-50/60 uppercase">Latency</div>
              <div className="font-serif text-lg font-bold text-ink-900 dark:text-cream-50">-30%</div>
              <div className="text-[9px] text-ink-700 dark:text-cream-50/70 font-mono truncate">Prompt & Token Caching</div>
            </div>

            <div className="p-2.5 rounded-xl bg-sage-100/70 dark:bg-darkgreen-surface border border-sage-200 dark:border-darkgreen-border transition-transform hover:-translate-y-0.5">
              <div className="text-[9.5px] font-mono text-ink-500 dark:text-cream-50/60 uppercase">ETL Volume</div>
              <div className="font-serif text-lg font-bold text-ink-900 dark:text-cream-50">5,000+</div>
              <div className="text-[9px] text-sage-700 dark:text-sage-300 font-mono truncate">Records / Day (n8n)</div>
            </div>
          </div>
        </div>

        {/* 2. Mathematical Rigor & Architecture Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 rounded-xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft flex flex-col justify-between transition-all hover:border-sage-500/50">
            <div>
              <div className="flex items-center gap-1.5 text-sage-700 dark:text-sage-300 mb-1.5">
                <Cpu className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[9.5px] font-mono uppercase tracking-wider font-semibold">01 • Optimization</span>
              </div>
              <h5 className="font-serif text-xs font-semibold text-ink-900 dark:text-cream-50 mb-1">
                Loss Dynamics & Decay
              </h5>
              <p className="text-[11px] text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
                AdamW & Cosine Decay scheduling with early stopping to prevent over-fitting on high-dimensional vectors.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-sage-200/60 dark:border-darkgreen-border text-[9px] font-mono text-ink-500 dark:text-cream-50/50">
              SGD • AdamW • ElasticNet
            </div>
          </div>

          <div className="p-3 rounded-xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft flex flex-col justify-between transition-all hover:border-terracotta/50">
            <div>
              <div className="flex items-center gap-1.5 text-terracotta mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[9.5px] font-mono uppercase tracking-wider font-semibold">02 • Validation</span>
              </div>
              <h5 className="font-serif text-xs font-semibold text-ink-900 dark:text-cream-50 mb-1">
                Zero Leakage Protocol
              </h5>
              <p className="text-[11px] text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
                Stratified K-Fold (k=5), SMOTE oversampling applied strictly within folds, and ROC-AUC curve threshold calibration.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-sage-200/60 dark:border-darkgreen-border text-[9px] font-mono text-ink-500 dark:text-cream-50/50">
              Scikit-Learn • SMOTE • F1
            </div>
          </div>

          <div className="p-3 rounded-xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft flex flex-col justify-between transition-all hover:border-sage-500/50">
            <div>
              <div className="flex items-center gap-1.5 text-sage-700 dark:text-sage-300 mb-1.5">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[9.5px] font-mono uppercase tracking-wider font-semibold">03 • Production AI</span>
              </div>
              <h5 className="font-serif text-xs font-semibold text-ink-900 dark:text-cream-50 mb-1">
                GenAI & Webhook Pipelines
              </h5>
              <p className="text-[11px] text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
                Context window optimization, JSON schema validation, and n8n event-driven integration with PostgreSQL.
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-sage-200/60 dark:border-darkgreen-border text-[9px] font-mono text-ink-500 dark:text-cream-50/50">
              Gemini • Claude • n8n • SQL
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Restricted to Sage, Blush & Sand palette</span>
        <span>Illustrative Mathematical Models</span>
      </div>
    </div>
  );

  return (
    <Spread
      id="skills"
      sectionNum="02"
      sectionEyebrow="SECTION 02 • SKILLS & DATA SCIENCE LAB"
      theme="sage"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 04"
      pageRightNum="P. 05"
    />
  );
};
