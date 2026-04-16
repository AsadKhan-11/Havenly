"use client";

import { motion } from "framer-motion";
import { Wine, Shield, Flame, Anchor, Trees, Plane } from "lucide-react";

const amenities = [
  { icon: Shield, title: "24/7 Concierge & Security", desc: "Round-the-clock discreet protection and lifestyle management." },
  { icon: Plane, title: "Private Helipads", desc: "Seamless travel accommodations for select estates." },
  { icon: Wine, title: "Curated Wine Cellars", desc: "Climate-controlled environments for your collection." },
  { icon: Flame, title: "Bespoke Wellness", desc: "In-house spas, infinity pools, and fitness sanctuaries." },
  { icon: Anchor, title: "Private Moorings", desc: "Direct deep-water access for luxury coastal properties." },
  { icon: Trees, title: "Manicured Grounds", desc: "Award-winning landscape architecture." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function Amenities() {
  return (
    <section className="py-32 bg-pearl px-6 md:px-12 lg:px-24 border-t border-obsidian/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-obsidian leading-[1.2]"
          >
            Uncompromised <br/><span className="text-gold italic">Luxury</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-obsidian/70 font-sans leading-relaxed"
          >
            Our properties are designed to anticipate every need, offering world-class amenities 
            that redefine residential living. Experience a resort-like sanctuary every day.
          </motion.p>
        </div>

        <motion.div 
          className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {amenities.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group cursor-default">
              <div className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold group-hover:text-obsidian transition-all duration-300">
                <item.icon size={22} className="text-obsidian group-hover:text-obsidian transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-obsidian mb-3">{item.title}</h3>
              <p className="text-obsidian/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
