"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$2B+", label: "Global Sales Volume" },
  { value: "450+", label: "Estates Sold" },
  { value: "12", label: "Exclusive Markets" },
  { value: "100%", label: "Client Discretion" },
];

export function Statistics() {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left divide-x divide-white/10 flex-col md:flex-row">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="px-6 border-white/10 first:border-0"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-4">{stat.value}</h3>
              <p className="text-white/60 font-sans tracking-widest uppercase text-xs font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
