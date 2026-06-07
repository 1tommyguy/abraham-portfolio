"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchSequenceProps {
  onComplete: () => void;
}

const systemMessages = [
  "INITIALIZING NEURAL INTERFACE...",
  "LOADING PORTFOLIO MATRIX...",
  "CALIBRATING HOLOGRAPHIC DISPLAY...",
  "ESTABLISHING SECURE CONNECTION...",
  "SYSTEM READY. WELCOME.",
];

export default function LaunchSequence({ onComplete }: LaunchSequenceProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const totalDuration = 3000;
    const messageInterval = totalDuration / systemMessages.length;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        return next >= 100 ? 100 : next;
      });
    }, totalDuration / 50);

    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => {
        const next = prev + 1;
        if (next >= systemMessages.length) {
          clearInterval(messageTimer);
          return prev;
        }
        return next;
      });
    }, messageInterval);

    const glitchTimer = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 800);

    const completeTimer = setTimeout(() => {
      setVisible(false);
      clearInterval(progressTimer);
      clearInterval(messageTimer);
      clearInterval(glitchTimer);
      setTimeout(onComplete, 500);
    }, totalDuration + 200);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
      clearInterval(glitchTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050008] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.02) 2px, rgba(168, 85, 247, 0.02) 4px)",
            }}
          />

          {/* Corner brackets */}
          {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
            "bottom-8 left-8 border-b-2 border-l-2",
            "bottom-8 right-8 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 border-purple-400/60 ${cls}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 text-center px-8">
            {/* Logo / Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-mono text-purple-400/60 tracking-[0.5em] mb-4 uppercase">
                Portfolio System v2.0
              </div>
              <h1
                className={`text-5xl md:text-7xl font-black tracking-tight ${
                  glitching ? "translate-x-[2px]" : ""
                }`}
                style={{
                  background: "linear-gradient(135deg, #a855f7, #c084fc, #e879f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: glitching
                    ? "drop-shadow(2px 0 #00f5ff) drop-shadow(-2px 0 #ff006e)"
                    : "none",
                  transition: "filter 0.1s",
                }}
              >
                ABRAHAM
              </h1>
              <div
                className="text-lg font-mono text-purple-300/80 tracking-[0.3em] mt-2"
                style={{
                  filter: glitching ? "drop-shadow(1px 0 #00f5ff)" : "none",
                }}
              >
                TOMMY
              </div>
            </motion.div>

            {/* System messages */}
            <motion.div
              className="font-mono text-sm text-green-400/80 mb-8 h-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-purple-400/60 mr-2">&gt;</span>
              {systemMessages[currentMessage]}
              <span
                className="ml-1 inline-block w-2 h-4 bg-green-400/80"
                style={{ animation: "typing-cursor 0.8s infinite" }}
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-80 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between text-xs font-mono text-purple-400/60 mb-2">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-purple-900/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #7c3aed, #a855f7, #e879f9)",
                    boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Segments */}
              <div className="flex justify-between mt-3">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-2 rounded-sm transition-all duration-200"
                    style={{
                      background:
                        i < Math.floor(progress / 5)
                          ? "rgba(168, 85, 247, 0.9)"
                          : "rgba(168, 85, 247, 0.15)",
                      boxShadow:
                        i < Math.floor(progress / 5)
                          ? "0 0 6px rgba(168, 85, 247, 0.6)"
                          : "none",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-400"
                style={{
                  left: `${10 + i * 7}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  opacity: 0.4 + (i % 3) * 0.2,
                  boxShadow: "0 0 6px rgba(168, 85, 247, 0.8)",
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
