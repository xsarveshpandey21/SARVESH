import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Workflow, Code2, BarChart3, Cloud, Terminal, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Blob';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-terracotta" />,
    Workflow: <Workflow className="w-5 h-5 text-sage" />,
    Code2: <Code2 className="w-5 h-5 text-sand" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-slate" />,
    Cloud: <Cloud className="w-5 h-5 text-terracotta" />,
    Terminal: <Terminal className="w-5 h-5 text-sage" />,
  };

  // Proficiency percentage per category for animated SVG ring
  const proficiencyMap: Record<string, number> = {
    'genai-llm': 96,
    automation: 94,
    'languages-frameworks': 92,
    bi: 90,
    'ml-cloud': 88,
    tools: 92,
  };

  const categoriesToDisplay =
    selectedFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-cream dark:bg-charcoal-dark">
      {/* Decorative Organic Blobs */}
      <Blob color="sage" size="xl" className="top-10 -right-32 opacity-35" />
      <Blob color="blush" size="lg" className="bottom-10 -left-28 opacity-40" />

      {/* Floating Ambient Skill Orbs Drifting Slowly */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -25, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand/30 dark:bg-slate/40 backdrop-blur-xs text-[11px] font-mono text-charcoal dark:text-cream border border-sand/40 shadow-xs pointer-events-none z-10"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Gemini 1.5 Pro</span>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{ duration: 15, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-12 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/30 dark:bg-slate/40 backdrop-blur-xs text-[11px] font-mono text-charcoal dark:text-cream border border-sage/40 shadow-xs pointer-events-none z-10"
      >
        <span className="w-2 h-2 rounded-full bg-terracotta" />
        <span>n8n Webhook Node</span>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 15, -20, 0],
          y: [0, -18, 22, 0],
        }}
        transition={{ duration: 16, delay: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2/3 left-1/4 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush/40 dark:bg-slate/40 backdrop-blur-xs text-[11px] font-mono text-charcoal dark:text-cream border border-blush/50 shadow-xs pointer-events-none z-10"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span>Cursor AI Orchestration</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          label="CORE COMPETENCIES"
          title="Technical Craft &"
          italicWord="Toolbox"
          description="A curated spectrum of modern Gen AI engineering, automated pipeline design, scientific computing, and enterprise business intelligence."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 overflow-x-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-magazine font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-slate text-cream shadow-sm dark:bg-cream dark:text-charcoal'
                : 'bg-sand/20 dark:bg-slate/30 text-slate dark:text-cream/80 hover:bg-sand/40'
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-magazine font-medium transition-all ${
                selectedFilter === cat.id
                  ? 'bg-slate text-cream shadow-sm dark:bg-cream dark:text-charcoal'
                  : 'bg-sand/20 dark:bg-slate/30 text-slate dark:text-cream/80 hover:bg-sand/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grouped Skills Cards Grid with Hover-Dimming */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {categoriesToDisplay.map((category, catIndex) => {
              const isHovered = hoveredCategory === category.id;
              const isOtherHovered = hoveredCategory !== null && !isHovered;
              const pct = proficiencyMap[category.id] || 90;
              const strokeCircumference = 2 * Math.PI * 18; // r=18
              const strokeOffset = strokeCircumference - (pct / 100) * strokeCircumference;

              return (
                <motion.div
                  key={category.id}
                  layout
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isOtherHovered ? 0.45 : 1,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className={`bg-cream-light dark:bg-charcoal p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? 'border-terracotta/70 shadow-2xl ring-2 ring-terracotta/25'
                      : 'border-sand/40 dark:border-slate/50 shadow-editorial'
                  }`}
                >
                  <div>
                    {/* Category Header with Animated SVG Ring */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-sand/20 dark:bg-slate/40">
                          {iconMap[category.icon] || <Sparkles className="w-5 h-5 text-terracotta" />}
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-normal text-charcoal dark:text-cream">
                            {category.name}
                          </h3>
                          <span className="text-[10px] uppercase tracking-widest-plus text-slate/60 dark:text-cream/50 font-mono">
                            {category.skills.length} Capabilities
                          </span>
                        </div>
                      </div>

                      {/* Animated SVG Ring for Proficiency */}
                      <div className="relative w-12 h-12 flex items-center justify-center shrink-0" title={`${pct}% Domain Proficiency`}>
                        <svg className="w-12 h-12 -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="18"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className="text-sand/30 dark:text-slate/40"
                          />
                          <motion.circle
                            cx="24"
                            cy="24"
                            r="18"
                            stroke="#C58B72"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={strokeCircumference}
                            initial={{ strokeDashoffset: strokeCircumference }}
                            whileInView={{ strokeDashoffset: strokeOffset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute text-[10px] font-mono font-bold text-charcoal dark:text-cream">
                          {pct}%
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-cream/70 font-light mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Elastic Stagger Skills Chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            type: 'spring',
                            damping: 12,
                            stiffness: 220,
                            delay: sIdx * 0.035,
                          }}
                          whileHover={{ y: -2, scale: 1.04 }}
                          className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                            skill.tag === 'Primary'
                              ? 'bg-terracotta/15 dark:bg-terracotta/25 border border-terracotta/30 text-charcoal dark:text-cream font-medium'
                              : skill.tag === 'Expert' || skill.tag === 'Advanced'
                              ? 'bg-sage/20 dark:bg-sage/25 border border-sage/35 text-charcoal dark:text-cream'
                              : 'bg-sand/20 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 text-slate-800 dark:text-cream/90'
                          }`}
                        >
                          <Check className="w-3 h-3 text-terracotta opacity-70 group-hover:opacity-100" />
                          <span>{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-charcoal/10 dark:bg-cream/10 text-slate-700 dark:text-cream/80 ml-1">
                              {skill.tag}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="mt-8 pt-4 border-t border-sand/30 dark:border-slate/50 flex items-center justify-between text-[11px] text-slate/50 dark:text-cream/40 font-mono">
                    <span>Category {catIndex + 1 < 10 ? `0${catIndex + 1}` : catIndex + 1}</span>
                    <span className="text-terracotta">Ready for Production</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
