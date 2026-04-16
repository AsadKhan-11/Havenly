"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Havenly redefined my expectations of luxury real estate representation. Their discretion, market intelligence, and sheer access are unparalleled.",
    author: "Jonathan E.",
    role: "Tech Executive, San Francisco",
  },
  {
    quote: "A masterclass in client service. They negotiated the acquisition of our London townhouse with precision and profound grace.",
    author: "Eleanor V.",
    role: "Private Investor, London",
  },
  {
    quote: "The team's ability to source off-market architectural gems is truly remarkable. Our Dubai estate is everything we envisioned.",
    author: "A. Rahman",
    role: "Entrepreneur, Dubai",
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-pearl relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-[30rem] font-serif text-gold">
        "
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <Quote className="mx-auto text-gold mb-12" size={48} strokeWidth={1} />
        
        <div className="h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-obsidian leading-[1.4] mb-8">
                {testimonials[index].quote}
              </p>
              <div>
                <p className="text-obsidian font-bold tracking-[0.2em] uppercase text-xs mb-1">{testimonials[index].author}</p>
                <p className="text-obsidian/50 font-sans text-sm">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16">
          <button onClick={prev} className="p-3 text-obsidian/40 hover:text-gold transition-colors">
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-gold w-8' : 'bg-obsidian/20'}`}
              />
            ))}
          </div>

          <button onClick={next} className="p-3 text-obsidian/40 hover:text-gold transition-colors">
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
