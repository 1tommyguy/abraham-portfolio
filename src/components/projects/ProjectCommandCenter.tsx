"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, stats } from "@/lib/data";

const categories = ["All", "Live", "AI/ML", "Web Dev", "Automation", "Security", "Backend"];

const categoryColors: Record<string, string> = {
  Automation: "#14B8A6",
  "Web Dev": "#A855F7",
  "AI/ML": "#10B981",
  Security: "#EF4444",
  Backend: "#8B5CF6",
};

export default function ProjectCommandCenter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : activeCategory === "Live"
    ? projects.filter((p) => p.status === "Live")
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#06000e] to-[#050008]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            COMMAND CENTER — ONLINE
          </div>
          <h2 className="section-title">Project Command Center</h2>
          <p className="section-subtitle">
            Mission-critical systems and intelligent tools — built, tested, deployed.
          </p>
        </motion.div>

        {/* Dashboard stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Total Projects", value: stats.projects, icon: "📁" },
            { label: "Live Applications", value: stats.liveApps, icon: "🚀" },
            { label: "Repositories", value: stats.repositories, icon: "📦" },
            { label: "Technologies", value: stats.technologies, icon: "⚡" },
            { label: "Yrs Experience", value: stats.yearsOfExperience, icon: "🏆" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glassmorphism rounded-xl p-4 cyberpunk-border text-center group hover:border-purple-400/40 transition-all"
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <div
                className="text-2xl font-black"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #e879f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}+
              </div>
              <div className="text-[10px] font-mono text-purple-400/50 tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-purple-600 text-white border border-purple-400"
                  : "text-purple-400/60 border border-purple-500/20 hover:border-purple-400/40 hover:text-purple-300"
              }`}
              style={
                activeCategory === cat
                  ? { boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const color = categoryColors[project.category] ?? "#a855f7";
              const isHovered = hoveredId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="relative glassmorphism rounded-2xl overflow-hidden group cursor-default"
                  style={{
                    border: isHovered
                      ? `1px solid ${color}60`
                      : "1px solid rgba(168, 85, 247, 0.15)",
                    boxShadow: isHovered
                      ? `0 0 40px ${color}20, 0 20px 60px rgba(0,0,0,0.4)`
                      : "0 4px 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ y: -6 }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1"
                    style={{
                      background: `linear-gradient(90deg, ${color}60, ${color}, ${color}60)`,
                      opacity: isHovered ? 1 : 0.4,
                      transition: "opacity 0.3s",
                    }}
                  />

                  {/* Preview placeholder */}
                  <div
                    className="h-36 relative overflow-hidden"
                    style={{
                      background: `radial-gradient(ellipse at center, ${color}15 0%, rgba(5,0,8,0.8) 70%)`,
                    }}
                  >
                    {/* Grid pattern inside preview */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(${color}10 1px, transparent 1px), linear-gradient(90deg, ${color}10 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Category label in preview */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div
                        className="text-3xl mb-2"
                        style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                      >
                        {project.category === "Automation" ? "⚙️"
                          : project.category === "Web Dev" ? "🌐"
                          : project.category === "AI/ML" ? "🤖"
                          : project.category === "Security" ? "🛡️"
                          : "🔗"}
                      </div>
                      <div
                        className="text-xs font-mono tracking-widest uppercase"
                        style={{ color }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Status badge */}
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 text-[10px] font-mono"
                      style={{
                        border: project.status === "Live"
                          ? "1px solid rgba(74,222,128,0.5)"
                          : "1px solid rgba(74,222,128,0.3)",
                        color: project.status === "Live" ? "#4ade80" : "#86efac",
                        boxShadow: project.status === "Live" ? "0 0 10px rgba(74,222,128,0.3)" : "none",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: project.status === "Live" ? "#4ade80" : "#86efac" }}
                      />
                      {project.status === "Live" ? "🟢 LIVE" : project.status}
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/40 border border-purple-400/30 text-[10px] font-mono text-purple-300">
                        ★ Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-purple-100 mb-2">{project.name}</h3>
                    <p className="text-xs text-purple-200/50 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold border"
                          style={{
                            color,
                            borderColor: `${color}40`,
                            background: `${color}10`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-purple-300/70 border border-purple-500/20 hover:border-purple-400/40 hover:text-purple-200 transition-all"
                      >
                        <span>GitHub</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold text-white transition-all"
                        style={{
                          background: project.status === "Live"
                            ? `linear-gradient(135deg, ${color}, ${color}cc)`
                            : `linear-gradient(135deg, ${color}90, ${color})`,
                          boxShadow: project.status === "Live"
                            ? `0 0 24px ${color}60, 0 0 6px ${color}40`
                            : isHovered ? `0 0 20px ${color}40` : "none",
                          transition: "box-shadow 0.3s",
                        }}
                      >
                        <span>{project.status === "Live" ? "Launch App" : "Live Demo"}</span>
                        <span className="text-[10px]">{project.status === "Live" ? "🚀" : "⚡"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${color}08 0%, transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View all on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/tommydevsec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm text-purple-300 border border-purple-500/30 hover:border-purple-400/60 transition-all"
            style={{
              background: "rgba(124, 58, 237, 0.08)",
            }}
          >
            <span>View All Projects on GitHub</span>
            <span className="text-purple-400">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
