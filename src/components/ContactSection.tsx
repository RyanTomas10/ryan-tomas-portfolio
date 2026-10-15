import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitInquiryToSupabase } from '../lib/supabase';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'GoHighLevel Funnel & CRM Build',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      let saved = false;

      // 1. Submit directly to Supabase database
      try {
        await submitInquiryToSupabase(formData);
        saved = true;
      } catch (sbError) {
        console.warn('Direct Supabase submission notice:', sbError);
      }

      // 2. Also send to /api/inquiries if backend is running (or as fallback)
      if (!saved) {
        const response = await fetch('/api/inquiries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.error || 'Failed to submit inquiry to database.');
        }
      } else {
        // Silently mirror to local backend if online
        fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }).catch(() => {});
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setErrorMessage(
        err.message || 'Something went wrong while connecting to the database. Please try again or reach out on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container Matching Reference Image 1 */}
        <div
          className={`rounded-3xl border overflow-hidden transition-all duration-300 relative shadow-2xl ${
            darkMode
              ? 'bg-[#111622] border-slate-800'
              : 'bg-slate-900 border-slate-800 text-white'
          }`}
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Big Headline & Availability Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 mb-3">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="font-display font-black tracking-tight text-3xl sm:text-5xl lg:text-6xl uppercase text-white mb-6 leading-tight">
                LET&apos;S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                  SOMETHING
                </span>{' '}
                EXTRAORDINARY
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                I&apos;m currently available for freelance projects and high-impact partnerships with founders and CEOs looking to scale revenue through robust GoHighLevel automation.
              </p>

              {/* Quick Actions (Direct WhatsApp & Copy Email) */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white transition-all duration-200"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Exact Contact Details Card (Matching Image 1's right block) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <div className="space-y-5 mb-8">
                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase text-slate-500">Email Address</span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase text-slate-500">WhatsApp / Phone</span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400">
                        {PERSONAL_INFO.whatsapp}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase text-slate-500">Current Location</span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Message Form */}
                {submitted ? (
                  <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white">Inquiry Received!</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Thank you for reaching out. I will review your requirements and respond within 24 hours. For urgent inquiries, please message on WhatsApp directly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-slate-800/80">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Founder / CEO Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ceo@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Project Scope</label>
                      <select
                        value={formData.projectScope}
                        onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400"
                      >
                        <option>GoHighLevel Funnel & CRM Build</option>
                        <option>Multi-Channel Automation (Email/SMS)</option>
                        <option>Zapier / Typeform / Calendly Integrations</option>
                        <option>Custom Subdomains, DNS & Webhooks</option>
                        <option>Full GHL Audit & Infrastructure Migration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Message</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your goals, current friction, and timeline..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-hidden focus:border-amber-400 resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 transition-colors flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Submitting to Database...' : 'Send Project Inquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
