import { motion } from 'motion/react';
import { GraduationCap, Calendar, CheckCircle2, Award, Landmark } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
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
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Milestones
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A solid educational foundation fostering discipline, structured problem solving, and analytical thinking.
          </p>
        </motion.div>

        {/* Timeline Component */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-600 sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon in center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-lg shadow-cyan-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                          {item.year}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>

                      <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 mb-3">
                        <Landmark className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.institution}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
