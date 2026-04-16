"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Global Discovery", desc: "We utilize our extensive international network to source off-market properties tailored to your specific criteria." },
  { num: "02", title: "Private Viewings", desc: "Experience exclusive, discreet property tours arranged around your schedule, featuring priority access." },
  { num: "03", title: "Bespoke Negotiation", desc: "Our expert negotiators work tirelessly to secure your investment on the most favorable terms." },
  { num: "04", title: "Seamless Closing", desc: "A frictionless transaction process managed by our dedicated legal and concierge partners." },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-pearl relative border-b border-obsidian/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-obsidian"
          >
            The Acquisition Process
          </motion.h2>
        </div>

        <div className="relative border-l border-obsidian/20 pl-8 md:pl-12 space-y-20">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-4 w-4 bg-pearl border-2 border-gold rounded-full" />
              <p className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-3">{step.num} // Phase</p>
              <h3 className="text-2xl md:text-3xl font-serif text-obsidian mb-4">{step.title}</h3>
              <p className="text-obsidian/70 font-sans leading-relaxed text-base md:text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
