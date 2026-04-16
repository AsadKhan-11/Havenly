"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const properties = [
  { id: 1, title: "The Obsidian Villa", location: "Beverly Hills, CA", price: "$24,500,000", image: "/exterior.png", beds: 6, baths: 8 },
  { id: 2, title: "Aurora Penthouse", location: "Manhattan, NY", price: "$18,200,000", image: "/interior.png", beds: 4, baths: 5 },
  { id: 3, title: "Aegean Estate", location: "Mykonos, Greece", price: "€15,000,000", image: "/hero.png", beds: 8, baths: 10 },
  { id: 4, title: "Skyline Manor", location: "Dubai, UAE", price: "$32,000,000", image: "/exterior.png", beds: 7, baths: 9 },
];

export function FeaturedProperties() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} id="properties" className="relative h-[300vh] bg-obsidian text-pearl">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif"
          >
            Exclusive Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gold mt-6 tracking-[0.2em] text-xs uppercase font-semibold"
          >
            Swipe to explore
          </motion.p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 lg:px-24 w-max">
          {properties.map((prop) => (
            <div key={prop.id} className="group relative w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src={prop.image} 
                  alt={prop.title} 
                  fill 
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex justify-between items-end">
                <div>
                  <p className="text-gold tracking-widest text-xs uppercase mb-2">{prop.location}</p>
                  <h3 className="text-3xl font-serif text-white">{prop.title}</h3>
                  <p className="text-white/70 text-sm mt-3">{prop.beds} Beds • {prop.baths} Baths</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-serif text-white mb-4">{prop.price}</p>
                  <button className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
