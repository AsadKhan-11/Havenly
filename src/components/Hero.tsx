"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-obsidian">
      <motion.div style={{ y }} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-obsidian/40" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.3em] text-xs md:text-sm uppercase font-semibold mb-6"
        >
          Curated Luxury Living
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-pearl font-serif font-medium leading-[1.1] max-w-5xl text-balance"
        >
          Find Your Sanctuary In The Sky
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="group mt-14 relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-gold/60 text-pearl uppercase tracking-[0.2em] text-[11px] font-medium overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <span className="relative z-10">Explore Collection</span>
          <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </section>
  );
}
