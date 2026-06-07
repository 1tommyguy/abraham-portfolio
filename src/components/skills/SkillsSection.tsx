"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";

const categories = ["All", "Programming", "Framework", "Security", "AI", "Tools", "Data", "Backend"];

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#080010] to-[#050008]" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        }}
      />

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
            Technical Skills
          </div>
          <h2 className="section-title">Skill Matrix</h2>
          <p className="section-subtitle">
            A precision-mapped view of the technologies and disciplines I work with.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="glassmorphism rounded-xl p-5 cyberpunk-border group hover:border-purple-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-mono text-purple-400/40 tracking-widest uppercase">{skill.category}</span>
                  <h3 className="text-sm font-bold text-purple-100 mt-0.5">{skill.name}</h3>
                </div>
                <div
                  className="text-sm font-black font-mono"
                  style={{ color: skill.color }}
                >
                  {skill.level}%
                </div>
              </div>

              {/* Skill bar */}
              <div className="h-1.5 bg-purple-900/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    boxShadow: `0 0 8px ${skill.color}66`,
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                />
              </div>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${skill.color}10 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Category legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categories.slice(1).map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            const avgLevel = Math.round(catSkills.reduce((a, s) => a + s.level, 0) / catSkills.length);
            return (
              <div
                key={cat}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-900/10 text-xs font-mono"
              >
                <span className="text-purple-400/60">{cat}</span>
                <span className="text-purple-300 font-bold">{avgLevel}%</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
