import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Cpu, Database, Award, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { CountUp } from '../components/CountUp';
import { Blob } from '../components/Blob';
import { EditorialPattern } from '../components/LineArt';

export const About: React.FC = () => {
  const statIcons = [
    <Database key="db" className="w-5 h-5 text-terracotta" />,
    <Cpu key="cpu" className="w-5 h-5 text-sage" />,
    <Brain key="brain" className="w-5 h-5 text-sand" />,
    <Sparkles key="spark" className="w-5 h-5 text-slate" />,
    <Award key="award" className="w-5 h-5 text-terracotta" />,
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-cream/50 dark:bg-charcoal/50">
      {/* Decorative Blobs */}
      <Blob color="sand" size="lg" className="-top-20 -right-20 opacity-40" />
      <Blob color="blush" size="md" className="bottom-0 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="01"
          label="BIOGRAPHY & PURPOSE"
          title="Architecting Intelligence &"
          italicWord="Autonomous Workflows"
          description="Bridging the frontier between modern Generative AI reasoning models and battle-tested data analytics architectures."
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Pull Quote & Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-sand/20 dark:bg-slate-700/50 p-8 sm:p-10 rounded-3xl border border-sand/40 dark:border-slate/50 relative shadow-editorial"
          >
            <EditorialPattern type="circles" className="mb-6" />

            <div className="text-terracotta font-serif text-5xl leading-none select-none -mb-3">“</div>
            <p className="font-serif italic text-xl sm:text-2xl text-charcoal dark:text-cream leading-relaxed mb-6">
              I believe modern software engineering is no longer just writing code—it is orchestrating intelligent agents, optimizing context tokenomics, and converting unstructured chaos into reliable metrics.
            </p>

            <div className="pt-4 border-t border-sand/40 dark:border-slate/50 flex items-center justify-between text-xs text-slate dark:text-cream/70">
              <span className="uppercase tracking-widest font-medium">Design Philosophy</span>
              <span className="font-mono text-terracotta font-bold">2026 Edition</span>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-slate-700 dark:text-cream/80 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              {PERSONAL_INFO.about}
            </p>

            <p>
              In my active engineering work at <strong className="font-medium text-charcoal dark:text-cream underline decoration-terracotta decoration-2 underline-offset-4">Saanvi Technologies and Solutions</strong>, I focus on the full lifecycle of AI applications—from structuring prompt templates with Few-Shot and Chain-of-Thought methodologies to deploying high-throughput microservices that interface directly with transactional databases.
            </p>

            <p>
              Prior at <strong className="font-medium text-charcoal dark:text-cream">IBM Developer Skills Network</strong>, I worked on parsing heterogeneous enterprise reports, achieving 98% schema accuracy across 1,000+ unstructured files while slashing manual review latency by 40%. My approach pairs rigorous mathematical foundations (probability, hypothesis testing, linear algebra) with cutting-edge developer ergonomics like Cursor AI.
            </p>

            {/* Quick Pill Highlights */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush/60 dark:bg-slate/60 text-charcoal dark:text-cream text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                Google Gemini API
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/40 dark:bg-slate/60 text-charcoal dark:text-cream text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                n8n Orchestration
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/40 dark:bg-slate/60 text-charcoal dark:text-cream text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-500" />
                Predictive Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate/15 dark:bg-slate/60 text-charcoal dark:text-cream text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal dark:bg-cream" />
                PostgreSQL & Power BI
              </span>
            </div>

            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-terracotta hover:text-terracotta-dark group"
              >
                <span>Explore Technical Skills & Mastery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= Animated Stats Strip ================= */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-widest-plus text-slate/70 dark:text-cream/60 font-medium">
              VERIFIED IMPACT & OPERATIONAL METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-cream-light dark:bg-charcoal p-6 rounded-2xl border border-sand/40 dark:border-slate/50 shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-sand/20 dark:bg-slate/40">
                    {statIcons[index % statIcons.length]}
                  </div>
                  <span className="font-serif italic text-xs text-slate/50 dark:text-cream/40">
                    #{index + 1}
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-charcoal dark:text-cream tracking-tight mb-1">
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </div>
                  <h4 className="text-xs uppercase tracking-magazine font-medium text-slate dark:text-cream/90 mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate/60 dark:text-cream/60 font-light">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
