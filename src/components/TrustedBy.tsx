"use client";

import { motion } from "framer-motion";

const partners = [
  "ARCHITECTURAL DIGEST",
  "VOGUE LIVING",
  "FORBES GLOBAL",
  "THE WALL STREET JOURNAL",
  "BLOOMBERG",
  "ROBB REPORT",
  "ELLE DECOR"
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-pearl border-b border-obsidian/5 overflow-hidden relative">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-obsidian/40 font-semibold font-sans">
          Featured in world renowned publications
        </p>
      </div>
      
      {/* Gradient masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pearl to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pearl to-transparent z-10" />

      <div className="relative flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-20 md:gap-40 px-10 min-w-max items-center"
        >
          {[...partners, ...partners].map((partner, i) => (
            <span key={i} className="text-xl md:text-2xl font-serif text-obsidian/30 hover:text-gold cursor-default transition-colors duration-500">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
