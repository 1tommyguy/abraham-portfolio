"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const traits = [
    { icon: "🛡️", label: "Security-First", desc: "Every line of code written with defense in mind" },
    { icon: "🤖", label: "AI-Driven", desc: "Leveraging machine intelligence for smarter solutions" },
    { icon: "⚡", label: "Automation", desc: "Eliminating repetition through elegant scripting" },
    { icon: "🔬", label: "Problem Solver", desc: "Turning complex challenges into clean solutions" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#0a0015] to-[#050008]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400/70 text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            About Me
          </div>
          <h2 className="section-title">The Mind Behind The Code</h2>
          <p className="section-subtitle">
            A Computer Science graduate operating at the intersection of automation, security, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glassmorphism rounded-2xl p-8 cyberpunk-border relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-purple-400/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-purple-400/20 rounded-bl-2xl" />

              <div className="space-y-5 text-purple-200/70 leading-relaxed">
                <p>
                  I&apos;m <span className="text-purple-300 font-semibold">Wilson Abraham Tommy</span> — a Computer Science
                  graduate from Global Wealth University in Lomé, Togo, now based in{" "}
                  <span className="text-purple-300 font-semibold">Lagos, Nigeria</span>.
                </p>
                <p>
                  My journey started with curiosity about how systems work — and how they break. That curiosity
                  evolved into a passion for{" "}
                  <span className="text-purple-300 font-semibold">building intelligent automation tools</span>,
                  writing secure code, and exploring the frontiers of AI/ML.
                </p>
                <p>
                  I work at the intersection of <span className="text-purple-300 font-semibold">Python engineering</span>,
                  cybersecurity fundamentals, and modern web development. Whether it&apos;s automating a complex workflow,
                  hardening an application against vulnerabilities, or training a machine learning model — I bring the
                  same level of rigor and creativity to every challenge.
                </p>
                <p>
                  I believe the best software is invisible — it just works, scales effortlessly, and never becomes
                  a liability.
                </p>
              </div>

              {/* Contact pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: "📍", text: personalInfo.location },
                  { icon: "✉️", text: personalInfo.email },
                  { icon: "🐙", text: "tommydevsec" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-purple-300/70 border border-purple-500/20 bg-purple-900/20"
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Traits */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                className="glassmorphism rounded-xl p-6 cyberpunk-border card-hover group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-3">{trait.icon}</div>
                <h3 className="text-sm font-bold text-purple-200 mb-1">{trait.label}</h3>
                <p className="text-xs text-purple-300/50 leading-relaxed">{trait.desc}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              className="glassmorphism rounded-xl p-6 cyberpunk-border sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-purple-500/40 text-4xl font-serif leading-none mb-2">&ldquo;</div>
              <p className="text-purple-200/70 text-sm italic leading-relaxed">
                Security isn&apos;t a feature — it&apos;s a foundation. Every system I build starts with
                that principle and scales from there.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-px flex-1 bg-purple-500/20" />
                <span className="text-xs font-mono text-purple-400/50">— Wilson Abraham Tommy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
