import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Blob } from '../components/Blob';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [planeFlying, setPlaneFlying] = useState(false);

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setPlaneFlying(true);
    setErrorMessage('');

    try {
      if (formspreeEndpoint && !formspreeEndpoint.includes('placeholder')) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Form submission failed. Please try again.');
        }
      } else {
        // Fallback simulation when no live Formspree endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 950));
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Celebratory Confetti Animation in exact palette tokens
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.75 },
        colors: ['#EBD3CB', '#8FA89A', '#C58B72', '#CDB39B', '#F6EFE6', '#4F5A5E'],
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please contact via direct email.');
    } finally {
      setTimeout(() => setPlaneFlying(false), 1200);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-cream/70 dark:bg-charcoal/70">
      {/* Decorative Blobs */}
      <Blob color="blush" size="xl" className="-top-20 -left-20 opacity-40" />
      <Blob color="sand" size="lg" className="bottom-0 -right-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07"
          label="GET IN TOUCH"
          title="Initiate a Conversation &"
          italicWord="Collaboration"
          description="Interested in collaborating on Generative AI architectures, automated data extraction, or predictive analytics? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Left Column: Direct Contact Info & Editorial Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card */}
            <div className="p-7 rounded-3xl bg-cream-light dark:bg-charcoal border border-sand/40 dark:border-slate/50 shadow-editorial">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-blush/30 dark:bg-slate/40 text-terracotta">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest-plus text-slate/60 dark:text-cream/50 block font-mono">
                    Direct Inquiry
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-serif text-base sm:text-lg font-normal text-charcoal dark:text-cream hover:text-terracotta transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate/70 dark:text-cream/70 font-light mt-2 leading-relaxed">
                Fastest response for technical inquiries, autonomous pipelines, and full-time Gen AI engineering roles.
              </p>
            </div>

            {/* Location Card */}
            <div className="p-7 rounded-3xl bg-cream-light dark:bg-charcoal border border-sand/40 dark:border-slate/50 shadow-editorial">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sage/20 dark:bg-slate/40 text-sage-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest-plus text-slate/60 dark:text-cream/50 block font-mono">
                    Base of Operations
                  </span>
                  <span className="font-serif text-base sm:text-lg text-charcoal dark:text-cream">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download Banner */}
            <div className="p-7 rounded-3xl bg-slate text-cream border border-slate/60 shadow-editorial flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest-plus text-blush block mb-1 font-mono">
                  Offline Dossier
                </span>
                <h4 className="font-serif text-xl font-normal mb-2">
                  Curriculum Vitae / Resume
                </h4>
                <p className="text-xs text-cream/75 font-light mb-6">
                  Complete technical summary including academic records, certifications, and GitHub telemetry.
                </p>
              </div>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Sarvesh_Pandey_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream hover:bg-cream-dark text-charcoal text-xs font-semibold uppercase tracking-widest transition-all"
              >
                <Download className="w-4 h-4 text-terracotta" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social Pills */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-cream-light dark:bg-charcoal border border-sand/40 dark:border-slate/50 shadow-sm flex items-center justify-center gap-2 text-xs uppercase tracking-magazine font-medium hover:text-terracotta transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-cream-light dark:bg-charcoal border border-sand/40 dark:border-slate/50 shadow-sm flex items-center justify-center gap-2 text-xs uppercase tracking-magazine font-medium hover:text-terracotta transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form with Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 bg-cream-light dark:bg-charcoal p-8 sm:p-10 rounded-3xl border border-sand/40 dark:border-slate/50 shadow-editorial relative overflow-hidden"
          >
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest-plus text-terracotta font-semibold font-mono">
                Direct Dispatch
              </span>
              <h3 className="font-serif text-2xl font-normal text-charcoal dark:text-cream mt-1">
                Send a Lookbook Inquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Floating Label: Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-sand/15 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  />
                  <label
                    htmlFor="contact-name"
                    className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 font-mono transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-terracotta"
                  >
                    Your Name *
                  </label>
                </div>

                {/* Floating Label: Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-sand/15 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                  />
                  <label
                    htmlFor="contact-email"
                    className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 font-mono transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-terracotta"
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              {/* Floating Label: Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-sand/15 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
                />
                <label
                  htmlFor="contact-subject"
                  className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 font-mono transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-terracotta"
                >
                  Subject / Topic
                </label>
              </div>

              {/* Floating Label: Message */}
              <div className="relative">
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-sand/15 dark:bg-slate/30 border border-sand/30 dark:border-slate/40 text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all resize-y"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-slate/60 dark:text-cream/50 font-mono transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-terracotta"
                >
                  Message / Project Scope *
                </label>
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Thank you! Your dispatch has been received. Sarvesh will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-800 dark:text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage || 'Failed to submit message.'}</span>
                </div>
              )}

              {/* Submit Button with Flying Paper Plane */}
              <div className="relative overflow-visible">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate hover:bg-slate-dark text-cream text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 group"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      {/* Animated Paper Plane */}
                      <motion.div
                        animate={
                          planeFlying
                            ? {
                                x: [0, 40, 260],
                                y: [0, -15, -90],
                                opacity: [1, 1, 0],
                                rotate: [0, -20, -45],
                              }
                            : { x: 0, y: 0, opacity: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                      >
                        <Send className="w-4 h-4 text-blush transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </motion.div>
                      <span>Send Dispatch</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
