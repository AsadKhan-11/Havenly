"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PreFooterCTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-obsidian border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-5"
        >
          Private Consultation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-pearl mb-8"
        >
          Let's Find Your <span className="italic text-gold/90">Forever</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pearl/40 font-sans text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Our collection extends far beyond what's listed. Over 40% of our
          transactions are off-market. Let's discuss your vision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-gold/60 text-pearl uppercase tracking-[0.2em] text-[11px] font-medium overflow-hidden transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">Schedule a Consultation</span>
            <ArrowRight
              size={14}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
