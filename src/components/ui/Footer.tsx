"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#050008]" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div
              className="font-black text-xl mb-1"
              style={{
                background: "linear-gradient(135deg, #a855f7, #e879f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &lt;TOMMY/&gt;
            </div>
            <div className="text-xs font-mono text-purple-400/40">
              {personalInfo.title}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-purple-400/40">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-purple-300 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-purple-400/30 text-center md:text-right">
            <div>© {year} Wilson Abraham Tommy</div>
            <div className="mt-0.5">Built with Next.js & ❤️</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
