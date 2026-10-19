import React from 'react';
import { Spread } from '../components/Spread';
import { EXPERIENCES } from '../data/portfolio';
import { OliveSprig } from '../components/BotanicalArt';

export const ExperienceSpread: React.FC = () => {
  const role1 = EXPERIENCES[0]; // Saanvi Technologies and Solutions
  const role2 = EXPERIENCES[1]; // IBM Virtual Internship

  const leftPageContent = (
    <div className="relative h-full flex flex-col justify-between">
      {/* Decorative Sand organic blob */}
      <div
        className="absolute -top-14 -left-14 w-60 h-60 rounded-full pointer-events-none opacity-25"
        style={{ backgroundColor: '#E6D5C3' }}
      />

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            CURRENT ROLE • 2026–PRESENT
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50 mb-1">
          {role1.role}
        </h3>
        <p className="font-serif italic text-xs sm:text-sm text-terracotta mb-4">
          {role1.company} • {role1.location}
        </p>

        {/* 4 Bullet Points */}
        <ul className="space-y-3 text-xs sm:text-sm text-ink-700 dark:text-cream-50/90 font-light leading-relaxed mb-6">
          {role1.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-sage-700 dark:text-sage-300 text-sm leading-none shrink-0 mt-0.5">✦</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Highlight Banner */}
        <div className="p-3.5 rounded-2xl bg-sand-200/40 dark:bg-darkgreen-border border border-sand-300/60 dark:border-darkgreen-border flex items-center justify-between">
          <div>
            <div className="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">
              -30% Lower Inference Latency
            </div>
            <div className="text-[10px] text-ink-500 dark:text-cream-50/60 font-mono">
              Systematized context window and token usage
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cream-50 dark:bg-darkgreen text-[10px] font-mono text-terracotta font-medium">
            Active
          </span>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-sand-200/60 dark:border-darkgreen-border flex flex-wrap gap-1.5">
        {role1.technologies.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2.5 py-0.5 rounded-full bg-sand-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="relative h-full flex flex-col justify-between">
      {/* Decorative Olive sprig prop */}
      <div className="absolute bottom-4 right-2 pointer-events-none opacity-25">
        <OliveSprig className="w-28 h-40" swayDuration={10} delay={0.3} />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-sage-500" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            ANALYTICAL INTERNSHIP • 2026
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50 mb-1">
          {role2.role}
        </h3>
        <p className="font-serif italic text-xs sm:text-sm text-terracotta mb-4">
          {role2.company} • {role2.location}
        </p>

        {/* 4 Bullet Points */}
        <ul className="space-y-3 text-xs sm:text-sm text-ink-700 dark:text-cream-50/90 font-light leading-relaxed mb-6">
          {role2.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-sage-700 dark:text-sage-300 text-sm leading-none shrink-0 mt-0.5">✦</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Highlight Banner */}
        <div className="p-3.5 rounded-2xl bg-sand-200/40 dark:bg-darkgreen-border border border-sand-300/60 dark:border-darkgreen-border flex items-center justify-between">
          <div>
            <div className="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">
              98% Schema Accuracy
            </div>
            <div className="text-[10px] text-ink-500 dark:text-cream-50/60 font-mono">
              1,000+ unstructured documents parsed via Claude & OpenAI
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cream-50 dark:bg-darkgreen text-[10px] font-mono text-sage-700 dark:text-sage-300 font-medium">
            Completed
          </span>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-sand-200/60 dark:border-darkgreen-border flex flex-wrap gap-1.5">
        {role2.technologies.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2.5 py-0.5 rounded-full bg-sand-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Spread
      id="experience"
      sectionNum="03"
      sectionEyebrow="SECTION 03 • INDUSTRY EXPERIENCE & TIMELINE"
      theme="cream"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 06"
      pageRightNum="P. 07"
    />
  );
};
