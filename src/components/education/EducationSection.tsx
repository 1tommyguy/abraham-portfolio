"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education, certifications } from "@/lib/data";

export default function EducationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#08000f] to-[#050008]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Education & Certifications
          </div>
          <h2 className="section-title">Knowledge Base</h2>
          <p className="section-subtitle">
            Academic foundations and professional credentials powering every solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.h3
              className="text-xs font-mono text-purple-400/60 tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Academic Records
            </motion.h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  className="glassmorphism rounded-xl p-5 cyberpunk-border group hover:border-purple-400/40 transition-all card-hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${edu.color.replace("from-", "").split(" ")[0].replace("from-", "")})`,
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                      }}
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-mono text-purple-400/60">{edu.period}</span>
                      </div>
                      <h4 className="text-sm font-bold text-purple-100 mt-1 leading-snug">{edu.degree}</h4>
                      <div className="text-xs text-purple-300/60 mt-0.5">{edu.institution}</div>
                      <div className="text-xs text-purple-400/40 mt-0.5 flex items-center gap-1">
                        <span>📍</span> {edu.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              className="text-xs font-mono text-purple-400/60 tracking-widest uppercase mb-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Professional Certifications
            </motion.h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  className="glassmorphism rounded-xl p-5 cyberpunk-border group hover:border-purple-400/40 transition-all card-hover relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  {/* Gradient accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] opacity-10"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    }}
                  />

                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-purple-100">{cert.name}</h4>
                      <div className="text-xs text-purple-300/50 mt-0.5">{cert.issuer}</div>
                    </div>
                    <div className="ml-auto">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-purple-400/40 flex items-center justify-center"
                        style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)" }}
                      >
                        <span className="text-xs text-purple-400">✓</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quote card */}
              <motion.div
                className="glassmorphism rounded-xl p-5 cyberpunk-border"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="text-xs font-mono text-purple-400/60 mb-3">// CONTINUOUS LEARNING</div>
                <p className="text-sm text-purple-200/60 leading-relaxed">
                  Knowledge is the ultimate competitive advantage. Every certification earned is a commitment
                  to excellence — and a foundation for the next breakthrough.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
