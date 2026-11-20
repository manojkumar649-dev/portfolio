import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Copy, 
  Check, 
  Code,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Animated Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow-delayed" />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Python Full Stack Developer Roles
            </motion.div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-5 flex items-center gap-2 flex-wrap">
              <span>{personalInfo.title}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-cyan-400 text-lg font-mono">Python, Django &amp; React.js</span>
            </h2>

            {/* Location & Quick Info */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-6 flex-wrap">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                {personalInfo.phone}
              </span>
            </div>

            {/* Summary Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Entry-level <span className="text-cyan-300 font-medium">Python Full Stack Developer</span> with hands-on project experience building database-driven web applications using{' '}
              <span className="text-cyan-300 font-medium">Python</span>,{' '}
              <span className="text-cyan-300 font-medium">Django</span>,{' '}
              <span className="text-cyan-300 font-medium">React.js</span>,{' '}
              <span className="text-cyan-300 font-medium">REST APIs</span>,{' '}
              <span className="text-cyan-300 font-medium">SQLite</span>, and{' '}
              <span className="text-cyan-300 font-medium">Tailwind CSS</span>. Skilled in CRUD operations, admin dashboards, and responsive UIs.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                Explore FitZone &amp; Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                View &amp; Print Resume
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-800/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-800/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-800/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="Direct Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold shadow-lg shadow-cyan-500/10 backdrop-blur-md flex items-center gap-1.5"
            >
              <Code className="w-3.5 h-3.5" />
              FitZone Live on Render
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -right-4 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold shadow-lg shadow-blue-500/10 backdrop-blur-md flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-yellow-400" />
              Django ORM &amp; SQLite
            </motion.div>

            {/* Terminal Window */}
            <div className="rounded-2xl bg-slate-900/95 border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    developer_profile.py
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">utf-8</span>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-1">
                <div>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">FullStackDeveloper</span>:
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(
                  <span className="text-orange-300">self</span>):
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.name ={' '}
                  <span className="text-emerald-300">"{personalInfo.name}"</span>
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.role ={' '}
                  <span className="text-emerald-300">"Python Full Stack Developer"</span>
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.backend = [
                  <span className="text-yellow-300">"Django"</span>,{' '}
                  <span className="text-yellow-300">"ORM"</span>,{' '}
                  <span className="text-cyan-300">"REST APIs"</span>]
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.database = [
                  <span className="text-cyan-300">"SQLite"</span>,{' '}
                  <span className="text-cyan-300">"SQL"</span>]
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.frontend = [
                  <span className="text-cyan-300">"React.js"</span>,{' '}
                  <span className="text-cyan-300">"TailwindCSS"</span>]
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.deployment = [
                  <span className="text-emerald-300">"Render"</span>,{' '}
                  <span className="text-emerald-300">"Vercel"</span>]
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-orange-300">self</span>.live_project ={' '}
                  <span className="text-cyan-300">"FitZone Gym Management"</span>
                </div>
                <div className="pt-2 pl-4">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">build_admin_system</span>(
                  <span className="text-orange-300">self</span>):
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-emerald-300">"CRUD + Billing + Analytics"</span>
                </div>
                <div className="pt-3 text-cyan-400 font-medium">
                  # Deployed live &amp; ready to contribute
                </div>
              </div>

              {/* Bottom Quick Terminal Status */}
              <div className="bg-slate-950/80 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Git Status: main branch (clean)
                </span>
                <span className="text-cyan-400">Django 5 • React 19 • Render</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/60"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.helper}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
