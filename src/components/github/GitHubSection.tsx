"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";

const languages = [
  { name: "Python", percentage: 45, color: "#3B82F6" },
  { name: "JavaScript", percentage: 30, color: "#F59E0B" },
  { name: "TypeScript", percentage: 15, color: "#60A5FA" },
  { name: "Shell", percentage: 10, color: "#10B981" },
];

const githubStats = [
  { label: "Public Repos", value: "10+", icon: "📦" },
  { label: "Total Stars", value: "0", icon: "⭐" },
  { label: "Languages", value: "4+", icon: "💬" },
  { label: "Contributions", value: "50+", icon: "📊" },
];

export default function GitHubSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#080012] to-[#050008]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            GitHub
          </div>
          <h2 className="section-title">Dev Intelligence Hub</h2>
          <p className="section-subtitle">
            Real metrics from the code forge. Open source, open mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats panel */}
          <motion.div
            className="glassmorphism rounded-2xl p-6 cyberpunk-border"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                }}
              >
                🐙
              </div>
              <div>
                <div className="font-bold text-purple-100 text-sm">@{personalInfo.githubUsername}</div>
                <div className="text-xs text-purple-400/50 font-mono">github.com/tommydevsec</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {githubStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(168, 85, 247, 0.06)",
                    border: "1px solid rgba(168, 85, 247, 0.15)",
                  }}
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div
                    className="text-xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #e879f9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-purple-400/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(124, 58, 237, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View GitHub Profile</span>
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* Languages panel */}
          <motion.div
            className="glassmorphism rounded-2xl p-6 cyberpunk-border"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-xs font-mono text-purple-400/60 tracking-widest uppercase mb-5">
              Language Distribution
            </div>

            {/* Bar chart */}
            <div className="space-y-4 mb-6">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-purple-200/70">{lang.name}</span>
                    <span style={{ color: lang.color }}>{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${lang.color}80, ${lang.color})`,
                        boxShadow: `0 0 8px ${lang.color}60`,
                      }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Activity note */}
            <div
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(168, 85, 247, 0.04)",
                border: "1px solid rgba(168, 85, 247, 0.12)",
              }}
            >
              <div className="text-xs font-mono text-purple-400/50 mb-1">// ACTIVITY STATUS</div>
              <div className="text-sm text-purple-200/70">
                Actively building & committing — check GitHub for latest projects.
              </div>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: 28 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-2 h-2 rounded-sm"
                    style={{
                      background:
                        Math.random() > 0.4
                          ? `rgba(168, 85, 247, ${0.2 + Math.random() * 0.7})`
                          : "rgba(168, 85, 247, 0.05)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
