"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const neighborhoods = [
  { name: "Beverly Hills", count: "12 Properties", image: "/exterior.png", colSpan: "md:col-span-2" },
  { name: "Manhattan", count: "8 Properties", image: "/interior.png", colSpan: "md:col-span-1" },
  { name: "Monaco", count: "5 Properties", image: "/hero.png", colSpan: "md:col-span-1" },
  { name: "Dubai", count: "15 Properties", image: "/exterior.png", colSpan: "md:col-span-2" },
];

export function Neighborhoods() {
  return (
    <section className="py-32 bg-obsidian px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.3em] font-semibold text-xs mb-4"
            >
              Curated Locations
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white"
            >
              Global Presence
            </motion.h2>
          </div>
          <motion.button 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="group inline-flex items-center gap-3 text-pearl uppercase tracking-[0.2em] font-medium text-[11px] transition-colors hover:text-gold"
          >
             <span>View All Markets</span>
             <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 group-hover:border-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
               <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h8M5.5 1.5 9 5l-3.5 3.5"/></svg>
             </span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 h-[800px]">
          {neighborhoods.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden group cursor-pointer rounded-2xl ${area.colSpan}`}
            >
              <Image 
                src={area.image} 
                alt={area.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{area.name}</h3>
                <p className="text-gold tracking-[0.2em] text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{area.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
