import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Code,
  Layers,
  Database,
  Users,
  CreditCard,
  Activity,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  Server
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects, personalInfo } from '../data/portfolioData';
import SubscriptionDemoModal from './SubscriptionDemoModal';

export default function Projects() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects &amp; Live Systems
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Real full-stack web applications featuring database-driven architecture, admin dashboards, and live cloud deployment.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const isFitZone = project.id === 'fitzone-gym';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isFitZone
                    ? 'bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900/90 border-cyan-500/50 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Featured Badge Ribbon for FitZone */}
                {isFitZone && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-400 via-teal-400 to-blue-500 text-slate-950 font-extrabold text-[11px] px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    Featured Resume Star Project
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Project Details */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 border border-slate-700">
                          {project.category}
                        </span>
                        {project.isLiveDeployed && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            Live on Render
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Resume Bullet Highlights */}
                      <div className="space-y-2.5 mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Key Technical Implementations:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-950 text-slate-200 border border-slate-800 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open Live Demo (Render)
                          </a>
                        )}

                        {project.id === 'subscription-billing' && (
                          <button
                            onClick={() => setIsDemoOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
                          >
                            <Play className="w-4 h-4 fill-slate-950" />
                            Test Billing Simulator
                          </button>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all duration-200"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          View on GitHub
                        </a>
                      </div>
                    </div>

                    {/* Right: Interactive Showcase Preview Box */}
                    <div className="lg:col-span-5">
                      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl p-5 relative group">
                        
                        {/* Mock App Interface Preview */}
                        <div className="bg-slate-900 rounded-lg border border-slate-800 p-4 space-y-3">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                            <span className="font-bold text-white flex items-center gap-1.5">
                              <Code className="w-4 h-4 text-cyan-400" />
                              {isFitZone ? 'FitZone Admin Dashboard' : 'System Overview'}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                              {isFitZone ? 'Django + SQLite Active' : 'Client State Ready'}
                            </span>
                          </div>

                          {/* Specific UI Mock for FitZone */}
                          {isFitZone ? (
                            <div className="space-y-3 pt-1">
                              {/* Top Metrics Row */}
                              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                                  <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                                    <Users className="w-3 h-3 text-cyan-400" />
                                    Total Members
                                  </div>
                                  <div className="font-mono text-cyan-300 text-sm font-bold mt-0.5">248 Active</div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                                  <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                                    Monthly Revenue
                                  </div>
                                  <div className="font-mono text-emerald-400 text-sm font-bold mt-0.5">₹1,42,800</div>
                                </div>
                              </div>

                              {/* Subscription tracking badge */}
                              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                                <div className="flex items-center justify-between text-[11px]">
                                  <span className="text-slate-400">Membership Tracking</span>
                                  <span className="font-mono text-emerald-400 font-semibold text-[10px] bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/40">
                                    Auto Status Sync
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-900">
                                  <span className="text-slate-300">Active Subscriptions</span>
                                  <span className="text-cyan-400 font-mono font-bold">194</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-slate-300">Renewals Due</span>
                                  <span className="text-amber-400 font-mono font-bold">28</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-slate-300">Pending Payments</span>
                                  <span className="text-rose-400 font-mono font-bold">12</span>
                                </div>
                              </div>

                              {/* Features row */}
                              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                                <div className="p-2 rounded bg-slate-950/80 border border-slate-800/80 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                  <span>Diet Plan Modules</span>
                                </div>
                                <div className="p-2 rounded bg-slate-950/80 border border-slate-800/80 flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                  <span>CRUD Member Records</span>
                                </div>
                              </div>

                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                                Visit Deployed App on Render
                              </a>
                            </div>
                          ) : (
                            <div className="space-y-3 pt-1">
                              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                                <div>
                                  <div className="text-[11px] text-slate-400">Current Plan</div>
                                  <div className="text-sm font-bold text-cyan-300">Pro Professional ($49/mo)</div>
                                </div>
                                <span className="text-[11px] px-2 py-1 rounded bg-blue-900/60 text-blue-300 font-mono">
                                  Auto-Renew: Active
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                                <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80">
                                  <div className="text-[10px] text-slate-400">Data Storage</div>
                                  <div className="font-mono text-white text-xs font-semibold mt-0.5">LocalStorage API</div>
                                </div>
                                <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80">
                                  <div className="text-[10px] text-slate-400">Invoices Generated</div>
                                  <div className="font-mono text-emerald-400 text-xs font-semibold mt-0.5">Instant Sync</div>
                                </div>
                              </div>

                              <button
                                onClick={() => setIsDemoOpen(true)}
                                className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <Play className="w-3.5 h-3.5 fill-cyan-400" />
                                Click to test live billing workflow
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Tech Tag footer */}
                        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Repository: github.com/{personalInfo.githubUsername}</span>
                          <span className="text-cyan-400 font-mono">Production Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subscription Billing Interactive Modal */}
      <SubscriptionDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </section>
  );
}
