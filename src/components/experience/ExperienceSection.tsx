"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#0a0018] to-[#050008]" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Experience
          </div>
          <h2 className="section-title">Mission Log</h2>
          <p className="section-subtitle">
            Every project, a mission. Every line of code, a step forward.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, transparent, #7c3aed, #a855f7, transparent)",
            }}
          />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-purple-500 bg-[#050008]"
                  style={{
                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
                  }}
                >
                  <div className="absolute inset-1 rounded-full bg-purple-500" />
                </div>

                {/* Card */}
                <div className="glassmorphism rounded-2xl p-6 cyberpunk-border group hover:border-purple-400/40 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-xs font-mono text-purple-400/60 tracking-widest uppercase mb-1">
                        {exp.type}
                      </div>
                      <h3 className="text-lg font-bold text-purple-100">{exp.title}</h3>
                      <div className="text-sm text-purple-300/60 mt-0.5">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 text-xs font-mono text-purple-400/70 bg-purple-900/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-purple-200/60 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-purple-200/60">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"
                          style={{ boxShadow: "0 0 6px rgba(168, 85, 247, 0.6)" }}
                        />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
