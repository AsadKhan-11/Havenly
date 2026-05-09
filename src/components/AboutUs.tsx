"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-pearl relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-obsidian text-sm tracking-[0.3em] uppercase font-semibold mb-4 text-gold">The Havenly Difference</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-obsidian leading-[1.2]">
              Elevating the art of modern living.
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-obsidian/70 font-sans text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            We curate architectural masterpieces for those who seek the extraordinary. 
            Our collection represents more than property—it embodies a curated lifestyle 
            defined by seamless design, prestigious locations, and unparalleled craftsmanship.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <button className="group inline-flex items-center gap-3 text-obsidian uppercase tracking-[0.2em] text-[11px] font-medium transition-colors duration-300 hover:text-gold">
               <span>Discover Our Story</span>
               <span className="flex items-center justify-center w-8 h-8 rounded-full border border-obsidian/20 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
                 <ArrowRight size={12} />
               </span>
             </button>
          </motion.div>
        </div>

        {/* Image Grid Stagger */}
        <div className="flex-1 relative h-[600px] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-4/5 h-[80%] z-10"
          >
             <div className="relative w-full h-full rounded-2xl overflow-hidden">
               <Image src="/interior.png" alt="Luxury Interior" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 w-[60%] h-[50%] z-20 p-2 bg-pearl rounded-2xl"
          >
             <div className="relative w-full h-full bg-obsidian rounded-xl overflow-hidden">
                <Image src="/exterior.png" alt="Luxury Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover opacity-90" />
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
