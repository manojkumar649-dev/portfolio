import { motion } from 'motion/react';
import { 
  UserCheck, 
  Lightbulb, 
  Rocket, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Briefcase,
  Compass,
  Layers,
  Database
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const qualities = [
    {
      icon: Lightbulb,
      title: "Business & Management Grounding",
      desc: "Holding a BBA background, I understand business goals, customer workflows, and operational billing—translating them into practical management systems."
    },
    {
      icon: Rocket,
      title: "Hands-on Full-Stack Execution",
      desc: "Experienced building database-driven web apps like FitZone using Python, Django, REST APIs, SQLite, and responsive Tailwind CSS."
    },
    {
      icon: Award,
      title: "Industry-Certified Competency",
      desc: "Certified in Python Full Stack Development (SLA Institute 2026) and Basics of Python (UniAthena 2026)."
    },
    {
      icon: Briefcase,
      title: "Operational Leadership Experience",
      desc: "Served as Event Operations Coordinator (2024–2025), directing on-site logistics, schedule execution, and issue resolution."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
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
            <UserCheck className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Business Logic &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Full Stack Engineering
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Building reliable database-driven web applications with clean CRUD architecture, admin dashboards, and responsive design.
          </p>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Summary Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-md relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Professional Journey</h3>
                <p className="text-xs text-slate-400">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {personalInfo.summary}
              </p>
              <p>
                Through intensive training and end-to-end development of applications like <strong className="text-cyan-300">FitZone</strong> (deployed live on Render), I have developed hands-on mastery in building full CRUD functionality, managing members and subscription billing, crafting admin dashboard analytics, and writing clean queries with <strong className="text-white">Django ORM</strong> and <strong className="text-white">SQLite</strong>.
              </p>
            </div>

            {/* Currently Learning Banner */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-cyan-900/40 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  Currently Deep Diving:
                </div>
                <div className="text-sm text-slate-200 mt-0.5 font-medium">
                  {personalInfo.currentlyLearning}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {qualities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-950 group-hover:text-cyan-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
