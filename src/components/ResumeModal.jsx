import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, ExternalLink } from 'lucide-react';
import { personalInfo, workExperience, projects, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const primaryProject = projects.find((p) => p.id === 'fitzone-gym') || projects[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8 z-10 flex flex-col max-h-[92vh]"
        >
          {/* Action Bar (Screen only, hidden on print) */}
          <div className="print:hidden px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-200">
                Official Resume View — {personalInfo.fullName}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save as PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Container */}
          <div className="p-8 sm:p-12 overflow-y-auto space-y-5 text-[13px] leading-relaxed font-sans bg-white print:p-0 print:overflow-visible text-slate-800">
            
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center">
              <h1 className="text-3xl font-extrabold text-slate-950 tracking-wider uppercase">
                {personalInfo.fullName}
              </h1>
              <div className="text-base font-bold text-slate-800 mt-0.5">
                {personalInfo.title}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-2 text-xs text-slate-600 mt-1.5">
                <span>{personalInfo.location}</span>
                <span>|</span>
                <span>{personalInfo.phone}</span>
                <span>|</span>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 text-xs text-blue-700 font-mono mt-1">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub: github.com/{personalInfo.githubUsername}
                </a>
                <span className="text-slate-400">|</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn: linkedin.com/in/{personalInfo.linkedinUsername}
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Professional Summary
              </h2>
              <p className="text-slate-700 text-justify text-[12.5px] leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-1 text-[12.5px] text-slate-800">
                <div>
                  <strong>Languages:</strong> Python, JavaScript, SQL, HTML5, CSS3
                </div>
                <div>
                  <strong>Frontend:</strong> React.js, Tailwind CSS, Responsive Web Design
                </div>
                <div>
                  <strong>Backend:</strong> Django, Django ORM, REST APIs
                </div>
                <div>
                  <strong>Database:</strong> SQLite, SQL
                </div>
                <div>
                  <strong>Deployment:</strong> Render, Vercel
                </div>
                <div>
                  <strong>Tools:</strong> Git, GitHub
                </div>
                <div>
                  <strong>Concepts:</strong> CRUD Operations, Authentication, Admin Dashboards, Full Stack Development
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Work Experience
              </h2>
              {workExperience.map((exp, idx) => (
                <div key={idx} className="mt-1.5">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-[13px]">
                    <span>
                      {exp.role} <span className="font-normal text-slate-600">– {exp.company}</span>
                    </span>
                    <span className="text-xs font-medium text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-700 text-xs">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Projects
              </h2>
              <div className="mt-1.5">
                <div className="font-bold text-slate-900 text-xs sm:text-[13px]">
                  FitZone – Gym Management and Membership Billing System
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  <strong>Technologies:</strong> Python, Django, HTML, Tailwind CSS, JavaScript, SQLite
                </div>
                <div className="text-xs text-blue-700 mt-0.5 flex items-center gap-1">
                  <strong className="text-slate-800">Live Demo:</strong>
                  <a
                    href="https://fitzone-subtrack-project.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    https://fitzone-subtrack-project.onrender.com/
                    <ExternalLink className="w-3 h-3 print:hidden" />
                  </a>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-700 text-xs">
                  {primaryProject.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Education
              </h2>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-800 text-xs">
                <li>
                  <strong>SLA Institute</strong> – Python Full Stack Development – 2026
                </li>
                <li>
                  <strong>Bachelor of Business Administration (BBA)</strong>, Management – 2023
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5">
                Certifications
              </h2>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-800 text-xs">
                <li>
                  <strong>Python Full Stack Development</strong> – SLA – 2026
                </li>
                <li>
                  <strong>Basics of Python</strong> – UniAthena – 2026
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
