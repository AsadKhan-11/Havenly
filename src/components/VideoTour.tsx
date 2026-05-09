"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

export function VideoTour() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden bg-obsidian flex items-center justify-center mx-auto">
      <motion.div style={{ scale }} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-obsidian/50 hover:bg-obsidian/30 transition-colors duration-700" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <button className="w-24 h-24 sm:w-32 sm:h-32 mb-8 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold/90 hover:border-gold hover:text-obsidian hover:scale-110 transition-all duration-500 group hover:shadow-[0_0_60px_rgba(212,175,55,0.2)]">
          <Play size={40} className="ml-2 group-hover:scale-95 transition-transform" fill="currentColor" />
        </button>
        <h2 className="text-white font-serif text-3xl sm:text-5xl">Immersive Experience</h2>
        <p className="text-gold mt-4 uppercase tracking-[0.3em] text-xs font-semibold">Play Video Tour</p>
      </motion.div>
    </section>
  );
}
