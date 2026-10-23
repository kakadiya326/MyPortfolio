import { motion } from "motion/react";

export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Cyan orb */}
      <motion.div
        className="absolute -top-32 right-[10%] h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Violet orb */}
      <motion.div
        className="absolute top-[25%] -left-32 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Emerald accent orb */}
      <motion.div
        className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[110px]"
        animate={{
          scale: [1, 1.25, 1],
          y: [0, 30, 0],
          x: [0, -25, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
