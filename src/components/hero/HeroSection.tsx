"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";

const PARTICLE_COUNT = 60;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    duration: 4 + Math.random() * 8,
    delay: Math.random() * 5,
    opacity: 0.2 + Math.random() * 0.6,
  }));
}

export default function HeroSection() {
  const [particles] = useState(generateParticles);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050008]"
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Central radial glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: "transform 0.5s ease",
        }}
      >
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-purple-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 3}px rgba(168, 85, 247, 0.8)`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [p.opacity, p.opacity * 1.5, p.opacity],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large hexagon outline */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-purple-500/15 rotate-45"
          animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)` }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-purple-400/10 rotate-12"
          animate={{ rotate: [12, 60, 12], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border border-purple-300/10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism border border-purple-500/30 text-sm font-mono text-purple-300/80 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities · Lagos, Nigeria
        </motion.div>

        {/* Name */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * 0.02}deg) rotateY(${mousePos.x * 0.02}deg)`,
            transition: "transform 0.3s ease",
          }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
            style={{
              background: "linear-gradient(135deg, #f3d6ff 0%, #c084fc 30%, #a855f7 60%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))",
            }}
          >
            {personalInfo.name.split(" ")[0]}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #e879f9, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </motion.div>

        {/* Animated typing */}
        <motion.div
          className="text-xl md:text-2xl font-mono text-purple-300/80 mb-6 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              "Software & Automation Engineer",
              2000,
              "Python Developer",
              2000,
              "Cybersecurity Enthusiast",
              2000,
              "AI/ML Engineer",
              2000,
              "Junior Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg text-purple-200/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {personalInfo.tagline} — Merging code, security, and intelligence to create
          systems that don&apos;t just work, they <em className="text-purple-300 not-italic font-semibold">evolve</em>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(124, 58, 237, 0.6), 0 0 100px rgba(124, 58, 237, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="https://github.com/tommydevsec"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-purple-300 border border-purple-500/40 hover:border-purple-400 transition-colors"
            style={{ background: "rgba(124, 58, 237, 0.1)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub →
          </motion.a>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-purple-300/70 hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-purple-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {[
            { value: "6+", label: "Projects" },
            { value: "3+", label: "Roles" },
            { value: "12+", label: "Technologies" },
            { value: "1+", label: "Year Exp." },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #e879f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-purple-400/50 font-mono mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs font-mono text-purple-400/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-purple-400/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
