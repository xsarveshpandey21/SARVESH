import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Blob';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-cream/60 dark:bg-charcoal/60">
      {/* Decorative Blobs */}
      <Blob color="sand" size="lg" className="-top-16 -left-20 opacity-40" />
      <Blob color="slate" size="md" className="bottom-10 -right-20 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          label="PROFESSIONAL RECORD"
          title="Industry Experience &"
          italicWord="Engineering Roles"
          description="Developing production-grade generative AI applications, intelligent event-driven workflows, and high-precision parsing pipelines."
        />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline SVG Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-sand/30 dark:bg-slate/50 -translate-x-1/2 hidden sm:block">
            <motion.div
              style={{ scaleY: lineHeight, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-terracotta via-sage to-slate"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node on Desktop with pulsing rings */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 z-20 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="relative w-8 h-8 rounded-full bg-cream dark:bg-charcoal border-4 border-terracotta flex items-center justify-center shadow-md"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-terracotta/40 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 45 : -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full sm:w-[calc(50%-2.5rem)] bg-cream-light dark:bg-charcoal p-7 sm:p-8 rounded-3xl border border-sand/40 dark:border-slate/50 shadow-editorial hover:shadow-editorial-hover transition-all ${
                      isEven ? 'sm:ml-auto' : 'sm:mr-auto'
                    }`}
                  >
                    {/* Header: Role & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/15 text-terracotta-dark dark:text-blush text-[11px] font-medium uppercase tracking-wider font-mono">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.type}
                      </span>
                      <span className="font-serif italic text-xs text-slate/60 dark:text-cream/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal dark:text-cream mb-1">
                      {exp.role}
                    </h3>

                    {/* Company & Meta */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate/75 dark:text-cream/70 mb-5 font-mono">
                      <span className="font-medium text-charcoal dark:text-cream flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-sage" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sand" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-terracotta" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullet Points with Staggered Character/Text Reveal */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, bIdx) => (
                        <motion.li
                          key={bIdx}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 + bIdx * 0.1 }}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-cream/80 font-light leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="pt-4 border-t border-sand/30 dark:border-slate/50">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-sand/20 dark:bg-slate/30 text-charcoal dark:text-cream/90 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
