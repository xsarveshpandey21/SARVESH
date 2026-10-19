import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { Spread } from '../components/Spread';
import { EDUCATION, LANGUAGES } from '../data/portfolio';
import { TargetAnimation } from '../components/TargetAnimation';

export const EducationSpread: React.FC = () => {
  const btech = EDUCATION[0];
  const boards = EDUCATION.slice(1);

  const leftPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-4 h-4 text-terracotta" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            ACADEMIC QUALIFICATIONS
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Academic <span className="italic text-terracotta">Foundations</span>
        </h2>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6">
          Rigorous training in software algorithms, neural modeling, and relational database systems.
        </p>

        {/* Primary Degree Card with Animated CGPA Ring */}
        <div className="p-5 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border shadow-soft space-y-4 mb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold block">
                {btech.period}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-ink-900 dark:text-cream-50">
                {btech.degree}
              </h3>
              <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light">
                {btech.institution}
              </p>
            </div>

            {/* CGPA Progress Ring (8.5 / 10) */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  className="text-sand-200 dark:text-darkgreen-border stroke-current"
                  strokeWidth="3.5"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-terracotta stroke-current"
                  strokeWidth="3.5"
                  strokeDasharray="85, 100"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-serif font-bold text-xs text-ink-900 dark:text-cream-50 leading-none">
                  8.5
                </span>
                <span className="text-[8px] font-mono text-ink-500 dark:text-cream-50/50">
                  CGPA
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-sand-200/60 dark:border-darkgreen-border">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500 dark:text-cream-50/60 block">
              Core Coursework:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {btech.coursework?.map((c) => (
                <span
                  key={c}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-sand-200/50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 font-mono"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* School Boards Summary */}
        <div className="grid grid-cols-2 gap-3">
          {boards.map((b) => (
            <div
              key={b.id}
              className="p-3.5 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border shadow-xs"
            >
              <span className="text-[9.5px] font-mono text-terracotta uppercase block">
                {b.period} • {b.score}
              </span>
              <h4 className="font-serif text-xs font-semibold text-ink-900 dark:text-cream-50">
                {b.degree}
              </h4>
              <p className="text-[10px] text-ink-500 dark:text-cream-50/60">
                {b.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-sand-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Information Technology Engineering</span>
        <span>Class XII & X First Division</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-terracotta" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            VARSITY HONORS & DISTINCTION
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Precision & <span className="italic text-terracotta">Excellence</span>
        </h3>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6">
          Disciplined varsity athletic honors paired with exemplary institutional attendance and bilingual fluency.
        </p>

        {/* Framed Card 1: 100-Meter Pistol Shooting Championship */}
        <div className="p-4 sm:p-5 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border shadow-soft space-y-3 mb-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-semibold block">
                ATHLETIC CHAMPIONSHIP
              </span>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-ink-900 dark:text-cream-50">
                Championship Gold Medalist
              </h4>
              <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light">
                100-Meter Pistol Shooting Varsity Championship
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-sand-200/60 text-ink-900 text-[10px] font-mono font-bold">
              Gold Medal
            </span>
          </div>

          <div className="py-2">
            <TargetAnimation />
          </div>

          <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light leading-relaxed">
            Honed absolute calm, motor control, and surgical precision under high-pressure competitive varsity shooting.
          </p>
        </div>

        {/* Framed Card 2: 100% Attendance Award */}
        <div className="p-4 rounded-2xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border shadow-xs flex items-center justify-between mb-4">
          <div>
            <span className="text-[9.5px] font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block">
              INSTITUTIONAL COMMENDATION
            </span>
            <h4 className="font-serif text-xs sm:text-sm font-semibold text-ink-900 dark:text-cream-50">
              100% Attendance Excellence Award
            </h4>
            <p className="text-[11px] text-ink-500 dark:text-cream-50/60 font-light">
              Flawless discipline across all technical lectures and lab sessions.
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cream-50 dark:bg-darkgreen-border text-[10px] font-mono text-sage-700 dark:text-sage-300 font-semibold">
            Honored
          </span>
        </div>

        {/* Languages Row */}
        <div className="p-3.5 rounded-2xl bg-sand-200/30 dark:bg-darkgreen-border/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Languages className="w-3.5 h-3.5 text-terracotta" />
            <span className="text-xs font-mono uppercase tracking-widest text-ink-700 dark:text-cream-50 font-medium">
              Languages:
            </span>
          </div>

          <div className="flex items-center gap-2">
            {LANGUAGES.map((lang) => (
              <span
                key={lang.name}
                className="px-2.5 py-0.5 rounded-full bg-cream-50 dark:bg-darkgreen text-xs font-mono text-ink-900 dark:text-cream-50 border border-sand-200 dark:border-darkgreen-border"
              >
                {lang.name} ({lang.proficiency.split(' ')[0]})
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sand-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Pistol Shooting Varsity Champion</span>
        <span>SR Institute of Management and Technology</span>
      </div>
    </div>
  );

  return (
    <Spread
      id="education"
      sectionNum="06"
      sectionEyebrow="SECTION 06 • ACADEMIA & VARSITY HONORS"
      theme="sand"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 12"
      pageRightNum="P. 13"
    />
  );
};
