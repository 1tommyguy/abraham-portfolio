"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easterEggFacts } from "@/lib/data";

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [sequence, setSequence] = useState<string[]>([]);

  // Konami code: ↑↑↓↓←→←→BA
  const KONAMI = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const newSeq = [...sequence, e.key].slice(-KONAMI.length);
      setSequence(newSeq);
      if (newSeq.join(",") === KONAMI.join(",")) {
        setActive(true);
        setSequence([]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [sequence]);

  const nextFact = () => {
    setFactIndex((prev) => (prev + 1) % easterEggFacts.length);
  };

  return (
    <>
      {/* Hidden trigger button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center opacity-20 hover:opacity-60 transition-opacity"
        style={{
          background: "rgba(168, 85, 247, 0.2)",
          border: "1px solid rgba(168, 85, 247, 0.3)",
        }}
        onClick={() => setActive(true)}
        aria-label="Developer mode"
        title="Try Konami Code: ↑↑↓↓←→←→BA"
      >
        <span className="text-xs">⌨️</span>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#050008]/90 backdrop-blur-xl" />

            <motion.div
              className="relative max-w-lg w-full glassmorphism rounded-2xl p-8 cyberpunk-border text-center"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: "0 0 80px rgba(168, 85, 247, 0.3), 0 0 160px rgba(124, 58, 237, 0.15)",
              }}
            >
              {/* Glitch header */}
              <div
                className="text-xs font-mono text-green-400 tracking-widest mb-4 uppercase"
                style={{ textShadow: "0 0 10px rgba(74, 222, 128, 0.6)" }}
              >
                ⚡ DEVELOPER MODE ACTIVATED ⚡
              </div>

              <h2
                className="text-2xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #e879f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
              >
                Hidden Achievement Unlocked!
              </h2>

              <div className="text-xs font-mono text-purple-400/50 mb-6">
                You found the Konami Code Easter Egg
              </div>

              {/* Fact card */}
              <motion.div
                key={factIndex}
                className="rounded-xl p-5 mb-6 text-base text-purple-100 font-medium leading-relaxed"
                style={{
                  background: "rgba(168, 85, 247, 0.08)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {easterEggFacts[factIndex]}
              </motion.div>

              <div className="flex items-center gap-3">
                <button
                  onClick={nextFact}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  Next Fact ⚡
                </button>
                <button
                  onClick={() => setActive(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-purple-300/70 border border-purple-500/20 hover:border-purple-400/40 transition-all"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 text-xs font-mono text-purple-400/30">
                Tip: Try the Konami Code — ↑↑↓↓←→←→BA
              </div>

              {/* Floating particles in modal */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-purple-400 pointer-events-none"
                  style={{
                    left: `${10 + i * 11}%`,
                    top: `${10 + (i % 3) * 30}%`,
                    boxShadow: "0 0 4px rgba(168, 85, 247, 0.8)",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
