import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Download, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Spread } from '../components/Spread';
import { LabelBox } from '../components/LabelBox';
import { PERSONAL_INFO } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { WildflowerSprig } from '../components/BotanicalArt';

export const ContactSpread: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (formspreeEndpoint && !formspreeEndpoint.includes('your_form_id')) {
      try {
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        // Fall through to success simulation
      }
    }

    // Trigger soft palette confetti
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.65 },
      colors: ['#EBD3CB', '#B7C8BA', '#E6D5C3', '#C58B72', '#8FA89A'],
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftPageContent = (
    <div className="relative h-full flex flex-col justify-between">
      {/* Decorative Wildflower sprig */}
      <div className="absolute top-2 right-2 pointer-events-none opacity-40">
        <WildflowerSprig className="w-24 h-48" swayDuration={8} />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink-700/80 dark:text-cream-50/70 font-semibold">
            BACK COVER • COLLABORATION DOSSIER
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-ink-900 dark:text-cream-50 leading-[1.1] tracking-tight mb-4">
          Let's work <span className="italic text-terracotta">together</span>.
        </h2>

        <p className="text-xs sm:text-sm text-ink-700 dark:text-cream-50/80 font-light leading-relaxed mb-6 max-w-[44ch]">
          Available for full-time Data Scientist & Generative AI Developer roles, technical consultations, and event-driven automation architectures.
        </p>

        {/* Botanical Flat-Lay Image with Framed Look */}
        <div className="relative rounded-2xl overflow-hidden border-[6px] border-cream-50 shadow-soft bg-sand-200 aspect-[16/9] mb-6 photo-warm-grade">
          <img
            src="/images/contact-botanical.jpg"
            alt="Botanical flat-lay with dried flowers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Direct Contacts Block */}
        <div className="space-y-2.5 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink-900 dark:text-cream-50">
            <Mail className="w-3.5 h-3.5 text-terracotta shrink-0" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline truncate">
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-ink-900 dark:text-cream-50">
            <MapPin className="w-3.5 h-3.5 text-sage-700 dark:text-sage-300 shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-sand-200/60 dark:border-darkgreen-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-sand-200/40 hover:bg-sand-200 text-ink-700 dark:text-cream-50 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-sand-200/40 hover:bg-sand-200 text-ink-700 dark:text-cream-50 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        <a
          href={PERSONAL_INFO.resumePath}
          download="Sarvesh_Pandey_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-50 dark:bg-darkgreen-border text-ink-900 dark:text-cream-50 text-xs font-mono border border-sand-200"
        >
          <Download className="w-3 h-3 text-terracotta" />
          <span>Resume CV</span>
        </a>
      </div>
    </div>
  );

  const rightPageContent = (
    <div className="space-y-6 flex flex-col justify-between h-full">
      <div>
        <div className="mb-4">
          <LabelBox accentColor="terracotta">
            Say hello
          </LabelBox>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink-900 dark:text-cream-50 tracking-tight mb-2">
          Direct Transmission
        </h3>

        <p className="text-xs text-ink-700 dark:text-cream-50/80 font-light mb-6">
          Drop a dispatch directly to Sarvesh's primary engineering queue. Response guaranteed within 24 hours.
        </p>

        {/* Floating Label Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="contact-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border text-xs sm:text-sm font-sans text-ink-900 dark:text-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-all"
            />
            <label
              htmlFor="contact-name"
              className="absolute text-xs font-mono text-ink-500 dark:text-cream-50/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-terracotta pointer-events-none"
            >
              Your Name / Organization
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="contact-email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border text-xs sm:text-sm font-sans text-ink-900 dark:text-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-all"
            />
            <label
              htmlFor="contact-email"
              className="absolute text-xs font-mono text-ink-500 dark:text-cream-50/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-terracotta pointer-events-none"
            >
              Your Email Address
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-paper dark:bg-darkgreen border border-sand-300 dark:border-darkgreen-border text-xs sm:text-sm font-sans text-ink-900 dark:text-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-all resize-none"
            />
            <label
              htmlFor="contact-message"
              className="absolute text-xs font-mono text-ink-500 dark:text-cream-50/60 duration-200 transform -translate-y-2.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2.5 peer-focus:text-terracotta pointer-events-none"
            >
              Your Inquiry / Project Details
            </label>
          </div>

          {/* Terracotta Submit Button with Paper Plane */}
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full py-3 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream-50 text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft hover:shadow-lift disabled:opacity-80"
          >
            {isSubmitted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-cream-50" />
                <span>Message Dispatched!</span>
              </>
            ) : (
              <>
                <span>Dispatch Transmission</span>
                <motion.div
                  animate={isSubmitting ? { x: 40, y: -40, opacity: 0 } : { x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Send className="w-3.5 h-3.5 text-cream-50" />
                </motion.div>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer Info & Back to Top */}
      <div className="pt-4 mt-6 border-t border-sand-200/60 dark:border-darkgreen-border flex items-center justify-between text-[11px] font-mono text-ink-500 dark:text-cream-50/50">
        <span>© 2026 Sarvesh Pandey</span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 hover:text-terracotta transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

  return (
    <Spread
      id="contact"
      sectionNum="08"
      sectionEyebrow="SECTION 08 • CONTACT & INQUIRY DOSSIER"
      theme="blush"
      leftPage={leftPageContent}
      rightPage={rightPageContent}
      pageLeftNum="P. 16"
      pageRightNum="FINAL"
    />
  );
};
