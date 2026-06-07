"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#a855f7",
      action: copyEmail,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "abraham-tommy-3a296a279",
      href: personalInfo.linkedin,
      color: "#60A5FA",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "tommydevsec",
      href: personalInfo.github,
      color: "#10B981",
    },
    {
      icon: "📍",
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#F59E0B",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050008] via-[#09000e] to-[#050008]" />

      {/* Central glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.06) 0%, transparent 60%)",
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Work
          </div>
          <h2 className="section-title">Establish Connection</h2>
          <p className="section-subtitle">
            Ready to build something extraordinary? Let&apos;s talk. Open to freelance, full-time, and collaborative opportunities.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={link.action}
                className="flex items-center gap-4 p-5 glassmorphism rounded-xl cyberpunk-border group hover:border-purple-400/40 transition-all block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}30`,
                    boxShadow: `0 0 20px ${link.color}10`,
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-purple-400/50 tracking-wide uppercase mb-0.5">{link.label}</div>
                  <div className="text-sm font-semibold text-purple-200 truncate group-hover:text-white transition-colors">
                    {link.value}
                  </div>
                </div>
                <div
                  className="text-lg opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ color: link.color }}
                >
                  →
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="glassmorphism rounded-2xl p-8 cyberpunk-border relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-purple-100 mb-2">
                Ready to Launch Something Great?
              </h3>
              <p className="text-sm text-purple-200/60 mb-6 max-w-md mx-auto">
                Whether it&apos;s a new project, collaboration, or opportunity — I&apos;m always ready to connect
                and create.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="px-8 py-3 rounded-xl text-white font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(124, 58, 237, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? "Email Copied! ✓" : "Send Message"}
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-xl font-semibold text-sm text-purple-300 border border-purple-500/30 hover:border-purple-400/60 transition-all"
                  style={{ background: "rgba(124, 58, 237, 0.08)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
