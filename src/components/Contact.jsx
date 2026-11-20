import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  ShieldCheck,
  MessageSquare,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[350px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Looking for an entry-level Python Full Stack Developer? Reach out directly via email, phone, or professional networks.
          </p>
        </motion.div>

        {/* Contact Cards Grid (Centered layout) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-950 group-hover:text-cyan-300 transition-colors shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400 font-medium">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors block truncate"
                  title="Send Email"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer ml-2"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors block"
                  title="Call Phone"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer ml-2"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-rose-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Location</div>
              <div className="text-sm sm:text-base font-semibold text-white">
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Social Profiles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between shadow-lg"
          >
            <div>
              <div className="text-xs text-slate-400 font-medium">Professional Profiles</div>
              <div className="text-sm sm:text-base font-semibold text-white">GitHub &amp; LinkedIn</div>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Resume Declaration Card (Span 2 columns on medium+ screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 p-6 rounded-2xl bg-slate-950/80 border border-cyan-900/40 text-xs sm:text-sm text-slate-300 leading-relaxed shadow-xl"
          >
            <div className="font-semibold text-cyan-400 flex items-center gap-1.5 mb-2 uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              Resume Declaration
            </div>
            <p className="italic text-slate-400">
              "{personalInfo.declaration}"
            </p>
            <div className="mt-3 text-right font-semibold text-white">
              — {personalInfo.fullName}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
