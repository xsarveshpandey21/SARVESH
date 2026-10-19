import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, Target, ShieldCheck, Languages, Check } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS, LANGUAGES } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Blob';

export const EducationAchievements: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden bg-cream/50 dark:bg-charcoal/50">
      {/* Decorative Blobs */}
      <Blob color="sand" size="lg" className="-top-12 -left-20 opacity-30" />
      <Blob color="terracotta" size="md" className="bottom-0 -right-20 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          label="ACADEMIA & HONORS"
          title="Education, Disciplines &"
          italicWord="Varsity Achievements"
          description="Formative academic roots in computer science & software engineering combined with varsity shooting discipline."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* ================= LEFT COLUMN: Education ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-terracotta" />
              <h3 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/80">
                Academic Degrees & Coursework
              </h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-cream-light dark:bg-charcoal p-7 rounded-3xl border border-sand/40 dark:border-slate/50 shadow-editorial"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="font-serif text-xl font-normal text-charcoal dark:text-cream">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-medium text-terracotta mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-terracotta/15 text-terracotta-dark dark:text-blush text-xs font-serif font-bold whitespace-nowrap">
                    {edu.score}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate/60 dark:text-cream/50 mb-4 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-700 dark:text-cream/70 font-light mb-4">
                    {edu.details}
                  </p>
                )}

                {/* Coursework Chips */}
                {edu.coursework && (
                  <div className="pt-3 border-t border-sand/30 dark:border-slate/50">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 mb-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Key Curricular Focus:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-sand/20 dark:bg-slate/30 text-charcoal dark:text-cream/90"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT COLUMN: Achievements & Languages ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-terracotta" />
              <h3 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/80">
                Varsity Honors & Discipline
              </h3>
            </div>

            {/* Pistol Shooting Gold Medalist Card with Animated Target / Crosshair */}
            {ACHIEVEMENTS.map((ach) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-cream-light dark:bg-charcoal p-7 rounded-3xl border border-sand/40 dark:border-slate/50 shadow-editorial relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container with animation */}
                  <div className="relative shrink-0">
                    {ach.icon === 'shooting' ? (
                      <div className="relative w-14 h-14 rounded-2xl bg-terracotta/20 flex items-center justify-center border border-terracotta/30 group">
                        {/* Animated Crosshair Target */}
                        <Target className="w-7 h-7 text-terracotta z-10 transition-transform group-hover:scale-110" />
                        <span className="absolute inset-0 rounded-2xl border-2 border-terracotta animate-ping opacity-25" />
                        <span className="absolute w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-sage/20 flex items-center justify-center border border-sage/30">
                        <ShieldCheck className="w-7 h-7 text-sage-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest-plus text-terracotta font-semibold">
                        {ach.subtitle}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-sand/30 dark:bg-slate/40 text-[10px] font-medium text-charcoal dark:text-cream">
                        {ach.highlight}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-normal text-charcoal dark:text-cream mb-2">
                      {ach.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-cream/80 font-light leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cream-light dark:bg-charcoal p-7 rounded-3xl border border-sand/40 dark:border-slate/50 shadow-editorial"
            >
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-terracotta" />
                <h4 className="text-xs uppercase tracking-widest-plus font-medium text-slate dark:text-cream/80">
                  Languages & Fluency
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-2xl bg-sand/20 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 flex items-center gap-3"
                  >
                    <span className="text-2xl select-none">{lang.flag}</span>
                    <div>
                      <div className="text-xs font-semibold text-charcoal dark:text-cream flex items-center gap-1.5">
                        <span>{lang.name}</span>
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-cream/60 font-light">
                        {lang.proficiency}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
