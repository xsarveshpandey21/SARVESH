import React from 'react';
import { Award, Cloud, Brain } from 'lucide-react';
import { Spread } from '../components/Spread';
import { CERTIFICATIONS } from '../data/portfolio';

export const CertificationsSpread: React.FC = () => {
  const row1 = CERTIFICATIONS.slice(0, 5);
  const row2 = CERTIFICATIONS.slice(5, 10);

  const getCertIcon = (issuer: string) => {
    if (issuer.includes('AWS') || issuer.includes('Amazon')) {
      return <Cloud className="w-4 h-4 text-terracotta" />;
    }
    if (issuer.includes('NASSCOM') || issuer.includes('Intel')) {
      return <Brain className="w-4 h-4 text-sage-700 dark:text-sage-300" />;
    }
    return <Award className="w-4 h-4 text-sand-400" />;
  };

  const renderCard = (cert: typeof CERTIFICATIONS[0]) => (
    <div
      key={cert.id}
      className="shrink-0 w-64 sm:w-72 p-4 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-soft hover:shadow-lift transition-all mx-2"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {getCertIcon(cert.issuer)}
          <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500 dark:text-cream-50/60 truncate max-w-[120px]">
            {cert.issuer}
          </span>
        </div>
        <span className="text-[10px] font-mono text-terracotta font-medium shrink-0">
          {cert.date}
        </span>
      </div>

      <h4 className="font-serif text-xs sm:text-sm font-semibold text-ink-900 dark:text-cream-50 line-clamp-2 mb-2 leading-snug">
        {cert.title}
      </h4>

      {cert.level && (
        <span className="inline-block px-2 py-0.5 rounded-full bg-sand-200/50 dark:bg-darkgreen-border text-[9px] font-mono text-ink-700 dark:text-cream-50/80">
          ★ {cert.level}
        </span>
      )}
    </div>
  );

  const leftPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-sage-700 dark:text-sage-300" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            INDUSTRY ACCREDITATIONS
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Certifications & <span className="italic text-sage-700 dark:text-sage-300">Credentials</span>
        </h2>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6">
          Verified industry accreditations from NASSCOM FutureSkills Prime, AWS Academy, IBM, and Intel across exploratory data science and foundation model architectures.
        </p>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-xs">
            <span className="text-[10px] font-mono text-terracotta uppercase block font-semibold mb-1">
              GOLD TIER COMMENDATION
            </span>
            <div className="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">
              NASSCOM FutureSkills Prime
            </div>
            <p className="text-[10px] text-ink-500 dark:text-cream-50/60 font-light mt-0.5">
              Exploratory Data Analysis & Digital STEM
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-paper dark:bg-darkgreen border border-sage-300/80 dark:border-darkgreen-border shadow-xs">
            <span className="text-[10px] font-mono text-sage-700 dark:text-sage-300 uppercase block font-semibold mb-1">
              AWS ACADEMY GRADUATE
            </span>
            <div className="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">
              Amazon Web Services
            </div>
            <p className="text-[10px] text-ink-500 dark:text-cream-50/60 font-light mt-0.5">
              Generative AI & Machine Learning
            </p>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>Verified Credentials</span>
        <span>10 Certified Specializations</span>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50">
            Infinite <span className="italic text-terracotta">Marquee</span>
          </h3>
          <span className="text-[10px] uppercase font-mono text-ink-500 dark:text-cream-50/50">
            Pause on Hover
          </span>
        </div>

        <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light mb-6">
          Dual-direction continuous ribbons showcasing accredited milestones and specialized skills.
        </p>

        {/* Two Marquee Rows Moving in Opposite Directions */}
        <div className="space-y-4 overflow-hidden py-2 marquee-container">
          {/* Row 1: Forward Marquee */}
          <div className="flex w-max animate-marquee marquee-content">
            {row1.concat(row1).map((cert, i) => renderCard({ ...cert, id: `${cert.id}-r1-${i}` }))}
          </div>

          {/* Row 2: Reverse Marquee */}
          <div className="flex w-max animate-marquee-reverse marquee-content">
            {row2.concat(row2).map((cert, i) => renderCard({ ...cert, id: `${cert.id}-r2-${i}` }))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-sage-300/60 dark:border-darkgreen-border text-[10px] font-mono text-ink-500 dark:text-cream-50/50 flex justify-between">
        <span>NASSCOM • AWS • IBM • Intel • Simplilearn</span>
        <span>Continuous Professional Growth</span>
      </div>
    </div>
  );

  return (
    <Spread
      id="certifications"
      sectionNum="07"
      sectionEyebrow="SECTION 07 • CERTIFICATIONS & CREDENTIALS"
      theme="sage-light"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 14"
      pageRightNum="P. 15"
    />
  );
};
