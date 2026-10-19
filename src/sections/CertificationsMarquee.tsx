import React from 'react';
import { CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export const CertificationsMarquee: React.FC = () => {
  // Split into two distinct halves and double each for seamless loops
  const halfLength = Math.ceil(CERTIFICATIONS.length / 2);
  const row1 = [...CERTIFICATIONS.slice(0, halfLength), ...CERTIFICATIONS.slice(0, halfLength)];
  const row2 = [...CERTIFICATIONS.slice(halfLength), ...CERTIFICATIONS.slice(halfLength)];

  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden bg-cream dark:bg-charcoal-dark border-y border-sand/40 dark:border-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <SectionHeading
          number="06"
          label="STANDARDS & ACCREDITATIONS"
          title="Industry Certifications &"
          italicWord="Credentials"
          description="Recognitions from NASSCOM FutureSkills Prime, AWS Academy, IBM, and Intel confirming deep competencies in Generative AI and Data Science."
          align="center"
        />
      </div>

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden marquee-container py-2 mb-4">
        {/* Subtle Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-cream dark:from-charcoal-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-cream dark:from-charcoal-dark to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee marquee-content">
          {row1.map((cert, index) => {
            const isGold = cert.badgeColor === 'gold';
            return (
              <div
                key={`row1-${cert.id}-${index}`}
                className={`w-72 sm:w-80 p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between select-none shadow-sm hover:shadow-md ${
                  isGold
                    ? 'bg-gradient-to-br from-amber-500/10 via-cream-light to-amber-500/5 dark:from-amber-900/20 dark:to-charcoal border-amber-300/40 dark:border-amber-500/30'
                    : 'bg-cream-light dark:bg-charcoal border-sand/40 dark:border-slate/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] uppercase tracking-widest-plus text-slate/60 dark:text-cream/50 truncate font-medium">
                      {cert.issuer}
                    </span>
                    {cert.level ? (
                      <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300 text-[10px] font-semibold tracking-wide border border-amber-400/30">
                        {cert.level}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate/50 dark:text-cream/40">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-normal text-charcoal dark:text-cream mb-2 leading-snug line-clamp-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-sand/30 dark:border-slate/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-cream/70 text-[11px]">
                    <CheckCircle className={`w-3.5 h-3.5 ${isGold ? 'text-amber-500' : 'text-sage'}`} />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-[10px] font-mono text-terracotta">
                    {cert.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee (Reverse Direction) */}
      <div className="relative w-full overflow-hidden marquee-container py-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-cream dark:from-charcoal-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-cream dark:from-charcoal-dark to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee-reverse marquee-content">
          {row2.map((cert, index) => {
            const isGold = cert.badgeColor === 'gold';
            return (
              <div
                key={`row2-${cert.id}-${index}`}
                className={`w-72 sm:w-80 p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between select-none shadow-sm hover:shadow-md ${
                  isGold
                    ? 'bg-gradient-to-br from-amber-500/10 via-cream-light to-amber-500/5 dark:from-amber-900/20 dark:to-charcoal border-amber-300/40 dark:border-amber-500/30'
                    : 'bg-cream-light dark:bg-charcoal border-sand/40 dark:border-slate/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] uppercase tracking-widest-plus text-slate/60 dark:text-cream/50 truncate font-medium">
                      {cert.issuer}
                    </span>
                    {cert.level ? (
                      <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300 text-[10px] font-semibold tracking-wide border border-amber-400/30">
                        {cert.level}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate/50 dark:text-cream/40">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-normal text-charcoal dark:text-cream mb-2 leading-snug line-clamp-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-sand/30 dark:border-slate/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-cream/70 text-[11px]">
                    <CheckCircle className={`w-3.5 h-3.5 ${isGold ? 'text-amber-500' : 'text-sage'}`} />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-[10px] font-mono text-terracotta">
                    {cert.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-slate/60 dark:text-cream/50 italic font-serif">
        Hover either row to pause marquee and inspect credentials
      </div>
    </section>
  );
};
