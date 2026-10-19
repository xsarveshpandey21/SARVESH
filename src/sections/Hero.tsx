import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { PERSONAL_INFO } from '../data/portfolio';
import { Blob } from '../components/Blob';
import { LineArtSweep } from '../components/LineArt';
import { CoverPage } from '../components/CoverPage';

export const Hero: React.FC = () => {
  const handleScrollToMagazine = () => {
    const el = document.getElementById('magazine-view');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: '#8B6F62' }}
    >
      {/* Paper texture overlay on taupe canvas */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none z-10" />

      {/* Decorative Morphing Background Blobs */}
      <Blob color="blush" size="xl" className="-top-24 -left-24 opacity-50 z-0" delay={0.2} />
      <Blob color="sage" size="lg" className="top-1/3 -right-24 opacity-40 z-0" delay={0.4} />
      <Blob color="sand" size="md" className="-bottom-20 left-1/4 opacity-45 z-0" delay={0.6} />

      {/* Sweeping decorative line art */}
      <LineArtSweep variant="wave1" color="sage" className="top-20 left-0 w-full z-0" />
      <LineArtSweep variant="cover-sweep" color="white" className="bottom-12 right-0 w-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        
        {/* Top Editorial Eyebrow Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-cream/90 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-medium">
              Digital Print Lookbook • Edition 2026
            </span>
          </div>

          <div className="flex items-center gap-4 text-cream/80 text-[11px]">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-blush transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-blush transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1 hover:text-blush transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* ================= HERO STAGE: Magazine Cover Floating Over Taupe Canvas ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          
          {/* Centered Realistic Floating Magazine Cover */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[500px] lg:max-w-[540px] shrink-0"
          >
            <CoverPage
              isHero={true}
              onOpenBook={handleScrollToMagazine}
              className="transform hover:scale-[1.01] transition-transform duration-500"
            />
          </motion.div>

          {/* Right Editorial Presentation Note & Quick Access Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:max-w-lg space-y-6 text-cream"
          >
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest-plus text-blush font-mono font-medium block">
                Executive Profile Dossier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight text-cream">
                Intelligent systems, <span className="italic text-blush font-normal">automated workflows</span>, & decisive analytics.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-cream/85 font-light leading-relaxed">
              Analytical, solutions-driven Generative AI Developer and Data Analyst specializing in Gen AI architectures, LLM API orchestration (Google Gemini, OpenAI, Claude), Python microservices, and n8n pipelines.
            </p>

            {/* Quick stats mini cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/15">
                <div className="font-serif text-xl sm:text-2xl font-bold text-cream">
                  5,000+
                </div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-blush mt-0.5">
                  Daily Records Automated
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/15">
                <div className="font-serif text-xl sm:text-2xl font-bold text-cream">
                  CGPA 8.5
                </div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-sand mt-0.5">
                  B.Tech IT • 2023–2027
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={handleScrollToMagazine}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream text-charcoal hover:bg-cream-dark text-xs font-semibold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-terracotta" />
                <span>Open Digital Magazine</span>
              </button>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Sarvesh_Pandey_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-cream/15 hover:bg-cream/25 text-cream border border-cream/25 text-xs font-medium uppercase tracking-magazine transition-all"
              >
                <Download className="w-4 h-4 text-blush" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs uppercase tracking-widest text-cream/80 hover:text-cream transition-colors font-mono"
              >
                <span>Contact</span>
                <ArrowDown className="w-3.5 h-3.5 text-sand animate-bounce" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
