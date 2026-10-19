import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { PERSONAL_INFO } from '../data/portfolio';

interface FooterProps {
  onReplayIntro?: () => void;
  onNavigateSpread?: (index: number) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onReplayIntro, onNavigateSpread }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-darkgreen text-cream-50 pt-14 pb-10 overflow-hidden border-t border-darkgreen-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 border-b border-darkgreen-border gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-darkgreen-surface flex items-center justify-center font-serif text-lg font-bold text-cream-50 shadow-inner border border-darkgreen-border">
              SP
            </div>
            <div>
              <span className="font-serif italic text-xl font-medium tracking-tight block text-cream-50">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest-plus text-sage-300 font-mono">
                Data Scientist & Generative AI Developer
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest-plus text-cream-50/70 hover:text-blush-300 transition-colors p-2 rounded-full bg-darkgreen-surface hover:bg-darkgreen-border border border-darkgreen-border"
            aria-label="Back to top of magazine"
          >
            <span className="font-mono text-[11px]">Back to Cover</span>
            <div className="w-7 h-7 rounded-full bg-terracotta flex items-center justify-center text-cream-50 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Middle Row: Quick Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 text-xs font-light">
          <div>
            <span className="text-[10px] uppercase tracking-widest-plus text-blush-300 font-medium font-mono block mb-2.5">
              Location
            </span>
            <p className="text-cream-50/80 leading-relaxed font-mono">
              {PERSONAL_INFO.location}
            </p>
            <p className="text-sage-300 mt-1 font-mono text-[11px]">
              B.Tech IT • 2023–2027 (Expected)
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest-plus text-blush-300 font-medium font-mono block mb-2.5">
              Direct Contact
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-cream-50/80 hover:text-blush-300 transition-colors block font-mono"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-sage-300 mt-1 block font-mono text-[11px]">
              Open for Data Science & GenAI Roles
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest-plus text-blush-300 font-medium font-mono block mb-2.5">
              Lookbook Spreads
            </span>
            <div className="flex flex-col gap-1.5 text-cream-50/70 font-mono text-[11px]">
              <button
                onClick={() => onNavigateSpread?.(1)}
                className="hover:text-cream-50 text-left transition-colors"
              >
                02 / Biography & Stats
              </button>
              <button
                onClick={() => onNavigateSpread?.(2)}
                className="hover:text-cream-50 text-left transition-colors"
              >
                03 / Skills & Data Science Lab
              </button>
              <button
                onClick={() => onNavigateSpread?.(3)}
                className="hover:text-cream-50 text-left transition-colors"
              >
                04 / Industry Experience
              </button>
              <button
                onClick={() => onNavigateSpread?.(4)}
                className="hover:text-cream-50 text-left transition-colors"
              >
                05 / Featured ML Projects
              </button>
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest-plus text-blush-300 font-medium font-mono block mb-2.5">
              Network Telemetry
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-darkgreen-surface hover:bg-darkgreen-border border border-darkgreen-border flex items-center justify-center text-cream-50 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-darkgreen-surface hover:bg-darkgreen-border border border-darkgreen-border flex items-center justify-center text-cream-50 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-darkgreen-surface hover:bg-darkgreen-border border border-darkgreen-border flex items-center justify-center text-cream-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-darkgreen-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-50/50 gap-3 font-mono">
          <div>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Digital Botanical Lifestyle Magazine Edition</span>
            {onReplayIntro && (
              <>
                <span>•</span>
                <button
                  onClick={onReplayIntro}
                  className="text-blush-300 hover:underline focus:outline-none"
                >
                  Replay Intro
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
