import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Sparkles,
  Layout,
  Terminal,
  Server,
  Code
} from 'lucide-react';
import { skills, skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-5 h-5" />;
      case 'Frontend':
        return <Layout className="w-5 h-5" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5" />;
      case 'Database & Cloud':
        return <Database className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies I Work With
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Practical knowledge across full stack languages, backend frameworks, database design, and cloud deployment.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-5 sm:p-6 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-950 group-hover:text-cyan-300 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded-md">
                        {skill.tag}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-2 mb-3.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full"
                  />
                </div>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Core Stack Highlights Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Verified Core Competencies:
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              CRUD Operations • Admin Dashboards • Authentication • Django ORM • SQLite • REST APIs
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              'Python',
              'Django',
              'Django ORM',
              'REST APIs',
              'SQLite',
              'React.js',
              'Tailwind CSS',
              'Render',
              'Git & GitHub'
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800 text-slate-200 border border-slate-700/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
